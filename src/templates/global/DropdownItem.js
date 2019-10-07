import styled from '@xstyled/styled-components'

const DropdownItem = styled.div`
	display: flex !important;
	flex-wrap: wrap !important;
	align-items: center;
	padding: .45rem 1.5rem;
	cursor: pointer;
	color: ${(props) => props.selectedTheme === 'default' ? '#262626 !important;' : '#ffffff;'}

	:active {
		background: none;
	}

	:hover {
		background-color: ${(props) => props.selectedTheme === 'default' ? '#dedede;' : '#262626;'}
	}

	p, small {
		flex: 1;
		text-align: left !important;
		margin: 0;
	}

	small {
		flex: 1;
		min-width: 100%;

	}

	p:nth-child(2) {
		text-align: right !important;
	}
`
export default DropdownItem