import { useCallback } from 'react'

import styled from "styled-components";

import Symbol from "./Symbol";

const This = styled.div`
  height: 100%;
  min-height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

const SymbolContainer = styled.div`
  position: relative;
  top: 0.15rem;
`

const ExpertiseSymbolContainer = styled.div`
  & > div {
    position: relative;
    top: 0.8rem;
  }

  & > span {
    position: relative;
    top: -0.8rem;
    font-size: 0.6rem;
  }
`

const ProficiencySymbol = (props) => {
  const {
    hasExpertise,
    hasProficiency,
  } = props;

  const getSymbol = useCallback(() => {
    if (hasExpertise) {
      return (
        <ExpertiseSymbolContainer>
          <Symbol value="A" />
          
          <span>
            EXPERT
          </span>
        </ExpertiseSymbolContainer>
      )
    }
    else if (hasProficiency) {
      return (
        <SymbolContainer>
          <Symbol value="A" />
        </SymbolContainer>
      )
    }

    return null
  }, [
    hasExpertise,
    hasProficiency,
  ])

  return (
    <This className="ProficiencySymbol">
      {getSymbol()}
    </This>
  )
}

export default ProficiencySymbol