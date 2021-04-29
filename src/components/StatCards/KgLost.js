import React, { useState } from 'react';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { FaWeight } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { Modal } from 'antd';

function KgLost() {


  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div class="col-md-12 col-lg-4 stat__card stat__card__four">
      <div className="progress__bar__wrapper">
        <CircularProgressbarWithChildren
          value={20}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(39, 211, 168, 1)`,
            trailColor: "#d6d6d6",
          })}
          strokeWidth={6}
        >
          <FaWeight className="progress__icon" />
        </CircularProgressbarWithChildren>
      </div>

      <p>
        <strong>0.5</strong> of 2.99 Kg Lost
      </p>

      <div className="icon__wrapper">
         <MdAddCircle className="add__icon" onClick={showModal}/> 
        

        <Modal title="kg lost" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
          {/* <p>Breakfast</p>
          <p>Morning Snack</p>
          <p>Lunch</p>
          <p>Evening Snack</p>
          <p>Dinner</p> */}
        </Modal>
      </div>
    </div>
  );
}

export default KgLost;
