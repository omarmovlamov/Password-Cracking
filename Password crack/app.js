let password = prompt(
  "This is a trial software to crack a password. Before starting, please enter the password and wait for it to be added to LocalStorage."
);
localStorage.setItem(1, password);

function setInputValue(number) {
  let localpassword = localStorage.getItem(1);
  let password;
  let valueresult = document.querySelector("#result").value;
  const allvalue = (document.querySelector("#result").value =
    valueresult + number);

  if (valueresult.length == 4) {
    clear = document.querySelector("#result").value = "";
  }
}

let passwordCrack = () => {
  for (let i = 1; i <= 9999; i++) {
    let tamlisayi = String(i).padStart(4, "0");
    let localpassword = localStorage.getItem(1);
    if (localpassword == tamlisayi) {
      alert(`Password: ${localpassword}`);
      break;
    } else if (localpassword == "0000") {
      alert(`Password: 0000`);
      break;
    }
  }
};

let okCheck = () => {
  let valueresult = document.querySelector("#result").value;
  let localpassword = localStorage.getItem(1);
  if (
    valueresult == localpassword &&
    valueresult.length == localpassword.length
  ) {
    window.location.href = "/success/index.html";
  } else {
    window.location.href = "/error/index.html";
  }
};
