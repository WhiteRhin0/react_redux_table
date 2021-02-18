function getRandomInt() {
  return Math.floor(Math.random() * 899) + 100;
}

export const createArrayOfRandom = (col, row) => {
  let mas = [];

  for (let i = 0; i < row; i++) {
    mas[i] = [];
  
    for (let j = 0; j < col; j++){
        mas[i][j] = getRandomInt();
    }  
  }

  return mas;
}
