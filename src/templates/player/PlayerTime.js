import styled from '@xstyled/styled-components'

const PlayerTime = styled.span`
  fontSize: 1rem;
  color: #262626;
  float: ${(props) => props.placement ? props.placement : 'none'}
  width: auto;
  margin: 0;
`
export default PlayerTime