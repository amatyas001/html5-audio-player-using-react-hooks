import React, { useContext, useState, Fragment } from 'react'
import { Store } from '../store'
import Playback from '../utils/player'

import loadingSvg from '../assets/svg/loading.svg'
import barsSvg from '../assets/svg/bars.svg'
import playAltSvg from '../assets/svg/play.alt.svg'
import pauseAltSvg from '../assets/svg/pause.alt.svg'
import addSvg from '../assets/svg/add.svg'
import repeatSvg from '../assets/svg/repeat.svg'
import repeatAltSvg from '../assets/svg/repeat.alt.svg'

const Songs = (props) => {
  const player = document.getElementById("audioPlayer")
  const { state } = useContext(Store)
  const [ playlistSongs, playlistSongsToggle ] = useState(false)
  const { selectedPlaylist, playerReady, songIndex, songPlaying, songRepeat } = state
  const { playerPlaySong, playerRepeat } = Playback()

  const playlistToggleStyles = () => {
    return {
      width: '15px'
    }
  }

  const playlistSongStyles = (song) => {
    return {
      color: JSON.stringify(songPlaying) === JSON.stringify(song) ? '#3ba30d' : '#262626'
    }
  }

  const playlistSongOptionStyle = (song) => {
    return {
      display: 'flex',
      justifyContent: 'flex-end',
      color: JSON.stringify(songPlaying) === JSON.stringify(song) ? '#3ba30d' : '#262626'
    }
  }

  const playlistSongOptionControlStyle = (isRepeat) => {
    return {
      width: isRepeat ? '13px' : '10px',
      marginRight: '10px',
      cursor: 'pointer'
    }
  }

	return (
  	<Fragment>
  		<div
        className="btn-group"
        onMouseEnter={() => playlistSongsToggle(!playlistSongs)}
        onMouseLeave={() => playlistSongsToggle(!playlistSongs)}>
        <button
          type="button"
          className="btn dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={playlistSongs}>
          <img
            src={barsSvg}
            alt="Toggle playlist songs"
            style={playlistToggleStyles()} />
        </button>
        <div id="selectedPlaylistSongs" className={`dropdown-menu show ${playlistSongs ? 'show' : ''}`}>
          {selectedPlaylist && selectedPlaylist.map((song, index) => {
            return (
              <div
                key={index}
                className="dropdown-item">
                <p style={playlistSongStyles(song)}>
                  {!playerReady &&
                    <img
                      src={loadingSvg}
                      alt="Loading..."
                      style={{ width: '15px', marginRight: '10px', filter: 'invert(1)' }} />
                  }
                  {playerReady &&
                    <img
                      src={ player && player.paused ? playAltSvg : JSON.stringify(songPlaying) === JSON.stringify(song) ? pauseAltSvg : playAltSvg }
                      alt={ player && player.paused ? "Play song" : "Pause song" }
                      style={{ width: '10px', marginRight: '10px' }}
                      onClick={() => playerPlaySong(song, index)} />
                  }
                  {song.title}
                </p>
                <p style={playlistSongOptionStyle(song)}>
                  <img
                    src={addSvg}
                    alt="Add song to queue"
                    style={playlistSongOptionControlStyle()} /> 
                  <img
                    src={ (songRepeat && songIndex === index) ? repeatAltSvg : repeatSvg }
                    alt="Repeat song"
                    onClick={() => playerRepeat(index)}
                    style={playlistSongOptionControlStyle(true)} /> 
                  {song.duration}
                </p>
                <small style={{ marginLeft: '20px', color: JSON.stringify(songPlaying) === JSON.stringify(song) ? '#3ba30d' : '#262626' }}>
                  {song.artist}
                </small>
              </div>
            )
          })}
        </div>
      </div>
  	</Fragment>
	)
}

export default Songs