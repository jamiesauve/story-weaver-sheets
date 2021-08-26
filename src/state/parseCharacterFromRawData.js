const parseCharacterFromRawData = ({ rawCharacterData }) => {
  const lines = rawCharacterData.split("\n");

  const data = lines.map((line) => {
    const breakpoint = line.indexOf(': ');
    const value = line.substr(breakpoint + 2);

    return value.split(", ");
  })
  
  const character = {
    commandName: data[0][0],
    name: data[1].join(" "),
    abilityScores: {
      str: parseInt(data[2][0]),
      dex: parseInt(data[2][1]),
      con: parseInt(data[2][2]),
      int: parseInt(data[2][3]),
      wis: parseInt(data[2][4]),
      cha: parseInt(data[2][5]),
    },
    savingThrows: data[3],
    skills: data[4],
    proficiencyBonus: parseInt(data[5]),
  }

  return character
}

export default parseCharacterFromRawData