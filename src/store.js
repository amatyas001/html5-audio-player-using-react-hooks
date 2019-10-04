import React from 'react'

export const Store = React.createContext()

const initialState = {
  selectedTheme: 'default',
  selectedPlaylist: [],
  playerReady: true,
  songPlaying: null,
  songPlayingProgress: 0,
  songRepeat: false,
  songMute: false
}

function reducer(state, action) {
  switch (action.type) {
  	case "UPDATE_THEME":
      return { ...state, selectedTheme: action.payload }
    case "SELECTED_PLAYLIST":
      return { ...state, selectedPlaylist: action.payload }
    case "PLAYER_READY":
      return { ...state, playerReady: action.payload }
    case "SONG_PLAYING":
      return { ...state, songPlaying: action.payload }
    case "SONG_PLAYING_PROGRESS":
      return { ...state, songPlayingProgress: action.payload }
    case "SONG_REPEAT":
      return { ...state, songRepeat: action.payload }
    case "SONG_MUTE":
      return { ...state, songMute: action.payload }
    default:
      return state;
  }
}

export function StoreProvider(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState)
	const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}
  </Store.Provider>
}