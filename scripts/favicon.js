// Archivo: favicon.js
const favicons = `
    <link rel="apple-touch-icon" sizes="180x180" href="../assets/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="192x192" href="../assets/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="../assets/android-chrome-512x512.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
`;

// Inserta los favicons dinámicamente en el <head> del documento
document.head.insertAdjacentHTML('beforeend', favicons);
