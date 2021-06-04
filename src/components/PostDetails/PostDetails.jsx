import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";

const PostDetails = () => {
  const { postId } = useParams();
  const [allPost] = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const thePost = allPost.find((post) => post.id == postId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <h2 className="text-center my-4 fw-bolder text-primary ">-POST-</h2>
        <Col md={8}>
          <Card border="light" style={{}}>
            <Card.Header className="fw-bold">Post No: {postId}</Card.Header>
            <Card.Body>
              <Card.Title className="display-6 fw-bolder text-capitalize">
                {thePost?.title}
              </Card.Title>
              <Card.Text className="h6">{thePost?.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h2 className="text-center my-4 fw-bolder text-primary ">-COMMENTS-</h2>
        {comments.map((comment) => (
          <Col md={7} key={comment.id} className="item ">
            <div className="box">
              <h3 className="name text-capitalize">{comment.name}</h3>
              <p className="title">{comment.email}</p>
              <p className="description">{comment.body} </p>
              <div className="social"></div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostDetails;
