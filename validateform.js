function validateHTMlform()
{
  let form = document.StudenSignupForm;
   if( form.textnames.value == "" )
   {
     alert( "Enter Your First Name" );
     form.textnames.focus() ;
     return;
   }
   if( form.lastnames.value == "" )
   {
     alert( "Enter Your Last Name" );
     form.textnames.focus() ;
     return;
   }

   if( form.dob.value == "")
   {
     alert( "Enter your DOB" );
     form.dob.focus() ;
     return;
   }

   if( form.gender.value == "")
   {
     alert( "Enter your Gender" );
     form.gender.focus() ;
     return;
   }

   var email = form.emailid.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 ||  dotpos - atpos < 2 )
    {
         alert("Enter your email ID in the format abc@xyz.com")
        form.emailid.focus();
        return;
    }

  if( form.mobileno.value == "" || isNaN( form.mobileno.value) || form.mobileno.value.length != 10 )
   {
     alert( "Enter your 10 digit Mobile Number" );
     form.mobileno.focus() ;
     return;
   }
    
   if( form.address.value == "" )
   {
     alert( "Enter Your Address" );
     form.address.focus() ;
     return;
   }

   if( form.pincode.value == "" ||
           isNaN( form.pincode.value) ||
           form.pincode.value.length != 6 )
   {
     alert( "Enter your 6 digit pincode");
     form.pincode.focus() ;
     return;
   }

   if ( ( StudenSignupForm.living[0].checked == false ) && ( StudenSignupForm.living[1].checked == false ) )
   {
   alert ( "Choose one: Hostel or Day Boarding" );
   return false;
   }  
   if( form.Course.value == "-1" )
   {
     alert( "Choose Your Course" );
     form.City.focus() ;
     return;
   }  


}