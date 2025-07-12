var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber1+".png";
var randomimagesource="images/"+randomdiceimage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesource);
var randomdiceimage2="dice"+randomnumber2+".png";
var randomimagesource2="images/"+randomdiceimage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if(randomnumber2>randomnumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}