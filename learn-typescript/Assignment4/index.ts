// Q1 Declare a variable named greeting with the string value "Hello, World!" and print it.

let Greeting: string = "Hello,World";
console.log(Greeting);

// Q2 Define two variables with integer values and calculate their sum, difference, product, and quotient.

let num1 = 5,
  num2 = 10;
console.log("Sum = ", num1 + num2);
console.log("difference = ", num1 - num2);
console.log("product = ", num1 * num2);
console.log("Quotient = ", num1 / num2);

// Q3 Swap the values of two variables without using a third variable.
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log("a =", a);
console.log("b =", b);

// Q4 This applies to TypeScript. Create a string variable and try changing its type
// let message: string = 4; //this will result in a type error

//Q5 Use the modulus operator to find the remainder of two numbers.

let c = 2,
  d = 5;
console.log("module = ", c % d);

//Q6 Increment a variable's value by 1 using two different methods.
let counter = 0;
//Method1
counter++
console.log(counter);
//Method2
counter=counter+1;
console.log(counter);

//Q7 Given three boolean variables, write expressions for AND, OR, and NOT gates.
let e = true,
  f = false,
  g = true;
// And Gate
console.log("And gate = ",e && f);
console.log("And gate = ",e && g);
console.log("And gate = ",g && f);
// OR Gate
console.log("OR gate = ",e || f);
console.log("OR gate = ",e || g);
console.log("OR gate = ",g || f);
// NOT gate
console.log("NOT gate = ",!e);
console.log("NOT gate = ",!g);
console.log("NOT gate = ",!f);

// Q8 Show examples of using compound assignment operators.
let num3=10;
num3+=5;
console.log(num3);
num3-=20;
console.log(num3);
num3*=20;
console.log(num3);
num3/=20;
console.log(num3);

//Q9 Write a program to check if a number is even or odd.
let num4=5;
if (num4 % 2== 0)
{
    console.log(`${num4} is even `);
}
else 
{
    console.log(`${num4} is odd `);
}

//Q10 Check if a person is eligible to vote.
let age =19;
if(age>=18)
{
    console.log("it is eligible")

}
else
{
    console.log("it is not eligible");

}

//Q11 Assign a grade based on a numerical score.
let score=70;
if(score>=90)
{
    console.log("Grade A ");
}
else if(score>=80)
{
    console.log("Grade B ");

}
else if(score>=70)
{
    console.log("Grade C ");

}
else if(score>=60)
{
    console.log("Grade D ");

}
else if(score>=50)
{
    console.log("Grade E ");

}
else(score<=50)
{
    console.log("Grade F ");

}

//Q12  Find the maximum of three numbers.
let x=1, y=2, z=3;
if(x>y && x>z)
{
    console.log("X is maximum ");
}
else if(y>x && y>z)
{
    console.log("Y is maximum ");
}
else
{
    console.log("Z is maximum");
}

//Q13 Check if a given year is a leap year.
let year=2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) 
{
    console.log(`${year} is a leap year`);
} else 
{
    console.log(`${year} is not a leap year`);
}

// Q14 Write a program that converts temperature from Fahrenheit to Celsius.

let fahrenheit=150;
let celsius = (fahrenheit - 32) * (5/9);
console.log("celsius is + ",celsius);

//Q15 Check if a number is positive, negative, or zero.

let number=5;
if (number > 0) 
{
    console.log(`${number} is positive.`);
} 
else if (number < 0) 
{
    console.log(`${number} is negative.`);
} 
else
 {
    console.log(`${number} is zero.`);
}

//Q16 Write a program that prints the multiplication table of a given number up to 10.
let n=3;

for (let i = 1; i <= 10; i++) 
{
    let r = n * i;
    console.log(`${n} * ${i} = ${r}`);
}
