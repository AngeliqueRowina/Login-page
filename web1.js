
        function vfun(){
            var aname=document.forms["myform"]["aname"].value;
            var apswd=document.forms["myform"]["apswd"].value;

        if(aname==null || aname=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "enter the admin name";
                 return false;
        }

        if(apswd==null || apswd==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;
        }

        if (aname != '' && apswd != '' ){
         alert("Login successful");
                         }

                         

        }