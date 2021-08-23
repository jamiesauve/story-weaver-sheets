import styled from 'styled-components'

import ScrollableList from '../ui/ScrollableList'

import { abilityScoresAsLabels } from '../../constants/abilityScores';

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AbilityScores = () => {
  return (
    <This>
      <ScrollableList>
        {abilityScoresAsLabels}
      </ScrollableList>
    </This>
  )
}

export default AbilityScores