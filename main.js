
// // Question 1==================================================

// // let age = prompt("What is your age")
// // if(age <= 20 && age >= 10){
// //     alert('your are lies between 10 and 20')
// // }


// // Question 2==================================================

// // let alphabetSet = prompt("What day is today?");
// // // alphabetSet.toUpperCase();

// // switch(alphabetSet){
// //     case "sunday":
// //         alert("Yes today is Sunday")
// //         break;

// //    case "monday":
// //         alert("Yes today is Monday")
// //         break;

// //     case "tuesday":
// //          alert("Yes today is tuesday")
// //         break;   
		
// //      case "wednesday":
// //          alert("Yes today is Wednesday")
// //          break;

// //     case "thursday":
// //         alert("Yes today is Thursday")
// //         break;

// //     case "friday":
// //         alert("Yes today is Friday")
// //         break;

// //      case "saturday":
// //         alert("Yes today is Saturday")
// //         break;

// //     default:
// //         alert("keep first letter of the to small case");
// // }

// // Questio 3==================================================

// // const number1 = prompt("Enter a number")
// // console.log(number1)
// // let answer ;
// // let result;



// // function checkDivisibleOrNot(num1){
// //     if(num1 % 2 === 0 && num1 % 3 === 0){
// //       answer = num1;
// //     console.log("The answer is ",answer);
// //        return answer;
// //     }
// // }

// //  result = checkDivisibleOrNot(number1)
// // console.log(  "The result is ",result )


// // Question 4==================================================

// // let age = prompt("Enter your age");

// // age >=18 ? console.log("You can drive"): console.log("You cannot drive")

// // let age = prompt("Enter somthing: ");
// // age = Number.pa
// // console.log(age);

// // let object = {
// //     apple : "Apple",
// //     banana : 10 ,
// //     carrot : 15 ,
// //     donut : 20 
// // }

// //  for(let i in object){
// //     console.log(i);
// //  }

// //  for(let i of ''){
// //     console.log(i);
// //  }


// // New QUESTIONS


// // function createAccount (value1,value2) {

// //     let user = prompt("Enter your name");
// //     let age = prompt("Enter Age");
// //     let place = prompt ("Enter your born place")

// //     age >= 18 && place === "kannur" ? alert(`Hello ${user } you are welcome`) : alert(`Hello ${user} your age is below 18 ,its only of students above 18 ${ value1} ${ value2}`)
   

// //  }
// // let value1 = "Thank you for signIn" , value2 = "Hope you enjoy our contents"

// // setTimeout(createAccount,1000 ,value1,value2)










// //  function sayHi(phrase, who) {
// //     alert( phrase + ', ' + who );
// //   }
  
// //   setTimeout(sayHi, 1000, "Hello", "John");




// // newQuestio ========================

// // let obje = {
// //     leo : 78,
// //     rolex : 76,
// //     dilli : 79,
// //     vikram : 77
// // }


// // for(let i = 0; i< Object.keys(obje).length; i++){
   

// //     console.log("Marks of " ,Object.keys(obje)[i],"are",obje[Object.keys(obje)[i]]);
// // }

// // new Question ====================================

// // let obje = {
// //         leo : 78,
// //         rolex : 76,
// //         dilli : 79,
// //         vikram : 77
// //     }
// //     for(let i in obje){
// //         console.log(`The marks of ${i} are ${obje[i]}`)
// //     }

// // new Question ====================================


// // let number = prompt("Enter a number");
// // correctNumber = 23;
// // while(number != correctNumber){
// //     console.log("Correct again");
	
// // }

// // prompt("Enter again")


// // new Question ====================================

// // const result = (num1, num2, num3) =>{
	
// // return ( num1 + num2 + num3)/result.length;
// // }
// // console.log(`The results are ${result(10, 10, 10)}`)

// // string concat method================================

// // let firstName = "Anukeerth"
// // let lastName = "EK"
// // console.log(firstName.concat("'s last name is ",lastName))


// // let checkerOne = "Anukeerth"

// // let checkerTwo = "Anukeerth Is a good Boy"

// // console.log(checkerTwo.toUpperCase())

// // let checkerOne = "please give us Rs 1000"

// // console.log(checkerOne.slice(17))
// // console.log(typeof checkerOne)
// // let number = (Number.parseInt(checkerOne.slice(17)))

// // console.log(typeof number)

// // [Array methods==========================

// // let arrayOne = [2,3,4,55,6,7]
 
// // delete arrayOne[3]
// // console.log(arrayOne)

// // let arrayOne = ['a','n','u','k','e','e','r','t','h'];
// // let arrayTwo = ["he is good"]

// // let newArray = arrayOne.concat(arrayTwo)
// // console.log(newArray)

