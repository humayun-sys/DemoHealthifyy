import React from "react";

import { Card, Col, Row } from "antd";

export default function Plans() {
  return (
    <React.Fragment>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Transform Lite" bordered={true}>
              <p>
                Starts at <strong>₹1,158/m</strong>&nbsp;
                <strike>₹2,500/m</strike>
              </p>
              <ul>
                <li>1 Premiere Personal Coach</li>
                <li>Unlimited Consultation Calls</li>
                <li>Unlimited One-on-One Chat</li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Transform" bordered={true}>
              <p>
                Starts at <strong>₹1,158/m</strong>&nbsp;
                <strike>₹2,500/m</strike>
              </p>
              <ul>
                <li>1 Premiere Personal Coach</li>
                <li>Unlimited Consultation Calls</li>
                <li>Unlimited One-on-One Chat</li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Transform Studio" bordered={true}>
              <p>
                Starts at <strong>₹1,158/m</strong>&nbsp;
                <strike>₹2,500/m</strike>
              </p>
              <ul>
                <li>1 Premiere Personal Coach</li>
                <li>Unlimited Consultation Calls</li>
                <li>Unlimited One-on-One Chat</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
