//palindrome

let str = "madam knows anna well "
let str1 = "", str2 = ""
  for (t of str) {
    if (t != " ") {
      str2 = str2 + t
      str1 = t + str1
    }
    else {
      if (str1 == str2) console.log(str1)
      str1 = ""
      str2 = ""
    }
  }


//fizzbuzz


for(i=1; i<=100; i++)
  {
  
    if (i%15==0)
       {
        console.log("FizzBuzz")
       }
       else if (i%3==0)
       {
         console.log("Fizz")
       }
       else if (i%5==0)
       {
        console.log("Buzz")
       }
       else
       {
         console.log(i)
       }
  }
