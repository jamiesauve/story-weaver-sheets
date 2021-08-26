import styled from 'styled-components'
import { useRecoilValue } from "recoil"

import ScrollableList from '../ui/ScrollableList';
import ProficiencySymbol from '../ui/ProficiencySymbol';

import RollableListItem from '../ui/RollableListItem';

import { skills } from '../../constants/skills';
import { 
  characterSkillsAtom,
  characterSkillModifiersAsArraySelector,
} from "../../state/atoms/characterSkillsAtom"

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

const Skills = () => {
  const characterSkillProficiencies = useRecoilValue(characterSkillsAtom)
  const characterSkillModifiers = useRecoilValue(characterSkillModifiersAsArraySelector)

  const listItems = skills.map((skill, index) => {
    const bonus = characterSkillModifiers[index];

    return (
      <Row
        key={skill.label}
      >
        <ProficiencySymbol
          hasProficiency={characterSkillProficiencies.includes(skill.name)}
        />

        <RollableListItem 
          bonus={bonus}
          command={`d20${bonus < 0 ? bonus : `+${bonus}`}`}
          label={skill.label}
          />
        </Row>
    )
  })

  return (
    <This className="Skills">
      <ProficientHeading>
        PROFICIENT
      </ProficientHeading>

      <ScrollableList
        fillContainerProportionately
      >
        {listItems}
      </ScrollableList>
    </This>
  )
}

export default Skills