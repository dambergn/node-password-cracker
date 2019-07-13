'use strict';

const md5 = require('md5');

//constant values to use with password.
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; //26 characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26 characters
const numbers = "0123456789"; //10 characters
const specialCharacters = " !@#$%^&*()"; //10 Characters
const optionalCharacters = "-_=+[]{};:\'\"<>,.?/|`~"; //21 Characters
const similarCharacters = ['o', 'O', '0', 'i', 'j', 'l', 'I', 'S', '$', '5', 'B', '8'];

let password = 'easy';
let hash = '48bb6e862e54f2a795ffc4e541caed4d';

var charset = lowerCase + upperCase;

function crack(value) {
  function toRadix(N, radix) {
    var HexN = "",
      Q = Math.floor(Math.abs(N)),
      R,
      strv = charset,
      radix = strv.length;
    while (true) {
      R = Q % radix;
      HexN = strv.charAt(R) + HexN;
      Q = (Q - R) / radix;
      console.log(HexN);
      if (Q == 0)
        break;
    };
    return ((N < 0) ? "-" + HexN : HexN);
  };
  var start = (new Date()) * 1,
    cracked = false,
    index = 0;
  while (!cracked) {
    if (toRadix(index) == value)
      cracked = true;
    else
      index++;
      // console.log(index);
  };
  console.log(((new Date()) * 1) - start);
};

crack('Easy');