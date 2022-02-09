import React from "react";
import PropTypes from "prop-types";

function Schedule(props){

  return(
    <React.Fragment>
      <div class="mb-3">
        <h2>{ props.day }'s Location</h2>  
        <h4>{ props.location } |  hours: { props.hours } |  booth: { props.booth }</h4>
      </div>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
