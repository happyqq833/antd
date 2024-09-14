import {Carousel, Col, Collapse, Descriptions, QRCode, Rate, Row, Tabs} from "antd";
import "./LearnGrid.css";
import CardItem from "../cardItem";
import { Children } from "react";

const {Panel} = Collapse;

function LearnGrid() {
  const list = [
    {
      id: 1,
      title: "Logo 1 là gì",
      descriptions: "Logo 1 là..."
    },
    {
      id: 2,
      title: "Logo 2 là gì",
      descriptions: "Logo 2 là..."
    },
  ]
  const items = [
    {
      key: 1,
      label: "Tab 1",
      children: "Content of Tab 1",
    },
    {
      key: 2,
      label: "Tab 2",
      children: "Content of Tab 2",
    },
    {
      key: 3,
      label: "Tab 3",
      children: "Content of Tab 3",
    },
    
  ]
    return(
      <>
      <Row gutter = {[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title = "Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title = "Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title = "Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title = "Box 4" />
        </Col>
      </Row>

      <Row gutter = {[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title = "Box 5" style={{height: "400px"}} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title = "Box 6" style={{height: "400px"}} />
        </Col>
      </Row>

      <Row gutter = {[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title = "Box 7" style={{height: "400px"}} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title = "Box 8" style={{height: "400px"}} />
        </Col>
      </Row>

      <Row gutter = {[20, 20]}>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title = "Box 9" />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title = "Box 10" />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title = "Box 11" />
        </Col>
      </Row>

     

      </>
    )
}

export default LearnGrid;