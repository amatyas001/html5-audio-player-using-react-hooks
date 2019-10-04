import styled from '@xstyled/styled-components'

const PlayerBarProgressHandle = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  border: 1.5px solid white;
  border-radius: 50%;
  background-color: #2c72c2;
  top: -3px;
  left: ${(props) => !isNaN(props.songPlayingProgress) ? `${props.songPlayingProgress}%;` : '0;'}
  z-index: 3;
`
export default PlayerBarProgressHandle