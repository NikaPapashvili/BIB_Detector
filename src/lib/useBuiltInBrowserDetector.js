import { useState, useEffect } from 'react';
import detectBuiltInBrowser from './detectBuiltInBrowser';

/**
 * Un hook React qui détecte si le navigateur actuel est un navigateur intégré
 * dans une application de médias sociaux ou autre.
 * 
 * @returns {Object} Un objet contenant les résultats de détection
 */
export const useBuiltInBrowserDetector = () => {
  const [detectionResults, setDetectionResults] = useState({
    isBuiltInBrowser: false,
    isFacebook: false,
    isInstagram: false,
    isTikTok: false,
    isTwitter: false,
    isSnapchat: false,
    isLinkedIn: false,
    isReddit: false,
    isPinterest: false,
    isMessenger: false,
    isTelegramAndroid: false,
    isTelegramIOS: false,
    isDiscord: false,
    isWeChat: false,
    isLine: false,
    isViber: false
  });

  useEffect(() => {
    // Ne s'exécute que dans un environnement navigateur
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return;
    }

    // Utilise la fonction de détection
    const results = detectBuiltInBrowser();
    setDetectionResults(results);
  }, []);

  return detectionResults;
};

export default useBuiltInBrowserDetector;
