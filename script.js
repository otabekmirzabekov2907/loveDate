const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// Экран 1 -> Экран 2
yesBtn.addEventListener("click", () => {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
});

// Кнопка "Нет" убегает
noBtn.addEventListener("mouseenter", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 70);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// Выбор занятия
document.querySelectorAll(".choice").forEach(button => {

    button.addEventListener("click", () => {

        document.getElementById("screen2").style.display = "none";

        const type = button.dataset.type;

        switch(type){

            case "movie":
                document.getElementById("movieScreen").style.display = "block";
                break;

            case "food":
                document.getElementById("foodScreen").style.display = "block";
                break;

            default:
                document.getElementById("screen3").style.display = "block";
                document.getElementById("selectedActivity").innerText =
                    "Вы выбрали: " + button.innerText;
        }

    });

});

// После выбора жанра фильма
document.querySelectorAll(".genre").forEach(button => {

    button.addEventListener("click", () => {

        document.getElementById("movieScreen").style.display = "none";
        document.getElementById("screen3").style.display = "block";

        document.getElementById("selectedActivity").innerText =
            "🎬 " + button.innerText;

    });

});

// После выбора еды
document.querySelectorAll(".food").forEach(button => {

    button.addEventListener("click", () => {

        document.getElementById("foodScreen").style.display = "none";
        document.getElementById("screen3").style.display = "block";

        document.getElementById("selectedActivity").innerText =
            "🍽️ " + button.innerText;

    });

});

// Выбор даты
document.querySelectorAll(".date").forEach(button => {

    button.addEventListener("click", () => {

        document.getElementById("screen3").style.display = "none";

        document.getElementById("finalScreen").style.display = "block";

        document.getElementById("finalText").innerHTML =
            document.getElementById("selectedActivity").innerHTML +
            "<br><br>📅 " + button.innerHTML;

    });

});

// Сердечки
function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}

setInterval(createHeart, 350);
const confirmBtn = document.getElementById("confirmDate");
const music = document.getElementById("music");

confirmBtn.addEventListener("click", () => {

    music.currentTime = 0;
    music.play();

    document.getElementById("finalScreen").style.display = "none";
    document.getElementById("thanksMessage").classList.add("show");

    for (let i = 0; i < 150; i++) {
        setTimeout(createHeart, i * 25);
    }

    // +998931634398
    const phone = "998931634398"; 

    const message = encodeURIComponent(`Привет ❤️

Я согласна на свидание 🥰`);

    setTimeout(() => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}, 3000);

});
