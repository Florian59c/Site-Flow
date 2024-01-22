import IMG_interrogation from "../../img/screenshot/point d'interrogation.png";
import IMG_site_de_Flow from "../../img/screenshot/Site de Flow.png";
import IMG_marvel from "../../img/screenshot/Marvel Univers.png";
import IMG_hotel from "../../img/screenshot/Hotel Deluxe.png";
import IMG_disney from "../../img/screenshot/Disney+.png";
import IMG_search_cars from "../../img/screenshot/Search Cars.png";
import IMG_clean3000 from "../../img/screenshot/Clean3000.png";
import IMG_roll_dice from "../../img/screenshot/Roll Dice.png";
import IMG_point_n_click from "../../img/screenshot/Point'n'Click.png";
import IMG_copilote from "../../img/screenshot/Copilote.png";
import IMG_weteknow from "../../img/screenshot/WeTeKnow.png";

const ListeProjets = [
    {
        id: 0,
        nom: "Le site de Flow",
        titre: "Présentation du site",
        url: "presentation-du-site",
        lienImage: IMG_site_de_Flow,
        listLangages: "React / Git / Ant Design",
        presentation: "Ce site est fait avec React et est responsive. Il possède trois pages en tout : la page d’accueil, la page listant mes projets ainsi que la page donnant des détails sur chaque projet.\nLa page d’accueil possède une brève description de l'application ainsi qu'un bouton de redirection permettant d'accéder à la liste des projets.\nLa page listant mes projets est générée dynamiquement grâce à un « .map » effectué dans un tableau d’enregistrement. Ce tableau liste toutes les informations de mes projets.\nPour la page des détails sur un projet, elle est générée dynamiquement via une comparaison avec l’URL répertorié dans l’enregistrement et celui passé dans les « props ». Donc, via un « .find », je récupère les informations demandées dans un tableau pour les afficher à l’écran.",
        details: "Sur la page donnant les détails d’un projet, plusieurs conditions sont effectuées pour vérifier si le contenu est vide, afin d’adapter la page et de la rendre agréable à consulter dans tous les cas de figure possible.\nUn ternaire est également appliqué à toute la page pour gérer un changement d’URL de l’utilisateur et d'afficher un message d’erreur et une redirection.\nIl existe également une page « Not Found » qui apparaît lorsqu’une page n’est pas trouvée.\nPour finir, le « Header » et le « Footeur » sont des composants réutilisés sur une grande partie du site.",
        lienSite: "https://le-site-de-flow.web.app/",
        lienGitHub: "https://github.com/Florian59c/Site-Flow",
        lienFigma: "",
        lienDocumentation: "",
        // video : [
        // {
        //     id: 1,
        //     name: "",
        //     url: ""
        // },
        // {
        //     id: 2,
        //     name: "",
        //     url: ""
        // }
        // ],
    },
    // {
    //     id: 1,
    //     nom: "???",
    //     titre: "En cours...",
    //     url: "en-cours",
    //     lienImage: IMG_interrogation,
    //     listLangages: "Technos à définir...",
    //     presentation: "Projet personnel en cour de construction. Plus d'informations à venir...",
    //     details: "",
    //     lienSite: "",
    //     lienGitHub: "",
    // lienFigma: "",
    // lienDocumentation: ""
    // },
    {
        id: 9,
        nom: "WeTeKnow",
        titre: "WeTeKnow",
        url: "weteknow",
        lienImage: IMG_weteknow,
        listLangages: "React / Node.JS / MongoDB / GitHub / Jira / Tailwind",
        presentation: "WeTeKnow est un projet sur lequel je suis intervenu lors de mon stage à l'incubateur numérique. Il s'agit d'une application web permettant à des formateurs de créer des quiz et à des stagiaires de les réaliser.\nEn plus de cela, l'application comporte une authentification avec gestion de rôle et modification de profil, la possibilité pour des formateurs d'envoyer des invitations ou de bannir des stagiaires, l'affichage de statistiques via des scores ou le nombre de quiz réalisé et une gestion de groupes d'études.\nLes styles sont intégralement gérés avec le framework CSS « Tailwind ». Qui plus est, la première version de l'application étant destiné au desktop, aucune version responsive n'a été créé.\nLe site a été pensé de sorte qu'il y ai le mien de scroll possible et que toute informations tiennent sur les différentes pages. Ainsi, une grande quantité d'actions sont gérées via des fenêtres « modales ».",
        details: "J'ai intégré le projet après son commencement, dans une équipe de quatre développeurs et une designeuse. Ainsi, j'ai réussi à m'adapter rapidement à un projet conséquent, à la manière de développer de mes collègues, mais également aux technos que je ne connaissais pas tel que « Tailwind ».",
        lienSite: "",
        lienGitHub: "",
        lienFigma: "https://www.figma.com/file/Cs6j4IPavy9sSyQMNc4tRk/WeTeKnow?type=design&node-id=1-3&mode=design&t=rXqzPuThR9AjrLwi-0",
        lienDocumentation: "https://www.behance.net/gallery/187747797/WETEKNOW-QUIZFIGMA-MAQUETTAGE-PROTOTYPAGE-ANIMATIONS"
    },
    {
        id: 8,
        nom: "Copilote",
        titre: "Copilote",
        url: "copilote",
        lienImage: IMG_copilote,
        listLangages: "React / React Native / GraphQL / Apollo / Docker / Typeorm / TypeScript / JWT / Jest / CI-CD",
        presentation: "Copilote est le projet fil rouge réalisé en groupe pendant ma formation CDA à la « Wild Code School ». Il s'agit d'une application permettant de créer ou de rejoindre un covoiturage.\nIl possède un back et deux front pour le web (responsive) et pour l'application mobile (native). Le back utilise les technos « Type GraphQL », l'interface « Apollo », « TypeORM » et une base de données en « Postgres ». Le front utilise « React », « TypeScript », une authentification avec « JWT » et des tests unitaires avec « Jest ». Il y a aussi une partie mobile en « React Native » dont le visuel et la manière de l'utiliser est différent. Le tout est « Dockerisé » et lié avec « Docker-Compose ». De plus, une « CI-CD » est configuré via les « GitHub Actions ».",
        details: "C'est ce projet que j'ai choisi de présenter lors du passage de mon titre professionnel et sur lequel j'ai réalisé mon dossier de projet de fin de formation.",
        lienSite: "https://neumann4.wns.wilders.dev/",
        lienGitHub: "https://github.com/WildCodeSchool/2211-wns-neumann-copilot",
        lienFigma: "https://www.figma.com/file/B1SUjTR4HY6Xqaibefp53z/copilot?type=design&node-id=0-1&mode=design",
        lienDocumentation: "https://docs.google.com/document/d/1FisUr0ik_HSxBbNzFaAHs7i7ZCF0SnG4Jj5ci9H59TI/edit?usp=sharing"
    },
    {
        id: 7,
        nom: "Point'n'Click",
        titre: "Point'n'Click",
        url: "point-n-click",
        lienImage: IMG_point_n_click,
        listLangages: "React / GraphQL / Apollo / Typeorm / TypeScript / JWT",
        presentation: "Il s'agit d'un jeu d'enquête en point'n'click dans lequel il faut fouiller dans l'ordinateur d'une personne disparue. Le jeu autorise la connexion et l'inscription d'utilisateur et permet d'enregistrer le temps que le joueur met pour terminer le jeu sous forme de « meilleur score ». De plus, un ranking est disponible à la fin du jeu et affiche le score et le pseudo des 10 meilleurs. La connexion n'est pas obligatoire pour jouer et terminer les enquêtes (seulement, le score ne sera pas enregistré dans ce cas).\n Diverses énigmes sont disponible et suivent un fil conducteur pour avancer dans le scénario. Ces énigmes sont essentiellement basées sur le visuel, la réflexion, la mémoire, et surtout, le clic !",
        details: "Le projet est toujours en cours. Le back est terminé et fonctionne parfaitement. Côté front, il est possible de s'authentifier. Tous les visuels externes au jeu (les menus...) sont terminés ainsi que la première énigme. Les autres sont encore en cours de création et l'application n'est donc pas hébergée pour le moment.",
        lienSite: "",
        lienGitHub: "https://github.com/Florian59c/Point-n-click",
        lienFigma: "https://www.figma.com/file/8Bz4C1wgaHi1KJYSMwijTG/Point-n-click-Maquettes?type=design&mode=design&t=2OFJ7AjCD5BBD37t-0",
        lienDocumentation: ""
    },
    {
        id: 6,
        nom: "Roll Dice",
        titre: "Roll Dice",
        url: "roll-dice",
        lienImage: IMG_roll_dice,
        listLangages: "React / Typescript",
        presentation: "Cette application permet aux utilisateurs de lancer des dés parmi un panel prédéfini.\nL'application possède une page principale sur laquelle l'on choisie le dé que l'on souhaite lancer.\nUne fois le type de dé sélectionné, il est possible de le lancer ou le relancer, réinitialiser le lancer précédent ou changer de dé. Au clic sur le bouton « Lancer le dé », une animation se lance avant d'afficher le résultat. Le bouton « réinitialiser le dé » permet d'effacer un résultat et le bouton « Changer de dé » permet de revenir à la page principale.",
        details: "J'ai choisi de créer ce projet pour davantage me familiariser avec TypeScript et parce que je suis adepte des jeux de plateaux et jeux de rôles.",
        lienSite: "https://roll-dice-flow.web.app/",
        lienGitHub: "https://github.com/Florian59c/roll-dice",
        lienFigma: "",
        lienDocumentation: ""
    },
    {
        id: 5,
        nom: "Disney +",
        titre: "Disney +",
        url: "disney+",
        lienImage: IMG_disney,
        listLangages: "React",
        presentation: "Disney + est le premier projet que j’ai fait en React. De ce fait, il fonctionne grâce à la fonction « render » et ne contient aucun « Hooks ». De plus, les informations sont récupérées grâce à une API. Le but de ce projet était de me familiariser avec Reat en recréant une copie de la première version du site Disney +.\nLe site contient trois pages : la page d’accueil, une page contant les films triés par rapport aux company, et une page de description pour chaque film.\nLe « Header » et les boutons listant les conpany sont des composants réutilisés à plusieurs endroits. Le « Header » est utilisé sur toutes les pages et redirige sur la page d’accueil.",
        details: "La page d’accueil est découpée en trois parties : les boutons des company qui permettent d’aller sur la page dédiée à chaque studio, la partie nouveauté qui affiche 6 films parmi les plus récentes recensés dans l’api, et la partie suggestion qui affiche 3 films ayant le paramètre activé dans l’api.\nCliquer sur le bouton d’un studio nous amène sur la page de la company, générée dynamiquement. Elle affiche la liste des films du studio.\nUn clic sur l’affiche d’un film, sur la page d’accueil ou la page du studio, enverra sur la page de description du film. Les descriptions y sont générées dynamiquement de la même manière que pour la page des company.\nLa partie « Flexbox » et responsive et géré grâce au système de grille d’ « Ant Design ».\nIl y a également une page « NotFound » qui affiche un message d’erreur lorsque l’URL est incorrect.",
        lienSite: "https://disney-fcdw.web.app/#/",
        lienGitHub: "https://github.com/Florian59c/Disney",
        lienFigma: "",
        lienDocumentation: ""
    },
    {
        id: 4,
        nom: "Search Cars",
        titre: "Search Cars",
        url: "search-cars",
        lienImage: IMG_search_cars,
        listLangages: "React Native",
        presentation: "Search Car est un projet en React Native. Il s’agit d’une application permettant de louer des véhicules.\nLa page d’accueil possède simplement un bouton indiquant le nombre de véhicules à découvrir.\nAppuyer dessus, permet d’accéder à la liste des véhicules. Les informations sont affichées de manière dynamique en faisant appel à un tableau d’enregistrement. Ce sont également des boutons permettant de consulter les détails du véhicule choisi.\nSur la page de détails, le véhicule est trouvé via les « props » et ses informations sont récupéré depuis le tableau dans un « state » afin de les afficher dynamiquement.",
        details: "Search Car est le premier projet que j’ai fait en React Native et est, de ce fait, très basique. Je n'ai donc pas prévu de l'ajouté au Play Store en l’état.",
        lienSite: "",
        lienGitHub: "https://github.com/Florian59c/Search_Cars",
        lienFigma: "",
        lienDocumentation: ""
    },
    {
        id: 3,
        nom: "Clean3000",
        titre: "Clean3000",
        url: "clean3000",
        lienImage: IMG_clean3000,
        listLangages: "React / Git",
        presentation: "Clean 3000 est un projet conçu en condition réel. Le but était d’informatiser un formulaire papier pour un client fictif représentant une société de lavage de vitres. Les demandes client étaient de pouvoir renseigner des informations (sur l’entreprise, le technicien et la date d’intervention, suivie de possibles commentaires), puis de les afficher automatiquement à l’écran pour en faire un « screenshot ». Les technologies et la mise en forme (le maquettage) étaient totalement libres (bien que nous étions limitées à des langages Front-end). Nous devions rendre le projet le soir même (8 heures de travail) afin de le présenter au client (toujours fictif) le lendemain.\nJ’ai fait le choix de React et d’envoyer les informations sur une page à part.",
        details: "J’ai commencé par maquetter le projet sur « Figma ». Puis j’ai entamé le développement en « Mobile first », en m’inspirant de mes maquette.\nLa page principale contient un « Header », qui est le logo de la société cliente, et est un composant réutilisé pour la deuxième page. Elle contient, aussi, quatre formulaires que le technicien doit remplir. Un clic sur le bouton « enregistrer » envoi sur la seconde page avec les informations remplient précédemment.\nCette page ne contient que les informations récupérées via les « props ».",
        lienSite: "",
        lienGitHub: "https://github.com/Florian59c/clean3000",
        lienFigma: "",
        lienDocumentation: ""
    },
    {
        id: 2,
        nom: "Hôtel Deluxe",
        titre: "gestionnaire d'hôtel",
        url: "hotel-deluxe",
        lienImage: IMG_hotel,
        listLangages: "HTML / CSS / JS / Git",
        presentation: "L’Hôtel Deluxe est un site qui permet de gérer les entrées et sorties d’un hôtel. Ce projet a été effectué en binôme avec l’aide de Git. Pour le bon déroulement du développement, nous avons découpé le site en deux : la partie « entrée » et la partie « sortie » que nous nous sommes repartie.\nTout le site est avant tout en HTML / CSS et est responsive. Git a été utilisé pour nous partager le travail au fur et à mesure des avancements de chacun. Puisque les styles étaient communs, nous nous étions mis d’accord sur les noms des classes à utiliser afin de séparer également le travail sur les styles.\nLa partie calcul est faite en JS et permet d’ajouter un client de l’hôtel, puis de lui dire le prix de son séjour au moment de son départ.",
        details: "Tout le site tient sur une seule page et est essentiellement constitué de « Front ». L’entrée du client se fait via un formulaire et les données sont temporairement enregistrées dans la page. Actualiser ou quitter la page effacera les données.\nEn sortie, il suffit d’avoir le nom et prénom du client pour que le calcul du prix se fasse avec les données enregistrées en entrée, puis le prix est affiché en bas de page.\nIl y a également les gestions d’erreurs dans le cas où le client ne serait pas trouvé. Un message d’erreur apparaîtra à la place du prix.",
        lienSite: "https://hotel-deluxe-fcdw.web.app/",
        lienGitHub: "https://github.com/Florian59c/Hotel-deluxe",
        lienFigma: "",
        lienDocumentation: ""
    },
    {
        id: 1,
        nom: "Marvel Univers",
        titre: "Marvel Univers",
        url: "marvel-univers",
        lienImage: IMG_marvel,
        listLangages: "HTML / CSS",
        presentation: "Marvel Univers est le premier projet que j’ai effectué (au tout début de mon apprentissage) et est principalement constitué de styles statiques. Il contient une page principale permettant de découvrir l’univers de Marvel et les super-héros les plus représentatifs.\nLa page d’accueil présente quatre héros parmi les plus emblématiques du studio, des bandes annonces de film, des dates de sorties (bien que dépassé depuis quelques années), un formulaire de contact et la carte « Google map » de l’emplacement du siège social.\nDe plus, le « header » contient des redirections vers différentes parties du site et le « footer » redirige vers les réseaux sociaux.",
        details: "Quelques améliorations peuvent être envisagées. Le site n’étant pas responsive, une modification des styles pour adapter le contenu aux mobiles et tablettes est envisagé. Ensuite, effectuer quelque ajustement graphique tel que des effets au survol serait le bienvenu. De plus, les pages des super-héros sont créées, mais n’ont aucun contenu ; il pourrait être intéressant d’y ajouter une description de chacun des quatre héros.",
        lienSite: "https://marvel-univers-fcdw.web.app/",
        lienGitHub: "https://github.com/Florian59c/MarvelUnivers",
        lienFigma: "",
        lienDocumentation: ""
    }
];

export default ListeProjets