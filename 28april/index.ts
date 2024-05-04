//q1

console.log("Hello,World");

//q2

let temperature=19;
if(temperature<20)
    {
        console.log("its cold");
    }

//q3

let Apples=10;
let applesGivenAway = 3;
let applesLeft = Apples - applesGivenAway;

console.log(`After giving away ${applesGivenAway} apples, you have ${applesLeft} left.`);


//q4

let FirstName="Momin";
let LastName="Shahzad";

let fullName = `${FirstName} ${LastName}`;

console.log(`Full Name: ${fullName}`);

//q5

let Result=7;
if(Result> 3 ) 
{
    console.log("Yes");
}
else {
    console.log("No");
}


///q6

function calculateArea(radius: number)
{
    const pi = Math.PI;
    return pi * radius * radius;
}

// Example usage
let radius
let area = calculateArea(5);
console.log(`The area of the circle with radius ${radius} is ${area}`);


//q7

for(let i=1;i<=50;i++)
    {
        if(i%3==0)
        {
                console.log("Fuzz");
        }
        else if(i%5==0)
        {
            console.log("Buzz");

        }
        else
        {
            console.log(i);

        }
    }

//q8

let temperature1:number[]=[23,45,21,5,7];
let Hightemperature=temperature1[0];
for(let i=0;i<5;i++)
    {
        if (temperature1[i]>Hightemperature)
            {
                Hightemperature=temperature1[i];
            }

    }
    console.log(Hightemperature);

//q9


function CheckAge(Age:number)
{
    if (Age >= 18) 
        {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

}
CheckAge(20);




//q10


function Check(array:number[])
{
    let count=0;
    for(let i=0;i<array.length;i++)
        {
            if(array[i]>0)
                {
                    count++;
                }
        }
    return count;
}

let array=[2,5,7,99,-15,-3,-6,50];
let positive=Check(array);
console.log('The postive numbers are :' ,positive );

//q11

function checkword(words:string[])
{
    let words2=[];
    for(let i=0;i<words.length;i++)
        {
            if(words[i][0]=='a')
                {
                    words2.push(words[i]);
                }
        }
        return words2;
}

let words=['ali','leo','waao','amd'];
let check=checkword(words);
console.log('words starting with a is: ',check);


//q12

let fruits = ['apple', 'banana', 'orange', 'mango'];
let secondToLast;

for (let i = 0; i < fruits.length; i++) 
{
    if (i == fruits.length - 2) 

        {
            secondToLast = fruits[i];
            break;
        }
}

console.log('Second to last element:', secondToLast);

//q13


function sqaure(num:number[])
{
    let num1=[];
    for(let i=0;i<num.length;i++)
        {
            num1.push(num[i]*num[i]);

        }
        return num1;
}
let num=[3,5,7,9,11,33];
let sqaurenum=sqaure(num);
console.log('sqaure number of an array is:', sqaurenum );

//q14

function reverseArray(arr:number[] )
{
    let reversedArray= [];
    for (let i = arr.length - 1; i >= 0; i--) 
        {
            reversedArray.push(arr[i]);
        }
    return reversedArray;
}

let arr = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(arr);
console.log('Reversed array:', reversedArray);


//q15

function analyzeScores(scores: number[]) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let aboveMaxCount = 0;
    let belowMinCount = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            aboveMaxCount++;
        }
        

        if (scores[i] < minScore) {
            minScore = scores[i];
            belowMinCount++;
        }
    }

    console.log('Number of times score exceeded maximum score:', aboveMaxCount);
    console.log('Number of times score fell below minimum score:', belowMinCount);
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
analyzeScores(scores);

//q16

function remove(array1: any[])
{
    let newArray = [];
    for (let i = 0; i < array1.length; i++) 
        {
            if (array1[i]) 
                {
                    newArray.push(array1[i]);
                }
        }
    return newArray;
}

let array1= [false, null, 0, "", undefined, NaN, 1, "hello"];
let filteredArray = remove(array1);
console.log('Filtered array:', filteredArray);

//q17

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatenatedArray = [];

for (let i = 0; i < arr1.length; i++) 
    {
        concatenatedArray.push(arr1[i]);
    }

for (let i = 0; i < arr2.length; i++)
    {
        concatenatedArray.push(arr2[i]);
    }

console.log('Concatenated array:', concatenatedArray);

//q18

function sumOfElements(array: number[], type: string)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if ((type === 'even' && array[i] % 2 === 0) || (type === 'odd' && array[i] % 2 !== 0)) {
            sum += array[i];
        }
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Sum of even elements:', sumOfElements(numbers, 'even'));
console.log('Sum of odd elements:', sumOfElements(numbers, 'odd'));

//q19

function findIndex(num1: number[], element: number)
 {
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] == element) {
            return i; 
        }
    }
    return -1; 
}

let num1 = [1, 2, 3, 4, 5];
console.log('Index of 3:', findIndex(num1, 3)); 
console.log('Index of 6:', findIndex(num1, 6)); 


//q20

function findSmallestNumber(num2: number[]){
      let smallest = num2[0];
    for (let i = 1; i < num2.length; i++) {
        if (num2[i] < smallest) {
            smallest = num2[i];
        }
    }
    return smallest;
}

let num2 = [3, 1, 4, 1, 5, 6, 5, 3];
console.log('Smallest number:', findSmallestNumber(num2));

//q21

function calculateProduct(numb: number[]) {
  
    let product = 1;
    for (let i = 0; i < numb.length; i++) {
        product *= numb[i];
    }
    return product;
}

