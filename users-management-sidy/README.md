### User Management by Sidy

User Management by Sidy est une application React.js permettant de gérer une liste d'utilisateurs. L'application récupère les données des utilisateurs depuis une API et les affiche dans une interface web.


## Installation

1. Installez les dépendances :
    npm install


2. Démarrez le serveur de développement :
    npm start


## Usage

Après avoir démarré le serveur de développement, ouvrez [http://localhost:3000/users] dans votre navigateur web pour voir l'application.


## Fonctionnalités

- Afficher une liste d'utilisateurs récupérés depuis une API externe
- Créer un nouvel utilisateur
- Voir les détails d'un utilisateur
- Mettre à jour les informations d'un utilisateur
- Supprimer un utilisateur

## API

L'application interagit avec les endpoints API suivants :

- `GET https://api.escuelajs.co/api/v1/users` : Récupérer une liste d'utilisateurs
- `GET https://api.escuelajs.co/api/v1/users/${id}` : Récupérer un utilisateur par ID
- `POST https://api.escuelajs.co/api/v1/users` : Créer un nouvel utilisateur
- `PUT https://api.escuelajs.co/api/v1/users/${id}` : Mettre à jour un utilisateur par ID
- `DELETE https://api.escuelajs.co/api/v1/users/${id}` : Supprimer un utilisateur par ID

Ces appels API sont définis dans le fichier `users-api.ts` en utilisant Axios.


## Composants

### Users

Le composant `Users` est le composant principal qui affiche la liste des utilisateurs et un bouton pour créer un nouvel utilisateur.


### User

L'interface `User` définit la structure d'un objet utilisateur.


### UserCard

Le composant `UserCard` affiche les informations individuelles d'un utilisateur.


### CreateUserDialog

Le composant `CreateUserDialog` affiche une boîte de dialogue pour créer un nouvel utilisateur.


### UserDetails

Le composant `UserDetails` affiche les détails d'un utilisateur et permet de modifier son nom, son mail et son rôle ou de supprimer l'utilisateur ou de retourner à l'accueil du site.

### Routes
Le fichier Routes.tsx est responsable de définir les routes de l'application en utilisant le module react-router-dom. Ce fichier configure les chemins d'accès et les composants qui doivent être rendus pour chaque route.