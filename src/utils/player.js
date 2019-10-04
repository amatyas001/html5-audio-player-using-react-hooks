import { useContext } from 'react'
import { Store } from '../store'

export default function Playback (props) {
	const player = document.getElementById("audioPlayer")
	const { dispatch, state } = useContext(Store)
	const {
    selectedPlaylistSongs, shuffledPlaylistSongs, shufflePlaylist,
    songIndex, songPlaying, playerRepeatSong, playerMute } = state

  const playerPlaylist = async () => {
    const data = await fetch("http://localhost:3004/posts")
    const dataJSON = await data.json()
    return dispatch({
      type: "SELECTED_PLAYLIST",
      payload: dataJSON
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

      if (newIndex === shuffledPlaylistSongs.length) {
        const nextSong = shuffledPlaylistSongs[0]

        dispatch({
          type: "SONG_PLAYING",
          payload: nextSong
        })
      } else {
        const nextSong = shuffledPlaylistSongs[newIndex];

        dispatch({
          type: "SONG_PLAYING",
          payload: nextSong
        })
      }
    } else {
      const newIndex = direction === 'next' ? songIndex + 1 : songIndex - 1

      if (newIndex === selectedPlaylistSongs.length) {
        const nextSong = selectedPlaylistSongs[0];

        return dispatch({
          type: "SONG_PLAYING",
          payload: nextSong
        });
      } else {
        const nextSong = selectedPlaylistSongs[newIndex]

        if (nextSong) {
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
    player.muted = !playerMute

    return dispatch({
      type: "SONG_MUTE",
      payload: !playerMute
    })
  }

  const playerSongEnded = () => {
      
  }

	return {
    playerPlaylist,
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