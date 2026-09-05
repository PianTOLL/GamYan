// ===== Navigation =====
function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.remove('active');
    });
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    // Show Home by default when the page first loads
    showSection('home');
});

// ===== "Go to Game" buttons that use data-link instead of <a href> =====
// To use this later on a "Coming Soon" card once its game page exists:
//   <button class="link-button" data-link="game4.html">Go to Game</button>
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".link-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const link = button.dataset.link;
            if (link) {
                window.location.href = link;
            }
        });
    });
});

// ===== Comments =====
document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const commentInput = document.getElementById("commentInput");
    const commentsList = document.getElementById("commentsList");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText) {
            addComment(commentText);
            commentInput.value = "";
        }
    });

    function addComment(text) {
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");

        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-text");
        commentContent.textContent = text;

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editComment(commentItem, commentContent));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => commentItem.remove());

        commentItem.appendChild(commentContent);
        commentItem.appendChild(editButton);
        commentItem.appendChild(deleteButton);

        commentsList.appendChild(commentItem);
    }

    function editComment(item, content) {
        const newText = prompt("Edit your comment:", content.textContent);
        if (newText !== null) {
            content.textContent = newText.trim();
        }
    }

    // ===== Game Requests =====
    const requestForm = document.getElementById("requestForm");
    const gameRequestInput = document.getElementById("gameRequestInput");
    const requestList = document.getElementById("requestList");

    requestForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const requestText = gameRequestInput.value.trim();
        if (requestText) {
            addRequest(requestText);
            gameRequestInput.value = "";
        }
    });

    function addRequest(text) {
        const requestItem = document.createElement("div");
        requestItem.classList.add("request-item");

        const requestContent = document.createElement("div");
        requestContent.classList.add("request-text");
        requestContent.textContent = text;

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editRequest(requestItem, requestContent));

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => requestItem.remove());

        requestItem.appendChild(requestContent);
        requestItem.appendChild(editButton);
        requestItem.appendChild(deleteButton);

        requestList.appendChild(requestItem);
    }

    function editRequest(item, content) {
        const newText = prompt("Edit your request:", content.textContent);
        if (newText !== null) {
            content.textContent = newText.trim();
        }
    }
});