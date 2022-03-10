# Workshop - My Todolist

## Documentation:

1. React: [link](https://fr.reactjs.org/)

## 1. Lancement du projet

```shell
$> npm install && npm start
```

Votre application React est maintenant disponible à cette adresse : http://localhost:3000.

> 💡: Une fois l'application lancée, elle est automatiquement mise à jour à chaque modification du code.

## 2. Votre premier composant

Nous allons créer le premier composant de notre Todolist. Son role est d'afficher la description d'une tache de notre todolist.

> 💡: Pour ce workshop nous allons pas utiliser les classes Javascript pour créer des composants. Vous devez utilisez des ```Functional Components```. [Ici](https://beta.reactjs.org/learn) la doc de React réécris entièrement avec des ```Functional Components```.

Vous devez completer le retour de la fonction.

```JSX
    function Task({description}) (
        return (...)
    )
```

Pour afficher votre composant ```Task```, copiez cette ligne dans le composant ```Àpp```:

```JSX
    <Task description="Lire la doc de React" />
```

## 3. Afficher la liste des taches.

### Afficher la liste

Nous allons mettre en place le composant qui affiche la liste de toutes les taches en cours.

```JSX
    function List(props) {
        const [taskList, setTaskList] = React.useState(["finish step 2", "finish step 3"]);
    return (...)
}
```

- `taskList` est une variable constante qui peux être changé uniquement avec la fonction setTaskList
- `taskList` contient la description de nos taches.
  
> 💡: Pour parcourir des tableaux la fonction [map](https://reactjs.org/docs/lists-and-keys.html) est très utile.

### Ajouter des fonctionnalités.

Pour que notre composant `List` soit fonctionnel nous devons ajouter:
 - Afficher un `input` et un `button` pour ajouter un nouvel element dans notre task list.
  - Pensez à stocker la valeur de l'input dans un nouveau `React.useState()` 
  - Vous devrez créez une fonction qui met à jour la variable `taskList` quand le boutton est cliqué
- Afficher un `button` à coté de la tache pour la supprimer
  - Pensez à créer une fontion qui met à jour la variable `taskList` lorsque que celui-ci est cliqué.

> 💡: Pour comprendre comment gérer les évèments avec React c'est par [ici](https://fr.reactjs.org/docs/handling-events.html)


## 4. Sauvegardez votre TodoList avec une API

### Prise en main de l'API

Nous allons utilisez une API pour stocker nos taches. Toutes les routes sont disponibles [ici](https://documenter.getpostman.com/view/8858534/SW7dX7JG?version=latest#97c7e1ce-0a37-4d6d-89af-aba8f34f1f4c).

Pour créer un compte avec le terminal:
```Bash
curl --location --request POST 'https://api-nodejs-todolist.herokuapp.com/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "YOUR_FAKE_NAME",
	"email": "YOUR_FAKE_EMAIL",
	"password": "YOUR_LONG_PASSWORD",
	"age": YOUR_FAKE_AGE
}'
```

Le champ ```token``` contiens la string que vous allez utiliser pour vous identifiez avec l'api.

Si vous voulez ajoutez une nouvelle todo:

```Bash
curl --location --request POST 'https://api-nodejs-todolist.herokuapp.com/task' \
--header 'Authorization: Bearer REPLACE_YOUR_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{
	"description": "comptez ses xp hub"
}'
```

Enfin pour consultez toute vos todo:

```
curl --location --request GET 'https://api-nodejs-todolist.herokuapp.com/task' \
--header 'Authorization: Bearer REPLACE_YOUR_TOKEN_HERE' \
--header 'Content-Type: application/json'
```

### Utilisez l'API dans react

Dans le ficher ``request.js`` se trouve toute les fonctions pour manipuler votre todolist avec l'API.

Pour les importer ajoutez cette ligne, dans votre fichier ```App.js```:

```JSX
import { addTask, delTask, getAllTask } from './request';
```

Faites maintenant en sorte que votre todolist affiche les valeurs récupérer par la fonction ```getAllStask```, pour cela vous allez avoir besoin des react [useEffect](epihttps://reactjs.org/docs/hooks-effect.html)

Ensuite dans appelez les fonctions ```delTask``` et ```addTask``` dans les fonctions qui update la liste.

> 💡: N'oubliez pas que ces fonctions sont async vous devez donc utiliser le mot clée await.

## Pour aller plus loin:

Bravo vous avez terminer le workshop.
Si vous voulez améliorez votre todolist vous pouvez ajoutez du css, en utilisant bootstrap ou material ui.
