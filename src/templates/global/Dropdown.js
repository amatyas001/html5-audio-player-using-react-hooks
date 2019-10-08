import styled from '@xstyled/styled-components'

const Dropdown = styled.div`
	background-color: ${(props) => props.selectedTheme === 'default' ? '#ffffff !important;' : '#6A6A6A !important;'}
  min-width: ${(props) => props.navBar ? '10rem;' : '25rem !important;'}

  .active {
  	color: ${(props) => props.selectedTheme === 'default' ? '#3ba30d !important' : '#262626 !important;'};

  	&:hover {
  		background-color: ${(props) => props.selectedTheme === 'default' ? '#dedede;' : 'transparent !important'}
  	}
  }
`
export default Dropdown