# Choix techniques
Les choix techniques se sont portés sur une architecture API REST. Le serveur est développé sur Node JS, la base de donnée NoSQL est MongoDB(avec Mongoose) et l’application client sur Angular, avec PrimeNG pour certains composants.
## Pourquoi ?
Ne travaillant quasiment que sur de l’architecture REST, ce choix s’est imposé naturellement. L’architecture REST permet de bien séparé et de rendre indépendantes les applications client et serveur.
Le choix de Node pour le serveur, hormis le fait qu’il ait été imposé, m’a permis de me remettre dans cette techno. Le couple Angular/Node permet notamment de rester dans un environnement Javascript.
En ce qui concerne Angular pour la partie client, ce choix a été fait pour 2 raisons. Premièrement, Angular est le thème de cette formation. Ensuite, je travaille beaucoup avec ce framework. Son avantage est qu’il est vraiment orienté composant, complet et très suivi. De plus, il intègre nativement TypeScript. Enfin, Angular CLI (comme EmberJS) permet de créer des projets, générer des composants, directives, service, pipe, etc… De plus, plusieurs framework CSS proposent des composants UI s’intégrant à un projet Angular.
Etat d’avancement
Enregistrement d’une pizza (name, price, ingredients), modification, suppression, affichage. Création d’un panier et enregistrement en base d’une commande.
# Difficultés rencontrées
Quelques phases de blocage. 
*	Intégration de certains composants de PRIMENG, comme l’obligation de créer une route par défaut pour intégrer « SplitButton »
*	Devoir initialiser les variables d’un type créé par Interface
*	Problème d’alimentation de tableau (les derniers éléments écrasaient les autres)
# Etonnement(s), satisfaction(s)
*	Toujours des découvertes sur Angular (formulaires, template, etc…)
*	Interaction entre composants
*	Avancement du projet
*	Redécouverte de MongoDB
*	La météo…
