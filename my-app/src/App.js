import React from "react";
import Shapes from "./component/Shapes/Shapes";
import ButtonZone from "./component/ButtonZone/ButtonZone";
import DropZone from "./component/DropZone/DropZone";

function App() {
  /**----------------dragUrl and dragId are the details sending through the api**/
  const dragUrl = React.useRef();
  const dragId = React.useRef();

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Shapes dragUrl={dragUrl} dragId={dragId} />
          <DropZone dragUrl={dragUrl} dragId={dragId} />
          <ButtonZone />
        </div>
      </div>
    </div>
  );
}

export default App;