// // forEach ==============================
// // let  arrayOne = {
// //     value : "Anu",
// //     value2 : "keerth",

	
// // }
// // arrayOne.forEach((element)=>{
// //     console.log(element)
// // })


// // MAP METHOD================

// // let container = [1,3,5,6,8]

// //  container.map((element,index,container)=>{
// //     return element + index;
// //     console.log(element ,index,container)
// // })
// // console.log(value.toString())

// // Question -1 ======================


// // let input = prompt("Enter the number");
// // input = Number.parseInt(input);

// // let result1 = arr.push(input);

// // let arr = [1,2,3,4,5]

// // // console.log(arr)


// // do{
// //     a = prompt("Enter the number");
// //     a = Number.parseInt(a);
// //     arr.push(a)
// // }
// // while(a != 0){
// //     console.log(arr)
// // }

// // Question3=============

// // let arr = [10,30,39,29,20]

// // let value = arr.filter((x)=>{
// //     return x%10 === 0
// // })
// // console.log(value)

// // Question4============= 

// // let number = [] = prompt("Enter numbers")
// // let arr = [];
// // arr.push(number*number)
// // console.log(arr)

// // Question5============= 

// // let arr1 = [1,2,3,4,5]

// //  let receiver1 = arr1.reduce((value1,value2)=>{
// //     return value1*value2;
// //  })
// //  console.log("REDUCE IS",receiver1)
// // // =================================================================
// //  let arr2 = [1,2,3,4,5]

// //  let receiver2 = arr2.map((value1,value2)=>{
// //     return value1*value2;
// //  })
// //  console.log("MAP IS",receiver2)
// // //  ==============================================================

// //  let arr3 = [1,2,3,4,5]

// //  let receiver3 = arr3.filter((value1,value2)=>{
// //     return value1*value2;
// //  })
// //  console.log("FILTER IS",receiver3)


// // let arr = [2,4,6,5,10]

// // function checkEvenOrNot(value1,value2,value3){

// //   return value1 - value2 + value3;

// // }

// // let result = arr.map(checkEvenOrNot)
// // console.log(result)
// // let result ;
// // result = arr.filter((value,index,array)=>{
// //  console.log(array)
// //  console.log(array +index)
// //    console.log( value + index + array)
// //  })//arr.filter((value,index,array)=>{
// //     return value + index + array
// // })

// //    let result = arr.reduce((acc,curr)=>{
// //        if(curr < acc){
// // 		acc = curr
		
// // 	}
// // 	return acc
// //     },10)

// //     console.log(result)\


// // let attendence = [
// // 	{name: "Anukeerth", age : 21},
// // 	{name : "Google ",age :40},
// // 	{name: "Microsoft",age : 40},
// // 	{name :"Amazon",age : 21}	
// // ]

// // let result = attendence.reduce(acc,curr)
// // let arr = [1,2,3,4,5,6]
// // let result = arr.reduce((value1,value2)=>{
// // 	return value1 * value2;
// // })
// // console.log(result)


// // ===================project START=====================================



// // let userInput = prompt("Enter your age")


// // // negative age checker is here=====================

// // function negativeAgeChecker(){
// //     if(userInput < 0){
// //         console.error("invalid age")
// //     }
// // }
// // // age checker is here=============================

// // function ageChecker(checker){

// //     if(userInput > 18 || checker > 18){
// //         alert('OMG you can drive')
// //     }
// //     else if(userInput < 0 ){
// //         negativeAgeChecker()
// //         console.clear();
// //     }

// //     else{
// //         alert('OMG you can\'t drive')
// //     }
// // }
// // ageChecker();


// // let confirmer =  confirm("Do you want to enter the age again")

// // if(confirmer){
// //     let crossChecker = prompt("Enter age again")

// //     if(crossChecker > 0){
// //         ageChecker(crossChecker);
// //     }
// // }

// // ===================project END=====================================




// // let receiver = prompt("Enter your desired background color")
// // // let colorFinder = receiver.valueOf

// // // let div = document.getElementById('main-id')

// // // div.style = 'background-color: receiver'

// // document.body.style.backgroundColor = document.getElementById('color').value; 









// // receiver = Number.parseInt(receiver)

// // let age = prompt("Enter your age")

// // if(age > 4){
// //     location.href = "https://google.com"
// // }

// // let color  = prompt('enter the color')
// // let bgColor  = prompt('enter the color')
// // document.body.style.background = color;
// // document.body.style.color = bgColor;

// document.getElementsByTagName('ul')[0].firstElementChild.style.color = "red"
// let ul = document.getElementById('ul')
// ul.lastElementChild.style.color = "red";
// ul.firstElementChild.style.color = "red";



// Array.from(document.getElementsByTagName('li')).forEach(element => {
//     element.style.background = "cyan"
// });
