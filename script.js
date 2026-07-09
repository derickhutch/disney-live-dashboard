const channels = [
    "Theme Park Giant",
    "Ron On The Go",
    "Daily FastPass",
    "Disney With Sean",
    "That Crazy Disney Lady",
    "Disney Parks With Love",
    "Fun To Be Free",
    "ResortTV1",
    "Main Street Voyager",
    "Goo To You",
    "Disney Girl Kim",
    "Living in Diz"
];

const offlineContainer = document.getElementById("offlineContainer");

channels.forEach(channel => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${channel}</h3>
        <p>Offline</p>
    `;

    offlineContainer.appendChild(card);

});
