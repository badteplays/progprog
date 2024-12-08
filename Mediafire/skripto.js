/*orasan*/
function updateTime() {
    const orasan = document.getElementById("oras");
    const date = new Date();
    const oras = date.toLocaleTimeString();
    orasan.textContent = oras;
}
setInterval(updateTime, 1000);
updateTime();