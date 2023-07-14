import { useState } from "react";
import cn from "classnames";
import ClickOutside from "../../../libs/ClickOutside";

const INIT_ROW = 3;
const MIN_ROW = 4;
const MAX_ROW = 20;
const INIT_COL = 3;
const MIN_COL = 4;
const MAX_COL = 15;

interface TextEditorToolBarTableProps {
  editor: any;
  openTableMenu: boolean;
  setOpenTableMenu: any;
}

/**
 * 텍스트 에디터 툴바 테이블
 * @param editor
 * @param openTableMenu
 * @param setOpenTableMenu
 * @constructor
 */
const TipTabEditorToolBarTable = ({
  editor,
  openTableMenu,
  setOpenTableMenu,
}: TextEditorToolBarTableProps) => {
  const [tableRow, setTableRow] = useState<number>(INIT_ROW);
  const [tableCol, setTableCol] = useState<number>(INIT_COL);

  return (
    <ClickOutside
      active={openTableMenu}
      onClick={() => {
        setTableRow(INIT_ROW);
        setTableCol(INIT_COL);
        setOpenTableMenu(false);
      }}
    >
      <div
        className="layer-option-list"
        style={{ display: openTableMenu ? "block" : "none" }}
      >
        <div
          className={"list-area"}
          style={{
            minWidth: `${
              (tableCol === INIT_COL ? MIN_COL : tableCol) * 20 + 36
            }px`,
          }}
        >
          <div className={"cell-list"}>
            <table>
              <tbody>
                {[
                  ...Array(tableRow === INIT_ROW ? INIT_ROW + 1 : tableRow),
                ].map((row, rowIndex) => (
                  <tr key={"Row-" + row + "-" + rowIndex}>
                    {[
                      ...Array(tableCol === INIT_COL ? INIT_COL + 1 : tableCol),
                    ].map((col, colIndex) => (
                      <td
                        key={"Col-" + col + "-" + colIndex}
                        className={cn(
                          "item-box",
                          rowIndex < tableRow && colIndex < tableCol
                            ? "is-active"
                            : "",
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();

                          editor
                            .chain()
                            .focus()
                            .insertTable({
                              rows: tableRow,
                              cols: tableCol,
                              withHeaderRow: true,
                            })
                            .run();
                          setTableRow(INIT_ROW);
                          setTableCol(INIT_COL);
                          setOpenTableMenu(false);
                        }}
                        onMouseOver={() => {
                          // 초기에 3 * 3 일때 4칸으로 증가
                          if (tableRow === INIT_ROW && rowIndex === tableRow) {
                            setTableRow(tableRow + 1);
                            return;
                          }

                          if (tableCol === INIT_COL && colIndex === tableCol) {
                            setTableCol(tableCol + 1);
                            return;
                          }

                          // 3보다 작은 칸으로 이동
                          if (
                            rowIndex <= INIT_ROW - 1 ||
                            colIndex <= INIT_COL - 1
                          ) {
                            if (rowIndex <= INIT_ROW - 1) {
                              setTableRow(3);
                            } else {
                              setTableRow(rowIndex + 1);
                            }

                            if (colIndex <= INIT_COL - 1) {
                              setTableCol(3);
                            } else {
                              setTableCol(colIndex + 1);
                            }
                            return;
                          }

                          // 감소
                          if (rowIndex <= tableRow - 2 && tableRow >= MIN_ROW) {
                            setTableRow(rowIndex + 1);
                            return;
                          }

                          if (colIndex <= tableCol - 2 && tableCol >= MIN_COL) {
                            setTableCol(colIndex + 1);
                            return;
                          }
                        }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className="space-box"
              onMouseOver={() => {
                if (tableCol < MAX_COL) {
                  setTableCol(tableCol + 1);
                }
              }}
            />
          </div>
          <div
            className="cell-num"
            onMouseOver={() => {
              if (tableRow < MAX_ROW) {
                setTableRow(tableRow + 1);
              }
            }}
          >
            <span>
              {tableCol}X{tableRow}
            </span>
            <div className="space-box" />
          </div>
        </div>
      </div>
    </ClickOutside>
  );
};

export default TipTabEditorToolBarTable;
