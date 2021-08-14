let emailnode, passnode, cpassnode, namenode1, errornode8, errornode9,errornode10,errornode11,formNode, formNode1;

$(function(){
  emailnode=$("#email");
  errornode8=$("#error8");

  passnode=$("#pwd");
  errornode9=$("#error9");

  namenode1=$("#name");
  errornode10=$("#error10");

  cpassnode=$("#cpwd");
  errornode11=$("#error11");

  formNode=$("#log");
  formNode1=$("#log1")

emailnode.blur(function(){
  validate8();
});

passnode.blur(function(){
    validate9();
});

namenode1.blur(function(){
  validate10();
});

cpassnode.blur(function(){
  validate11();
});

formNode.submit(function(){
  return validateForm();
});

formNode1.submit(function(){
  return validateForm1();
});
});

function validate8(){
  errornode8.html("");
    let email1=emailnode.val();
    let ss=email1.substring(email1.indexOf("@")+1);
    if(email1==""){
        errornode8.html("This field is required");
        emailnode.css({border:"2px solid red"});
        return false;
    }
    else if(!email1.includes("@") || ss=="" ){
        errornode8.html("Please put valid email id");
        emailnode.css({border:"2px solid red"});
        return false;
    }
    else{
        emailnode.css({border:"2px solid green"});
        return true;
    }
}

function validate9(){
    errornode9.html("");
    let password=passnode.val();
    console.log(password);
    let regexp=new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])");
    if(password==""){
        errornode9.html("This field is required");
        passnode.css({border:"2px solid red"});
        return false;
    }
    else if(regexp.test(password)==false){
        errornode9.html("Password should be alphanumeric with atleast one special symbol from @#$%^&-+=()");
        passnode.css({border:"2px solid red"});
        return false;
    }
    else{
        passnode.css({border:"2px solid green"});
        return true;
    }
}

function validate10(){
  errornode10.html("");
 let firstname=namenode1.val();
  if(firstname==""){
      errornode10.html("This field is required");
      namenode1.css({border: "2px solid red"});
      return false;
  }
  else if(firstname.length<2){
      errornode10.html("First name should contain atleast 2 Character");
      namenode1.css({border:"2px solid red"});
      return false;
  }
  else{
      namenode1.css({border:"2px solid green"});
      return true;
  }
}

function validate11(){
  errornode11.html("");
  let password=passnode.val();
  let cpassword=cpassnode.val();
  if(cpassword==""){
      errornode11.html("This field is required");
      cpassnode.css({border:"2px solid red"});
      return false;
  }
  else if(cpassword!=password){
      errornode11.html("Password does not match");
      cpassnode.css({border:"2px solid red"});
      return false;
  }
  else{
  cpassnode.css({border:"2px solid green"});
  return true;
  }
}

function validateForm(){
  let state8= validate8();
  let state9= validate9();

  return (state8 && state9 );
}

function validateForm1(){
  let state8= validate8();
  let state9= validate9();
  let state10= validate10();
  let state11= validate11();

  return (state8 && state9 && state10 && state11);
}