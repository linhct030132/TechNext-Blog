import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { UserContext } from "../../App";
import Slide from "react-reveal/Slide";

const Home = () => {
  const [allPost] = useContext(UserContext);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);

  let slicedScndArg = offset + perPage;
  const getData = () => {
    const slice = allPost.slice(offset, slicedScndArg);

    const postData = slice.map((p, index) => (
      <Col key={index} md={3} className="mb-3">
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>User: {p.userId}</Card.Header>
          <Card.Body>
            <Card.Title className="text-capitalize">{p.title}</Card.Title>
            <Card.Text>{p.body}</Card.Text>
          </Card.Body>
        </Card>{" "}
      </Col>
    ));
    setData([...data, postData]);
  };

  const handlePageClick = () => {
    const selectedPage = offset + 9;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    if (allPost.length) {
      getData();
    }
  }, [offset, allPost.length]);
  return (
    <div>
      <Slide top cascade>
        {" "}
        <Row className="justify-content-center mt-5">
          {data}
          <ReactPaginate
            previousLabel={"Load"}
            nextLabel={"Load More"}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </Row>
      </Slide>
    </div>
  );
};

export default Home;
