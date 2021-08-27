import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import List from '../ui/List'

import { 
  characterAlignmentAtom,
  characterBackgroundAtom,
  characterClassesAtom,
  characterExperiencePointsAtom,
  characterNameAtom,
  characterRaceAtom,
  characterTotalLevelSelector,
} from '../../state/atoms/generalCharacterDataAtom'

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Row = styled.div`
  display: flex;
`

const GeneralCharacterData = () => {    
  const characterAlignment = useRecoilValue(characterAlignmentAtom)
  const characterBackground = useRecoilValue(characterBackgroundAtom)
  const characterClasses = useRecoilValue(characterClassesAtom)
  const characterExperiencePoints = useRecoilValue(characterExperiencePointsAtom)
  const characterName = useRecoilValue(characterNameAtom)
  const characterRace = useRecoilValue(characterRaceAtom)
  const characterTotalLevel = useRecoilValue(characterTotalLevelSelector)

  const characterClassesList = characterClasses.map((classObject) => {
    if (classObject.subclass) {
      return (
        `${classObject.class} (${classObject.subclass}): Level ${classObject.level}`
      )
    } else {
      return (
        `${classObject.class}: ${classObject.level}`
      )
    }
  })

  const isAlignmentUsed = characterAlignment !== "none"
  const areExperiencePointsUsed = characterExperiencePoints !== -1

  return (
    <This>
      <Row>
        Name: {characterName}
      </Row>
      
      <Row>
        Race: {characterRace}
      </Row>

      <Row>
        Character Level: {characterTotalLevel}
      </Row>

      Classes:

      <Row>
        <List>
          {characterClassesList}
        </List>
      </Row>

      <Row>
        Background: {characterBackground}
      </Row>

      {areExperiencePointsUsed
        ? <Row>
          Experience Points: {characterExperiencePoints}
        </Row>
        : null
      }

      {isAlignmentUsed
        ? <Row>
          Alignment: {characterAlignment}
        </Row>
        : null
      }

    </This>
  )
}

export default GeneralCharacterData