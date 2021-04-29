import React, { useState } from 'react';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { GiNightSleep } from "react-icons/gi";
import { MdAddCircle } from "react-icons/md";
import { Modal } from 'antd';

function Slept() {


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
    <div class="col-md-12 col-lg-4 stat__card stat__card__five">
      <div className="progress__bar__wrapper">
        <CircularProgressbarWithChildren
          value={90}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(125, 48, 250, 1)`,
            trailColor: "#d6d6d6",
          })}
          strokeWidth={6}
        >
          <GiNightSleep className="progress__icon" />
        </CircularProgressbarWithChildren>
      </div>

      <p>
        <strong>7h 23m</strong> of 8h 0m Slept
      </p>

      <div className="icon__wrapper">
      <MdAddCircle className="add__icon" onClick={showModal}/> 
        

        <Modal title="Which meal would you like to track" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
          <p>Morning</p>
          <p>Afternoon</p>
          <p>Evening</p>
          <p>NightSleep</p>
          <p>MidNight</p>
        </Modal>
      </div>
    </div>
  );
}

export default Slept;
