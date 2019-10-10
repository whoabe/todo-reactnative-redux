import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  // having VisibilityFilters as SHOW_ALL when app first loads
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
