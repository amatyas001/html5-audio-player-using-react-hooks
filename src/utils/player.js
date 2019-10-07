import { useContext } from 'react'
import { Store } from '../store'

import { shuffleArray } from './index'

export default function Playback (props) {
	const player = document.getElementById("audioPlayer")
	const { dispatch, state } = useContext(Store)
	const {
    selectedPlaylist, shufflePlaylist, shuffledPlaylist,
    songIndex, songPlaying, playerRepeatSong } = state

  const playerPlaylist = async () => {
    const data = await fetch("http://localhost:3004/posts")
    const dataJSON = await data.json()
    return dispatch({
      type: "SELECTED_PLAYLIST",
      payload: dataJSON
    })
  }

  const playerShuffle = () => {
    const playerPlaylist = selectedPlaylist.slice()
    const shuffledPlaylist = shuffleArray(playerPlaylist)

    dispatch({
      type: "SHUFFLE_PLAYLIST",
      payload: !shufflePlaylist
    })

    return dispatch({
      type: "SHUFFLED_PLAYLIST",
      payload: shuffledPlaylist
    })
  }

  const playerPlaySong = (song, index) => {
    if (JSON.stringify(songPlaying) === JSON.stringify(song)) {
    	if (!player.paused) {
        player.pause()
    	} else {
        player.play()
    	}
    } else {
      dispatch({
        type: "SONG_INDEX",
        payload: index
      })

      dispatch({
        type: "SONG_PLAYING",
        payload: song
      })

      dispatch({
        type: "PLAYER_READY",
        payload: false
      })
    }
  }

  const playerReadyToPlay = () => {
    player.play()

  	return dispatch({
      type: "PLAYER_READY",
      payload: true
    })
  }

  const playerSongProgress = () => {
  	return dispatch({
    	type: "SONG_PLAYING_PROGRESS",
    	payload: (player.currentTime / player.duration) * 100
  	})
  }

  const playerSongSeek = (event) => {
	  const xPos = (event.pageX - event.currentTarget.getBoundingClientRect().left) / event.currentTarget.offsetWidth

    if (player && !isNaN(player.duration)) {
      player.currentTime = (xPos * player.duration)
      player.play()
    	return dispatch({
        	type: "SONG_PLAYING_PROGRESS",
        	payload: (player.currentTime / player.duration) * 100
    	})
    }
  }

  const playerGoToSong = (direction) => {
    if (shufflePlaylist) {
      const newIndex = direction === 'next' ? songIndex + 1 : songIndex - 1;

      if (newIndex === shuffledPlaylist.length) {
        const nextSong = shuffledPlaylist[0]

        dispatch({
          type: "PLAYER_READY",
          payload: false
        })

        dispatch({
          type: "SONG_INDEX",
          payload: 0
        })

        dispatch({
          type: "SONG_PLAYING",
          payload: nextSong
        })
      } else {
        const nextSong = shuffledPlaylist[newIndex]

        dispatch({
          type: "PLAYER_READY",
          payload: false
        })

        dispatch({
          type: "SONG_INDEX",
          payload: newIndex
        })

        dispatch({
          type: "SONG_PLAYING",
          payload: nextSong
        })
      }
    } else {
      const newIndex = direction === 'next' ? songIndex + 1 : songIndex - 1

      if (newIndex === selectedPlaylist.length) {
        const nextSong = selectedPlaylist[0]

        dispatch({
          type: "PLAYER_READY",
          payload: false
        })

        dispatch({
          type: "SONG_INDEX",
          payload: 0
        })

        return dispatch({
          type: "SONG_PLAYING",
          payload: nextSong
        });
      } else {
        const nextSong = selectedPlaylist[newIndex]

        if (nextSong) {
          dispatch({
            type: "PLAYER_READY",
            payload: false
          })

          dispatch({
            type: "SONG_INDEX",
            payload: newIndex
          })

          dispatch({
            type: "SONG_PLAYING",
            payload: nextSong
          })
        }
      }
    }
  }

  const playerRepeat = (song, index) => {
    return dispatch({
      type: "SONG_REPEAT",
      payload: !playerRepeatSong
    })
  }

  const playerMuteVolume = () => {
    player.muted = !player.muted

    return dispatch({
      type: "SONG_MUTE",
      payload: player.muted
    })
  }

  const playerSongEnded = () => {
      
  }

	return {
    playerPlaylist,
    playerShuffle,
		playerPlaySong,
		playerReadyToPlay,
		playerSongProgress,
		playerSongSeek,
		playerGoToSong,
		playerRepeat,
		playerMuteVolume,
		playerSongEnded
	}

}