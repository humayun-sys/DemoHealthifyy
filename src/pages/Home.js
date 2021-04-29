import React from "react";

// import DatePicker from "react-horizontal-datepicker";

import StatsCards from "../components/StatCards";
import BlogCards from "../components/BlogCards";

function Home() {
  // const selectedDay = (val) => {
  //   console.log(val);
  // };

  return (
    <React.Fragment>
      {/* <DatePicker
        getSelectedDay={selectedDay}
        endDate={365}
        selectDate={new Date("2020-04-30")}
        labelFormat={"MMMM"}
        color={"#374e8c"}
      /> */}
      
      <StatsCards />
      <BlogCards />
    </React.Fragment>
  );
}

export default Home;
