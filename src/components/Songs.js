import React, { useContext, useState, Fragment } from 'react'
import { Store } from '../store'

import barsSvg from '../assets/svg/bars.svg'
import addSvg from '../assets/svg/add.svg'
import repeatSvg from '../assets/svg/repeat.svg'

const Songs = (props) => {
  const { state } = useContext(Store)
  const [ playlistSongs, playlistSongsToggle ] = useState(false)
  const { selectedPlaylist } = state

  const playlistToggleStyles = () => {
    return {
      width: '15px'
    }
  }

  const playlistSongOptionStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'flex-end'
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
                <p>{song.title}</p>
                <p style={playlistSongOptionStyle()}>
                  <img
                    src={addSvg}
                    alt="Add song to queue"
                    style={playlistSongOptionControlStyle()} /> 
                  <img
                    src={repeatSvg}
                    alt="Repeat song"
                    style={playlistSongOptionControlStyle(true)} /> 
                  03:14
                </p>
                <small>{song.artist}</small>
              </div>
            )
          })}
        </div>
      </div>
  	</Fragment>
	)
}

export default Songs