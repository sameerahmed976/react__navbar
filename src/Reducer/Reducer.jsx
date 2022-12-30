const reducer = (state, action) => {
  if (action.type === "OPEN__SIDEBAR") {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === "CLOSE__SIDEBAR") {
    return { ...state, isSidebarOpen: false };
  }
};

export default reducer;
