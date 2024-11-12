const btns = document.querySelectorAll(".btn-num");
const resetBtn = document.querySelector(".reset-btn");
const equalBtn = document.querySelector(".equal-btn");
const delBtn = document.querySelector(".del-btn");
const inputScreen = document.querySelector(".result-bar")


//buttonlara erişmek 
function handleClick() {
  inputScreen.innerText += this.innerText;
}


for (const btn of btns) {
  btn.addEventListener("click",handleClick)
}

//reset butonu için
function handleReset() {
  inputScreen.innerText = " ";
}

resetBtn.addEventListener("click",handleReset);


//del butonu için

function handleDel() {
  inputScreen.innerText = inputScreen.innerText.substring(0,inputScreen.innerText.length-1);
}

delBtn.addEventListener("click",handleDel);

// özel karakterlerin kural dısı işlem yapmaması için

const specialChars = ["+", "-", "*", "/", "."];

function isSpecial () {
  const lastChars = inputScreen.innerText.substr(-1);
  return specialChars.includes(lastChars);
}


//eval işlemi için

function handleCalc() {
  if(isSpecial()){
   alert("invalid!")
  } else {
    inputScreen.innerText = eval(inputScreen.innerText);
  }
}

equalBtn.addEventListener("click",handleCalc);


// theme değiştirmek için

firstTheme.addEventListener("click", function(){
  document.querySelector("body").classList.remove("light-mode");
  document.querySelector("body").classList.remove("purple-mode");
});

secondTheme.addEventListener("click", function(){
  document.querySelector("body").classList.add("light-mode");
  document.querySelector("body").classList.remove("purple-mode");
});

thirdTheme.addEventListener("click", function(){
  document.querySelector("body").classList.add("purple-mode");

});

