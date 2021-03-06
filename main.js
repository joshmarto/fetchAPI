console.log("It works");

const fetchData = document.getElementById("fetchData");

fetchData.addEventListener("click", setUp);

function setUp() {
    newButton("data", "btn btn-info", "Refresh data");
    fetch();
}

function fetch() {
    console.log("Fetching...");
    const APIkey = `AIzaSyBx7-DI3pkqzzfUQnvkjMz9uV4tzHO78JI`;
    fetch(`https://maps.googleapis.com/maps/api/js?key=${APIkey}&callback=initMap`)
        .then(data => data.json())
        .then(d => displayInfo(d))
        .catch(err => console.log(err));
}

function initMap() {
    let uluru = { lat: -25.363, lng: 131.044 };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
        map: map
    });
}

function newButton(id, clas, text) {
    const container = document.getElementById(id);
    const button = document.createElement("button");
    button.style.display = "block";
    button.style.MarginBottom = "7px";
    button.classList = clas;
    button.innerText = text;
    container.insertAdjacentElement("afterbegin", button);
}

function displayInfo(dataObj) {
    console.log(dataObj);
}