document.getElementById("buyBtn").addEventListener("click", function() {
    window.location.href = "Buy.html";
});

document.getElementById("sellBtn").addEventListener("click", function() {
    document.getElementById("sellForm").style.display = "block";
});

document.getElementById('rentBtn').addEventListener('click', function() {
    document.getElementById('rentForm').style.display = 'block';
});

document.getElementById("sellFormFields").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "confirmation.html";
});
