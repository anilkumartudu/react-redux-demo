import React, { Fragment } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../store/action";

const Counter = props => {
  let renderMessage = "";

  if (props.counterArray.length !== 0) {
    renderMessage = (
      <p>To delete counter press on the counter you want to delete.</p>
    );
  }

  return (
    <Fragment>
      Counter : {props.counter}
      <br />
      <button onClick={props.onCounterIncrement}>INCREMENT COUNTER</button>
      <button onClick={props.onCounterDecrement}>DECREMENT COUNTER</button>
      <button onClick={() => props.onCounterStore(props.counter)}>
        STORE COUNTER
      </button>
      <br />
      {renderMessage}
      <ul>
        {props.counterArray.map(item => (
          <li key={item.id} onClick={() => props.onCounterDelete(item.id)}>
            {item.value}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    counterArray: state.storeReducer.counterArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCounterIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
    onCounterDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
    onCounterStore: storeCounter =>
      dispatch({ type: actionTypes.STORE_COUNTER, storeCounter }),
    onCounterDelete: storeCounterId =>
      dispatch({ type: actionTypes.DELETE_COUNTER, storeCounterId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
