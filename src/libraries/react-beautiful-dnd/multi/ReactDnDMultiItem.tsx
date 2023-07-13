import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { ReactBeautifulDnDItem } from "../ReactBeautifulDnDTypes";

interface ReactDnDMultiItemProps {
  areaIndex: number;
  item: ReactBeautifulDnDItem;
  index: number;
  setNewItemLists: any;
  getItemStyle: any;
}

const ReactDnDMultiItem = ({
  areaIndex,
  item,
  index,
  setNewItemLists,
  getItemStyle,
}: ReactDnDMultiItemProps) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
          )}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {item.content}
            <button
              type="button"
              onClick={() => setNewItemLists(areaIndex, index)}
            >
              delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ReactDnDMultiItem;
