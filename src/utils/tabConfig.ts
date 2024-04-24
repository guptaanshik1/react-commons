import { ITabProperties, TTabConfig, TabConstants, TabStates } from "./data";

export const tabConfig: TTabConfig[] = [
  { label: TabConstants.FIRST_TAB, state: TabStates.CURRENT },
  { label: TabConstants.SECOND_TAB, state: TabStates.COMPLETED },
  { label: TabConstants.THIRD_TAB, state: TabStates.PENDING },
  { label: TabConstants.FOURTH_TAB, state: TabStates.PENDING },
];

export const tabPropsMapper: Record<TabStates, ITabProperties> = {
  [TabStates.COMPLETED]: {
    color: "green",
    label: "Completed",
  },
  [TabStates.PENDING]: {
    color: "grey",
    label: "Pending",
  },
  [TabStates.CURRENT]: {
    color: "black",
    label: "Current",
  },
};
