import styled from '@xstyled/styled-components'

const PlayerBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.selectedTheme === 'default' ? '#ffffff;' : '#6A6A6A;'}
  width: 100%;
  top: 0;
  left: 0;
  height: 25px;
  margin: 0;
  cursor: pointer;
`
export default PlayerBar