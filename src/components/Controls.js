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

const Controls = (props) => {
  const player = document.getElementById("audioPlayer")
  const { state } = useContext(Store)
  const { selectedPlaylist, playerReady, songPlaying } = state
  const { playerPlaySong } = Playback()

  const controlButtonSyles = (isPlay) => {
    return {
      width: isPlay ? '50px' : '15px'
    }
  }

	return (
  	<Fragment>
      <PlayerControls>
        <div className="item">
          <Songs />

          <button type="button" className="btn">
            <img
              src={prevSvg}
              alt="Previous song"
              style={controlButtonSyles()} />
          </button>
          {(songPlaying || songPlaying === null) && selectedPlaylist && selectedPlaylist.map((song, index) => {
            return (
              <Fragment key={index}>
                {index === 0 &&
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
          <button type="button" className="btn">
            <img
              src={nextSvg}
              alt="Next song"
              style={controlButtonSyles()} />
          </button>
          <button
            type="button"
            className="btn">
            <img
              src={ player && player.muted ? muteSvg : volumeSvg }
              alt={ player && player.muted ? "Mute volume" : "Unmute volume" }
              style={controlButtonSyles()} />
          </button>
          <button type="button" className="btn">
            <img
              src={shuffleSvg}
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