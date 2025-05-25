# BIB Detector 🔍

![Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

**BIB Detector** (Built-In Browser Detector) est une bibliothèque JavaScript légère pour détecter quand votre application web s'exécute dans un navigateur intégré à une application de réseau social ou autre.

## ✨ Fonctionnalités

- 🔍 Détecte les navigateurs intégrés des principaux réseaux sociaux et applications de messagerie
- 🧩 Fournit un hook React et une fonction utilitaire JavaScript
- 🚀 Implémentation JavaScript pure pour une compatibilité maximale
- 📱 Léger et facile à intégrer dans n'importe quel projet

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

## 📋 Navigateurs/Applications supportés

BIB Detector peut identifier les navigateurs intégrés de :

- **Réseaux sociaux** :
  - Facebook
  - Instagram
  - TikTok
  - Twitter
  - Snapchat
  - LinkedIn
  - Reddit
  - Pinterest

- **Applications de messagerie** :
  - Facebook Messenger
  - Telegram (avec distinction Android/iOS)
  - Discord
  - WeChat
  - LINE
  - Viber

## 🛠️ Référence API

### `useBuiltInBrowserDetector()`

Un hook React qui retourne un objet avec les propriétés suivantes :

```javascript
{
  isBuiltInBrowser: Boolean, // Si un navigateur intégré a été détecté
  isFacebook: Boolean,       // Si Facebook a été détecté
  isInstagram: Boolean,      // Si Instagram a été détecté
  isTikTok: Boolean,         // Si TikTok a été détecté
  // ... et d'autres propriétés pour chaque réseau social
}
```

### `detectBuiltInBrowser()`

Une fonction utilitaire qui retourne le même objet que le hook, mais peut être utilisée en dehors de React.
```

## 📄 License

MIT

---

Made with ❤️ for web developers who need to handle in-app browsers
