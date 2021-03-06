import React, { useContext, Fragment } from 'react'
import { Store } from '../store'
import Playback from '../utils/player'

import { PlayerControls } from '../templates/index'

import Songs from './Songs'

import loadingSvg from '../assets/svg/loading.svg'
import playSvg from '../assets/svg/play.svg'
import pauseSvg from '../assets/svg/pause.svg'
import prevSvg from '../assets/svg/prev.svg'
import nextSvg from '../assets/svg/next.svg'
import volumeSvg from '../assets/svg/volume.svg'
import muteSvg from '../assets/svg/mute.svg'
import shuffleSvg from '../assets/svg/shuffle.svg'
import shuffleAltSvg from '../assets/svg/shuffle.alt.svg'

const Controls = (props) => {
  const player = document.getElementById("audioPlayer")
  const { state } = useContext(Store)
  const { selectedTheme, selectedPlaylist, shufflePlaylist, playerReady, songPlaying } = state
  const { playerPlaySong, playerGoToSong, playerMuteVolume, playerShuffle } = Playback()

  const controlButtonSyles = (isPlay) => {
    return {
      width: isPlay ? '50px' : '15px',
      filter: selectedTheme === 'default' ? 'invert(1)' : 'invert(0)'
    }
  }

	return (
  	<Fragment>
      <PlayerControls selectedTheme={selectedTheme}>
        <div className="item">
          <Songs />

          <button
            type="button"
            className="btn"
            onClick={() => playerGoToSong()}>
            <img
              src={prevSvg}
              alt="Previous song"
              style={controlButtonSyles()} />
          </button>
          
          {selectedPlaylist && selectedPlaylist.map((song, index) => {
            return (
              <Fragment key={index}>
                {(JSON.stringify(songPlaying) === JSON.stringify(song)) &&
                  <button
                    type="button" 
                    className="btn"
                    onClick={() => playerPlaySong(song, index)}>
                    {!playerReady &&
                      <img
                        src={loadingSvg}
                        alt="Loading..."
                        style={controlButtonSyles(true)} />
                    }
                    {playerReady &&
                      <img
                        src={ player && player.paused ? playSvg : pauseSvg }
                        alt={ player && player.paused ? "Play song" : "Pause song" }
                        style={controlButtonSyles(true)} />
                    }
                  </button>
                }

                {(JSON.stringify(songPlaying) !== JSON.stringify(song) && songPlaying === null && index === 0) &&
                  <button
                    type="button" 
                    className="btn"
                    onClick={() => playerPlaySong(song, index)}>
                    {!playerReady &&
                      <img
                        src={loadingSvg}
                        alt="Loading..."
                        style={controlButtonSyles(true)} />
                    }
                    {playerReady &&
                      <img
                        src={ player && player.paused ? playSvg : pauseSvg }
                        alt={ player && player.paused ? "Play song" : "Pause song" }
                        style={controlButtonSyles(true)} />
                    }
                  </button>
                }
              </Fragment>
            )
          })}

          <button
            type="button"
            className="btn"
            onClick={() => playerGoToSong('next')}>
            <img
              src={nextSvg}
              alt="Next song"
              style={controlButtonSyles()} />
          </button>

          <button
            type="button"
            className="btn"
            onClick={() => playerMuteVolume()}>
            <img
              src={ player && player.muted ? muteSvg : volumeSvg }
              alt={ player && player.muted ? "Mute volume" : "Unmute volume" }
              style={controlButtonSyles()} />
          </button>

          <button
            type="button"
            className="btn"
            onClick={() => playerShuffle()}>
            <img
              src={ shufflePlaylist ? shuffleAltSvg : shuffleSvg}
              alt="Shuffle songs"
              style={controlButtonSyles()} />
          </button>
        </div>

        <div className="item">
          <p>
            {songPlaying && songPlaying.title}
            <br />
            <small>{songPlaying && songPlaying.artist}</small>
          </p>
        </div>
      </PlayerControls>
  	</Fragment>
	)
}

export default Controls