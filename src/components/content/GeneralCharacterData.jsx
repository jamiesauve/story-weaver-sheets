import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

import List from '../ui/List'

import { 
  characterAlignmentAtom,
  characterBackgroundAtom,
  characterClassesAtom,
  characterExperiencePointsAtom,
  characterHeightAtom,
  characterNameAtom,
  characterRaceAtom,
  characterSizeAtom,
  characterTotalLevelSelector,
  characterWeightAtom,
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
  text-align: center;
`

const ItemLabel = styled.span`
  margin-right: 0.6rem;
  font-style: italic;
`

const ItemValue = styled.span`
  font-weight: bold;
`

const GeneralCharacterData = () => {    
  const characterAlignment = useRecoilValue(characterAlignmentAtom)
  const characterBackground = useRecoilValue(characterBackgroundAtom)
  const characterClasses = useRecoilValue(characterClassesAtom)
  const characterExperiencePoints = useRecoilValue(characterExperiencePointsAtom)
  const characterHeight = useRecoilValue(characterHeightAtom)
  const characterName = useRecoilValue(characterNameAtom)
  const characterRace = useRecoilValue(characterRaceAtom)
  const characterSize = useRecoilValue(characterSizeAtom)
  const characterTotalLevel = useRecoilValue(characterTotalLevelSelector)
  const characterWeight = useRecoilValue(characterWeightAtom)

  const characterClassString = (characterClasses.length === 1)
    ? <Row>
      <ItemLabel>
        Class:
      </ItemLabel>
      
      <ItemValue>
        {`${characterClasses[0].class}${characterClasses[0].subclass ? ` (${characterClasses[0].subclass})`: ``}`}
      </ItemValue>
    </Row>
    : <>
      <ItemLabel>
        Classes:
      </ItemLabel>

      <Row>
        <List>
          {
            characterClasses.map((classObject) => {
              if (classObject.subclass) {
                return (
                  <ItemValue
                    key={classObject.class}
                  >
                    {`${classObject.class} (${classObject.subclass}): Level ${classObject.level}`}
                  </ItemValue>
                )
              } else {
                return (
                  <ItemValue
                    key={classObject.class}
                  >
                    {`${classObject.class}: ${classObject.level}`}
                  </ItemValue>
                )
              }
            })
          }
        </List>
      </Row>
    </>

  const isAlignmentUsed = characterAlignment !== "none"
  const areExperiencePointsUsed = characterExperiencePoints !== -1

  return (
    <This>
      <Row>
        <ItemLabel>
          Name:
        </ItemLabel>

        <ItemValue>
          {characterName}
        </ItemValue>
      </Row>
      
      <Row>
      <ItemLabel>
          Race:
        </ItemLabel>

        <ItemValue>
          {characterRace}
        </ItemValue>
      </Row>

      <Row>   
        <ItemLabel>
          Character Level:
        </ItemLabel>

        <ItemValue>
          {characterTotalLevel}
        </ItemValue>
      </Row>

      <br />

      {characterClassString}

      <br />

      <Row>
        <ItemLabel>
          Background:
        </ItemLabel>

        <ItemValue>
          {characterBackground}
        </ItemValue>
      </Row>

      {areExperiencePointsUsed
        ? <Row>
          <ItemLabel>
            Experience Points:
          </ItemLabel>

          <ItemValue>
            {characterExperiencePoints}
          </ItemValue>
        </Row>
        : null
      }

      {isAlignmentUsed
        ? <Row>
          <ItemLabel>
            Alignment:
          </ItemLabel>

          <ItemValue>
            {characterAlignment}
          </ItemValue>
        </Row>
        : null
      }

      <br />

      <Row>
        <ItemLabel>
          Size:
        </ItemLabel>

        <ItemValue>
          {characterSize}
        </ItemValue>
      </Row>

      <Row>
        <ItemLabel>
          Height:
        </ItemLabel>

        <ItemValue>
          {characterHeight}
        </ItemValue>
      </Row>

      <Row>
      <ItemLabel>
          Weight:
        </ItemLabel>

        <ItemValue>
          {characterWeight} lbs
        </ItemValue>
      </Row>

    </This>
  )
}

export default GeneralCharacterData