import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

// Shows the controls and display
test('Dashboard renders and matches snapshot', () => {
  const wrapper = rtl.render(<Dashboard />);

  expect(wrapper.asFragment()).toMatchSnapshot();
})

// Gate defaults to unlocked and open
test('Dashboard renders with the Display and Controls', () => {
  const wrapper = rtl.render(<Dashboard />);

  const unLocked = wrapper.getByText(/unlocked/i);
  expect(unLocked).toBeInTheDocument();

  const open = wrapper.getByText(/open/i);
  expect(open).toBeInTheDocument();
})