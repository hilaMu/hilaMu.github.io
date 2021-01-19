
function copy() {
    var copyText = document.getElementById("emailId").getAttribute('value');
    navigator.clipboard.writeText(copyText);

    var toolTip = document.getElementById("emailTooltipId");
    var text = toolTip.innerHTML;
    toolTip.innerHTML = "copied!";
    setTimeout(function () {
        returnText(text);
    }, 2000)
}

function returnText(text) {
    document.getElementById("emailTooltipId").innerHTML = text;;
}

function openModal() {
    document.getElementById("modalId").style.display = "block";
}

function closeModal() {
    document.getElementById("modalId").style.display = "none";
}

window.addEventListener("click", function (event) {
    var modal = document.getElementById("modalId");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
