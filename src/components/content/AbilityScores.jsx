import styled from 'styled-components'

import ScrollableList from '../ui/ScrollableList'

import { abilityScoresAsLabels } from '../../constants/abilityScores';
import RollableListItem from '../ui/RollableListItem';

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AbilityScores = () => {
  const listItems = abilityScoresAsLabels.map((abilityScoreLabel, index) => (
    <RollableListItem 
      bonus={index - 3}
      command="GO CRAZY"
      label={abilityScoreLabel}
      key={abilityScoreLabel}
    />
  ))

  return (
    <This>
      <ScrollableList>
        {listItems}
      </ScrollableList>
    </This>
  )
}

export default AbilityScores