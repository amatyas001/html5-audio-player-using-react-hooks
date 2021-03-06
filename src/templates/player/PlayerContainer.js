import styled from '@xstyled/styled-components'

const PlayerContainer = styled.div`
	position: relative;
  background-color: ${(props) => props.selectedTheme === 'default' ? '#dedede;' : '#262626;'}
  border: ${(props) => props.selectedTheme === 'default' ? '1px solid #dedede;' : '1px solid #262626;'}
  width: 100%;
  padding: 40px 15px 15px;
`
export default PlayerContainer