import styled from "styled-components"

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
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.headerColor}; // later, can add shade() to adjust these and maybe add a background filter
`

const Box = (props) => {
  const {
    Component,
    headerColor,
    title,
  } = props;

  return (
    <This>
      <Header
        headerColor={headerColor}
      >
        {title}
      </Header>

      <Body>
        <Component />
      </Body>
    </This>
  )
}

export default Box;