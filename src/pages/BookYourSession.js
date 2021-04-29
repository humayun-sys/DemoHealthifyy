import React from "react";

import { Tabs } from "antd";
import SessionsCards from "../components/SessionCards";

const { TabPane } = Tabs;

function BookYourSession() {
  function callback(key) {
    console.log(key);
  }
  return (
    <React.Fragment>
      <Tabs defaultActiveKey="1" onChange={callback} size="large">
        <TabPane tab="Strength & Cardio" key="1" className="session__tab">
          <div className="tab__content">
            <SessionsCards />
          </div>
        </TabPane>
        <TabPane tab="Yoga" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="For Kids" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </React.Fragment>
  );
}

export default BookYourSession;
