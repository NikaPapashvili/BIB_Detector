# BIB Detector 🔍

![Version](https://img.shields.io/badge/version-1.2.0-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

**BIB Detector** (Built-In Browser Detector) est une bibliothèque JavaScript légère pour détecter quand votre application web s'exécute dans un navigateur intégré à une application de réseau social ou autre.

## ✨ Fonctionnalités

- 🔍 Détecte les navigateurs intégrés des principaux réseaux sociaux et applications de messagerie
- 🔄 Redirige les utilisateurs vers un navigateur non-embeded pour une meilleure expérience
- 🧩 Fournit un hook React et des fonctions utilitaires JavaScript
- 📱 Léger et facile à intégrer dans n'importe quel projet

## 📋 Navigateurs/Applications supportés

                            | IOS    | ANDROID
- Instagram (`isInstagram`) | ❌     | ✅
- Snapchat (`isSnapchat`)   | ❌     | ❌
- TikTok (`isTikTok`)       | ❌     | ❌
- Telegram (`isTelegram`)   | ❌     | ✅
- Messenger (`isMessenger`) | ❌     | ❌
- Twitter (`isTwitter`)     | ❌     | ❌
- Facebook (`isFacebook`)   | ❌     | ❌
- LinkedIn (`isLinkedIn`)   | ❌     | ❌
- Reddit (`isReddit`)       | ❌     | ❌
- Pinterest (`isPinterest`) | ❌     | ❌
- WhatsApp (`isWhatsApp`)   | ❌     | ❌
- WeChat (`isWeChat`)       | ❌     | ❌
- LINE (`isLine`)           | ❌     | ❌
- Viber (`isViber`)         | ❌     | ❌

## 📦 Installation

```bash
npm install bib-detector
# or
yarn add bib-detector
```

## 💪 Utilisation

### Avec le Hook React

```jsx
import React from 'react';
import { useBuiltInBrowserDetector } from 'bib-detector';

const MyComponent = () => {
  const { isBuiltInBrowser, isFacebook, isInstagram, isTikTok } =useBuiltInBrowserDetector();

  return (
    <div>
      {isBuiltInBrowser ? (
        <div>
          Vous utilisez un navigateur intégré !
          {isFacebook && <p>Navigateur Facebook détecté</p>}
          {isInstagram && <p>Navigateur Instagram détecté</p>}
          {isTikTok && <p>Navigateur TikTok détecté</p>}
          {/* Vérifiez d'autres réseaux sociaux */}
        </div>
      ) : (
        <p>Vous utilisez un navigateur web standard</p>
      )}
    </div>
  );
};
```

### Avec la fonction utilitaire (Sans React)

```js
import { detectBuiltInBrowser } from 'bib-detector';

// Peut être utilisé dans n'importe quel environnement JavaScript
const result = detectBuiltInBrowser();

if (result.isBuiltInBrowser) {
  console.log('Exécution dans un navigateur intégré');
  
  if (result.isFacebook) {
    console.log('Navigateur Facebook détecté');
  }
  
  if (result.isInstagram) {
    console.log('Navigateur Instagram détecté');
  }
}
```

### `useBuiltInBrowserDetector()`

Un hook React qui retourne un objet avec les propriétés suivantes :

```javascript
{
  isBuiltInBrowser: Boolean, // Si un navigateur intégré a été détecté
  isFacebook: Boolean,       // Si Facebook a été détecté
  isInstagram: Boolean,      // Si Instagram a été détecté
  isTikTok: Boolean,         // Si TikTok a été détecté
  // ... et d'autres propriétés pour chaque réseau social
  appName: String,           // Le nom de l'application détectée (ex: 'Facebook', 'Instagram', etc.)
}
```

#### Utilisation de `appName`

La propriété `appName` est particulièrement utile lorsque vous souhaitez afficher ou utiliser le nom de l'application détectée de manière dynamique :

```jsx
const { isBuiltInBrowser, appName } = useBuiltInBrowserDetector();

return (
  <div>
    {isBuiltInBrowser && (
      <p>Vous utilisez le navigateur intégré de {appName}</p>
    )}
  </div>
);
```
```

### `detectBuiltInBrowser()`

Une fonction utilitaire qui retourne le même objet que le hook, mais peut être utilisée en dehors de React.

### `redirectToBrowser(url, options)`

Une fonction utilitaire qui redirige l'utilisateur vers un navigateur réel en dehors de l'application intégrée.

```javascript
import { redirectToBrowser } from 'bib-detector';

// Utilisation simple
redirectToBrowser('https://example.com');

// Utilisation avec options
redirectToBrowser('https://example.com', {
  onClose: () => console.log('Redirection tentée'),
  iosTimeout: 2000,    // Délai avant fallback sur iOS (ms)
  androidTimeout: 2500 // Délai avant fallback sur Android (ms)
});

// Si aucune URL n'est fournie, l'URL actuelle sera utilisée
redirectToBrowser();
```

## 📄 License

MIT

---