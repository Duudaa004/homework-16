// homework 13

// 1. შევქმნათ ყველა მარტივი ტიპის ცვლადი რაც ვისწავლეთ
var userName = "Duda";
let age = 23;
const hasHobbies = true;

// 2. არითმეტიკული ოპერაციები მიმატება, გამოკლება, გაყოფა, გამრავლება ყველაფერი რაც ვისწავლეთ

const getSum = (a, b) => {
    let sum = a + b;
    console.log(sum);
};
getSum(1,2);

const getSubstraction = (a, b) => {
    let substraction = a - b;
    console.log(substraction);
};
getSubstraction(1,2);

const getMultiply = (a, b) => {
    let multiply = a * b;
    console.log(multiply);
}
getMultiply(2,3);

const getDivide = (a, b) => {
    let divide = a / b;
    console.log(divide);
}
getDivide(6, 2);

// 3. სტრინგების კონკატენაცია + ით და სტრინგების კონკატენაცია `ბექტიკებით`

let person = 30;
let item = 20;
console.log(" I said that I needed "  + item + " laptops for " + person + " employees ");
console.log(` I said that I needed ${item} laptops for ${person} employees `);

// 4. მოცემულა მართკუთხედი სიგრძე ცვლადი = 7 და სიგანე = 5 (შექმენით 2 ცვლადი) გამოთვალეთ მართკუთხედის ფართობი ამ 2 ცვლადის გამოყენებით

let width = 7;
let length = 5;
let area = width * length;
console.log(area);

// homework 14 

// 1.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი, console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი

const nums = [1, 2, 3, 4, 5];
let numsSum = 0;
for (let i = 0; i < nums.length; i++) {
    numsSum += nums[i];
}
console.log(numsSum);

// 2.შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი რომელსაც აქვს შემდეგი ველები (properties): name, age, address.

const info = [
    {
        name: "nugo",
        age: 23,
        adress: "Tbilisi",
    },
    {
        name: "saba",
        age: 24,
        adress: "Samtredia",
    },
    {
        name: "dato",
        age: 25,
        adress: "USA",
    },
];

// 3. console.log ში გამოიტანეთ 3 სტრინგი "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)", My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"

console.log(`My name is ${info[0].name}`);
console.log(`My age is ${info[0].age}`);
console.log(`My adress is ${info[0].adress}`);

// 4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  1 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"

if (info[1].age < 19) {
    console.log("I am a teenager");
} else {
    console.log("I am an adult");
};

// 5.  შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი 

const number = [11, 22, 12, 24, 30];
for(let i = 0; i < number.length; i++) 
{
    console.log(number[i]);
};

// 6. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით ,0 არის კვირა ,1 არის ორშაბათი და ასე შემდეგ, 0-6 მდე რიცხვს აბრუნებს სადაც 6 არის შაბათი .

switch ( new Date().getDay()) {
    case 0:
        currentDay = "Sunday";
        break;
    case 1: 
        currentDay = "Monday";
        break;
    case 2: 
        currentDay = "Tuesday";
        break;
    case 3: 
        currentDay = "Wednesday";
        break;
    case 4: 
        currentDay = "Thursday";
        break;
    case 5: 
        currentDay = "Friday";
        break;
    case 6: 
        currentDay = "Saturday";
        break;
};
console.log(currentDay);

// homework 15

// 1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i

for (let i = 0; i < 100; i++) {
     console.log(i)
};

// 2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i

let i = 0;
while (i < 50) {
    console.log(i);
    i +=1;
};

// 3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ.

const name = ["Duda", "John", "Nick", "george", "Anna"];
console.log(name);
name.pop();
console.log(name);
name.shift();
console.log(name);
name.unshift("nana");
console.log(name);
name.push("temo");
console.log(name);


// 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია

const empty = [];
for (let i = 1; i < 10000; i++) {
    empty.push(i * i);
}
console.log(empty);

// 5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი

const numArray =  [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numArray.length; i++) 
{
    sum += numArray[i];
}
console.log(sum);

// homework 16

// work 1

const numbersOfThree = (num) => (num % 3 === 0) ? "true" : "false";

console.log(numbersOfThree(12));
console.log(numbersOfThree(11));

// work 2

function getSymbol(currency) {
    switch(currency)
    {
        case "USD":
            return "$";
        case "EUR":
            return "€";
        case "GEL":
            return "ლ";
        default: 
          return getSymbol;
    }
}

console.log(getSymbol("GEL"));
console.log(getSymbol("USD"))
console.log(getSymbol("EUR"))
console.log(getSymbol("RUB"))

// work 3

function changeCase(paragraph) {
    return paragraph.toUpperCase();
}

let paragraph = "my name is joe";
console.log(changeCase(paragraph));

// work 4

// აქ ვერაფერი ვერ გავიგე :დ :/

// work 5 

const evenNumsArray = (filterNums) => filterNums.filter(filterNums => filterNums % 2 === 0);

const numsArray = [1, 2, 3, 4, 5, 6];

console.log(evenNumsArray(numsArray));

// work 6

const persons = [
    {
        name: "Duda",
        location: "Tbilisi",
    },
    {
        name: "Nugo",
        location: "Samtredia",
    },
    {
        name: "saba",
        location: "Poti",
    },
    {
        name: "Nini",
        location: "Rustavi",
    }
];

const names = (objects, name) => objects.find(objects => objects.name === name);
const findName = names(persons, "Duda");
console.log(findName);

