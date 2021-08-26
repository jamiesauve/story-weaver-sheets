import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import List from '../ui/List'

import { abilityScores } from '../../constants/abilityScores';
import RollableListItem from '../ui/RollableListItem';

import { 
  characterAbilityScoresAsArraySelector,
  characterAbilityScoreModifiersAsArraySelector,
 } from '../../state/atoms/characterAbilityScoresAtom'

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
  const characterAbilityScores = useRecoilValue(characterAbilityScoresAsArraySelector);
  const characterAbilityScoreModifiers = useRecoilValue(characterAbilityScoreModifiersAsArraySelector);

  const listItems = abilityScores.map((abilityScore, index) => {
    const bonus = characterAbilityScoreModifiers[index];
    
    return (
      <Row
        key={abilityScore.label}
      >
        <AbilityScoreBox>
          <AbilityScoreValue>
            {characterAbilityScores[index]}
          </AbilityScoreValue>

          <AbilityScoreLabel>
            {abilityScore.abbr.toUpperCase()}
          </AbilityScoreLabel>
        </AbilityScoreBox>

        <RollableListItem 
          bonus={bonus}
          command={`d20${bonus < 0 ? bonus : `+${bonus}`}`}
          label={abilityScore.label}
          />
        </Row>
    )
  })

  return (
    <This>
      <List>
        {listItems}
      </List>
    </This>
  )
}

export default AbilityScores