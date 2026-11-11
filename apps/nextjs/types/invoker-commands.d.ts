import "react";

// Invoker Commands API attributes, not yet in @types/react.
// https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API
declare module "react" {
  interface ButtonHTMLAttributes<T> {
    command?:
      | "show-modal"
      | "close"
      | "request-close"
      | "show-popover"
      | "hide-popover"
      | "toggle-popover"
      | `--${string}`;
    commandfor?: string;
  }
}
