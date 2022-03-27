import React from "react";
import Pentagon from "../../assets/Pentagon.png";
import Polygon from "../..//assets/Polygon.png";
import Rectangle from "../../assets/Rectangle.png";
import Ellipse from "../../assets/Ellipse.png";

function DropZone(props) {
  const { dragUrl, dragId } = props;
  const Shapes = [Pentagon, Polygon, Rectangle, Ellipse];
  return (
    <div className="col-md-4 shapesContainer">
      <div> Dragable shapes:</div>
      <div className="shapes">
        {Shapes.map((shape, id) => {
          return (
            <img
              key={id}
              id={shape.toString()}
              className="m-2"
              height="100px"
              alt={shape.toString()}
              src={shape}
              draggable="true"
              onDragStart={(e) => {
                dragUrl.current = e.target.src;
                dragId.current = e.target.id;
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DropZone;
