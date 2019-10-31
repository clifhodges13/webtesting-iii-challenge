import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

// find the lock/unlock element, then expect the open/close to not have text of open if the L/U has text 'locked'

test('Gate cannot open if it\'s locked', () => {
  const wrapper = rtl.render(<Controls />);

  const lockedOrUnlocked = wrapper.getByTestId('lu')

  expect(lockedOrUnlocked).toHave()

  const openOrClosed = wrapper.getByTestId('oc')

  expect(openOrClosed).toBeInTheDocument()
})