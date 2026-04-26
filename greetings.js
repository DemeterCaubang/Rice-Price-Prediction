function sayHello() {
    const now = new Date();
    const hours = now.getHours();

    let message = "";

    if (hours >= 1 && hours <= 11) {
        message = "Good Morning! Welcome";
    }
    else if (hours >= 12 && hours <= 17) {
        message = "Good Afternoon! Welcome";
    }
    else {
        message = "Good Evening! Welcome";
    }

    document.getElementById("greetingMessage").textContent = message;
    document.getElementById("welcomePopup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("welcomePopup").classList.add("hidden");
}

window.onload = sayHello;