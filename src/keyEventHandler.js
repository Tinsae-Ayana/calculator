import { Result } from "./calculator";

export const DeleteKey = () => {
   const text = document.getElementById("screen").innerText;
   document.getElementById("screen").innerText = text.substring(0, text.length - 1);
};

export const ResetKey = (setopeList) => {
   document.getElementById("screen").innerText = "";
   setopeList((previous) => []);
};

export const NumberKey = (e) => {
   const text = document.getElementById("screen").innerText;
   document.getElementById("screen").innerText = text + e.currentTarget.innerText;
};

export const ArthOpeKey = (e, setopeList) => {
   const text = document.getElementById("screen").innerText;
   const operator = e.currentTarget.innerText;
   document.getElementById("screen").innerText = text + operator;
   setopeList((previous) => previous.concat([operator]));
};
export const EqualKey = (opeList, setopeList) => {
   const text = document.getElementById("screen").innerText;
   const result = Result(text, opeList);
   document.getElementById("screen").innerText = result;
   setopeList((previous) => []);
};
