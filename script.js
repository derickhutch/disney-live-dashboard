async function loadChannels() {

    const response = await fetch("channels.json");
    const channels = await response.json();

    const offlineContainer = document.getElementById("offlineContainer");
    const liveCount = document.getElementById("liveCount");
    const lastUpdated = document.getElementById("lastUpdated");

    // Update the status bar
    liveCount.textContent = "🔴 Live: 0";
    lastUpdated.textContent =
        "Last updated: " + new Date().toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
        });

    // Clear existing cards
    offlineContainer.innerHTML = "";

    // Build one card for each channel
    channels.forEach(channel => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="channel-card">

                <div class="avatar">
                    📺
                </div>

                <div class="channel-info">
                    <h3>${channel.name}</h3>
                    <p>${channel.handle}</p>
                    <span class="offline-badge">⚫ Offline</span>
                </div>

            </div>
        `;

        offlineContainer.appendChild(card);

    });

}

loadChannels();
