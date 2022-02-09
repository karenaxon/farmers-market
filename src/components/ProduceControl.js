import React, { useState, useEffect } from "react";
import January from "./months/January";
import December from "./months/December";
import February from "./months/February";
import November from "./months/November";

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      monthsList: [January, February, November, December],
      selectedMonth: null
    };
  } 

  handleJanuaryClick = () => {
    this.setState({formVisibleOnPage: true});
    const selectedMonth = this.state.monthsList[0];
  }
  
  handleFebruaryClick = () => {
    this.setState({formVisibleOnPage: true});
    // this.setState(prevState => ({
    //   formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleNovemberClick = () => {
    this.setState({formVisibleOnPage: true});
    // this.setState(prevState => ({
    //   formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleDecemberClick = () => {
    this.setState({formVisibleOnPage: true});
    // this.setState(prevState => ({
    //   formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <January />;
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <February />;
    }else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <November />;
    }else{
      currentlyVisibleState = <December />;
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button type="button" class="btn btn-secondary mt-3 mx-2" onClick={this.handleJanuaryClick}>January</button>
        <button type="button" class="btn btn-secondary mt-3 mx-2" onClick={this.handleFebruaryClick}>February</button>
        <button type="button" class="btn btn-secondary mt-3 mx-2" onClick={this.handleNovemberClick}>November</button>
        <button type="button" class="btn btn-secondary mt-3 mx-2" onClick={this.handleDecemberClick}>December</button>

      </React.Fragment>
        
    );
  }
}

export default ProduceControl;