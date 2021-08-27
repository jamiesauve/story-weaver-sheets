const parseCharacterFromRawData = ({ rawCharacterData }) => {
  const lines = rawCharacterData.split("\n");

  const data = lines.map((line) => {
    const breakpoint = line.indexOf(': ');
    const value = line.substr(breakpoint + 2);

    return value.split(", ");
  })

  const classesWithLevels = data[3].map((classString) => {
    const args = classString.split(" ");

    const classData = {};
    classData.class = args[0];

    if (isNaN(parseInt(args[1]))) {
      classData.subclass = args[1];
      classData.level = parseInt(args[2])
    } else {
      classData.level = parseInt(args[1])
    }

    return classData;
  })

  const totalLevel = classesWithLevels.reduce((aggr, classData) => {
    return aggr + classData.level ?? 0
  }, 0)
  
  const character = {
    commandName: data[0][0],
    name: data[1].join(" "),
    race: data[2][0],
    classesWithLevels,
    totalLevel,
    background: data[4][0],
    alignment: data[5][0],
    experiencePoints: parseInt(data[6][0]),
    abilityScores: {
      strength: parseInt(data[7][0]),
      dexterity: parseInt(data[7][1]),
      constitution: parseInt(data[7][2]),
      intelligence: parseInt(data[7][3]),
      wisdom: parseInt(data[7][4]),
      charisma: parseInt(data[7][5]),
    },
    savingThrows: data[8],
    skills: data[9],
    proficiencyBonus: parseInt(data[10]),
  }

  console.log({ character })

  return character
}

export default parseCharacterFromRawData