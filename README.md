# Amerikanska hus i Sverige

Progressiv webbapp (PWA) med en amerikansk bungalow i 3D (justerbar taklutning), fasad i tre färger, planlösningar för tre målgrupper och försäljningspris. Fungerar offline efter första besöket. Inga beroenden och inget byggsteg.

## Lägg upp på GitHub Pages

1. Skapa ett nytt repo på GitHub, till exempel `amerikanska-hus`.
2. Ladda upp alla filer i den här mappen (inklusive `icons/` och `.nojekyll`) till rotkatalogen.
3. Gå till Settings, Pages. Välj Source "Deploy from a branch", branch `main` och mapp `/ (root)`. Spara.
4. Efter någon minut finns appen på `https://DITT-ANVÄNDARNAMN.github.io/amerikanska-hus/`.

## Installera på mobilen

- **iPhone (Safari):** öppna adressen, tryck på Dela, välj "Lägg till på hemskärmen".
- **Android (Chrome):** öppna adressen, tryck på menyn och välj "Installera app" eller "Lägg till på startskärmen".

## Uppdatera

Ändra filerna, höj versionen i `sw.js` (`CACHE = 'amerikanska-hus-v2'`) och ladda upp igen. Utan det visar telefonen den gamla versionen från cachen.

## Filer

- `index.html`, `app.js`: appen
- `manifest.webmanifest`: namn, färger och ikoner
- `sw.js`: service worker för offline
- `icons/`: appikoner (192, 512, maskable, Apple)
