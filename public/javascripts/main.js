const SearchTextField = new mdc.textField.MDCTextField(
    document.querySelector(".mdc-text-field")
);
const SearchButton = new mdc.ripple.MDCRipple(
    document.querySelector(".mdc-button")
);

// Debugging.
window.mdc = mdc;

document.querySelector("#google").onsubmit = (e) => {
    console.log("s u b m i t");
    window.location = `https://google.com/search?q=${encodeURIComponent(
        SearchTextField.value
    )}`;
    return false;
};

(() => {
    SearchTextField.focus();
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(DisplayLocation);
})();

async function DisplayLocation(pos) {
    const desc = document.getElementById("weatherDesc")
    const skycons = new Skycons({
        "color": "#eee"
    });

    const forecast = await (await fetch("/api/v1/weather", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            lat: pos.coords.latitude,
            long: pos.coords.longitude
        })
    })).json();
    skycons.add("weathericon", forecast.currently.icon)
    skycons.play();
    desc.innerHTML = `${Math.floor(forecast.currently.temperature)}&deg;C, ${forecast.currently.summary}`;
}