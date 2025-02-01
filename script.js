function updateUsername() {
    let username = document.getElementById("accountInput").value;
    if (username.trim() !== "") {
        document.getElementById("username").textContent = username;
    }
}