function multiply() {
  let res = 1;
  if (arguments.length === 0) {
    console.log(arguments.length);
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      res *= arguments[i];
    }
    console.log(res);
  }
}

//multiply(2, 4, 5, 6);
multiply(2, 3, 5);

//
function reverseString(str) {
  let revStr = "";
  if (str) {
    for (let i = str.length; i--; ) {
      revStr += str[i];
    }
  }

  console.log(revStr);
}

reverseString("test");
reverseString("");
reverseString(null);
reverseString(undefined);
reverseString();
