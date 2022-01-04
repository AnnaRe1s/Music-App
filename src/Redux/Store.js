const INITIAL_STATE = {
  tracks: [],
  albums: [],
  podcasts: [],
};

function musicListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "MAKE_FAVORITE":
      const trackUpdated = state.tracks.map((track) =>
        track.id === action.id ? (track.like = !track.like) : track
      );
      return trackUpdated;
    case "ADD_DATA":
      return {
        ...state,
        tracks: [action.payload.tracks],
        albums: [action.payload.albums],
        podcasts: [action.payload.podcasts],
      };
    default:
      return state;
  }
}

export default musicListReducer;
