"use client";

export function HiddenButton() {
  return (
    <button data-testid="hidden-button" style={{ display: "none" }}>
      Register
    </button>
  );
}
