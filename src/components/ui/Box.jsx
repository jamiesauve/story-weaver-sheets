import styled from "styled-components"

import Symbol from './Symbol'

const This = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Body = styled.div`
height: 100%;
width: 100%;
padding: 10px;

border: 1px solid ${props => props.theme.global.borderColor};
border-radius: 5px;
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

const Box = (props) => {
  const {
    Component,
    headerColor,
    symbolValue,
    title,
  } = props;

  return (
    <This className="Box">
      <Header
        headerColor={headerColor}
      >
        <Symbol
          value={symbolValue}
        />

        <span>
          {title}
        </span>
      </Header>

      <Body>
        <Component />
      </Body>
    </This>
  )
}

export default Box;