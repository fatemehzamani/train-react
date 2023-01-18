import React from "react";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

const Grid = () => {
  return (
    <div>
      <div>
        <h2>
          <Link to="./AddMember">AddMember</Link>
        </h2>
      </div>

      <Container>
        <Row>
          <Col>شناسه</Col>
          <Col>نام</Col>
          <Col>نام خانوادگی</Col>
          <Col>شماره موبایل</Col>
        </Row>
        <Row>
          <Col>1</Col>
          <Col>فاطمه</Col>
          <Col>زمانی</Col>
          <Col>09127208661</Col>
        </Row>
        <Row>
          <Col>2</Col>
          <Col>مونا</Col>
          <Col>حیدری</Col>
          <Col>09123564854</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
