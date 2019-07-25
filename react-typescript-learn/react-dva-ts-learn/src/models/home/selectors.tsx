import { createSelector } from "reselect";
import * as constants from "./constants";
import { GlobalState } from "../global";

const getModelState = (namespace: string) => (state: GlobalState) => state[namespace];
export const getCounterState = createSelector(
  getModelState(constants.NAMESPACE),
  state => state
);