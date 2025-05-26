/**
 * Redirige l'utilisateur vers un navigateur réel en dehors de l'application intégrée
 * Utilise différentes méthodes selon le système d'exploitation (iOS, Android, Desktop)
 * 
 * @param {string} url - URL vers laquelle rediriger
 * @param {Object} options - Options de redirection
 * @param {Function} options.onClose - Fonction à exécuter après la tentative de redirection
 * @param {number} options.iosTimeout - Délai avant le fallback sur iOS (en ms)
 * @param {number} options.androidTimeout - Délai avant le fallback sur Android (en ms)
 * @returns {void}
 */
export const redirectToBrowser = (url, options = {}) => {
  // Ne s'exécute que dans un environnement navigateur
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return;
  }

  let currentUrl;
  if (!url) {
    currentUrl = window.location.href;
  }else{
    currentUrl = url;
  }

  const {
    onClose = () => {},
    iosTimeout = 1500,
    androidTimeout = 2000
  } = options;

  // Utilise l'URL fournie
  const userAgent = navigator.userAgent;
  
  if (/iPhone|iPad/.test(userAgent)) {
    // iOS - Multiple approches pour une meilleure compatibilité
    try {
      // Méthode 1: Essayer d'ouvrir dans Safari en utilisant le schéma URL
      const safariUrl = `x-safari-https://${currentUrl.replace(/^https?:\/\//, '')}`;
      window.location.href = safariUrl;
      
      // Fallback 1: window.open standard après un délai
      setTimeout(() => {
        window.open(currentUrl, '_blank', 'noopener,noreferrer');
      }, iosTimeout);
      
      // Fallback 2: Navigation directe en dernier recours
      setTimeout(() => {
        if (confirm('Redirection automatique échouée. Appuyez sur OK pour aller sur le site.')) {
          window.location.href = currentUrl;
        }
      }, iosTimeout * 2);
    } catch (error) {
      // Fallback direct en cas d'erreur
      window.open(currentUrl, '_blank', 'noopener,noreferrer');
    }
  } else if (/Android/.test(userAgent)) {
    // Android - intent pour ouvrir dans le navigateur par défaut
    const intent = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;action=android.intent.action.VIEW;end`;
    window.location.href = intent;
    
    // Fallback après un délai
    setTimeout(() => {
      window.open(currentUrl, '_blank', 'noopener,noreferrer');
    }, androidTimeout);
  } else {
    // Desktop ou autres appareils - méthode standard
    window.open(currentUrl, '_blank', 'noopener,noreferrer');
  }
  
  // Exécute la fonction de callback
  onClose();
};

export default redirectToBrowser;
