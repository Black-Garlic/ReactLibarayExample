import ClickOutside from "../../../libs/ClickOutside";

interface TextEditorToolBarHeadingProps {
  editor: any;
  openHeadingMenu: boolean;
  setOpenHeadingMenu: any;
}

/**
 * 텍스트 에디터 툴바 Heading
 * @param editor
 * @param openHeadingMenu
 * @param setOpenHeadingMenu
 * @constructor
 */
const TipTabEditorToolBarHeading = ({
  editor,
  openHeadingMenu,
  setOpenHeadingMenu,
}: TextEditorToolBarHeadingProps) => {
  return (
    <ClickOutside
      active={openHeadingMenu}
      onClick={() => setOpenHeadingMenu(false)}
    >
      <div
        className="layer-option-list"
        style={{ display: openHeadingMenu ? "block" : "none" }}
      >
        <ul className="list-area">
          <li>
            <button
              className="txt-h"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeading({ level: 1 }).run();
                setOpenHeadingMenu(false);
              }}
            >
              <span className="type-h1">h1</span>
            </button>
          </li>

          <li>
            <button
              className="txt-h"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeading({ level: 2 }).run();
                setOpenHeadingMenu(false);
              }}
            >
              <span className="type-h2">h2</span>
            </button>
          </li>

          <li>
            <button
              className="txt-h"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeading({ level: 3 }).run();
                setOpenHeadingMenu(false);
              }}
            >
              <span className="type-h3">h3</span>
            </button>
          </li>

          <li>
            <button
              className="txt-h"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeading({ level: 4 }).run();
                setOpenHeadingMenu(false);
              }}
            >
              <span className="type-h4">h4</span>
            </button>
          </li>

          <li>
            <button
              className="txt-h"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeading({ level: 5 }).run();
                setOpenHeadingMenu(false);
              }}
            >
              <span className="type-h5">h5</span>
            </button>
          </li>

          <li>
            <button
              className="txt-h"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                editor.chain().focus().toggleHeading({ level: 6 }).run();
                setOpenHeadingMenu(false);
              }}
            >
              <span className="type-h6">h6</span>
            </button>
          </li>
        </ul>
      </div>
    </ClickOutside>
  );
};

export default TipTabEditorToolBarHeading;
