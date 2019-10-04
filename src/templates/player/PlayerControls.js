import styled from '@xstyled/styled-components'

const PlayerControls = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 100%;

  .item {
  	display: flex;
  	flex: 1;
  	text-align: left;

  	&:last-child {
  		flex-wrap: wrap;
  		align-items: center;

  		p, small {
  			text-align: left;
  			width: 100%;
  			margin: 0;
  		}
  	}
  }
`
export default PlayerControls