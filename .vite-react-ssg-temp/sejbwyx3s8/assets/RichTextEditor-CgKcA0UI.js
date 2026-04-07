import { jsxs, jsx } from "react/jsx-runtime";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import { FontFamily } from "@tiptap/extension-font-family";
import { Highlight } from "@tiptap/extension-highlight";
import { Underline } from "@tiptap/extension-underline";
import { Bold, Italic, Underline as Underline$1, Strikethrough, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Highlighter, Type } from "lucide-react";
import { B as Button } from "./button-CeG9Zf-X.js";
import { L as Label } from "./label-DPO1kvhT.js";
import { c as cn } from "../main.mjs";
import { s as sanitizeHTML } from "./sanitize-MDfNxrKs.js";
const RichTextEditor = ({ content, onChange, label }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      TextStyle,
      Color,
      FontFamily.configure({
        types: ["textStyle"]
      }),
      Highlight.configure({
        multicolor: true
      })
    ],
    content,
    onUpdate: ({ editor: editor2 }) => {
      const html = editor2.getHTML();
      const sanitized = sanitizeHTML(html);
      onChange(sanitized);
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[200px] p-3 focus:outline-none [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:ml-2"
      }
    }
  });
  if (!editor) {
    return null;
  }
  const ToolbarButton = ({ onClick, active, children }) => /* @__PURE__ */ jsx(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick,
      className: cn(
        "h-8 w-8 p-0",
        active && "bg-accent"
      ),
      children
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsxs("div", { className: "border rounded-md bg-background", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b p-2 flex flex-wrap gap-1", children: [
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().toggleBold().run(),
            active: editor.isActive("bold"),
            children: /* @__PURE__ */ jsx(Bold, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().toggleItalic().run(),
            active: editor.isActive("italic"),
            children: /* @__PURE__ */ jsx(Italic, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().toggleUnderline().run(),
            active: editor.isActive("underline"),
            children: /* @__PURE__ */ jsx(Underline$1, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().toggleStrike().run(),
            active: editor.isActive("strike"),
            children: /* @__PURE__ */ jsx(Strikethrough, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-border mx-1" }),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            active: editor.isActive("bulletList"),
            children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            active: editor.isActive("orderedList"),
            children: /* @__PURE__ */ jsx(ListOrdered, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-border mx-1" }),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            active: editor.isActive({ textAlign: "left" }),
            children: /* @__PURE__ */ jsx(AlignLeft, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            active: editor.isActive({ textAlign: "center" }),
            children: /* @__PURE__ */ jsx(AlignCenter, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            active: editor.isActive({ textAlign: "right" }),
            children: /* @__PURE__ */ jsx(AlignRight, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-border mx-1" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            className: cn(
              "h-8 px-2 text-xs font-bold",
              editor.isActive("heading", { level: 1 }) && "bg-accent"
            ),
            children: "H1"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            className: cn(
              "h-8 px-2 text-xs font-bold",
              editor.isActive("heading", { level: 2 }) && "bg-accent"
            ),
            children: "H2"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            className: cn(
              "h-8 px-2 text-xs font-bold",
              editor.isActive("heading", { level: 3 }) && "bg-accent"
            ),
            children: "H3"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-border mx-1" }),
        /* @__PURE__ */ jsx(
          ToolbarButton,
          {
            onClick: () => editor.chain().focus().toggleHighlight({ color: "#ffc078" }).run(),
            active: editor.isActive("highlight"),
            children: /* @__PURE__ */ jsx(Highlighter, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-border mx-1" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Type, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "color",
              onInput: (e) => editor.chain().focus().setColor(e.target.value).run(),
              value: editor.getAttributes("textStyle").color || "#000000",
              className: "h-8 w-12 rounded border cursor-pointer"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-8 bg-border mx-1" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            onChange: (e) => editor.chain().focus().setFontFamily(e.target.value).run(),
            className: "h-8 px-2 text-xs rounded border bg-background",
            value: editor.getAttributes("textStyle").fontFamily || "default",
            children: [
              /* @__PURE__ */ jsx("option", { value: "default", children: "Padrão" }),
              /* @__PURE__ */ jsx("option", { value: "Inter", children: "Inter" }),
              /* @__PURE__ */ jsx("option", { value: "Arial", children: "Arial" }),
              /* @__PURE__ */ jsx("option", { value: "Georgia", children: "Georgia" }),
              /* @__PURE__ */ jsx("option", { value: "Times New Roman", children: "Times New Roman" }),
              /* @__PURE__ */ jsx("option", { value: "Courier New", children: "Courier New" }),
              /* @__PURE__ */ jsx("option", { value: "Verdana", children: "Verdana" }),
              /* @__PURE__ */ jsx("option", { value: "Comic Sans MS", children: "Comic Sans MS" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        EditorContent,
        {
          editor,
          className: "prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:ml-2"
        }
      )
    ] })
  ] });
};
export {
  RichTextEditor as R
};
