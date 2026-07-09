async function loadChannels() {

    const response = await fetch("channels.json");
    const channels = await response.json();

    const offlineContainer = document.getElementById("offlineContainer");

    offlineContainer.innerHTML = "";

    channels.forEach(channel => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${channel.name}</h3>
            <p>Offline</p>
        `;

        offlineContainer.appendChild(card);

    });

}

loadChannels();
