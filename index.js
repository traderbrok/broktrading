const backendUrl = "https://tp-sl-backend-980d778c0c7f.herokuapp.com";

document.getElementById("get-price-btn").addEventListener("click", () => {
    const selectedAsset = document.getElementById("asset-select").value;
    fetch(`${backendUrl}/price?symbol=${selectedAsset}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Failed to fetch price. " + data.error);
            } else {
                document.getElementById("entry-price").value = data.price.toFixed(2);
            }
        })
        .catch(error => {
            alert("Failed to fetch price. Check your internet connection or backend.");
        });
});
