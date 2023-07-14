import { useCallback, useState } from "react";
import cn from "classnames";
import TipTabEditorToolBarHeading from "./TipTabEditorToolBarHeading";
import TipTabEditorToolBarFontColor from "./TipTabEditorToolBarFontColor";
import TipTabEditorToolBarTable from "./TipTabEditorToolBarTable";

/**
 * 텍스트 에디터 툴바
 * @param editor
 * @constructor
 */
const TipTabEditorToolBar = ({ editor }: any) => {
  const [openHeadingMenu, setOpenHeadingMenu] = useState(false);
  const [openFontColorMenu, setOpenFontColorMenu] = useState(false);
  const [openTableMenu, setOpenTableMenu] = useState(false);

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const checkActiveHeading = (editor: any) => {
    let heading = "H1";
    if (editor.isActive("heading", { level: 1 })) {
      heading = "H1";
    } else if (editor.isActive("heading", { level: 2 })) {
      heading = "H2";
    } else if (editor.isActive("heading", { level: 3 })) {
      heading = "H3";
    } else if (editor.isActive("heading", { level: 4 })) {
      heading = "H4";
    } else if (editor.isActive("heading", { level: 5 })) {
      heading = "H5";
    } else if (editor.isActive("heading", { level: 6 })) {
      heading = "H6";
    }
    return heading;
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="toolbar-edit">
        <div className="btn-set">
          {/* option-box */}
          <div className="option-box" aria-expanded="true">
            <div className="txt">
              <button
                className="txt-h"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setOpenHeadingMenu(!openHeadingMenu);
                }}
              >
                <span className="type-h1">{checkActiveHeading(editor)}</span>
              </button>
            </div>
            <TipTabEditorToolBarHeading
              editor={editor}
              openHeadingMenu={openHeadingMenu}
              setOpenHeadingMenu={setOpenHeadingMenu}
            />
          </div>
          {/* //option-box */}

          <span className="set-group">
            <button
              className={cn(
                "txt-al-left",
                editor.isActive({ textAlign: "left" }) && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().setTextAlign("left").run();
              }}
            >
              align left
            </button>
            <button
              className={cn(
                "txt-al-center",
                editor.isActive({ textAlign: "center" }) && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().setTextAlign("center").run();
              }}
            >
              align center
            </button>
            <button
              className={cn(
                "txt-al-right",
                editor.isActive({ textAlign: "right" }) && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().setTextAlign("right").run();
              }}
            >
              align right
            </button>
          </span>

          <span className="set-group">
            <button
              className={cn(
                "txt-deco-b",
                editor.isActive("bold") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleBold().run();
              }}
              title={"진하게"}
            >
              진하게
            </button>
            <div className="option-box type-color" aria-expanded="true">
              <div className="txt">
                <button
                  className="txt-color"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    setOpenFontColorMenu(true);
                  }}
                  title={"폰트색"}
                >
                  <span
                    style={{ color: editor.getAttributes("textStyle").color }}
                  >
                    A
                  </span>
                </button>
              </div>
              <TipTabEditorToolBarFontColor
                editor={editor}
                openFontColorMenu={openFontColorMenu}
                setOpenFontColorMenu={setOpenFontColorMenu}
              />
            </div>
            <button
              className={cn(
                "txt-deco-i",
                editor.isActive("italic") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleItalic().run();
              }}
              title={"기울임"}
            >
              기울임
            </button>
            <button
              className={cn(
                "txt-deco-u",
                editor.isActive("underline") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleUnderline().run();
              }}
              title={"밑줄"}
            >
              밑줄
            </button>
            <button
              className={cn(
                "txt-deco-lh",
                editor.isActive("strike") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleStrike().run();
              }}
              title={"취소선"}
            >
              취소선
            </button>
          </span>

          <span className="set-group">
            <button
              className={cn(
                "txt-paragraph",
                editor.isActive("paragraph") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().setParagraph().run();
              }}
              title={"문단"}
            >
              문단
            </button>
            <button
              className={cn(
                "txt-hanging-out",
                editor.isActive("blockquote") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleBlockquote().run();
              }}
              title={"들여쓰기"}
            >
              들여쓰기
            </button>
            <button
              className={cn("txt-break")}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().setHardBreak().run();
              }}
              title={"줄바꿈"}
            >
              줄바꿈
            </button>
            <button
              className={cn("txt-horizontal-rule ")}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().setHorizontalRule().run();
              }}
              title={"가로줄"}
            >
              가로줄
            </button>
          </span>

          <span className="set-group">
            <button
              className={cn(
                "list-bullet",
                editor.isActive("bulletList") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleBulletList().run();
              }}
              title={"단추형 목록"}
            >
              단추형 목록
            </button>
            <button
              className={cn(
                "list-ordered",
                editor.isActive("orderedList") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleOrderedList().run();
              }}
              title={"번호형 목록"}
            >
              번호형 목록
            </button>
          </span>

          <span className="set-group">
            <button
              className={cn("txt-link", editor.isActive("link") && "is-active")}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                if (editor.isActive("link")) {
                  editor.chain().focus().unsetLink().run();
                } else {
                  setLink();
                }
              }}
              title={"링크"}
            >
              링크
            </button>
            <button
              className={cn(
                "txt-tag",
                editor.isActive("codeBlock") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleCodeBlock().run();
              }}
              title={"마크업"}
            >
              마크업
            </button>
          </span>

          <span className="set-group">
            <button
              className={cn(
                "type-subscript",
                editor.isActive("subscript") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleSubscript().run();
              }}
              title={"아래첨자"}
            >
              아래첨자
            </button>
            <button
              className={cn(
                "type-superscript",
                editor.isActive("superscript") && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleSuperscript().run();
              }}
              title={"위첨자"}
            >
              위첨자
            </button>
          </span>
          <span className="set-group">
            <button
              className={cn("type-undo", editor.can().undo() && "is-active")}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().undo().run();
              }}
            >
              undo
            </button>
            <button
              className={cn("type-redo", editor.can().redo() && "is-active")}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().redo().run();
              }}
            >
              redo
            </button>
          </span>
        </div>
        <div className="btn-set type-table-cell">
          <div className="option-box type-cell" aria-expanded="true">
            <div className={"txt"}>
              <button
                className={cn(
                  "txt-table",
                  editor.can().insertTable() && "is-active",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setOpenTableMenu(true);
                  // editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
                }}
                title={"표 생성"}
              >
                표 생성
              </button>
              {/*테이블*/}
              <TipTabEditorToolBarTable
                editor={editor}
                openTableMenu={openTableMenu}
                setOpenTableMenu={setOpenTableMenu}
              />
            </div>
          </div>
          <span className="set-group">
            <button
              className={cn(
                "type-row-top",
                editor.can().addRowBefore() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().addRowBefore().run();
              }}
              disabled={!editor.can().addRowBefore()}
              title={"윗행추가"}
            >
              윗행추가
            </button>
            <button
              className={cn(
                "type-row-bottom",
                editor.can().addRowAfter() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().addRowAfter().run();
              }}
              disabled={!editor.can().addRowAfter()}
              title={"아랫행추가"}
            >
              아랫행추가
            </button>
            <button
              className={cn(
                "type-row-del",
                editor.can().deleteRow() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().deleteRow().run();
              }}
              disabled={!editor.can().deleteRow()}
              title={"행삭제"}
            >
              행삭제
            </button>
          </span>
          <span className="set-group">
            <button
              className={cn(
                "type-col-left",
                editor.can().addColumnBefore() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().addColumnBefore().run();
              }}
              disabled={!editor.can().addColumnBefore()}
              title={"왼쪽열추가"}
            >
              왼쪽열추가
            </button>
            <button
              className={cn(
                "type-col-right",
                editor.can().addColumnAfter() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().addColumnAfter().run();
              }}
              disabled={!editor.can().addColumnAfter()}
              title={"오른쪽열추가"}
            >
              오른쪽열추가
            </button>
            <button
              className={cn(
                "type-col-del",
                editor.can().deleteColumn() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().deleteColumn().run();
              }}
              disabled={!editor.can().deleteColumn()}
              title={"열삭제"}
            >
              열삭제
            </button>
          </span>
          <span className="set-group">
            <button
              className={cn(
                "type-cell-merge",
                editor.can().mergeCells() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().mergeCells().run();
              }}
              disabled={!editor.can().mergeCells()}
              title={"셀병합"}
            >
              셀병합
            </button>
            <button
              className={cn(
                "type-cell-unmerge",
                editor.can().splitCell() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().splitCell().run();
              }}
              disabled={!editor.can().splitCell()}
              title={"셀병합해제"}
            >
              셀병합해제
            </button>
            <button
              className={cn(
                "type-table-del",
                editor.can().deleteTable() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().deleteTable().run();
              }}
              disabled={!editor.can().deleteTable()}
              title={"표삭제"}
            >
              표삭제
            </button>
          </span>
          <span className="set-group">
            <button
              className={cn(
                "type-head-row",
                editor.can().toggleHeaderRow() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeaderRow().run();
              }}
              disabled={!editor.can().toggleHeaderRow()}
              title={"표머리행설정"}
            >
              표머리행설정
            </button>
            <button
              className={cn(
                "type-head-col",
                editor.can().toggleHeaderColumn() && "is-active",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeaderColumn().run();
              }}
              disabled={!editor.can().toggleHeaderColumn()}
              title={"표머리열설정"}
            >
              표머리열설정
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default TipTabEditorToolBar;
