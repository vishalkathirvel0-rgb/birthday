// Select the HTML elements
const button = document.getElementById("surpriseBtn");
const card = document.getElementById("card");
const surprise = document.getElementById("surprise");
const plant = document.getElementById("plant");

// Wait for the button to be clicked
button.addEventListener("click", function () {

    // Fade out the card
    card.classList.add("hide");

    // After the fade animation, hide the card and show the surprise section
    setTimeout(function () {
        card.style.display = "none";
        surprise.classList.remove("hidden");
    }, 800);

    // Show the seed
    setTimeout(function () {
        plant.innerHTML = "YOU🫵";
    }, 1000);

    // Grow into a small plant
    setTimeout(function () {
        plant.innerHTML = "AND ME";
    }, 2500);

    // Grow into a tree
    setTimeout(function () {
        plant.innerHTML = "FOREVER💙";
    }, 4500);
setTimeout(function(){

    plant.innerHTML = `
        🥰
        <br><br>
        <h2>Happiest Birthday MINE 💙</h2>

        <p>
        May your life bloom like these flowers 🌸<br>
        Keep smiling, keep shining,<br>
        and Na unna nalla pathukuren.
        AND YOU ARE MINE FOREVER 💙
        </p>
    `;

    for(let i = 0; i < 200; i++){

        setTimeout(createFlower, i*150);

    }

},6500);
    function createFlower(){

    const flower = document.createElement("div");

    flower.classList.add("flower");

    const flowers = ["🌸","🌺","🌷","🌼","💐","🌹"];

    flower.innerHTML =
        flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left = Math.random()*100 + "vw";

    flower.style.animationDuration =
        (Math.random()*4 + 5) + "s";

    flower.style.fontSize =
        (Math.random()*20 + 20) + "px";

    document.body.appendChild(flower);

    setTimeout(function(){

        flower.remove();

    },7000);

}
});


