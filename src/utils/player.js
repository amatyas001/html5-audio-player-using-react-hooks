import { useContext } from 'react'
import { Store } from '../store'

import { shuffleArray } from './index'

export default function Playback (props) {
	const player = document.getElementById("audioPlayer")
	const { dispatch, state } = useContext(Store)
	const {
    selectedPlaylist, shufflePlaylist, shuffledPlaylist,
    playlistQueue, songIndex, songPlaying, songRepeat } = state

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

  const playerQueue = (song) => {
    if (playlistQueue.length > 0) {
      const songInQueue = playlistQueue.find(playlistSong => playlistSong.source === song.source)

      if (songInQueue) {
        const index = playlistQueue.indexOf(song)
        const newPlaylistQueue = playlistQueue.slice()
              newPlaylistQueue.splice(index)

        return dispatch({
          type: "PLAYLIST_QUEUE",
          payload: newPlaylistQueue
        })
      } else {
        const newPlaylistQueue = playlistQueue.slice()
            newPlaylistQueue.push(song)

        return dispatch({
          type: "PLAYLIST_QUEUE",
          payload: newPlaylistQueue
        })
      }
    } else {
      const newPlaylistQueue = []
            newPlaylistQueue.push(song)

      return dispatch({
        type: "PLAYLIST_QUEUE",
        payload: newPlaylistQueue
      })
    }
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

  const playerRepeat = (index) => {
    player.loop = !player.loop

    dispatch({
      type: "SONG_INDEX",
      payload: index
    })

    return dispatch({
      type: "SONG_REPEAT",
      payload: player.loop
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
    if (!songRepeat) {
      return dispatch({
        type: "CLEAR_SONG_PLAYING"
      })
    } else if (shufflePlaylist) {
      const newIndex = songIndex + 1
      
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

        return dispatch({
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
    } else if (playlistQueue.length > 0) {
      let newIndex = playlistQueue.length - 1
          newIndex = newIndex + 1

      const nextSong = playlistQueue[newIndex]
      dispatch({
        type: "PLAYER_READY",
        payload: false
      })
      
      dispatch({
        type: "SONG_PLAYING",
        payload: nextSong
      })
    }
  }

	return {
    playerPlaylist,
    playerShuffle,
    playerQueue,
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