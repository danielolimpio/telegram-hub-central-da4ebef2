import { jsx } from "react/jsx-runtime";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { c as cn } from "../main.mjs";
import DOMPurify from "dompurify";
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
const sanitizeHTML = (dirty) => {
  if (!dirty) return "";
  const config = {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "blockquote"
    ],
    ALLOWED_ATTR: ["style", "class"],
    ALLOWED_STYLES: {
      "*": {
        "color": [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(/, /^rgba\(/],
        "background-color": [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(/, /^rgba\(/],
        "text-align": [/^left$/, /^right$/, /^center$/, /^justify$/],
        "font-family": [/.*/],
        "font-size": [/^\d+(?:px|em|rem|%)$/]
      }
    },
    KEEP_CONTENT: true
  };
  return DOMPurify.sanitize(dirty, config);
};
export {
  Avatar as A,
  AvatarImage as a,
  AvatarFallback as b,
  sanitizeHTML as s
};
