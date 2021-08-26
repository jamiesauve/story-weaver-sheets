import styled from "styled-components"

const This = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${props => props.fillContainerProportionately
    ? `
      height: 100%;
      overflow: scroll;
    `
    : ``
  }
`

const ListItem = styled.div`
  margin: .3rem 0;
`

const ScrollableList = (props) => {
  return (
    <This 
      className="ScrollableList"
      fillContainerProportionately={props.fillContainerProportionately}
    >
      {props.children.map((item, index) => (
        <ListItem
          key={index}
        >
          {item}
        </ListItem>
      ))}
    </This>
  )
}

export default ScrollableList;