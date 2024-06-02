Assurez-vous que vous avez les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure recommandée)
- npm (généralement inclus avec Node.js)
- [MySQL](https://www.mysql.com/) (ou [XAMPP](https://www.apachefriends.org/index.html) pour une installation facile)

## Installation

### Front-end (React)

1. Clonez ce dépôt sur votre machine locale en utilisant git :
    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo-frontend.git
    cd votre-repo-frontend
    ```
2. Installez les dépendances nécessaires :
    ```bash
    npm install
    ```
3. Démarrez l'application :
    ```bash
    npm start
    ```

Cela démarre le serveur de développement et ouvre votre application dans le navigateur. Si ce n'est pas le cas, ouvrez votre navigateur et allez à l'adresse [http://localhost:3000](http://localhost:3000).

### Back-end (Node.js)

1. Clonez ce dépôt sur votre machine locale en utilisant git :
    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo-backend.git
    cd votre-repo-backend
    ```
2. Installez les dépendances nécessaires :
    ```bash
    npm install
    ```
3. Assurez-vous que MySQL est lancé sur le port par défaut 3306 (par exemple, en utilisant [XAMPP](https://www.apachefriends.org/index.html)).
4. Démarrez l'application :
    ```bash
    npm start
    ```