const cl = console.log;

// 1} Example :

const playerContainer = document.getElementById("playerContainer");
const allDiv = [...document.querySelectorAll(".all")];


const onPlayerImg = eve => {
    let playerVal = eve.target.value;
    cl(playerVal)

    allDiv.forEach(ele => ele.classList.add("d-none"))

    const selectedPlayer = [...document.getElementsByClassName(playerVal)];
    selectedPlayer.forEach(ele => ele.classList.remove("d-none"))
}

playerContainer.addEventListener("change", onPlayerImg);


// 2} Example :

const heroineContainer = document.getElementById("heroineContainer");
const all1Divs = [...document.querySelectorAll(".all1")];


const onHeroineImg = (eve) => {
    let heroineValue = eve.target.value;
    cl(heroineValue);

    all1Divs.forEach(ele => ele.classList.add("d-none"))

    const selectedHeroine = [...document.getElementsByClassName(heroineValue)];
    selectedHeroine.forEach(ele => ele.classList.remove("d-none"))
}

heroineContainer.addEventListener("change", onHeroineImg);


// 3} Example :

const singerContainer = document.getElementById("singerContainer");
const all2Divs = [...document.querySelectorAll(".all2")];


const onSingerImg = (eve) => {
    let singerValue = eve.target.value;
    cl(singerValue);

    all2Divs.forEach(ele => ele.classList.add("d-none"));

    selectedSinger = [...document.getElementsByClassName(singerValue)];
    selectedSinger.forEach(ele => ele.classList.remove("d-none"))
}

singerContainer.addEventListener("change", onSingerImg);