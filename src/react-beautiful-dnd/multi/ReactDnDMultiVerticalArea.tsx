import {
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import React, { useCallback } from "react";
import { ReactBeautifulDnDItem } from "../ReactBeautifulDnDTypes";
import ReactDnDMultiItem from "./ReactDnDMultiItem";

const GRID = 8;

interface ReactDnDMultiVerticalAreaProps {
  areaItemList: ReactBeautifulDnDItem[];
  areaIndex: number;
  setNewItemLists: any;
}

const ReactDnDMultiVerticalArea = ({
  areaItemList,
  areaIndex,
  setNewItemLists,
}: ReactDnDMultiVerticalAreaProps) => {
  const getListStyle = useCallback(
    (isDraggingOver: boolean) => ({
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
    ) => ({
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
    <Droppable droppableId={`${areaIndex}`}>
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

export default ReactDnDMultiVerticalArea;
