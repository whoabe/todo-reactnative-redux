// FilterLink gets the current visibility filter and renders a Link
// filter: string is the visibility filter it represents

import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

//  special function called mapStateToProps that describes how to transform the current Redux store state into the props you want to pass to a presentational component you are wrapping
// ownProps is taken from Footer.js
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
  // active is a boolean result of the filter passed from the filterlink prop compared to the state visibilityFilter
  // active is whether or not you are in this view/in this filterlink compared to the Visibility.filter from the reducers/actions
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
