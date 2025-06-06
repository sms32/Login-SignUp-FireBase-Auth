import React, { useEffect, useState } from 'react';
import { useInstallPrompt } from '../App'; // Adjust path

export default function InstallButton() {
  const { deferredPrompt, setDeferredPrompt } = useInstallPrompt();
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const checkStandalone = () => {
      setIsStandalone(
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true
      );
    };

    checkStandalone();

    // Optionally listen for changes in display mode (rare)
    window.matchMedia('(display-mode: standalone)').addEventListener('change', checkStandalone);

    return () => {
      window.matchMedia('(display-mode: standalone)').removeEventListener('change', checkStandalone);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('Install prompt not available. Maybe already installed or not supported.');
      return;
    }

    deferredPrompt.prompt();

    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    setDeferredPrompt(null);
  };

  if (isStandalone) {
    // Don't show the button if running as installed app
    return null;
  }

  return (
    <button onClick={handleInstallClick} className="install-btn">
      Install App
    </button>
  );
}
