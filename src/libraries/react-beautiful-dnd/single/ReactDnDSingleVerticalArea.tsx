import ReactDnDSingleItem from "./ReactDnDSingleItem";
import {
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import React, { useCallback } from "react";
import { ReactDnDItem } from "../ReactDnDTypes";

const GRID = 8;

interface ReactDnDSingleVerticalAreaProps {
  itemList: ReactDnDItem[];
}

const ReactDnDSingleVerticalArea = ({
  itemList,
}: ReactDnDSingleVerticalAreaProps) => {
  const getListStyle = useCallback(
    (isDraggingOver: boolean): React.CSSProperties => ({
      background: isDraggingOver ? "lightblue" : "lightgrey",
      padding: GRID,
      width: 250,
    }),
    [],
  );

  const getItemStyle = useCallback(
    (
      isDragging: boolean,
      draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
    ): React.CSSProperties => ({
      // some basic styles to make the items look a bit nicer
      userSelect: "none",
      padding: GRID * 2,
      margin: `0 0 ${GRID}px 0`,

      // change background colour if dragging
      background: isDragging ? "lightgreen" : "grey",

      // styles we need to apply on draggables
      ...draggableStyle,
    }),
    [],
  );

  return (
    <Droppable droppableId="droppable">
      {(provided, snapshot): JSX.Element => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {itemList.map((item, index) => (
            <ReactDnDSingleItem
              key={item.id}
              item={item}
              index={index}
              getItemStyle={getItemStyle}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ReactDnDSingleVerticalArea;
