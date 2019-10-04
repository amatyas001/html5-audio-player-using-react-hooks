import styled from '@xstyled/styled-components'

const Header = styled.div`
  position: relative;
  text-align: center;
  margin: 15px 0;

  h1 {
  	color: textColor;

    a {
      color: textColor;

      &:hover {
        color: primaryColor;
      }
    }
  }

  // i, svg {
  //   position: absolute;
  //   top: 15px;
  //   right: 15px;
  //   cursor: pointer;
  //   transition: all 0.3s;

  //   &:hover {
  //     color: primaryColor;
  //   }
  // }

  i.active,
  svg.active {
    color: primaryColor;
  }

  .nav {
    .nav-item {
      .nav-link {
        i, svg {
          position: relative;
          top: 0;
          right: 0;
        }
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