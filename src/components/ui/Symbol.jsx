import styled from "styled-components";

const This = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SymbolText = styled.div`
  position: relative;
  top: ${props => props.verticalAdjustment};

  font-family: 'Nexa Rust Extras', sans-serif;
  font-size: 3rem;
  line-height: 3rem;
`

// symbols: https://www.cdnfonts.com/nexa-rust-extras.font
// height adjustments (Varies by symbol):
const downOne = [
  "u", //ship's wheel
];

const upOne = [
  "A", // badge
]

const Symbol = (props) => {
  const {
    value,
  } = props;

  let verticalAdjustment = `-0.6rem`;

  if (upOne.includes(value)) {
    verticalAdjustment = `-0.7rem`;
  } else if (downOne.includes(value)) {
    verticalAdjustment = `-0.5rem`;
  }

  return (
    <This>
      <SymbolText
        verticalAdjustment={verticalAdjustment}
      >
        {value}
      </SymbolText>
    </This>
  )
}

export default Symbol