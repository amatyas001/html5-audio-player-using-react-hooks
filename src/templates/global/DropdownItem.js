import styled from '@xstyled/styled-components'

const DropdownItem = styled.div`
	display: flex !important;
	flex-wrap: wrap !important;
	align-items: center;
	padding: .45rem 1.5rem;
	cursor: pointer;
	color: ${(props) => props.selectedTheme === 'default' ? '#262626 !important;' : '#ffffff;'}

	:active {
		background: none !important;
	}

	:hover {
		background-color: ${(props) => props.selectedTheme === 'default' ? '#dedede;' : '#262626 !important;'}
	}

	p {
		flex: 1;
		text-align: left !important;
		margin: 0;
		color: ${(props) => props.selectedTheme === 'default' ? '#262626 !important;' : '#ffffff !important;'}
	}

	small {
		flex: 1;
		min-width: 100%;
		color: ${(props) => props.selectedTheme === 'default' ? '#262626 !important;' : '#ffffff !important;'}

	}
`
export default DropdownItem