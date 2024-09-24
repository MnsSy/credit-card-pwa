// PWA Installation Prompt
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    let deferredPrompt = event;

    const installButton = document.createElement('button');
    installButton.textContent = "Install App";
    document.body.appendChild(installButton);

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});
function flipCard() {
    const card = document.querySelector('.credit-card');
    card.classList.toggle('flip');
}
