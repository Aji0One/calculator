var container=tag("div","class","container");



var calculator=tag("div","class","calculator");



var input=tag("input","type","text");
input.setAttribute("placeholder","0");
input.id="screen";

var buttoncl=tag("button","onclick","Clear()");
buttoncl.innerHTML="Cl";
buttoncl.id="clear";

var buttondl=tag("button","onclick","del()");
buttondl.innerHTML="DEL";
buttondl.id="delet";

var buttonmod=tag("button","onclick","display('%')");
buttonmod.innerHTML="%";
buttonmod.id="mod";

var buttondiv=tag("button","onclick","display('/')");
buttondiv.innerHTML="/";
buttondiv.id="div";

var button7=tag("button","onclick","display('7')");
button7.innerHTML="7";

var button8=tag("button","onclick","display('8')");
button8.innerHTML="8";

var button9=tag("button","onclick","display('9')");
button9.innerHTML="9";

var buttonmul=tag("button","onclick","display('*')");
buttonmul.innerHTML="*";
buttonmul.id="mul";

var button4=tag("button","onclick","display('4')");
button4.innerHTML="4";

var button5=tag("button","onclick","display('5')");
button5.innerHTML="5";

var button6=tag("button","onclick","display('6')");
button6.innerHTML="6";

var buttonsub=tag("button","onclick","display('-')");
buttonsub.innerHTML="-";
buttonsub.id="sub";

var button1=tag("button","onclick","display('1')");
button1.innerHTML="1";

var button2=tag("button","onclick","display('2')");
button2.innerHTML="2";

var button3=tag("button","onclick","display('3')");
button3.innerHTML="3";

var buttonadd=tag("button","onclick","display('+')");
buttonadd.innerHTML="+";
buttonadd.id="add";

var buttondot=tag("button","onclick","display('.')");
buttondot.innerHTML=".";

var buttonzero=tag("button","onclick","display('0')");
buttonzero.innerHTML="0";

var buttoneq=tag("button","onclick","calculate()");
buttoneq.innerHTML="=";
buttoneq.classList.add("equal");

document.onkeyup = (e =>{
    if(e.key == '0' || e.key == 'Num0'){
        dis('0');
    }
    else if( e.key == '1' || e.key == 'Num1'){
        dis('1');
    }else if( e.key == '2'|| e.key == 'Num2'){
        dis('2');
    }else if( e.key == '3' || e.key == 'Num3'){
        dis('3');
    }else if( e.key == '4' || e.key == 'Num4'){
        dis('4');
    }else if( e.key == '5' || e.key == 'Num5'){
        dis('5');
    }else if( e.key == '6' || e.key == 'Num6'){
        dis('6');
    }else if( e.key == '7' || e.key == 'Num7'){
        dis('7');
    }else if( e.key == '8' || e.key == 'Num8'){
        dis('8');
    }else if( e.key == '9' || e.key == 'Num9'){
        dis('9');
    }else if( e.key == '+' || e.key == 'Num+'){
        dis('+');
    }else if( e.key == '-' || e.key == 'Num-'){
        dis('-');
    }else if( e.key == '*' || e.key == 'Num*'){
        dis('*');
    }else if( e.key == '/' || e.key == 'Num/'){
        dis('/');
    }else if( e.key == '%' || e.key == 'Num%'){
        dis('%');
    }else if( e.key == '.' || e.key == 'Num.'){
        dis('.');
    }else if(e.key =='Enter' || e.key == 'NumEnter'){
        cal();
    }
});


calculator.append(input,buttoncl,buttondl,buttonmod,buttondiv,button7,button8,button9,buttonmul,button4,button5,button6,buttonsub,button1,button2,button3,buttonadd,buttondot,buttonzero,buttoneq);


container.append(calculator);

document.body.append(container);

let output=document.getElementById("screen");

function dis(text){
    if(output.innerText == ""){
        output.innerText = text;
    }else if(output.innerText.length<=23){
        output.innerText=write_me.innerText + text;
    }else{
        alert("Digit Limit Exceeded.");
    }
}

function display(num){
    output.value += num;
    
}



function tag(ele, attri, attrival) {
    var element = document.createElement(ele);
    element.setAttribute(attri, attrival);
    return element;
};

function calculate(){
    try{
        output.value= eval(output.value);
        
    }
    catch(err){
        alert("Invalid Syntax");
    }
}

function cal(){
    
    output.innerText=eval(output.innerText.value);
    
}

function Clear(){
    output.value="";
}

function del(){
    output.value= output.value.slice(0,-1);
}