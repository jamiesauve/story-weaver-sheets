export const parseSnakeCaseToUpperCaseLabel = (stringInSnakeCase) => {
  const words = stringInSnakeCase.split("_");

  const wordsInUpperCase = words.map((word) => {
    return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
  })

  return wordsInUpperCase.join(" ");
}