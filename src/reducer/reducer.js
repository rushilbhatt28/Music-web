export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDmcyrEF9GGz4arcyVFdXAPPOP1Wf1hFH0sI-hLzxtbJHF1u6lzG5dlL1TVyk8rjEBEzzugb1PgzVkwSN9ZLYOTl_A0pKHthMhVdpiNrlPebL9SwFYfY2G5edU9vioRossI_zW0E5PMWN9QCYyr6B7U9gGhFu7H0fxJSJ_zv8OoN0bMui_V",
};

const reducer = (state, action) => {
  console.log(action);
  //Action ==> types, [payload]-> can be daynamic
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };

    default:
      return state;
  }
};

export default reducer;
