import React, { useContext, Fragment } from 'react'
import { Store } from '../store'
import Playback from '../utils/player'

import { PlayerBar, PlayerBarProgress } from '../templates/index'

const Progress = (props) => {
  const { state } = useContext(Store)
  const { selectedTheme, songPlayingProgress } = state
  const { playerSongSeek } = Playback()

	return (
  	<Fragment>
      <PlayerBar
        selectedTheme={selectedTheme}
        onClick={(event) => playerSongSeek(event)}>
          <PlayerBarProgress songPlayingProgress={songPlayingProgress} />
      </PlayerBar>
  	</Fragment>
	)
}

export default Progress