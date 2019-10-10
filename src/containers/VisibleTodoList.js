// VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
};

// function that transform redux store state into props you want to pass to component
const mapStateToProps_TodoList = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps_TodoList = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default VisibleTodoList = connect(
  mapStateToProps_TodoList,
  mapDispatchToProps_TodoList
)(TodoList);
