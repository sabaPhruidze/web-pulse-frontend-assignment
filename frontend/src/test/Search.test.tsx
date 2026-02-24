import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest"; //vi is for fake timing
import { MemoryRouter } from "react-router-dom";
import Search from "../components/header/Search";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
describe("Header's Search", () => {
  //codes in test's are sometimes repeated because ech test is independent from another
  test("renders search input , exists search or not", () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByRole("searchbox");
    expect(input).toBeInTheDocument();
  });
  test("Open dropdown menu when user clicks the search input and checks if there will be pages menu", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    const input = screen.getByRole("searchbox");
    await user.click(input);
    expect(
      screen.getByRole("button", { name: /dashboard/i }), //case insentive
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /assets/i })).toBeInTheDocument();
  });
  // sometimes fireEvent.mouseDown works better and is controlled in easier way on forward click so I will use it
  //something like TouchableWithoutFeedback in order to dismiss keyboard in react native expo
  test("closes dropDown menu when the user clicks outside of it", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    const input = screen.getByRole("searchbox");
    await user.click(input);
    // Dropdown is open and then Assets will be displayed
    expect(screen.getByRole("button", { name: /assets/i })).toBeInTheDocument();
    //when clicked outside of it , dropdown menu musst be closed and assets will not be displayed
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("button", { name: /assets/i })).toBeNull();
  });
  //typeing and deboundce check
  test("in order to filter results after debounce when user types", async () => {
    vi.useFakeTimers(); // by this it will use selfcontrol and not setTimeout or setInterval
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );
    const input = screen.getByRole("searchbox");
    await user.click(input);
    // By this only assets should remain not dashboard anymore
    await user.type(input, "asse");
    //since I have written 500 ms I have to write it to wait or else it will be error
    vi.advanceTimersByTime(500); //faking 500ms running
    expect(screen.queryByRole("button", { name: /dashboard/i })).toBeNull();
    expect(
      screen.queryByRole("button", { name: /assets/i }),
    ).toBeInTheDocument();
    vi.useRealTimers(); //get back tothe real time
  });
});
