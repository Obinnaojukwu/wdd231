console.log("directory.js loaded");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    const membersContainer = document.getElementById("members-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    async function fetchMembers() {
        try {
            console.log("Fetching members...");
            const response = await fetch("data/members.json");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const members = await response.json();
            console.log("Members loaded:", members);

            if (!Array.isArray(members) || members.length === 0) {
                membersContainer.innerHTML = "<p>No members found.</p>";
                return;
            }

            displayMembers(members);
        } catch (error) {
            console.error("Error fetching members:", error);
            membersContainer.innerHTML = "<p>Error loading members. Please try again later.</p>";
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member-card");

            // Handle missing images
            let imgSrc = `images/${member.image}`;
            let fallbackImg = "images/default.jpg"; // Ensure you have a fallback image

            memberElement.innerHTML = `
                <img src="${imgSrc}" alt="${member.name}" onerror="this.onerror=null;this.src='${fallbackImg}';">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            membersContainer.appendChild(memberElement);
        });
        console.log("Members displayed.");
    }

    // Toggle Views
    function toggleView(view) {
        if (view === "grid") {
            membersContainer.classList.add("grid-view");
            membersContainer.classList.remove("list-view");
        } else {
            membersContainer.classList.add("list-view");
            membersContainer.classList.remove("grid-view");
        }
        console.log(`${view.charAt(0).toUpperCase() + view.slice(1)} View Activated`);
    }

    gridViewBtn.addEventListener("click", () => toggleView("grid"));
    listViewBtn.addEventListener("click", () => toggleView("list"));

    fetchMembers();
});

