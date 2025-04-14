export function setupModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <p>Are you sure you want to view the next model?</p>
            <button id="confirm-next">Yes</button>
        </div>
    `;
    document.body.appendChild(modal);

    const nextModelLink = document.getElementById("nextModel");
    const closeButton = modal.querySelector(".close-button");
    const confirmBtn = modal.querySelector("#confirm-next");

    nextModelLink.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", () => modal.style.display = "none");
    confirmBtn.addEventListener("click", () => {
        window.location.href = "next-model.html";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}
