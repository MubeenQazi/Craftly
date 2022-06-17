import React, { useEffect, useState } from "react";
import "./index.scss";
import { Col, Container, Row } from "react-bootstrap";
import Tool from "../tool";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTools, getBlogs } from "../../store/action/tools";
function BrowseTool() {
  const { tools, blogs } = useSelector((state: any) => state.tools);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTools());
    dispatch(getBlogs());
  }, []);
  useEffect(() => {
    dispatch({
      type: "CURRENT_ID",
      payload: { id: tools[0]?.id, title: tools[0]?.title },
    });
  }, [blogs]);
  const [index, setIndex] = useState(0);
  return (
    <div className="browse-tool">
      <Container>
        <Row>
          <Col>
            <h3 className="text-center primary-heading mb-4">
              Browse by Tools
            </h3>
            <div className="d-flex flex-wrap tool-list mb-5">
              {tools.map((tool: any, i: number) => (
                <Tool
                  active={index === i ? "active" : ""}
                  key={tool?.id}
                  id={tool?.id}
                  data={tool}
                  onCLick={() => {
                    dispatch({
                      type: "CURRENT_ID",
                      payload: { id: tool?.id, title: tool?.title },
                    });
                    setIndex(i);
                  }}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BrowseTool;
