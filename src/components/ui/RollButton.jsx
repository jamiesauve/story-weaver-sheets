import styled from "styled-components"

const This = styled.div`
  height: 2rem;
  width: 2rem;
`

const D10Background = styled.div`
  position: absolute;
  height: 2rem;
  width: 2rem;
`

const D10Image = styled.div`
  position: absolute;
  height: 2rem;
  width: 2rem;
  background-image: ${props => props.theme.rollButton.imageUrl};
  background-repeat: no-repeat;

  &:hover {
    background-image: ${props => props.theme.rollButton.imageUrlOnHover};
  }
`

const RollButton = (props) => {
  return (
    <This>
      <D10Background />

      <D10Image
        onClick={() => console.log(props.command)}
      />
    </This>
  )
}

export default RollButton