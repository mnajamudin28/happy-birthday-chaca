

//Typing text https://www.w3schools.com/howto/howto_js_typewriter.asp
//opening
var i = 0;
var txt = "Halo ayang aku yang sangat menyebalkan, aku buatin ini aja ya biar kamu ga ngambek2 amat. Ayang maaf ya aku belum bisa jadi yang terbaik buat kamu, aku belum bisa jadi apa yang kamu mau, belum bisa kasih apa yang kamu mau. makasih ya udah mau nemenin aku, aku gatau kalo kamu ga dateng waktu itu di kehidupan aku, aku bakal kaya gimana, mungkin butuh waktu lama untuk sembuh.tuhan baik banget ya ngirimin kamu buat aku, aku bersyukur banget punya kamu, ya walaupun kamu, bawel, bikin kesel, banyak maunya, tapi aku tetep sayang kamu.Doa aku buat kamu, semoga kamu sehat2 terus, dibanyakin rezeky, dikasih kesabaran yg extra, semoga ditahun ini apa yg kamu inginkan tercapai, Aamiin. maaf ya kalo cringe aku gabisa romantis2an orangnya hehe :), yuk lanjut klik textnya";
var speed = 80;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
//button
$(document).ready(function () {
    $("#text1").click(function () {
        $("#div1").fadeIn();
    });
});


function cond() {
    var a = document.getElementById('user').value;
    var b = document.getElementById('password').value;
        if (a == "Lathifah Fairuz Chaszallie" && b == "22-02-2022") {
            window.location = "opening.html";
        } else if( a.length == 0){
            alert("di isi namanya")
        } else if (a != "Lathifah Fairuz Chaszallie") {
            alert("Nama kamu masukin yang bener kapital sama spasinya, kalo ga tau nama lu sendiri coba liat KTP")
        } else if (b.length == 0){
            alert("Di isi ya tanggal jadiannya")
        }     
        else if (b != "22-02-2022") {
            alert("Tanggal jadiannya sesuai format ya ayaaaang, di pakein ini '-' jugaaa")
        }
        else {
            alert("di isi dulu baru lanjut")
        } 
}

// const faders = document.querySelectorAll('.fade-in');

// const appearOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px -100px 0px"
// }


// const appearOnScroll = new IntersectionObserver
// (function(
//     entries, appearOnScroll)
//     {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting){
//                 return;
//             }else{
//                 entry.target.classList.add('appear');
//                 appearOnScroll.unobserve(entry.target);
//             }
//         })
//     },
//     appearOtions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// })