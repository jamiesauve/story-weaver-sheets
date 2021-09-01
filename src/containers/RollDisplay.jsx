import { 
  useEffect, 
  useRef,
  useState,
} from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { currentRollAtom } from '../state/atoms/currentRollAtom'

const This = styled.section`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 330px;
  height: 330px;

  max-width: 75vw;

  background: ${props => props.theme.global.background};
  color: ${props => props.theme.global.color};

  border-radius: 200px;
  box-shadow: 0 0 30px ${props => props.theme.global.color};

  display: none; // toggled below
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span:nth-child(1) {
    font-size: 2rem;
    margin-bottom: -1rem;
  }
  
  & > span:nth-child(2) {
    font-size: 10rem;
    ${props => props.isTextRed ? `color: red;`: ``}
    ${props => props.isTextGreen ? `color: green;`: ``}
  }

  & > span:nth-child(3) {
    font-size: 2rem;
    margin-top: -1rem;
  }

  opacity: 0;
  transition: opacity 0.3s linear;

  &.visible {
    opacity: 1;
    transition: opacity 0s linear;
  }
  
  &.rendered {
    display: flex;
  }
`

const RollDisplay = () => {
  const currentRoll = useRecoilValue(currentRollAtom)
  const [isDisplayVisible, setIsDisplayVisible] = useState(false);
  const [isCurrentlyRendered, setIsCurrentlyRendered] = useState(false);

  const isVisibleTimeout = useRef(null);
  const isRenderedTimeout = useRef(null);

  useEffect(() => {
    if (
      currentRoll !== null 
      && isDisplayVisible === false
      && isCurrentlyRendered === false
      ) {
      setIsDisplayVisible(true)
      setIsCurrentlyRendered(true)

      isVisibleTimeout.current = setTimeout(() => {
        setIsDisplayVisible(false)
      }, 600)

      isRenderedTimeout.current = setTimeout(() => {
        setIsCurrentlyRendered(false)
      }, 900)
    }
    else if (currentRoll !== null) {
      clearTimeout(isVisibleTimeout.current);
      clearTimeout(isRenderedTimeout.current);

      setIsDisplayVisible(true)
      setIsCurrentlyRendered(true)

      isVisibleTimeout.current = setTimeout(() => {
        setIsDisplayVisible(false)
      }, 600)

      isRenderedTimeout.current = setTimeout(() => {
        setIsCurrentlyRendered(false)
      }, 900)
    }
  }, [
    currentRoll,
  ])

  return (
    <This 
      className={`RollDisplay ${isDisplayVisible ? `visible`: ``} ${isCurrentlyRendered ? `rendered`: ``}`}
      isTextRed={currentRoll?.isNat1}
      isTextGreen={currentRoll?.isNat20}
    >
      <span>
        {currentRoll?.displayLabels?.top}
      </span>

      <span>
        {currentRoll?.value}
      </span>
      
      <span>
        {currentRoll?.displayLabels?.bottom}
      </span>
    </This>
  )
}

export default RollDisplay