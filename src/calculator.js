const Calculator = (firstNum, secondNum, oper) => {
   switch (oper) {
      case "+":
         return firstNum + secondNum;
      case "-":
         return firstNum - secondNum;
      case "/":
         return firstNum / secondNum;
      case "x":
         return firstNum * secondNum;
   }
};

const CalculateFromList = (listOfNumbers, listOfOpperator) => {
   var ans = 0;
   for (let index = 0; index < listOfNumbers.length; index++) {
      if (index == 0) {
         ans = listOfNumbers[index];
      } else {
         ans = Calculator(ans, listOfNumbers[index], listOfOpperator[index - 1]);
      }
   }
   return ans;
};

const SplitString = (string, listOfOperators) => {
   const listOfNumbers = [];
   var remainingString = string;
   for (let index = 0; index <= listOfOperators.length; index++) {
      if (index < listOfOperators.length) {
         let splitString = remainingString.split(listOfOperators[index]);
         listOfNumbers.push(parseFloat(splitString[0]));
         remainingString = "";
         for (let i = 1; i < splitString.length; i++) {
            remainingString += splitString[i] + listOfOperators[index];
         }
      } else {
         listOfNumbers.push(parseFloat(remainingString));
      }
   }
   return listOfNumbers;
};

const ModifyList = (listOfNumbers, listOfOperation) => {
   const modfiedList = listOfNumbers;
   const listOfModOp = listOfOperation;
   for (let index = 0; index < listOfModOp.length; index++) {
      if (listOfModOp[index] == "/" || listOfModOp[index] == "x") {
         let result = Calculator(modfiedList[index], modfiedList[index + 1], listOfModOp[index]);
         modfiedList[index] = result;
         modfiedList.splice(index + 1, 1);
         listOfModOp.splice(index, 1);
         index -= 1;
      }
   }
   return {
      modfiedList: modfiedList,
      listOfModOp: listOfModOp,
   };
};

export const Result = (string, listOfOperation) => {
   var listOfNumber = SplitString(string, listOfOperation);
   const { modfiedList, listOfModOp } = ModifyList(listOfNumber, listOfOperation);
   const result = CalculateFromList(modfiedList, listOfModOp);
   return result;
};
