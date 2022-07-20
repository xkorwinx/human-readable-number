module.exports = function toReadable (number) {
    if ( number === 0 ) return "zero";

    let answer = "";
    let n100 = "hundred";
    let space = " ";
    let nums = {
      '0': "",
      '1': "one",
      '2': "two",
      '3': "three",
      '4': "four",
      '5': "five",
      '6': "six",
      '7': "seven",
      '8': "eight",
      '9': "nine",
      '10': "ten",
      '11': "eleven",
      '12': "twelve",
      '13': "thirteen",
      '14': "fourteen",
      '15': "fifteen",
      '16': "sixteen",
      '17': "seventeen",
      '18': "eighteen",
      '19': "nineteen",
      '20': "twenty",
    }
    let ten = {
      '2':  "twenty",
      '3': "thirty",
      '4': "forty",
      '5': "fifty",
      '6': "sixty",
      '7': "seventy",
      '8': "eighty",
      '9': "ninety",
    }
    let str1 = number.toString();
    //console.log(str1);
    function ans ( str) {
    if (str.length > 2 ) {
      answer = answer + nums[str[0]] + space + n100;
      str = str.slice(1, str.length);
    //console.log(str);
      return ans(str);
    }
    //console.log(str, str.length,str[0]);
    if((str.length > 1) && (str[0]==0)) {str = str.slice(1, str.length);}
                                         //console.log(str)}
    if ((str.length > 1)&&(str[0] >=2)) {
      answer = (answer) ?  answer + space + ten[str[0]] : answer + ten[str[0]];
      str = str.slice(1, str.length);
      return ans(str);
    }
    if ((str.length ===1) && (str[0]==0)) {str = str.slice(1, str.length);}
    if ((str.length >= 1)) {return answer = (answer) ? answer + space + nums[str]: answer + nums[str];}
    if(!(str.length)) return answer
    }
    return ans(str1);
}
