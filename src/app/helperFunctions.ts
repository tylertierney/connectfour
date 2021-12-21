export const checkVertically = (
  column: number,
  square: number,
  playerValue: number,
  gameState: number[][]
) => {
  if (square >= 3) {
    return false;
  }
  for (let k = 0; k < 4; k++) {
    if (gameState[column][square + k] !== playerValue) {
      return false;
    }
  }
  return true;
};

export const checkHorizontally = (
  column: number,
  square: number,
  playerValue: number,
  gameState: number[][]
) => {
  if (column > 3) {
    return false;
  }
  for (let k = 0; k < 4; k++) {
    if (gameState[column + k][square] !== playerValue) {
      return false;
    }
  }
  return true;
};

export const checkDiagUpRight = (
  column: number,
  square: number,
  playerValue: number,
  gameState: number[][]
) => {
  if (column > 3) {
    return false;
  }

  for (let k = 0; k < 4; k++) {
    if (gameState[column + k][square - k] !== playerValue) {
      return false;
    }
  }

  return true;
};

export const checkDiagDownRight = (
  column: number,
  square: number,
  playerValue: number,
  gameState: number[][]
) => {
  if (column > 3) {
    return false;
  }

  for (let k = 0; k < 4; k++) {
    if (gameState[column + k][square + k] !== playerValue) {
      return false;
    }
  }

  return true;
};
