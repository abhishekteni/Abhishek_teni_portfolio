
const contactForm = document.querySelector("#contact-form");
let user_name=document.getElementById('name');
let subject=document.getElementById('Subject');
let email=document.getElementById('email');
let message=document.getElementById('message');
contactForm.addEventListener('submit',(e)=>{
     e.preventDefault(); //avoid page refresh
        let formData={
        
        user_name: user_name.value,
        email: email.value,
        subject: this.subject.value,
        message: this.message.value,

    }

    let xhr=new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload=function(){
        console.log(xhr.responseText);
        if (xhr.responseText=='success'){
            alert('Email sent');
            user_name.value='';
            email.value='';
            subject.value='';
            message.value='';
        }
        else{
            alert('something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData));

})