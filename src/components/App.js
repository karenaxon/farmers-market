import React from "react";
import ScheduleList from "./ScheduleList";
import Header from "./Header";
import ProduceControl from "./ProduceControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="container mt-5">
        <ScheduleList />
        <ProduceControl />
      </div>
    </React.Fragment>
  );
}

export default App;
