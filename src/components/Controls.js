import React, { Fragment } from 'react'

import { PlayerControls } from '../templates/index'

import Songs from './Songs'

import playSvg from '../assets/svg/play.svg'
import pauseSvg from '../assets/svg/pause.svg'
import prevSvg from '../assets/svg/prev.svg'
import nextSvg from '../assets/svg/next.svg'
import volumeSvg from '../assets/svg/volume.svg'
import muteSvg from '../assets/svg/mute.svg'
import shuffleSvg from '../assets/svg/shuffle.svg'

const Controls = (props) => {
  const player = document.getElementById("audioPlayer")

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
          <button type="button" className="btn">
            <img
              src={ player && player.paused ? playSvg : pauseSvg }
              alt={ player && player.paused ? "Play song" : "Pause song" }
              style={controlButtonSyles(true)} />
          </button>
          <button type="button" className="btn">
            <img
              src={nextSvg}
              alt="Next song"
              style={controlButtonSyles()} />
          </button>
          <button type="button" className="btn">
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
            Song One
            <br />
            <small>Artist One</small>
          </p>
        </div>
      </PlayerControls>
  	</Fragment>
	)
}

export default Controls