import styled from '@xstyled/styled-components'

const Body = styled.div`
  color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#ffffff;'}

  p {
    color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#ffffff;'}
  }
`
export default Body