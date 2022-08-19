function flames_check(lst,num){
    
    count = lst.length;
    div = num%count;
    
    div -= 1;
    
    if (div == -1 || div == count-1 ){
        lst.pop()
    }
    else if (div === 0){
        lst = lst.slice(1,lst.length)
    }
    
    
    else {
        arr1 = lst.slice(0,div);
        arr2 = lst.slice(div+1,lst.length);
        lst = arr2.concat(arr1)
    }
    
    if (lst.length == 1){
        return lst[0]

    }else{
        return flames_check(lst,num)
    }
}

const searchparams = new URLSearchParams(window.location.search);
if (searchparams.has("name1")){
    var name1 = searchparams.get("name1")
} else{
    document.getElementById("entername1") = "PLEASE ENTER THE NAME1"
}
if (searchparams.has("name2")){
    var name2 = searchparams.get("name2")
} else{
    document.getElementById("entername2") = "PLEASE ENTER THE NAME2"
}

name1 = name1.replace(/ /g, "");
name2 = name2.replace(/ /g, "");
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

var arr = ["FRIENDS","LOVE","AFFECTION","MARRIAGE","ENEMY","SIBLINGS"]; 

var i ,j
var num = name1.length+name2.length
for (i=0;i<name1.length;i++){
   for (j=0;j<name2.length;j++){
   		if (name1[i] == name2[j]){
        num -= 2;
        name1 = name1.replace(name1[i],"1");
        name2 = name2.replace(name2[j],"2");
      
        break;
        }
    
        }
    }
var answer = flames_check(arr,num)
console.log(answer)



if (answer == "FRIENDS"){
    document.getElementById("friends").innerHTML = answer;
    document.getElementById("newanswer").style.backgroundImage= "url(../image/friends.jpg)";
    document.getElementById("newanswer").style.backgroundRepeat = "no-repeat";
    document.getElementById("newanswer").style.backgroundSize = "cover";
    document.getElementById("answertext").style.textAlign = "center";
    document.getElementById("answertext").style.color = "rgb(23, 221, 13)";
   
    
} else if(answer == "LOVE"){
    document.getElementById("love").innerHTML = answer;
    document.getElementById("newanswer").style.backgroundImage= "url(../image/love.jpg)";
    document.getElementById("newanswer").style.backgroundRepeat = "no-repeat";
    document.getElementById("newanswer").style.backgroundSize = "cover";
    document.getElementById("answertext").style.textAlign = "right";
    
    
    
} else if (answer == "AFFECTION") {
    document.getElementById("affection").innerHTML = answer;
    document.getElementById("newanswer").style.backgroundImage= "url(../image/affection.jpg)"
    document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
    document.getElementById("newanswer").style.backgroundSize = "cover"
    document.getElementById("answertext").style.textAlign = "right"
    
    
   

} else if (answer == "MARRIAGE") {
    document.getElementById("marriage").innerHTML = answer;
    document.getElementById("newanswer").style.backgroundImage= "url(../image/selena-gomezpc.jpg)"
    document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
    document.getElementById("newanswer").style.backgroundSize = "cover"
    document.getElementById("answertext").style.textAlign = "center"
    
    
    

} else if (answer == "ENEMY") {
    document.getElementById("enemy").innerHTML = answer;
    document.getElementById("newanswer").style.backgroundImage= "url(../image/enemy.jpg)"
    document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
    document.getElementById("newanswer").style.backgroundSize = "cover"
    document.getElementById("answertext").style.textAlign = "right"
    
   
    

} else if (answer == "SIBLINGS"){
    document.getElementById("sister").innerHTML = answer;
    document.getElementById("newanswer").style.backgroundImage= "url(../image/sister.jpg)"
    document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
    document.getElementById("newanswer").style.backgroundSize = "cover"
    document.getElementById("answertext").style.textAlign = "left"
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        if (answer == "FRIENDS"){
            document.getElementById("friends").innerHTML = answer;
            document.getElementById("newanswer").style.backgroundImage= "url(../image/friends2.jpg)"
            document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
            document.getElementById("newanswer").style.backgroundSize = "cover"
            document.getElementById("answertext").style.textAlign = "center"
            document.getElementById("answertext").style.color = "rgb(23, 221, 13);"
           
            
        } else if(answer == "LOVE"){
            document.getElementById("love").innerHTML = answer;
            document.getElementById("newanswer").style.backgroundImage= "url(../image/selena-gomez.jpg)"
            document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
            document.getElementById("newanswer").style.backgroundSize = "cover"
            document.getElementById("answertext").style.textAlign = "right"
            
            
            
        } else if (answer == "AFFECTION") {
            document.getElementById("affection").innerHTML = answer;
            document.getElementById("newanswer").style.backgroundImage= "url(../image/affection3.jpg)"
            document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
            document.getElementById("newanswer").style.backgroundSize = "cover"
            document.getElementById("answertext").style.textAlign = "right"
            
            
           
        
        } else if (answer == "MARRIAGE") {
            document.getElementById("marriage").innerHTML = answer;
            document.getElementById("newanswer").style.backgroundImage= "url(../image/marriage2.jpg)"
            document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
            document.getElementById("newanswer").style.backgroundSize = "cover"
            document.getElementById("answertext").style.textAlign = "center"
            
            
            
        
        } else if (answer == "ENEMY") {
            document.getElementById("enemy").innerHTML = answer;
            document.getElementById("newanswer").style.backgroundImage= "url(../image/enemy.jpg)"
            document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
            document.getElementById("newanswer").style.backgroundSize = "cover"
            document.getElementById("answertext").style.textAlign = "right"
            
           
            
        
        } else if (answer == "SIBLINGS"){
            document.getElementById("sister").innerHTML = answer;
            document.getElementById("newanswer").style.backgroundImage= "url(../image/Nezuko.jpg)"
            document.getElementById("newanswer").style.backgroundRepeat = "no-repeat"
            document.getElementById("newanswer").style.backgroundSize = "cover"
            document.getElementById("answertext").style.textAlign = "left"
        }
  }
}
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
console.log(name1,name2,answer);

function exit(){
                
    document.getElementById("exitwarning").style.visibility = "visible"
    console.log("in the function")
}
