document.getElementById("reef").onclick = function() {
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
};
document.getElementById("algae").onclick = function() {
    if (navigator.vibrate) {
        navigator.vibrate(20000);
    }
};
