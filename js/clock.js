let userName = document.querySelector("#myName");
let myName = prompt("Adınızı Giriniz:");
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = days[today.getDay()];
    document.querySelector("#myClock").innerHTML = hour + ":" + minute + ":" + second + " " + day;
}
setInterval(showTime, 1000); 



userName.innerHTML = myName

