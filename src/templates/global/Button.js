import { variant } from '@xstyled/system'
import styled, { css } from '@xstyled/styled-components'

const Button = styled.button`
  ${variant({
    default: 'default',
    variants: {
      default: css`
        background-color: primaryColor;
        display: inline-block;
        font-weight: 400;
        color: altTextColor;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        padding: .375rem .75rem;
        margin: 15px 0;
        font-size: 1rem;
        line-height: 1.5;
        border-color: transparent;
        border-radius: defaultRadius;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      `
    }
  })}
`
export default Button