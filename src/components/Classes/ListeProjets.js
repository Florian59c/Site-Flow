import IMG_interrogation from "../../img/screenshot/point d'interrogation.png";
import IMG_site_de_Flow from "../../img/screenshot/Site de Flow.png";
import IMG_marvel from "../../img/screenshot/Marvel Univers.png";
import IMG_hotel from "../../img/screenshot/Hotel Deluxe.png";
import IMG_disney from "../../img/screenshot/Disney+.png";
import IMG_search_cars from "../../img/screenshot/Search Cars.png";
import IMG_clean3000 from "../../img/screenshot/Clean3000.png";

const ListeProjets = [
    {
        id: 0,
        nom: "Le site de Flow",
        titre: "Présentation du site",
        url: "presentation-du-site",
        lienImage: IMG_site_de_Flow,
        listLangages: "React / Git",
        presentation: "Ce site est fait avec React et est responsive. Il possède trois pages en tout : la page d’accueil, la page listant mes projets ainsi que la page donnant des détails sur chaque projet.\nLa page d’accueil possède deux modes. La version « Light », qui est celle par défaut et la version « Dark » qui n’apparaît qu’après un clic sur le bouton. Le changement se fait grâce à la mise à jour du state (qui est un bouléen) ainsi qu’à des fonctions ternaires appliquées sur mes noms de classes afin de changer les styles.\nLa page listant mes projets est générée dynamiquement grâce à un « .map » effectué dans un tableau d’enregistrement. Ce tableau liste toutes les informations de mes projets.\nPour la page des détails sur un projet, elle est générée dynamiquement via une comparaison avec l’URL répertorié dans l’enregistrement et celui passé dans les « props ». Donc, via un « .find », je récupère les informations demandées dans un tableau pour les afficher à l’écran.",
        details: "Sur la page donnant les détails d’un projet, plusieurs conditions sont effectuées pour vérifier si le contenu est vide, afin d’adapter la page et de la rendre agréable à consulter dans tous les cas de figure possible.\nUn ternaire est également appliqué à toute la page pour gérer un changement d’URL de l’utilisateur et d'afficher un message d’erreur et une redirection.\nIl existe également une page « Not Found » qui apparaît lorsqu’une page n’est pas trouvée.\nPour finir, le « Header » et le « Footeur » sont des composants réutilisés sur une grande partie du site.",
        lienDocumentation: "",
        lienSite: "https://le-site-de-flow.web.app/"
    },
    {
        id: 1,
        nom: "???",
        titre: "En cours...",
        url: "en-cours",
        lienImage: IMG_interrogation,
        listLangages: "Technos à définir...",
        presentation: "Projet personnel en cour de construction. Plus d'informations à venir...",
        details: "",
        lienDocumentation: "",
        lienSite: ""
    },
    {
        id: 2,
        nom: "Marvel Univers",
        titre: "Marvel Univers",
        url: "marvel-univers",
        lienImage: IMG_marvel,
        listLangages: "HTML / CSS",
        presentation: "Marvel Univers est le premier gros projet que j’ai effectué (au tout début de mon apprentissage), et est principalement constitué de styles statiques. Il contient une page principale permettant de découvrir l’univers de Marvel et les super-héros les plus représentatifs.\nLa page d’accueil présente quatre héros parmi les plus emblématiques du studio, des bandes annonces de film, des dates de sorties (bien que dépassé depuis quelques années), un formulaire de contact et la carte « Google map » de l’emplacement du siège social.\nDe plus, le « header » contient des redirections vers différentes parties du site et le « footer » redirige vers les réseaux sociaux.",
        details: "Quelques améliorations peuvent être envisagées. Le site n’étant pas responsive, une modification des styles pour adapter le contenu aux mobiles et tablettes est envisagé. Ensuite, effectuer quelque ajustement graphique tel que des effets au survol serait le bienvenu. De plus, les pages des super-héros sont créées, mais n’ont aucun contenu ; il pourrait être intéressant d’y ajouter une description de chacun des quatre héros.",
        lienDocumentation: "",
        lienSite: ""
    },
    {
        id: 3,
        nom: "Hôtel Deluxe",
        titre: "gestionnaire d'hôtel",
        url: "hotel-deluxe",
        lienImage: IMG_hotel,
        listLangages: "HTML / CSS / JS / Git",
        presentation: "L’Hôtel Deluxe est un site qui permet de gérer les entrées et sorties d’un hôtel. Ce projet a été effectué en binôme avec l’aide de Git. Pour le bon déroulement du développement, nous avons découpé le site en deux : la partie « entrée » et la partie « sortie » que nous nous sommes repartie.\nTout le site est avant tout en HTML / CSS et est responsive. Git a été utilisé pour nous partager le travail au fur et à mesure des avancements de chacun. Puisque les styles étaient communs, nous nous étions mis d’accord sur les noms des classes à utiliser afin de séparer également le travail sur les styles.\nLa partie calcul est faite en JS et permet d’ajouter un client de l’hôtel, puis de lui dire le prix de son séjour au moment de son départ.",
        details: "Tout le site tient sur une seule page et est essentiellement constitué de « Front ». L’entrée du client se fait via un formulaire et les données sont temporairement enregistrées dans la page. Actualiser ou quitter la page effacera les données.\nEn sortie, il suffit d’avoir le nom et prénom du client pour que le calcul du prix se fasse avec les données enregistrées en entrée, puis le prix est affiché en bas de page.\nIl y a également les gestions d’erreurs dans le cas où le client ne serait pas trouvé. Un message d’erreur apparaîtra à la place du prix.",
        lienDocumentation: "",
        lienSite: ""
    },
    {
        id: 4,
        nom: "Disney +",
        titre: "Disney +",
        url: "disney+",
        lienImage: IMG_disney,
        listLangages: "React",
        presentation: "Disney + est le premier projet que j’ai fait en React. De ce fait, il fonctionne grâce à la fonction « render » et ne contient aucun « Hooks ». De plus, les informations sont récupérées grâce à une API. Le but de ce projet était de me familiariser avec Reat en recréant une copie de la première version du site Disney +.\nLe site contient trois pages : la page d’accueil, une page contant les films triés par rapport aux company, et une page de description pour chaque film.\nLe « Header » et les boutons listant les conpany sont des composants réutilisés à plusieurs endroits. Le « Header » est utilisé sur toutes les pages et redirige sur la page d’accueil.",
        details: "La page d’accueil est découpée en trois parties : les boutons des company qui permettent d’aller sur la page dédiée à chaque studio, la partie nouveauté qui affiche 6 films parmi les plus récentes recensés dans l’api, et la partie suggestion qui affiche 3 films ayant le paramètre activé dans l’api.\nCliquer sur le bouton d’un studio nous amène sur la page de la company, générée dynamiquement. Elle affiche la liste des films du studio.\nUn clic sur l’affiche d’un film, sur la page d’accueil ou la page du studio, enverra sur la page de description du film. Les descriptions y sont générées dynamiquement de la même manière que pour la page des company.\nLa partie « Flexbox » et responsive et géré grâce au système de grille d’ « Ant Design ».\nIl y a également une page « NotFound » qui affiche un message d’erreur lorsque l’URL est incorrect.",
        lienDocumentation: "",
        lienSite: ""
    },
    {
        id: 5,
        nom: "Search Cars",
        titre: "Search Cars",
        url: "search-cars",
        lienImage: IMG_search_cars,
        listLangages: "React Native",
        presentation: "Search Car est un projet en React Native. Il s’agit d’une application permettant de louer des véhicules.\nLa page d’accueil possède simplement un bouton indiquant le nombre de véhicules à découvrir.\nAppuyer dessus, permet d’accéder à la liste des véhicules. Les informations sont affichées de manière dynamique en faisant appel à un tableau d’enregistrement. Ce sont également des boutons permettant de consulter les détails du véhicule choisi.\nSur la page de détails, le véhicule est trouvé via les « props » et ses informations sont récupéré depuis le tableau dans un « state » afin de les afficher dynamiquement.",
        details: "Search Car est le seul projet que j’ai fait en React Native et est, de ce fait, très basique. Il ne sera donc pas ajouté au Play Store en l’état et ne peut donc pas être tester.",
        lienDocumentation: "",
        lienSite: ""
    },
    {
        id: 6,
        nom: "Clean3000",
        titre: "Clean3000",
        url: "clean3000",
        lienImage: IMG_clean3000,
        listLangages: "React / Git",
        presentation: "Clean 3000 est un projet conçu en condition réel. Le but était d’informatiser un formulaire papier pour un client fictif représentant une société de lavage de vitres. Les demandes client étaient de pouvoir renseigner des informations (sur l’entreprise, le technicien et la date d’intervention, suivie de possibles commentaires), puis de les afficher automatiquement à l’écran pour en faire un « screenshot ». Les technologies et la mise en forme (le maquettage) étaient totalement libres (bien que nous étions limitées à des langages Front-end). Nous devions rendre le projet le soir même (8 heures de travail) afin de le présenter au client (toujours fictif) le lendemain.\nJ’ai fait le choix de React et d’envoyer les informations sur une page à part.",
        details: "J’ai commencé par maquetter le projet sur « Figma ». Puis j’ai entamé le développement en « Mobile first », en m’inspirant de mes maquette.\nLa page principale contient un « Header », qui est le logo de la société cliente, et est un composant réutilisé pour la deuxième page. Elle contient, aussi, quatre formulaires que le technicien doit remplir. Un clic sur le bouton « enregistrer » envoi sur la seconde page avec les informations remplient précédemment.\nCette page ne contient que les informations récupérées via les « props ».",
        lienDocumentation: "",
        lienSite: ""
    }
];

export default ListeProjets