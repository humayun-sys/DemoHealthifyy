import React, { useState } from 'react';

import { FaGlassWhiskey } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { Modal } from 'antd';
import { Progress } from 'antd';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

function GlassesConsumed() {


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
    <div class="col-md-12 col-lg-4 stat__card stat__card__two">
      <div className="progress__bar__wrapper">
        <CircularProgressbarWithChildren
          value={50}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(39, 127, 229, 1)`,
            trailColor: "#d6d6d6",
          })}
          strokeWidth={6}
        >
          <FaGlassWhiskey className="progress__icon" />
        </CircularProgressbarWithChildren>
      </div>

      <p>
        <strong>4</strong> of 8 glasses consumed
      </p>

      <div className="icon__wrapper">
      <MdAddCircle className="add__icon" onClick={showModal}/> 
        

        <Modal title="0 of 10 Glasses" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>

        
        <Progress type="circle" percent={10} width={80} />
        <Progress percent={10} size="small" status="active" />
        {/* <Progress type="circle" percent={70} width={80} status="exception" />
        <Progress type="circle" percent={100} width={80} /> */}
        </Modal>
      </div>
    </div>
  );
}

export default GlassesConsumed;
