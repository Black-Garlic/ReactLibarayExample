import ClickOutside from "../../../libs/ClickOutside";

interface TextEditorToolBarHeadingProps {
  editor: any;
  openFontColorMenu: boolean;
  setOpenFontColorMenu: any;
}

/**
 * 텍스트 에디터 툴바 폰트 색상
 * @param editor
 * @param openFontColorMenu
 * @param setOpenFontColorMenu
 * @constructor
 */
const TipTabEditorToolBarFontColor = ({
  editor,
  openFontColorMenu,
  setOpenFontColorMenu,
}: TextEditorToolBarHeadingProps) => {
  const fontColorCode = [
    "#000000",
    "#8D3A16",
    "#33330A",
    "#123208",
    "#123262",
    "#00007B",
    "#333393",
    "#333333",
    "#75140C",
    "#ED702D",
    "#808026",
    "#377E22",
    "#377E7F",
    "#0000F5",
    "#666695",
    "#7C8698",
    "#EA3323",
    "#F19E38",
    "#A4CB3F",
    "#52976A",
    "#67C9CA",
    "#4065F6",
    "#75147C",
    "#A6ADB9",
    "#EA33F7",
    "#F7CE46",
    "#FFFF54",
    "#75FB4C",
    "#75FBFD",
    "#5CC9FA",
    "#8D3A64",
    "#C2C7CF",
    "#F19ECA",
    "#F7CEA0",
    "#FFFFA6",
    "#D6FED0",
    "#D6FEFE",
    "#A4CBFA",
    "#C49BF9",
    "#FFFFFF",
  ];

  return (
    <ClickOutside
      active={openFontColorMenu}
      onClick={() => setOpenFontColorMenu(false)}
    >
      <div
        className="layer-option-list"
        style={{ display: openFontColorMenu ? "block" : "none" }}
      >
        <ul className="list-area">
          {fontColorCode.map((fontColorCodeRow) => (
            <li key={fontColorCodeRow}>
              <button
                className="color-box"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  editor.chain().focus().setColor(fontColorCodeRow).run();
                  setOpenFontColorMenu(false);
                }}
              >
                <span style={{ background: fontColorCodeRow }} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </ClickOutside>
  );
};

export default TipTabEditorToolBarFontColor;
