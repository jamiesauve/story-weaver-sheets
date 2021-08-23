import styled from "styled-components"

const This = styled.div`
  display: flex;
  flex-direction: column;
  
  overflow: scroll;
`

const ListItem = styled.div`
  margin: .3rem 0;
`

const ScrollableList = (props) => {
  console.log('children', props.children)
  return (
    <This>
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