import { ReactBeautifulDnDItem } from "../ReactBeautifulDnDTypes";
import ReactDnDSingleItem from "./ReactDnDSingleItem";
import {
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import React, { useCallback } from "react";

const GRID = 8;

interface ReactDnDSingleHorizonAreaProps {
  itemList: ReactBeautifulDnDItem[];
}

const ReactDnDSingleHorizonArea = ({
  itemList,
}: ReactDnDSingleHorizonAreaProps) => {
  const getListStyle = useCallback(
    (isDraggingOver: boolean) => ({
      background: isDraggingOver ? "lightblue" : "lightgrey",
      display: "flex",
      padding: GRID,
      overflow: "auto",
    }),
    [],
  );

  const getItemStyle = useCallback(
    (
      isDragging: boolean,
      draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
    ) => ({
      // some basic styles to make the items look a bit nicer
      userSelect: "none",
      padding: GRID * 2,
      margin: `0 ${GRID}px 0 0`,

      // change background colour if dragging
      background: isDragging ? "lightgreen" : "grey",
      minWidth: "100px",

      // styles we need to apply on draggables
      ...draggableStyle,
    }),
    [],
  );

  return (
    <Droppable droppableId="droppable" direction="horizontal">
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

export default ReactDnDSingleHorizonArea;
