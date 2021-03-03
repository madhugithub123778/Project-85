canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

bg_image="track.jpg";
car1_image="car1.png";
car1_width=120;
car1_height= 70;
car1_x= 10;
car1_y=10;

car2_image="car2.png";
car2_width=120;
car2_height= 70;
car2_x= 10;
car2_y=100;

function add(){
bg_img=new Image();
bg_img.onload=uploadBg;
bg_img.src=bg_image;

car1_img=new Image();
car1_img.onload=uploadCar1;
car1_img.src=car1_image;

car2_img=new Image();
car2_img.onload=uploadCar2;
car2_img.src=car2_image;}

function uploadBg(){
ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);}

function uploadCar1(){
ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);}

function uploadCar2(){
ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);

if (keyPressed=='38'){
car1_up();
console.log("Up Arrow Key");}
    
if (keyPressed=='40'){
car1_down();
console.log("Down Arrow Key");}
    
if (keyPressed=='39'){
car1_right();
console.log("Right Arrow Key");}
    
if (keyPressed=='37'){
car1_left();
console.log("Left Arrow Key");}

if (keyPressed=='87'){
car2_up();
console.log("W Key");}

if (keyPressed=='83'){
    car2_down();
    console.log("S Key");}

if (keyPressed=='65'){
    car2_left();
    console.log("A Key");}

    if (keyPressed=='68'){
        car2_right();
        console.log("D Key");}

    if (car1_x> 650){
            console.log("Car 1 has Won");
            document.getElementById("game_status").innerHTML="Car 1 Wins!";}

            
            else if (car2_x> 650){
            console.log("Car 2 has Won");
            document.getElementById("game_status").innerHTML="Car 2 Wins!";}}

function car1_up(){
if (car1_y>=0){
car1_y= car1_y-10;
uploadBg();
uploadCar1();
uploadCar2();}}

function car1_down(){
if (car1_y<=550){
car1_y=car1_y+10;
uploadBg();
uploadCar1();
uploadCar2();}}

function car1_left(){
if (car1_x>=0){
car1_x=car1_x-10;
uploadBg();
uploadCar1();
uploadCar2();}}

function car1_right(){
if (car1_x<=700){
car1_x=car1_x+10;
uploadBg();
uploadCar1();
uploadCar2();}}


    



function car2_up(){
    if (car2_y>=0){
    car2_y= car2_y-10;
    uploadBg();
    uploadCar1();
    uploadCar2();}}
    
    function car2_down(){
    if (car2_y<=550){
    car2_y=car2_y+10;
    uploadBg();
    uploadCar1();
    uploadCar2();}}
    
    function car2_left(){
    if (car2_x>=0){
    car2_x=car2_x-10;
    uploadBg();
    uploadCar1();
    uploadCar2();}}
    
    function car2_right(){
    if (car2_x<=700){
    car2_x=car2_x+10;
    uploadBg();
    uploadCar1();
    uploadCar2();}}

   
    
    