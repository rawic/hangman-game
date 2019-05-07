const generateWords = async wordsNumber => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordsNumber}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("An error occurred. Words can not be downloaded.");
  }
};

export default generateWords;
