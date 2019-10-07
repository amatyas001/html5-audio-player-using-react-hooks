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
        color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#ffffff;'}
  			text-align: left;
  			width: 100%;
  			margin: 0;
  		}
  	}
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    .item {
      min-width: 100%;
      align-items: center;
      justify-content: center;

      &:last-child {

        p, small {
          text-align: center;
        }
      }
    }
  }
`
export default PlayerControls