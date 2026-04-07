import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { c as cn } from "../main.mjs";
import { createClient } from "@supabase/supabase-js";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const SUPABASE_URL = "https://fsfrpjsuakhkpbmqgibf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZnJwanN1YWtoa3BibXFnaWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MDcyOTAsImV4cCI6MjA3NDM4MzI5MH0.Z4sFNkScO7rjFigMrbJsV-8vP4spjhadL-z28_AX37M";
const memoryStorage = {};
const safeStorage = {
  getItem: (key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem(key);
    }
    return memoryStorage[key] ?? null;
  },
  setItem: (key, value) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, value);
    } else {
      memoryStorage[key] = value;
    }
  },
  removeItem: (key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    } else {
      delete memoryStorage[key];
    }
  }
};
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: safeStorage,
    persistSession: true,
    autoRefreshToken: true
  }
});
export {
  Input as I,
  supabase as s
};
