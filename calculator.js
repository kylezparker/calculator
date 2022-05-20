function calculation(){
    //document.write("calculating...");
    //document.getElementById("results").innerHTML="CALCULATING";
    let num1=Number(prompt("num1"));
    let num2=Number(prompt("num2"));
    sum(num1,num2);
    sub(num1,num2);
    mult(num1,num2);
    div(num1,num2);
    //sum result, can add others in same instructiion using <p>
    document.getElementById("results").innerHTML=`<p>${num1} + ${num2} = ${sum(num1,num2)}</p><p>${num1} - ${num2} = ${sub(num1,num2)}</p><p>${num1} * ${num2} = ${mult(num1,num2)}</p><p>${num1} / ${num2} = ${div(num1,num2)}</p>`;
    //add subs multi and division results
}


function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