let numb = [1,2,3,4,5];
console.log('Product of all elements:', calculateProduct(numb));

//q22

function filterByLength(word: string[], n: number){
    let filteredArray= [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > n) {
            filteredArray.push(word[i]);
        }
    }
    return filteredArray;
}

let word = ['apple', 'banana', 'orange', 'pear', 'kiwi'];
let n = 4;
console.log('Words longer than', n, 'characters:', filterByLength(word, n));

//q23
function findDuplicates(array: number[]){
    let duplicates: number[] = [];
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate && !duplicates.includes(array[i])) {
            duplicates.push(array[i]);
        }
    }
    console.log('Duplicates:', duplicates);
}

let num3 = [1, 2, 3, 4, 5, 3, 6, 7, 2, 8, 9];
findDuplicates(num3);

//q24

function incrementAll(array: number[]) {
    let result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 1);
    }
    return result;
}

let num4 = [1, 2, 3, 4, 5];
console.log('Array after incrementing each element:', incrementAll(num4));


//q25

function countOccurrences(array: number[], element: number)
{
    let count = 0;
    for (let i = 0; i < array.length; i++) 
        {
            if (array[i] === element) 
                {
                    count++;
                }
        }
    return count;
}

let num5 = [1, 2, 3, 4, 5, 3, 6, 7, 8, 9];
let element = 3;
console.log(`Number of occurrences of ${element}:`, countOccurrences(num5, element));

//q26

function isSorted(array: number[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

let sortedArray = [1, 2, 3, 4, 5];
let unsortedArray = [1, 3, 2, 4, 5];

console.log('Is the sorted array sorted?', isSorted(sortedArray)); 
console.log('Is the unsorted array sorted?', isSorted(unsortedArray)); 


//q27

function formatNames(names: string[]){
    let formattedNames = '';

    for (let i = 0; i < names.length; i++) {
        formattedNames += names[i];
        if (i == names.length - 2) {
            formattedNames += ' and ';
        } else if (i != names.length - 1) {
            formattedNames += ', ';
        }
    }

    return formattedNames;
}

let names = ['Ali', 'Ahmed', 'shah', 'Umer'];
console.log(formatNames(names)); 

//q28

function convert(temperatures: number[]): void {
    let celsiusTemperatures = [];

    for (let i = 0; i < temperatures.length; i++) {
        let celsius = (temperatures[i] - 32) * 5 / 9;
        celsiusTemperatures.push(celsius);
    }

    console.log('Fahrenheit Temperatures:', temperatures);
    console.log('Celsius Temperatures:', celsiusTemperatures);
}

let fahrenheitTemperatures = [32, 68, 86, 104];
convert(fahrenheitTemperatures);


//q29

function minMaxAverage(num6: number[]): { min: number, max: number, average: number } {
    let min = num6[0];
    let max = num6[0];
    let sum = 0;

    for (let i = 0; i < num6.length; i++) {
        if (num6[i] < min) {
            min = num6[i];
        }
        if (num6[i] > max) {
            max = num6[i];
        }
        sum += num6[i];
    }

    let average = sum / num6.length;

    return { min, max, average };
}

let num6 = [2, 4, 6, 8, 10];
let result = minMaxAverage(num6);
console.log(result);

///q30

function swapElements(array: string[], index1: number, index2: number){
   
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

let arr4 = ['a', 'b', 'c', 'd', 'e'];
console.log('Before swap:', arr4);
swapElements(arr4, 1, 3);
console.log('After swap:', arr4);


//q31

function countCharacter(str: string, char: string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count++;
        }
    }
    return count;
}

let str = 'hello';
let char = 'l';
console.log(`Number of times '${char}' appears in '${str}':`, countCharacter(str, char)); 

//q32

let todoList: { task: string, completed: boolean }[] = [
    { task: 'Complete assignment', completed: true },
    { task: 'Buy books', completed: true },
    { task: 'Go for a GYM', completed: false }
];

function IncompleteTasks(list: { task: string, completed: boolean }[]){
    for (let i = 0; i < list.length; i++) {
        if (!list[i].completed) {
            console.log(list[i].task);
        }
    }
}

IncompleteTasks(todoList);

//q33

function sortNumbers(numbers: number[])
{
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

let num7 = [5, 2, 9, 1, 5, 6];
console.log('Sorted numbers:', sortNumbers(num7));


//q34

function reverse(array: number[]) 
{
    let reverseArr=[]
    for (let i = array.length - 1; i >= 0; i--) 
        {
            reverseArr.push(array[i]);
        }

    return reverseArr;
}

let num8 = [1, 2, 3, 4];

let reverseArr=reverse(num8);
console.log(`Reverse Array of ${num8} : `,reverseArr);

//q35

// take the operator input
const operator = prompt('Enter operator (+, -, * or / ): ');

    const number1Input = prompt('Enter first number: ');
    const number2Input = prompt('Enter second number: ');

        const number1 = parseFloat(number1Input);
        const number2 = parseFloat(number2Input);

        let res;

        // using if...else if... else
        if (operator == '+') {
            res = number1 + number2;
        }
        else if (operator == '-') {
            res = number1 - number2;
        }
        else if (operator == '*') {
            res = number1 * number2;
        }
        else if (operator == '/') {
            res = number1 / number2;
        }
        else {
            console.log('Invalid operator');
        }

        // display the result
        console.log(`${number1} ${operator} ${number2} = ${res}`);
    