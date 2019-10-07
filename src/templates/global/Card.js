import styled from '@xstyled/styled-components'

const Card = styled.div`
  background-color: ${(props) => props.selectedTheme === 'default' ? '#ffffff;' : '#6A6A6A;'}
	border-radius: .25rem;
  border: none !important;
  text-align: center;
  margin: 0 0 15px 0;

  .card-body {
    background-color: ${(props) => props.selectedTheme === 'default' ? '#ffffff;' : '#6A6A6A;'}
    position: relative;
    color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#ffffff;'}
    border-radius: .25rem;
    transition: all 0.3s;
    min-height: 275px;

    p {
      text-align: left;

      &:last-child {
        margin: 0;
      }
    }

    pre {
    	background-color: ${(props) => props.selectedTheme === 'default' ? '#dedede;' : '#262626;'}
    	color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#ffffff;'}
      padding: 15px;
    }

    button {
      margin: 5px 0;
    }
  }
`
export default Card