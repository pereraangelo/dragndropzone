import React from "react";
import { Stage, Layer, Image } from "react-konva";
import { store } from "../../store";
import { storeShapes } from "../../actions/shapesAction";
import { connect } from "react-redux";
import useImage from "use-image";

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

function DropZone(props) {
  const { dragUrl, dragId, images } = props;
  const stageRef = React.useRef();

  return (
    <div
      className="col-md-5 dragDropBox"
      onDrop={(e) => {
        e.preventDefault();
        // register event position
        stageRef.current.setPointersPositions(e);
        // add image
        store.dispatch(
          storeShapes(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
                id: dragId.current,
              },
            ])
          )
        );
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <Stage
      title="drag and drop"
        width={300}
        height={window.innerHeight / 2}
        className="stageCustom"
        ref={stageRef}
      >
        <Layer>
          {images.map((image, id) => {
            return <URLImage image={image} key={id} />;
          })}
        </Layer>
      </Stage>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    images: state.state.shapes,
    message: state.state.message,
  };
}

export default connect(mapStateToProps)(DropZone);
