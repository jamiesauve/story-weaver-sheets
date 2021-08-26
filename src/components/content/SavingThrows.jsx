import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import List from '../ui/List';
import ProficiencySymbol from '../ui/ProficiencySymbol';

import { abilityScores } from '../../constants/abilityScores';
import RollableListItem from '../ui/RollableListItem';

import { 
  characterSavingThrowsAtom,
  characterSavingThrowModifiersAsArraySelector,
} from '../../state/atoms/characterSavingThrowsAtom';

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  height: 100%;
`

const ProficientHeading = styled.span`
  font-size: 0.7rem;
  position: relative;
  left: -6.2rem; 
`

const Row = styled.div`
  display: flex;
  height: 3rem;
`

const SavingThrows = () => {
  const characterSavingThrowModifiers = useRecoilValue(characterSavingThrowModifiersAsArraySelector);
  const characterSavingThrowProficiencies = useRecoilValue(characterSavingThrowsAtom);

  const listItems = abilityScores.map((abilityScore, index) => {
  const bonus = characterSavingThrowModifiers[index];

  return (
    <Row
      key={abilityScore.label}
    >
      <ProficiencySymbol
        hasProficiency={characterSavingThrowProficiencies.includes(abilityScore.name)}
      />

      <RollableListItem 
        bonus={bonus}
        command={`d20${bonus < 0 ? bonus : `+${bonus}`}`}
        label={abilityScore.label}
        />
      </Row>
    )
  })

  return (
    <This className="SavingThrows">
      <ProficientHeading>
        PROFICIENT
      </ProficientHeading>

      <List
        fillContainerProportionately
      >
        {listItems}
      </List>
    </This>
  )
}

export default SavingThrows;