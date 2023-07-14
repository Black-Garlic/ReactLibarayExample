import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import TipTapSimpleMenu from "./TipTapSimpleMenu";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import MainTemplate from "../../../common/MainTemplate";
import { EditorStyle } from "../TipTapStyle";

const TipTapSimplePage = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: `
      <strong>Hi there</strong><br/>
      <em>Hi there</em><br/>
      <s>Hi there</s><br/>
      <code class="language-css">body {display: none;}</code>
      <p>Hi there</p>
      <h1>
        Hi there
      </h1>
      <h2>
        Hi there
      </h2>
      <h3>
        Hi there
      </h3>
      <h4>
        Hi there
      </h4>
      <h5>
        Hi there
      </h5>
      <h6>
        Hi there
      </h6>
      <ul>
        <li>
        Hi there
        </li>
      </ul>
      <ol>
        <li>
        Hi there
        </li>
      </ol>
      <pre><code class="language-css">body {display: none;}</code></pre>
      <blockquote>
        Hi there
      </blockquote>
     <hr contenteditable="false"/>
    `,
  });

  const addImage = () => {
    const url =
      "https://mk.kakaocdn.net/dn/eva_res/heykakao/resources/radio_thum/radio_mbc_800.png";

    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  console.log(editor?.getHTML());

  return (
    <MainTemplate>
      <TipTapSimpleMenu editor={editor} />

      <button onClick={addImage}>add image from URL</button>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div style={{ backgroundColor: "#444" }}>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "is-active" : ""
              }
            >
              H1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "is-active" : ""
              }
            >
              H2
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "is-active" : ""}
              style={{ fontWeight: "bold" }}
            >
              B
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "is-active" : ""}
              style={{ fontStyle: "italic" }}
            >
              I
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "is-active" : ""}
              style={{ textDecoration: "line-through", fontWeight: "bold" }}
            >
              T
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive("codeBlock") ? "is-active" : ""}
            >
              Code
            </button>
          </div>
        </BubbleMenu>
      )}

      <EditorContent
        editor={editor}
        style={{
          margin: 20,
          padding: 20,
          border: "1px solid #000",
          outline: "none",
        }}
      />

      <EditorStyle>
        <div dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }} />
      </EditorStyle>
    </MainTemplate>
  );
};

export default TipTapSimplePage;
