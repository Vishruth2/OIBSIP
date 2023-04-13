 
        function VerifyUser(){      
            var user=document.getElementById("userName").value;
            var userError=document.getElementById("userError");
            if(user.length==0){
                userError.innerHTML="* Enter the number".fontcolor("red").bold();
            }
            else{
                userError.innerHTML='';
            }
        }

        function Verify(){
           var user = document.getElementById("userName").value;
           var tempScale =  document.querySelector("select").value;
           if(tempScale=='fahrenhiet'){
              var userdata =  parseFloat(user);
              var fa = (userdata-32) / 1.8;
              document.getElementById("result").innerHTML=`${fa} Celcius`;
           }
           else{
             var userdata =  parseFloat(user);
             var ce=(userdata*1.8)+32;
             document.getElementById("result").innerHTML=`${ce} Fahrenhiet`;
           }
        }