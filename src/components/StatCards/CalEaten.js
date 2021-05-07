import React, { useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { ImSpoonKnife } from "react-icons/im";
import { MdAddCircle } from "react-icons/md";
import { Modal } from 'antd';

function CalEaten() {

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
    <div class="col-md-12 col-lg-4 stat__card stat__card__one">
      <div className="progress__bar__wrapper">
        <CircularProgressbarWithChildren
          value={20}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(250, 68, 0, 1)`,
            trailColor: "#d6d6d6",
          })}
          strokeWidth={6}
        >
          <ImSpoonKnife className="progress__icon" />
        </CircularProgressbarWithChildren>
      </div>
      <p>
        <strong>324</strong> of 1750 Cal Eaten
      </p>

      <div className="icon__wrapper">
      <MdAddCircle className="add__icon" onClick={showModal}/> 
      
        

        <Modal title="Which meal would you like to track" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}  footer={null} >
  
           <div className="model_content">
               <p>Breakfast  <MdAddCircle className="add__icon2"/>  </p>
          </div>
          
          <div className="model_content">
          <p>Morning Snack  <MdAddCircle className="add__icon2"/></p>
          </div>
          
          <div className="model_content">
          <p>Lunch <MdAddCircle className="add__icon2"/></p>
          </div>
          <div className="model_content">
          <p>Evening Snack <MdAddCircle className="add__icon2"/></p>
          </div>
          
          <div className="model_content">
          <p>Dinner <MdAddCircle className="add__icon2"/></p>
          </div>


          {/* <div data-role="page" id="pageone">
  <div data-role="main" class="ui-content">
    <h2>List Icons:</h2>
    <ul data-role="listview" data-inset="true">    
      <li><a >Default is right arrow</a></li>
      <li data-icon="plus"><a >break fast</a></li>
      <li data-icon="minus"><a >break fast</a></li>
      <li data-icon="delete"><a >data-icon="delete"</a></li>
      <li data-icon="location"><a >data-icon="location"</a></li>   
      <li data-icon="false"><a >data-icon="false"</a></li>
    </ul>
  </div>
</div>  */}

   
          
         

            
          
        </Modal>
      </div>
    </div>
  );
}

export default CalEaten;
