if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
}

$(document).ready(function () {
    console.log('Hello, jQuery!');

    $('#openUrlButton').click(function () {
        const url = $('#urlInput').val();
        if (url) {
            window.open(url, "_self");
        } else {
            alert('Please enter a URL.');
        }
    });
});
