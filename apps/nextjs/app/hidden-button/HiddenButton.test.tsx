import { HiddenButton } from "./HiddenButton";
import { expect, it } from "vite-plus/test";
import { render, screen } from "@testing-library/react";

it("finds a display:none button by text and test id, but not by role", () => {
  render(<HiddenButton />);

  screen.getByText("Register"); // OK, even though the button is invisible for the user
  screen.getByTestId("hidden-button"); // OK, even though the button is invisible for the user
  expect(screen.queryByRole("button")).toBeNull(); // KO: excluded from the accessibility tree
  screen.getByRole("button", { hidden: true }); // OK when opting into inaccessible elements
});
