import styled from 'styled-components'

import ScrollableList from '../ui/ScrollableList'

import { abilityScores } from '../../constants/abilityScores';
import RollableListItem from '../ui/RollableListItem';

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
`

const AbilityScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: .6rem;
`

const AbilityScoreValue = styled.div`
  font-size: 3rem;
  font-weight: bold;

`

const AbilityScoreLabel = styled.div`
  margin-top: -1rem;
  font-size: 1rem;
`

const AbilityScores = () => {
  const listItems = abilityScores.map((abilityScore, index) => (
    <Row
      key={abilityScore.label}
    >
      <AbilityScoreBox>
        <AbilityScoreValue>
          {10}
        </AbilityScoreValue>

        <AbilityScoreLabel>
          {abilityScore.abbr}
        </AbilityScoreLabel>
      </AbilityScoreBox>

      <RollableListItem 
        bonus={index - 3}
        command="GO CRAZY"
        label={abilityScore.label}
        />
      </Row>
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