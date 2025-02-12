function moveButton() {
    let noButton = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

function showImage() {
    document.getElementById("image-container").style.display = "block";
    createHearts();
}

function createHearts() {
    const heartsContainer = document.getElementById("hearts-container");
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        
        // Alternar entre rojo y blanco
        if (Math.random() > 0.5) {
            heart.classList.add("heart", "red");
        } else {
            heart.classList.add("heart", "white");
            heart.innerHTML = "🤍";
        }

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 4 + 3) + "s";
        heartsContainer.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 6000);
    }
}
