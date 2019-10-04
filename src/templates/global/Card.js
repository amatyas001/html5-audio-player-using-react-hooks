import styled from '@xstyled/styled-components'

const Card = styled.div`
  background-color: secondaryColor !important;
	border-radius: defaultRadius;
  border: none !important;
  text-align: center;
  margin: 0 0 15px 0;

  .card-body {
    background-color: secondaryColor;
    position: relative;
    color: textColor;
    border-radius: defaultRadius;
    transition: all 0.3s;
    min-height: 275px;

    p {
      text-align: left;

      &:last-child {
        margin: 0;
      }
    }

    pre {
    	background-color: backgroundColor;
    	padding: defaultPadding;
    	color: textColor;
      padding: 15px;
    }

    button {
      margin: 5px 0;
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

    .post-comments {
      text-align: center;
      padding: 15px;
      border-bottom: 1px solid #dedede;

      &:last-child {
        border: none;
        padding: 15px 15px 0 15px;
      }

      p {
        text-align: center;
      }
    }
  }
`
export default Card