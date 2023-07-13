import React, { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ReactBeautifulDnDItem } from "../ReactBeautifulDnDTypes";
import MainTemplate from "../../common/MainTemplate";
import ReactDnDMultiVerticalArea from "./ReactDnDMultiVerticalArea";
import ReactDnDMultiHorizonArea from "./ReactDnDMultiHorizonArea";
import ReactDndButton from "../ReactDndButton";

// fake data generator
const getItems = (index: number, offset = 0): ReactBeautifulDnDItem => {
  return {
    id: `item-${index + offset}-${new Date().getTime()}`,
    content: `item ${index + offset}`,
  };
};

const initializeItemList = () => {
  return [
    Array.from({ length: 10 }, (v, k) => k).map((k) => getItems(k)),
    Array.from({ length: 5 }, (v, k) => k).map((k) => getItems(k, 10)),
  ];
};

const ReactDnDMultiPage = () => {
  const [itemList, setItemList] = useState(initializeItemList());

  const addGroup = useCallback(() => {
    setItemList([...itemList, []]);
  }, [itemList]);

  const addItem = useCallback(() => {
    setItemList([...itemList, [getItems(0)]]);
  }, [itemList]);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      // dropped outside the list
      if (!destination) {
        return;
      }
      const sIndex = +source.droppableId;
      const dIndex = +destination.droppableId;

      if (sIndex === dIndex) {
        const items = reorder(
          itemList[sIndex],
          source.index,
          destination.index,
        );
        const newState = [...itemList];
        newState[sIndex] = items;
        setItemList(newState);
      } else {
        const result = move(
          itemList[sIndex],
          itemList[dIndex],
          source,
          destination,
        );
        const newState = [...itemList];
        newState[sIndex] = result[sIndex];
        newState[dIndex] = result[dIndex];

        setItemList(newState.filter((group) => group.length));
      }
    },
    [itemList],
  );

  const reorder = (
    list: ReactBeautifulDnDItem[],
    startIndex: number,
    endIndex: number,
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (
    source: ReactBeautifulDnDItem[],
    destination: ReactBeautifulDnDItem[],
    droppableSource: any,
    droppableDestination: any,
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = [];
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const setNewItemLists = useCallback(
    (areaIndex: number, itemIndex: number) => {
      const newState = [...itemList];
      newState[areaIndex].splice(itemIndex, 1);
      setItemList(newState.filter((group) => group.length));
    },
    [itemList],
  );

  return (
    <MainTemplate>
      <ReactDndButton
        setItemList={setItemList}
        addItem={addItem}
        initializeItemList={initializeItemList}
        enableAddGroup={true}
        addGroup={addGroup}
      />

      {window.location.pathname.includes("vertical") ? (
        <div style={{ display: "flex" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {itemList.map((areaItemList, areaIndex) => (
              <ReactDnDMultiVerticalArea
                key={areaIndex}
                areaItemList={areaItemList}
                areaIndex={areaIndex}
                setNewItemLists={setNewItemLists}
              />
            ))}
          </DragDropContext>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {itemList.map((areaItemList, areaIndex) => (
              <ReactDnDMultiHorizonArea
                key={areaIndex}
                areaItemList={areaItemList}
                areaIndex={areaIndex}
                setNewItemLists={setNewItemLists}
              />
            ))}
          </DragDropContext>
        </div>
      )}
    </MainTemplate>
  );
};

export default ReactDnDMultiPage;
