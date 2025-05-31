/**
 * Détecte si le navigateur actuel est un navigateur intégré dans une application de médias sociaux
 * ou une autre application. Cette fonction peut être utilisée dans n'importe quel environnement JavaScript.
 * 
 * @returns {Object} Un objet contenant les résultats de détection
 */
export const detectBuiltInBrowser = () => {
  // Ne s'exécute que dans un environnement navigateur
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return {
      isBuiltInBrowser: false
    };
  }

  const ua = navigator.userAgent.toLowerCase();
  
  // Détection des réseaux sociaux et navigateurs intégrés
  const result = {
    // Réseaux sociaux
    isFacebook: ua.includes('fban') || ua.includes('fbav') || ua.includes('fbios'),
    isInstagram: ua.includes('instagram'),
    isTikTok: ua.includes('tiktok'),
    isTwitter: ua.includes('twitter') || ua.includes('twitterandroid'),
    isSnapchat: ua.includes('snapchat'),
    isLinkedIn: ua.includes('linkedin'),
    isPinterest: ua.includes('pinterest'),
    isMessenger: ua.includes('messenger') || (ua.includes('fb') && ua.includes('messenger')),
    
    // Détection Telegram
    isTelegramAndroid: navigator.userAgent.includes("Android") && 
                      typeof window.TelegramWebview !== 'undefined',
    isTelegramIOS: navigator.userAgent.includes("iPhone") && 
                  typeof window.TelegramWebviewProxy !== 'undefined' && 
                  typeof window.TelegramWebviewProxyProto !== 'undefined',
    
    // Autres applications de messagerie et réseaux sociaux
    isWhatsApp: ua.includes('whatsapp'),
    isWeChat: ua.includes('micromessenger'),
    isLine: ua.includes('line'),
    isViber: ua.includes('viber'),
  };
  
  // Ajoute une propriété générale isTelegram
  result.isTelegram = result.isTelegramAndroid || result.isTelegramIOS;
  
  // Ajoute une propriété pour vérifier si un réseau social a été détecté
  result.isBuiltInBrowser = Object.entries(result)
    .filter(([key]) => key !== 'isBuiltInBrowser' && key.startsWith('is'))
    .some(([_, value]) => value);
  
  // Détermine le nom de l'application
  result.appName = '';
  
  // Utilise le premier réseau social détecté pour déterminer le nom de l'application
  switch (true) {
    case result.isFacebook:
      result.appName = 'Facebook';
      break;
    case result.isInstagram:
      result.appName = 'Instagram';
      break;
    case result.isTikTok:
      result.appName = 'TikTok';
      break;
    case result.isTwitter:
      result.appName = 'Twitter';
      break;
    case result.isSnapchat:
      result.appName = 'Snapchat';
      break;
    case result.isLinkedIn:
      result.appName = 'LinkedIn';
      break;
    case result.isReddit:
      result.appName = 'Reddit';
      break;
    case result.isPinterest:
      result.appName = 'Pinterest';
      break;
    case result.isMessenger:
      result.appName = 'Messenger';
      break;
    case result.isTelegram:
      result.appName = 'Telegram';
      break;
    case result.isWhatsApp:
      result.appName = 'WhatsApp';
      break;
    case result.isWeChat:
      result.appName = 'WeChat';
      break;
    case result.isLine:
      result.appName = 'LINE';
      break;
    case result.isViber:
      result.appName = 'Viber';
      break;
    default:
      result.appName = '';
  }
  
  return result;
};

export default detectBuiltInBrowser;
