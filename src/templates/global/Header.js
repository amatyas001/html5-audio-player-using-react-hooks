import styled from '@xstyled/styled-components'

const Header = styled.div`
  position: relative;
  text-align: center;
  margin: 15px 0;

  h1 {
  	color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#ffffff;'}

    a {
      color: ${(props) => props.selectedTheme === 'default' ? '#262626;' : '#ffffff;'}

      &:hover {
        color: #3ba30d;
      }
    }
  }

  .card {

    .card-body {
      min-height: 1px;

      p {
        text-align: center;
      }
    }
  }
`
export default Header