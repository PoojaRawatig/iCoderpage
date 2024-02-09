function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }

  var email = document.forms["myForm"]["femail"].value;
  if (email.length > 15) {
    seterror("email", "*Email length is too long");
    returnval = false;
  }

  var password = document.forms["myForm"]["fpass"].value;
  if (password.length < 6) {
    // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
    seterror("pass", "*Password should be atleast 6 characters long!");
    returnval = false;
  }

  var cpassword = document.forms["myForm"]["fcpass"].value;
  if (cpassword != password) {
    seterror("cpass", "*Password and Confirm password should match!");
    returnval = false;
  }

  return returnval;
}
function videoUrl(hmmmmmm){
  document.getElementById("slider").src=hmmmmmm;
}
function clickimg(smallimg){
  var fullimg = document.getElementById("imgbox");
  fullimg.src = smallimg.src
}
//js

$(document).ready(function(){
  $('.filter-item').click(function(){
      const value = $(this).attr('data-filter')
      if(value == 'all'){
          $('.post-box').show('1000')
      }
      else{
          $('.post-box').not('.' + value).hide("1000")
          $('.post-box').filter('.' + value).show("1000")
      }
  });
  $(".filter-item").click(function(){
      $(this).addClass("active-filter").siblings().removeClass("active-filter");

  });
});
let header = document.querySelector("header");
window.addEventListener("scroll",()=>{
  header.classList.toggle("shadow",window.scrollY > 0);
});

// header background change on scroll

