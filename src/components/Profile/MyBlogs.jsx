import React from "react";
import { Col } from "react-bootstrap";
import { Card, Row } from "react-bootstrap";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MessageIcon from "@material-ui/icons/Message";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import PopupCard from "./PopupCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import Slide from "react-reveal/Slide";

const MyBlogs = ({ id }) => {
  const [allPost] = useContext(UserContext);
  const myPost = allPost.filter((post) => post.userId == id);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => alert("Successfully Deleted"));
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handlePopup = () => {
    openModal();
  };
  return (
    <div>
      {id != 2 ? (
        <h2 className="text-center my-4 fw-bolder"> User {id} Blogs </h2>
      ) : (
        <h2 className="text-center my-4 fw-bolder"> My Blogs </h2>
      )}{" "}
      <Row className="justify-content-center">
        {myPost.map((post, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card border="light" style={{ width: "18rem", minHeight: "400px" }}>
              <Card.Header className="fw-bold">
                User: {post.userId}
                <IconButton onClick={handlePopup} title="Edit">
                  <EditIcon className="text-primary" />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(post.id)}
                  title="Delete Blog"
                >
                  <DeleteIcon className="text-danger" />
                </IconButton>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-capitalize">
                  {post.title}
                </Card.Title>
                <Card.Text className="text-justify">{post.body}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white fw-bolder">
                <Link
                  className="text-dark text-decoration-none"
                  to={`/blog/${post.id}/details`}
                >
                  Comments
                  <IconButton>
                    <MessageIcon />
                  </IconButton>
                </Link>
              </Card.Footer>
            </Card>{" "}
            <PopupCard
              post={post}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyBlogs;
