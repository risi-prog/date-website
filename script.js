const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesPage() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function datePage() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}

function foodPage() {
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");
}

function finish(food) {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    document.getElementById("page4").classList.add("hidden");
    document.getElementById("page5").classList.remove("hidden");

    document.getElementById("result").innerHTML = `
        <h2>💕 Date Confirmed! 💕</h2>
        <p>📅 <strong>${date}</strong></p>
        <p>⏰ <strong>${time}</strong></p>
        <p>🍴 <strong>${food}</strong></p>

        <br>

        <p>😊I can't wait to see your smile!</p>
        <p>❤️ See you soon ❤️</p>
        
    `;
}
