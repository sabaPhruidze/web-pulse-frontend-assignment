import { render, screen, act } from "@testing-library/react";
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
        {" "}
        {/* mini router which is covers brower necesary part when used link or useNavigate */}
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
  test("in order to filter results after debounce when user types", () => {
    vi.useFakeTimers();

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>,
    );

    const input = screen.getByRole("searchbox");

    fireEvent.click(input); // firevent is sync so it will not have an issue with fakeTimer
    fireEvent.change(input, { target: { value: "asse" } });

    // act-ში გახვევა React state update-ებისთვის
    act(() => {
      // act is doing something like this wrapps with 1 safe block for updaiting correctly before expect runs
      vi.advanceTimersByTime(500);
    });

    expect(screen.queryByRole("button", { name: /dashboard/i })).toBeNull();
    expect(
      screen.queryByRole("button", { name: /assets/i }),
    ).toBeInTheDocument();

    vi.useRealTimers();
  });
});
