var img = ["https://i.postimg.cc/qqyYvVbq/grandpa.jpg", 
"https://i.postimg.cc/wjMnFtMX/father.jpg" , 
"https://i.postimg.cc/5ymDKL83/bro.jpg", 
"https://i.postimg.cc/JnL6wtrd/sister.jpg", 
"https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Raj singh", 
"Diljeet Singh",
 "Rocky Singh", 
 "Alia Singh", 
 "Soni Singh"];
var i = 0;
function next()
{ var updatedImage = img [i];
  var updatedName = names [i] ;
 document.getElementById("member_image").src = updatedImage;
 document.getElementById("member_name").innerHTML = updatedName;
 i++;
 if (i == 8)
 {
  i = 0; 
 }
}
