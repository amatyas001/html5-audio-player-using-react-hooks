import { variant } from '@xstyled/system'
import styled, { css } from '@xstyled/styled-components'

const Hyperlink = styled.div`
  ${variant({
    default: 'default',
    variants: {
      default: css`
        margin: 15px 0;
      `
    }
  })}
`
export default Hyperlink