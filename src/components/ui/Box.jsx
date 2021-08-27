import { 
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components"

import Symbol from './Symbol'

const This = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.headerColor}; // later, can add shade() to adjust these and maybe add a background filter

  & > span {
    margin-left: .6rem;
  }
`

const Body = styled.div`
flex-grow: 1;
height: ${props => props.remainingHeight}px;

width: 100%;
padding: 10px;

border: 1px solid ${props => props.theme.global.borderColor};
border-radius: 5px;
`

const Box = (props) => {
  const [remainingHeight, setRemainingHeight] = useState(0)
  const boxRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    if (boxRef.current !== null && headerRef.current !== null) {
      const boxHeight = boxRef.current.clientHeight
      const headerHeight = headerRef.current.clientHeight

      setRemainingHeight(boxHeight - headerHeight - 20) // padding in Body
    }
  }, [
    boxRef,
    headerRef,
  ])

  const {
    Component,
    headerColor,
    symbolValue,
    title,
  } = props;

  return (
    <This 
      className="Box"
      ref={boxRef}
    >
      <Header
        headerColor={headerColor}
        ref={headerRef}
      >
        <Symbol
          value={symbolValue}
        />

        <span>
          {title}
        </span>
      </Header>

      <Body 
        className="BoxBody"
        remainingHeight={remainingHeight}
      >
        <Component />
      </Body>
    </This>
  )
}

export default Box;