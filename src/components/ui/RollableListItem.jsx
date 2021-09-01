import styled from "styled-components";

import RollButton from './RollButton'

const This = styled.div`
    margin: 0.6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `

  const BonusLabel = styled.div`
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme.global.highlight};

    border-radius: 1rem;
    border: 1px solid ${props => props.theme.global.borderColor};

    font-weight: bold;    
  `

  const ItemLabel = styled.div`
    margin: 0 0.6rem;

    font-weight: bold;
  `

const RollableListItem = (props) => {
  const {
    bonus,
    command,
    displayLabels,
    label,
  } = props;

  return (
    <This className="RollableListItem">
      <BonusLabel>
        {bonus}
      </BonusLabel>

      <ItemLabel>
        {label}
      </ItemLabel> 
      <RollButton
        command={command}
        displayLabels={displayLabels}
      />
    </This>
  )
}

export default RollableListItem