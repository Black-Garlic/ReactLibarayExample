import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import CharacterCount from "@tiptap/extension-character-count";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TipTabEditorToolBar from "./TipTabEditorToolBar";
import { EditorStyle } from "../TipTapStyle";
import MainTemplate from "../../../common/MainTemplate";
import "./assets/editor.css";

const TipTapEditorPage = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          style: "width: 100%",
        },
      }),
      Placeholder.configure({
        placeholder: "TipTap Editor",
      }),
      Link,
      CharacterCount.configure({
        limit: 2000,
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Subscript,
      Superscript,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextStyle,
      Color,
    ],
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

  // useEffect(() => {
  //   if (editor) {
  //     editor.on("update", ({ editor }) => {
  //       methods.setValue(register.name, editor.getHTML(), {
  //         shouldDirty: true,
  //       });
  //       if (handleScroll) {
  //         handleScroll(editor.getText());
  //       }
  //     });
  //     setEditor(editor);
  //   }
  // }, [editor, handleScroll, methods, register.name, setEditor]);

  return (
    <MainTemplate>
      <div className={"inputAreaClass"}>
        <TipTabEditorToolBar editor={editor} />

        <EditorContent editor={editor} maxLength={2000} />

        <EditorStyle>
          <div dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }} />
        </EditorStyle>

        <div className="count-txt">
          <div>{editor?.storage.characterCount.characters() ?? 0}/2000 자</div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default TipTapEditorPage;
