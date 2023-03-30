function DigitalClock(){
  let hour = document.querySelector(".hour");  
  let minutes = document.querySelector(".minutes");  
  let PM = document.querySelector(".PM");  
  let seconds = document.querySelector(".seconds");
  
  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();

 if(H > 12){
    H = H - 12
 }

 H = (H < 10) ? "0" + H : H ;
 M = (M < 10) ? "0" + M : M ;
 S = (S < 10) ? "0" + S : S ;


 let ampm = H >= 12 ? "PM":"AM"
 hour.innerHTML = H
 minutes.innerHTML = M
 seconds.innerHTML = S
 PM.innerHTML = ampm
}
 setInterval(DigitalClock,1000)