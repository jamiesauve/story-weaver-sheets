// adapted from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors

function shade(colorWithHashTag, percentValue) {
  if (!colorWithHashTag) return null;
  
  const color = colorWithHashTag.slice(1)

  // not sure why this part has to be a thing, and not going to put the time
  // into figuring it out. Maybe if it starts breaking.
  const percent = (0 > percentValue)
  ? ((percentValue + 10) >= 0)
    ? -1
    : percentValue + 10 
  : percentValue

  const isShortHand = color.length === 3  

  const RedValue = isShortHand
    ? parseInt(color.substring(0,1),16)
    : parseInt(color.substring(0,2),16)
  
  const GreenValue = isShortHand
    ? parseInt(color.substring(1,2),16)
    : parseInt(color.substring(2,4),16)
  
   const BlueValue = isShortHand
    ? parseInt(color.substring(2,3),16)
    : parseInt(color.substring(4,6),16)

    let R = parseInt(RedValue * (100 + percent) / 100)
    let G = parseInt(GreenValue * (100 + percent) / 100)
    let B = parseInt(BlueValue * (100 + percent) / 100)

    R = (R<255) ? R : 255  
    G = (G<255) ? G : 255  
    B = (B<255) ? B : 255  

  const RR = !isShortHand && (R.toString(16).length === 1)
    ? "0"+R.toString(16)
    : R.toString(16)
  const GG = !isShortHand && (G.toString(16).length === 1)
    ? "0"+G.toString(16)
    : G.toString(16)
  const BB = !isShortHand && (B.toString(16).length === 1)
    ? "0"+B.toString(16)
    : B.toString(16)

  return "#"+RR+GG+BB
}

export default shade