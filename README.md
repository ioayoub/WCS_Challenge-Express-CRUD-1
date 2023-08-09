### Avant de commencer

- Pensez à installer votre projet avec le package de votre choix.
- Faites votre choix : `npm`, `yarn`, `pnpm`

### Instructions du challenge : 

Lorsque vous lancez le projet avec 

```js
pnpm run dev
```

Vous arrivez sur la page d’accueil (Home.jsx)

![image](https://github.com/ioayoub/WCS_Challenge-Express-CRUD-1-correction/assets/66207978/41fdb3fd-20c0-44a0-ba87-2ecc3a300761)

Lorsque vous cliquez sur “Créer un post”, un formulaire s’affiche.

**Pensez à vous baser sur la logique en place concernant les “Items” dans le dossier BACKEND.**

## Exercice n°1 

Mettez en place la logique dans REACT pour soumettre les informations saisies dans ce formulaire.

![image](https://github.com/ioayoub/WCS_Challenge-Express-CRUD-1-correction/assets/66207978/383fe207-383c-4ced-8da9-ccb36c8dbc8a)

## Exercice n°2 

Récupérez les informations saisies et les envoyer vers votre backend.

- Définissez un nouveau fichiers dans le dossier “routers” pour réorienter toutes les requêtes liées aux routes “/post”
- Créez votre base de données et alimentez le fichier .env (vous pouvez vous servir du fichier database.sql situé à la racine de votre dossier backend.
- Créez un controller “postControllers.js” qui contiendra la logique permettant de créer un nouveau post.
- Dans le fichier PostManager, créez une nouvelle fonction permettant d’intéragir avec votre base de données afin d’insérer les données récupérées.

## Exercice n°3 

Mettez en place la logique REACT pour récupérer TOUS les post lors du clic sur le bouton “Afficher tous les posts” ainsi que la logique backend afin de récupérer toutes les entrées disponibles.

## Exercice n°4

Mettez en place la logique REACT pour récupérer UN post lors du clic sur le bouton “Détails” ainsi que la logique BACKEND permettant cette interaction.

## BONUS n°1 

Mettez en place la logique Frontend/Backend afin de SUPPRIMER un post depuis la liste des posts.

## BONUS°2

Mettez en place la logique Frontend/Backend afin de MODIFIER un post depuis la liste des posts.
