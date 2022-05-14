import * as actions from "./constants";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
};

const reducer = (state, action) => {
  console.log(action);
  //Action ==> types, [payload]-> can be daynamic
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actions.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };

    case actions.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case actions.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case actions.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };

    case actions.SET_SPOTIFY:
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
