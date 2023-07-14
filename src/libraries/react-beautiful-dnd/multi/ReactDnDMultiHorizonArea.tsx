import React, { useCallback } from "react";
import {
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import ReactDnDMultiItem from "./ReactDnDMultiItem";
import { ReactDnDItem } from "../ReactDnDTypes";

const GRID = 8;

interface ReactDnDMultiHorizonAreaProps {
  areaItemList: ReactDnDItem[];
  areaIndex: number;
  setNewItemLists: any;
}

const ReactDnDMultiHorizonArea = ({
  areaItemList,
  areaIndex,
  setNewItemLists,
}: ReactDnDMultiHorizonAreaProps) => {
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
      minWidth: "150px",

      // styles we need to apply on draggables
      ...draggableStyle,
    }),
    [],
  );

  return (
    <Droppable droppableId={`${areaIndex}`} direction={"horizontal"}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...provided.droppableProps}
        >
          {areaItemList.map((item, index) => (
            <ReactDnDMultiItem
              key={item.id}
              areaIndex={areaIndex}
              item={item}
              index={index}
              setNewItemLists={setNewItemLists}
              getItemStyle={getItemStyle}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ReactDnDMultiHorizonArea;
