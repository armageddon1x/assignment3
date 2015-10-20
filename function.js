    //Part I

    // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

    function square_number(num){
        console.log("The result of squaring the number "+num+" is "+num*num);
        return num*num;
    }

    square_number(5);
    square_number(10);

    // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

    function half_number(num){
        console.log("Half of "+num+" is "+num/2);
        return num/2;
    }

    half_number(5);
    half_number(10);

    // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

    function percent(num1, num2){
        var per=(num1*100)/num2;
        console.log(num1+" is "+per+" percent of "+num2);
        return per;
    }

    percent(20,100);
    percent(5,19);

    // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    //     Bonus: Round the result so there are only two digits after the decimal.

    function circle_area(rad){
        var area= 2*Math.PI*rad;
        console.log("The area for a circle with radius "+rad+" is "+area.toFixed(2));
        return area;
    }

    circle_area(5);
    circle_area(10);

    // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
    //     Take half of the number and store the result.
    //     Square the result of #1 and store that result.
    //     Calculate the area of a circle with the result of #2 as the radius.
    //     Calculate what percentage that area is of the squared result (#3).

    function all_in_one(num){
        console.log("all in one function");
        var half=half_number(num);
        var square=square_number(num);
        var area=circle_area(half);
        var per=percent(area, square);
    }

    all_in_one(10);
    all_in_one(20);



//****************************************************************************

//Part II:

// 1) Count down from 10 to 1, and then say "blast off!"

// a) with a for loop

// b) with a while loop

// 2) Use a loop (your choice - for or while) to find the first multiple of 23 greater than 1000

var i=10;
var j=10;

//for loop blast off
for(i;i>=0;i--){
    console.log("FOR");
    console.log("Countdown: "+i);

    if(i===0){
        console.log("Blast off!");
    }
}

//while loop blast off
while(j>=0){
    console.log("WHILE");
    console.log("Countdown: "+j);

    if(j===0){
        console.log("Blast off!");
    }

    j--;
}

//for loop for finding first multiple
for(var x=1000;x<2000;x++){
    if(x%23===0){
        console.log("first multiple of 23 over 1000 is: "+x);
        break
    }
}