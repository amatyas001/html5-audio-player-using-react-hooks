import React from 'react'

export const Store = React.createContext()

const initialState = {
  selectedTheme: 'default',
  selectedPlaylist: [],
  shufflePlaylist: false,
  shuffledPlaylist: [],
  playerReady: true,
  songIndex: null,
  songPlaying: null,
  songPlayingProgress: 0,
  songRepeat: false,
  songMute: false,
  playlistQueue: []
}

function reducer(state, action) {
  switch (action.type) {
  	case "UPDATE_THEME":
      return { ...state, selectedTheme: action.payload }
    case "SELECTED_PLAYLIST":
      return { ...state, selectedPlaylist: action.payload }
    case "SHUFFLE_PLAYLIST":
      return { ...state, shufflePlaylist: action.payload }
    case "SHUFFLED_PLAYLIST":
      return { ...state, shuffledPlaylist: action.payload }
    case "PLAYER_READY":
      return { ...state, playerReady: action.payload }
    case "SONG_INDEX":
      return { ...state, songIndex: action.payload }
    case "SONG_PLAYING":
      return { ...state, songPlaying: action.payload }
    case "CLEAR_SONG_PLAYING":
      return { ...state, songPlaying: initialState.songPlaying }
    case "SONG_PLAYING_PROGRESS":
      return { ...state, songPlayingProgress: action.payload }
    case "SONG_REPEAT":
      return { ...state, songRepeat: action.payload }
    case "SONG_MUTE":
      return { ...state, songMute: action.payload }
    case "PLAYLIST_QUEUE":
      return { ...state, playlistQueue: action.payload }
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