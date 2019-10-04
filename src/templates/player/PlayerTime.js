import styled from '@xstyled/styled-components'

const PlayerTime = styled.span`
  font-size: 1rem;
  color: #262626;
  float: ${(props) => props.placement ? props.placement : 'none'}
  width: auto;
  margin: 0;
  min-height: 25px;
`
export default PlayerTime