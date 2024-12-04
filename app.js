if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/giobypass/service-worker.js')
        .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Install PWA';
    document.body.appendChild(addBtn);

    addBtn.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
            addBtn.remove();
        });
    });
});

$(document).ready(function() {
    console.log('Hello, jQuery!');
    
    $('#openUrlButton').click(function() {
        const url = $('#urlInput').val();
        if (url) {
            window.open(url, "_self");
        } else {
            alert('Please enter a URL.');
        }
    });
});
