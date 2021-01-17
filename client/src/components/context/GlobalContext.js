import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer";

const initialState = {
    markers: [{id: 2, location: "Douglas Wright Engineering Building", course: "CSC207", seats: 3, description: "I have a starbucks cup on my desk!", coord: {lat: 43.47007, lon: -80.5397}},
    {id: 3, location: "Engineering 3", course: "ENG123", seats: 2, description: "I'm sitting near the cafetaria!", coord: {lat: 43.4717442, lon: -80.54086285}},
    {id: 4, location: "Physics", course: "BIS123", seats: 5, description: "I have a red shirt on!", coord: {lat: 43.47084805, lon: -80.54153806}}]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    const addMarkerToMarkers = marker => {
        dispatch({type: "ADD_MARKER_TO_MARKERS", payload: marker})
    }

    const removeMarkerToMarkers = id => {
        dispatch({type: "REMOVE_MARKER_TO_MARKERS", payload: id})
    }

    return (
        <GlobalContext.Provider value={{markers: state.markers, addMarkerToMarkers, removeMarkerToMarkers}}>
            {props.children}
        </GlobalContext.Provider>
    )
}