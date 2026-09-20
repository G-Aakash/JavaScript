
const findMaxAndMinNumberFromTheArray = (arrNum) => {
  let max = arrNum[0];
  let min = arrNum[0];
  
  for(let i = 0; i < arrNum.length; i++) {
    // console.log(arrNum[i], max)
    if(arrNum[i] > max) {
      max = arrNum[i];
    } else if(arrNum[i] < min){
      min = arrNum[i];
    }
  }
}
const arrayWithNumbers = [3,1,4,7,2];
findMaxAndMinNumberFromTheArray(arrayWithNumbers)
