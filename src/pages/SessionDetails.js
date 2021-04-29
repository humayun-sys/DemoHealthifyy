import React from "react";

import { Collapse } from "antd";

const { Panel } = Collapse;

function SessionDetails() {
  function callback(key) {
    console.log(key);
  }

  return (
    <React.Fragment>
      <div className="session__details__card">
        <div className="session__actions__buttons">
          <button>View Other Sessions</button>
          <button>Book Free Class Now</button>
        </div>
        <div className="session__banner">
          <div>
            <h2>Strength @ Home</h2>
            <p>With Amanda, Today | 08:00 PM</p>
          </div>

          <img src="/assets/img/slider-bg.jpg" alt="Banner" />
        </div>
        <div className="session__about">
          <div>
            <h2>60 Mins</h2>
            <p>Session</p>
          </div>
          <div className="divider"></div>
          <div>
            <h2>Beginner</h2>
            <p>Workout</p>
          </div>
          <div className="divider"></div>
          <div>
            <h2>21</h2>
            <p>Slots available</p>
          </div>
        </div>
        <div className="session__gallery">
          <img src="/assets/img/doctors/doctor-01.jpg" alt="Doctor" />
          <img src="/assets/img/doctors/doctor-02.jpg" alt="Doctor" />
          <img src="/assets/img/doctors/doctor-03.jpg" alt="Doctor" />
        </div>

        <Collapse
          className="collapse__panel"
          onChange={callback}
          expandIconPosition="right"
        >
          <Panel
            header={
              <div className="session__trainer">
                <img src="/assets/img/doctors/doctor-01.jpg" alt="Doctor" />
                <div>
                  <h3>Amanda Rose</h3>
                  <p>Your Fitness Coach</p>
                </div>
              </div>
            }
            key="1"
          >
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </Panel>
        </Collapse>

        <div className="session__content">
          <h3>About the session</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="session__content">
          <h3>What you need for this session</h3>
          <ul>
            <li>Yoga Mat</li>
            <li>Bottle of Water</li>
          </ul>
        </div>

        <div className="session__content">
          <h3>Benefits of This Practice</h3>
          <ul>
            <li>Full Body Workout</li>
            <li>Increased Lung Capacity</li>
          </ul>
        </div>

        <div className="session__content">
          <h3>Routine</h3>
          <div>
            <p>Warm Up</p>
            <p>10 mins</p>
          </div>
          <div>
            <p>Workout</p>
            <p>30 mins</p>
          </div>
          <div>
            <p>Cool Down</p>
            <p>5 mins</p>
          </div>
        </div>
        <div className="session__actions__buttons">
          <button>View Other Sessions</button>
          <button>Book Free Class Now</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SessionDetails;
