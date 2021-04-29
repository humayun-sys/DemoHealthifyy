import React, { useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { BiRun } from "react-icons/bi";
import { MdAddCircle } from "react-icons/md";
import { Modal } from 'antd';

function CalBurnt() {

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
    <div class="col-md-12 col-lg-4 stat__card stat__card__three">
      <div className="progress__bar__wrapper">
        <CircularProgressbarWithChildren
          value={70}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(16, 39, 84, 1)`,
            trailColor: "#d6d6d6",
          })}
          strokeWidth={6}
        >
          <BiRun className="progress__icon" />

        </CircularProgressbarWithChildren>
      </div>

      <p>
        <strong>220</strong> of 350 Cal Burnt
      </p>

      <div className="icon__wrapper">
        <MdAddCircle className="add__icon" onClick={showModal}/> 
        

      <Modal title="Frequently Tracked Workouts" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}  >
      
        
        <p>Walking   <MdAddCircle className="add__icon1"/>
         </p> 
        <br/>

        <p>Running <MdAddCircle className="add__icon1"/>
        </p>

        <br/>

        <p>Bicycling <MdAddCircle className="add__icon1"/>
        </p>

        <br/>
        
        <p>Swimming Frestyle <MdAddCircle className="add__icon1"/>
        </p>

        <br/>

        <p>Dinner <MdAddCircle className="add__icon1"/>
        </p>

        <br/>
      </Modal>
      </div>
    </div>
  );
}

export default CalBurnt;
