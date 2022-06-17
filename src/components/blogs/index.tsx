import React from "react";
import "./index.scss";
import Blog from "../blog";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Blogs() {
  const { blogs, current } = useSelector((state: any) => state.tools);
  const currentBlogs = blogs.filter(
    (item: any) => item?.toolID === current?.id
  );
  return (
    <div className="blogs my-5">
      <Container>
        <Row>
          {currentBlogs.map((item: any, index: number) => (
            <Col className="my-5" md={4} key={index}>
              <Blog data={item} batch={current?.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
