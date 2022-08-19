
const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has("username")){
    let username = searchParams.get("username") ;

    //const x = document.getElementById("output");
    document.getElementById("output").innerHTML = "Hello " + username
    //console.log(username,x);
}


 





function usernameValidation(){
    const username = document.getElementById("username").value;
   
   
   
    if (username.trim() == ""){
       
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").style.color = "red";
        document.getElementById("username").style.border = "solid 5px red";
        return false;
    }
    else{
       
        return true;
    }
}


function checkNames(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    if (name1.trim() == "" || name2.trim() == ""){
        if (name1.trim()== ""){
            document.getElementById("errorname1").style.visibility = "visible"
            document.getElementById("name1").style.border = "solid 5px red"
        }
        
        if (name2.trim() == ""){
            document.getElementById("errorname2").style.visibility = "visible"
            document.getElementById("name2").style.border = "solid 5px red"
        }
        if(name1.trim() != "" )  {
            document.getElementById("errorname1").style.visibility = "hidden"
            document.getElementById("name1").style.border = "0px"
        }
        if(name2.trim() != "")  {
            document.getElementById("errorname2").style.visibility = "hidden"
            document.getElementById("name2").style.border = "0px"
        }
        return false;
    
    }
    else{
        return true;
    }
}



