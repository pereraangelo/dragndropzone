import React, { useEffect } from "react";
import { store } from "../../store";
import { resetStates, sendShapes } from "../../actions/shapesAction";
import { connect } from "react-redux";

function ButtonZone(props) {
  const { shapes, message, uploading } = props;
  /**-----------submit the shapes to api-----------**/
  const sendShape = () => {
    store.dispatch(sendShapes(shapes));
  };

  /**-----------Reset drop area when successfully submitted to the api-----------**/
  useEffect(() => {
    if (message == "success") {
      store.dispatch(resetStates(""));
    }
  }, [uploading]);

  return (
    <div className="col-md-2 buttonArea ">
      <div className="clickBtn" onClick={sendShape}>
        Click!
      </div>
      {message &&  <small className="alert">{message}.Please Try again later</small>}
     
    </div>
  );
}

function mapStateToProps(state) {
  return {
    shapes: state.state.shapes,
    uploading: state.state.uploading,
    message: state.state.message,
  };
}

export default connect(mapStateToProps)(ButtonZone);
