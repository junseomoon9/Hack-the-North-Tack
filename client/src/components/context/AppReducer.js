export default (state, action) => {
    switch (action.type) {
      case "ADD_MARKER_TO_MARKERS":
        return {
          ...state,
          markers: [action.payload, ...state.markers],
        };
      case "REMOVE_MARKER_TO_MARKERS":
        return {
          ...state,
          markers: state.markers.filter(
            (marker) => marker.id !== action.payload
          ),
        };
      default:
        return state;
    }
}