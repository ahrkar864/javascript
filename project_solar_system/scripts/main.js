function calculateWeight() {
    const mass = parseFloat(document.getElementById("mass").value);
    const planet = document.getElementById("planet").value;
    let surfaceGravity = 0;

    // Define surface gravity values for different planets
    if (planet === "mercury") {
        surfaceGravity = 3.7; // Example value for Mercury
    } else if (planet === "venus") {
        surfaceGravity = 8.87; // Example value for Venus
    } else if (planet === "earth") {
        surfaceGravity = 9.81; // Example value for Earth
    }
    // Add more planets and their surface gravity values as needed

    const weight = mass * surfaceGravity;
    document.getElementById("result").innerText = `Weight on ${planet}: ${weight.toFixed(2)} N`;
}





