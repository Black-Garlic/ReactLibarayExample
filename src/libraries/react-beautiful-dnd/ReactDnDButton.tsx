import { Dispatch, SetStateAction } from "react";
import { Button, Space } from "antd";

interface ReactDndButtonProps {
  setItemList: Dispatch<SetStateAction<any>>;
  addItem: any;
  initializeItemList: any;
  enableAddGroup: boolean;
  addGroup?: any;
}

const ReactDnDButton = ({
  setItemList,
  addItem,
  initializeItemList,
  enableAddGroup,
  addGroup,
}: ReactDndButtonProps) => {
  return (
    <Space style={{ width: "100%", display: "flex" }}>
      <Button size={"large"} onClick={() => setItemList(initializeItemList())}>
        초기화
      </Button>
      <Button size={"large"} onClick={() => addItem()}>
        아이템 추가
      </Button>
      {enableAddGroup && (
        <Button size={"large"} onClick={() => addGroup()}>
          그룹 추가
        </Button>
      )}
    </Space>
  );
};

export default ReactDnDButton;
