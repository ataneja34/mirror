function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    timeElement.textContent = now.toLocaleTimeString();
    result = now.toLocaleTimeString()
    timeElement.textContent = result.substring(0, result.length - 6 ) +" "+ result.substring(result.length - 2);
}
function update() {
    updateTime();
}

// Refresh the data every second
setInterval(update,  1000);

// Initial update
update();
