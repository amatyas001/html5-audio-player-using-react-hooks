import React, { useContext, Fragment } from 'react'
import { Store } from '../store'
import { formatDuration } from '../utils'
import Playback from '../utils/player'

import { PlayerTime, PlayerBar, PlayerBarProgress } from '../templates/index'

const Progress = (props) => {
  const player = document.getElementById("audioPlayer")
  const { state } = useContext(Store)
  const { playerReady, songPlayingProgress } = state
  const { playerSongSeek } = Playback()

	return (
  	<Fragment>
      {playerReady && <PlayerTime placement={"left"}>{player && player.currentTime > 0 ? formatDuration(Math.round(player && player.currentTime)) : null}</PlayerTime>}
      <PlayerBar onClick={(event) => playerSongSeek(event)}>
          <PlayerBarProgress songPlayingProgress={songPlayingProgress}>
              {/*<PlayerBarProgressHandle songPlayingProgress={songPlayingProgress} id="songProgressHandle" />*/}
          </PlayerBarProgress>
      </PlayerBar>
      {playerReady && <PlayerTime placement={"right"}>{player && player.duration > 0 ? formatDuration(Math.round(player && player.duration)) : null}</PlayerTime>}
  	</Fragment>
	)
}

export default Progress