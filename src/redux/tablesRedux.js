//selectors
export const getAllTables = (state) => state.tables;
export const getAllStates = (state) => state.states;
export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });


const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
      case EDIT_TABLE:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
      default:
      return statePart;
  };
};
export default tablesReducer;