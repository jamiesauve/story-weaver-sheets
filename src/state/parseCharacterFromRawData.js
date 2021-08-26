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
      strength: parseInt(data[2][0]),
      dexterity: parseInt(data[2][1]),
      constitution: parseInt(data[2][2]),
      intelligence: parseInt(data[2][3]),
      wisdom: parseInt(data[2][4]),
      charisma: parseInt(data[2][5]),
    },
    savingThrows: data[3],
    skills: data[4],
    proficiencyBonus: parseInt(data[5]),
  }

  return character
}

export default parseCharacterFromRawData