//extract all the elements by id

const errorBorder="2px solid red";
const successBorder="2px solid green";

$(function(){
let fnameNode=$('#fname');
let mnameNode=$('#mname');
let lnameNode=$('#lname');

let emailNode=$('#emailid');
let ageNode=$('#age');
let teleNode=$('#mobile');
let unameNode=$('#uname');
let passNode=$('#pass');
let cpassNode=$('#c_pass');

let errorNode1=$('#error1');
let errorNode2=$('#error2');
let errorNode3=$('#error3');
let errorNode4=$('#error4');
let errorNode5=$('#error5');
let errorNode6=$('#error6');
let errorNode7=$('#error7');
let errorNode8=$('#error8');
let errorNode9=$('#error9');


fnameNode.blur(()=>validate1());
mnameNode.blur(()=>validate2());
lnameNode.blur(()=>validate3());
emailNode.blur(()=>validate4());
ageNode.blur(()=>validate5());
teleNode.blur(()=>validate6());
unameNode.blur(()=>validate7());
passNode.blur(()=>validate8());
cpassNode.blur(()=>validate9());

$('regForm').submit(()=>validateForm());

});







function validateForm(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();
    let s4=validate4();
    let s5=validate5();
    let s6=validate6();
    let s7=validate7();
    let s8=validate8();
    let s9=validate9();

    return (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9);
    


}



function validate1(){
    let fname=fnameNode.val();
    errorNode1.html("");
    if(fname===''){
        errorNode1.html("First Name is required");
        fnameNode.css('border',errorBorder);
        return false;

    }
    else{
        fnameNode.style.border=successBorder;
        return true;
    }
}
function validate2(){
    mnameNode.css('border',successBorder);;
}
function validate3(){
    let lname=lnameNode.val();
    errorNode3.html("");
    if(lname===''){
        errorNode3.html("last Name is required");
        lnameNode.css('border',errorBorder);
        return false;
    }
    else{
        lnameNode.css('border',successBorder);
        return true;
    }
}

function validate4(){
    let emailName=emailNode.val();
    errorNode4.html("");
    let ss1=emailName.substring(0,emailName.indexOf('@'));
    let ss2=emailName.substring(emailName.indexOf('@')+1);
    console.log(ss1);
    console.log(ss2);
    if(emailName===''){
        errorNode3.html("last Name is required");
        emailNode.css('border',errorBorder);
        return false;
    }
    else if(!emailName.includes('@')){
        errorNode4.html("Email is required ");
        emailNode.css('border',errorBorder);
        return false;

    }else if(ss1===''|| ss2===''){
        errorNode4.html("Invalid email id");
        emailNode.css('border',errorBorder);
        return false;
    }
    else{
        emailNode.css('border',successBorder);
        return true;
    }
}

function validate5(){
    let myage=ageNode.val();
    console.log(typeof myage);
    errorNode5.html("");
    if(myage===''){
        errorNode5.html("Age is not required");
        ageNode.css('border',errorBorder);
        return false;

    }
    else if(parseInt(myage)<0 || parseInt(myage)>110){
        errorNode5.html("Age should be within the range:0-110");
        ageNode.css('border',errorBorder);
        return false;
    }
    else{
        ageNode.css('border',successBorder);
        return true;
    }
}

function validate6(){
    let mobile=teleNode.val();
    let regExp = new RegExp("^[0-9]{10}$");
    errorNode6.html("");
    console.log(regExp.test(mobile));
    if(mobile===''){
        errorNode6.html("Age is not required");
        teleNode.css('border',errorBorder);
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode6.html("Please enter mobile number which is valid");
        teleNode.css('border',errorBorder);
        return false;
    }
    else{
        teleNode.css('border',successBorder);
        return true;
    }
}

function validate7(){
    let usrname= unameNode.val();
    errorNode7.html("");
    if(usrname===''){
        errorNode6.html("username is not required");
        unameNode.css('border',errorBorder);
        return false;
    }
    else if((usrname.length)<6 || (usrname.length)>12){
        errorNode7.html("username should be within 6 and 12");
        unameNode.css('border',errorBorder);
        return false;
    }
    else{
        unameNode.css('border',successBorder);
        return true;
    }
}

function validate8(){
    let pass=passNode.val();
    errorNode8.html("");
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    if(pass===''){
        errorNode8.html("password is not required");
        passNode.css('border',errorBorder);
        return false;
    }
    else if(regExp.test(pass)==false){
            errorNode8.html("Please enter password which is valid");
            passNode.css('border',errorBorder);
            return false;
    }
    else{
        passNode.css('border',successBorder);
        return true;
    }
}   


function validate9(){
    let pass=passNode.val(); 
    let cpass=cpassNode.val();
    errorNode9.html("");
    if(cpass===''){
        errorNode9.html(" confirm password is not required");
        cpassNode.css('border',errorBorder);
        return false;
    }
    else if(cpass!=pass){
            errorNode9.html("both passwords should match");
            cpassNode.css('border',errorBorder);
            return false;
    }
    else{
        cpassNode.css('border',successBorder);
        return true;
    }
}


