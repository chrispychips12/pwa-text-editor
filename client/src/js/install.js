const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Event handler for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI to notify the user they can install the PWA
  butInstall.classList.remove('hidden');
});

// Click event handler on the install button
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome
  if (outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }
  // Clear the deferred prompt
  deferredPrompt = null;
  // Hide the install button
  butInstall.classList.add('hidden');
});

// Handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed', event);
});
