var a,b,c;

a = prompt("enter the first number");
b = prompt("enter second number");
c = prompt("enter third number");

if((a>b) && (a>c)){
    alert("a is bigger than b and c");
}
else{

    if((b>c) && (b>a)){
        alert("b is greater than a and c");
    }
    else{
        alert("c is greater than a and b");
    }
}
