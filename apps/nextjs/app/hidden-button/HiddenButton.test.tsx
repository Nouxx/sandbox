import { HiddenButton } from "./HiddenButton";
import { it } from "vitest";
import { render, screen } from "@testing-library/react";

it("should test", () => {
  render(<HiddenButton />);

  screen.getByText("Register"); // OK, even tough the button is invisible for the user
  screen.getByTestId("hidden-button"); // OK, even tough the button is invisible for the user
  screen.getByRole("button"); // KO
});
