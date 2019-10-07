import styled from '@xstyled/styled-components'

const Navbar = styled.div`
  .nav {
  	background-color: backgroundColor;
  	position: fixed;
		top: 0;
		right: 0;
		left: 0;
		padding: 0 15px;
		z-index: 9999;

		.dropdown-toggle {
			color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#3ba30d;'}
			margin: 10px 5px;
		}

		.dropdown-menu {
			min-width: 1px;
			left: -30px;
		}
  }
`
export default Navbar