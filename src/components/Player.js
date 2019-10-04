import React, { useContext, useEffect, Fragment } from 'react'
import { Store } from '../store'
import Playback from '../utils/player'

import { PlayerContainer } from '../templates/index'

import Progress from './Progress'
import Controls from './Controls'

// https://github.com/aadsm/jsmediatags

const Player = (props) => {
	const { state } = useContext(Store)
  const { songPlaying } = state
  const { playerPlaylist, playerReadyToPlay, playerSongProgress, playerSongEnded } = Playback()

  useEffect(() => {
    playerPlaylist()
    // eslint-disable-next-line
  }, [])

	return (
  	<Fragment>
  		<audio
  			id="audioPlayer"
  			onCanPlay={() => playerReadyToPlay()}
  			onTimeUpdate={() => playerSongProgress()}
  			onEnded={() => playerSongEnded()}>
          <source src={songPlaying} type="audio/mpeg" />
      </audio>

      <PlayerContainer>
        <Progress />
        <Controls />
      </PlayerContainer>
  	</Fragment>
	)
}

export default Player