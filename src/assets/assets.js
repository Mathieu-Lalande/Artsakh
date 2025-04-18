import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import cross_icon from './cross_icon.png'
import hero_image from './hero_image.jpg'
import logo_Croix_Rouge_Française from './logo_Croix_Rouge_Française.jpg'
import logo_medecin_sans_frontieres from './logo_medecin_sans_frontieres.png'
import logo_solidarite_armenie from './logo_solidarite_armenie.png'
import fonds_armeniens_de_france from './fonds_armeniens_de_france.jpeg'
import secours_populaire_logo from './secours_populaire_logo.png'
import caritas_armenie from './caritas_armenie.png'
import emmaus_france from './emmaus_france.png'
import asso_franco_armenienne from './asso_franco_armenienne.jpeg'
import secours_catholique from './secours_catholique.png'
import fondation_aznavour from './fondation_aznavour.jpg'
import formation_watm from './formation-watm.jpg'
import soutiens_developpement_communautaire from './soutiens_developpement_communautaire.jpeg'
import quai_image from './quai_image.png'
import soutiens_personnes_deplacees from './soutiens_personnes_deplacees.jpg'
import forma from './forma.jpg'
import logo_asa from './logo_asa.png'
import logo_plateforme from './logo_plateforme.png'
import armenie_carte from './armenie-carte.png'
import florence from './florence.jpg'
import TATEV_market from './TATEV_market.jpg'
import ville_lyon from './Ville_de_Lyon.png'
import Dep_isere from './Dep_isere.png'
import joeuf from './joeuf.jpg'
import rara_logo from './rara_logo.svg'
import Logo_CHENE from './Logo_CHENE.png'
import ugab from './ugab.png'
import fadf from './fadf.jpg'
import Logo_Sante_Armenie from './Logo_Sante_Armenie.png'
import Logo_Gardanne from './Logo_Gardanne.webp'
import stetienne from './stetienne.jpg'
import drive from './google/drive.png'
import gmail from './google/gmail.png'
import meet from './google/meet.webp'
import calendar from './google/calendar.png'
import google from './google/google.png'
import Weareourmountains from './Weareourmountains.mp4'
import LogoUnionfrarm from './LogoUnionfrarm.webp'
import croix_bleue from './croix_bleue.jpg'
import interviewFlorencePDF from './interview-florence.pdf';

export const assets = {
    cart_icon,
    dropdown_icon,
    exchange_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    cross_icon,
    hero_image,
    logo_Croix_Rouge_Française,
    logo_medecin_sans_frontieres,
    logo_solidarite_armenie,
    fonds_armeniens_de_france,
    secours_populaire_logo,
    caritas_armenie,
    emmaus_france,
    asso_franco_armenienne,
    secours_catholique,
    fondation_aznavour,
    formation_watm,
    soutiens_developpement_communautaire,
    quai_image,
    soutiens_personnes_deplacees,
    forma,
    logo_asa,
    armenie_carte,
    florence,
    TATEV_market,
    logo_plateforme,
    ville_lyon,
    Dep_isere,
    joeuf,
    rara_logo,
    Logo_CHENE,
    ugab,
    fadf,
    Logo_Sante_Armenie,
    drive,
    gmail,
    meet,
    calendar,
    google,
    Logo_Gardanne,
    stetienne,
    Weareourmountains,
    LogoUnionfrarm,
    croix_bleue
}

export const acteurs = [
  // Type dacteurs "Association" | "Collectivité territoriale" | "Institution"


  //**{
  //    _id: "1",
  //    name: "Croix-Rouge Française",
  //    description: "Association humanitaire qui offre des secours d'urgence, actions sociales, santé, et formation aux premiers secours en France.",
  //    domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"],
  //    type: ["Institution"],
  //    establishedDate: 1864,
  //    website: "https://www.croix-rouge.fr",
  //    logo: logo_Croix_Rouge_Française
  //},
  {
    _id: "2",
    name: "Fonds Arménien de France",
    description: "Le Fonds Arménien de France intervient dans le domaine humanitaire, avec un accent particulier sur : La région Tavouch : Développement agro-pastoral et les régions frontalières : Développement agricole et aide aux déplacés.",
    domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"],
    type: ["Association"],
    establishedDate: 1993,
    website: "https://fondsarmenien.org/",
    logo: fadf,
    dirigeant: "Pierre Terzian",
    email: "info@fondsarmenien.org",
    telephone: "01 48 83 51 06",
    contact: "Pierre Terzian"
  },
  {
    _id: "3",
    name: "UGAB",
    description: "L'UGAB a toujours joué un rôle essentiel dans l'histoire du peuple arménien. Depuis sa création en 1906, elle est restée fidèle à la vision de ses fondateurs en poursuivant sa mission à travers les décennies : œuvrer à la prospérité et au bien-être de tous les Arméniens. De manière générale, l’UGAB s'engage au quotidien pour développer et assurer la prospérité de l'Arménie, en créant des initiatives en faveur des industries, des individus et des communautés. Elle fait le lien entre la diaspora et l’Arménie en proposant de nombreuses opportunités de collaboration et d’engagement. Elle propose des programmes d’éducation, de culture, d’aide humanitaire et de développement socio-économique s’adressant à toutes les tranches d’âge, dans toutes les régions d’Arménie et en diaspora.",
    domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"],
    type: ["Association"],
    establishedDate: 1948,
    website: "https://ugabfrance.org/fr",
    logo: ugab,
    dirigeant: "Claude Nadia Gortzounian",
    email: "administratif@agbu.org",
    telephone: "01 45 20 03 18",
    contact: "Claude Nadia Gortzounian"
  },
  {
    _id: "4",
    name: "Santé Arménie",
    description: "Santé Arménie a pour mission d'apporter une aide médicale directe à la population arménienne à travers : Soins médicaux : Équipes mobiles et centres spécialisés. Formation : Académie médicale en ligne pour les professionnels de santé. Recherche clinique : Amélioration des pratiques médicales et traitements. Infrastructure : Construction et équipement des établissements de santé en Arménie.",
    domain: ["Formation/Emploi", "Santé"],
    type: ["Association"],
    establishedDate: 2021,
    website: "https://www.santearmenie.org/",
    logo: Logo_Sante_Armenie,
    dirigeant: "Arsène Mekinian",
    email: "contact@santearmenie.org",
    telephone: "01 45 24 72 79",
    contact: "Arsène Mekinian"
  },
  {
    _id: "5",
    name: "Chene",
    description: "Chene intervient dans la construction et la réhabilitation de maisons, d'écoles maternelles et d'équipements collectifs, tout en soutenant le développement du tissu socio-économique et agricole. Elle répond également aux besoins d'urgence humanitaire.",
    domain: ["Logement", "Agriculture", "Education", "Social"],
    type: ["Association"],
    establishedDate: 1990,
    website: "https://www.chene-france.org/",
    logo: Logo_CHENE,
    dirigeant: "Schavarch Torossian",
    email: "contact@chene-france.org",
    telephone: "",
    contact: "Schavarch Torossian"
  },
  {
    _id: "6",
    name: "Ville de Lyon",
    description: "La Ville de Lyon est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivité territoriale"],
    website: "https://www.lyon.fr/",
    logo: ville_lyon,
    dirigeant: "Grégory Doucet",
    email: "roxane.beneyton@mairie-lyon.fr",
    telephone: "",
    contact: "Roxane Beneyton"
  },
  {
    _id: "7",
    name: "Département de l'Isère",
    description: "Le Département de l'Isère est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivité territoriale"],
    website: "https://www.isere.fr/",
    logo: Dep_isere,
    dirigeant: "Jean-Pierre Barbier",
    email: "suzie.greneche@isere.fr",
    telephone: "04 76 00 38 38",
    contact: "Suzie Grenèche"
  },
  {
    _id: "8",
    name: "Ville de Joeuf",
    description: "La Ville de Joeuf est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivité territoriale"],
    website: "https://www.ville-joeuf.fr/",
    logo: joeuf,
    dirigeant: "Maria Abiza",
    email: "cabinet.maire@ville-joeuf.fr",
    telephone: "",
    contact: "Maria Abiza"
  },
  {
    _id: "9",
    name: "Région Auvergne Rhône Alpes",
    description: "La Région Auvergne Rhône Alpes est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivité territoriale"],
    website: "https://www.auvergnerhonealpes.fr/",
    logo: rara_logo,
    dirigeant: "Fabrice Pannekoucke",
    email: "agnes.hernu@auvergnerhonealpes.fr",
    telephone: "04 26 73 40 69",
    contact: "Agnès Hernu-Duclos"
  },
  {
    _id: "10",
    name: "Commune de Gardanne",
    description: "La Commune de Gardanne est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivité territoriale"],
    website: "https://www.ville-gardanne.fr/",
    logo: Logo_Gardanne,
    dirigeant: "Hervé Granier",
    email: "arnaud-mazille@ville-gardanne.fr",
    telephone: "07 88 35 93 93",
    contact: "Arnaud Mazille"
  },
  {
    _id: "11",
    name: "Ville de Saint-Etienne",
    description: "La Ville de Saint-Etienne est une collectivité territoriale qui soutient des projets de développement et de solidarité internationale.",
    domain: [""],
    type: ["Collectivité territoriale"],
    website: "https://www.saint-etienne.fr",
    logo: stetienne,
    dirigeant: "Gaël Perdriau",
    email: "sona.hedhibi@saint-etienne-metropole.fr",
    telephone: "04 77 48 63 65",
    contact: "Sona Hedhibi"
  },
  /*{
    _id: "12",
    name: "Union Franco-Arménienne",
    description: "L'Union Franco-Arménienne vise à préserver, promouvoir et intégrer avec succès la culture arménienne en France, tout en développant des échanges culturels, en organisant des événements culturels et caritatifs et en mettant en œuvre des projets humanitaires, sportifs et éducatifs en France et en Arménie.",
    domain: ["Education", "Social", "Culture"],
    type: ["Association"],
    website: "https://www.unionfrarm.com",
    logo: LogoUnionfrarm,
    establishedDate: 2021,
    dirigeant: "Artur Arzoyan",
    email: "contact@unionfrarm.com",
    telephone: "+33 (0)6 95 14 77 67",
    contact: "Artur Arzoyan"
  },*/
  {
    _id: "13",
    name: "Croix Bleue des Arméniens de France",
    description: "La Croix Bleue des Arméniens de France agit dans les domaines de l’humanitaire, du social et de la culture.",
    domain: ["Logement", "Social", "Santé"],
    type: ["Association"],
    website: "https://www.croixbleue-france.com/",
    logo: croix_bleue,
    establishedDate: 1928,
    dirigeant: "Corinne Sévane Mardirossian",
    email: "cbaf@wanadoo.fr",
    telephone: "+33 (0)1 53 34 18 18",
    contact: "Corinne Sévane Mardirossian"
  },
];

export const projets = [
    {
        _id: "1",
        name: "RECHERCHE DE PARTENAIRE POUR UN PROGRAMME DE LANGUE FRANÇAISE POUR LES ÉTUDIANTS D'ARTSAKH",
        description: "Le programme de langue française vise à fournir des cours complets de langue française aux étudiants de l'Artsakh, comblant ainsi les lacunes de leur programme. Nous recherchons activement des partenaires pour soutenir ce programme, que ce soit par des contributions financières, des ressources pédagogiques ou des collaborations éducatives.",
        association: "We are our mountains",
        type: "Urgence",
        startDate: "2024-03-01",
        endDate: "2025-01-31",
        budget: '6 402',
        currency: "$",
        image: formation_watm,
        domain: ["Formation/Emploi"],
        externalLink: "https://ourmountains.am/project/french-language-program-for-artsakh-students/"
    }
];

export const actualites = [
    {
        _id: "1",
        title: "Appel à projets franco-arménien",
        subtitle: "Le ministère de l’Europe et des Affaires étrangères annonce l’ouverture de l’appel à projets Arménie 2025. Les candidatures sont ouvertes jusqu’au 23 mai 2025. Les collectivités peuvent désormais soumettre leurs projets via la plateforme Démarches simplifiées.",
        date: "2023-07-10",
        image: quai_image,
        lien: "https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/action-exterieure-des-collectivites-territoriales/appels-a-projets-2025/appels-a-projets-geographiques/appel-a-projets-franco-armenien/"
    },
    {
        _id: "2",
        title: "Projet WINGS",
        subtitle: "Porté par l’Association de Soutien à l’Artsakh, en partenariat avec l’ONG locale arménienne « Nous sommes nos Montagnes », le projet Wings accompagne les enfants déplacés dans leur parcours de reconstruction éducative, psychologique et sociale, afin de faciliter leur intégration dans un nouvel environnement de vie.",
        date: "2023-05-25",
        video: Weareourmountains,
        lien: "#"
    },
    {
        _id: "3",
        title: "Interview de Florence Provendier, coordinatrice des coopérations franco-arméniennes du ministère des Affaires Étrangères et de l'Europe",
        subtitle: "Dans cette interview accordée au Fonds Arménien, réalisée par Achod Papasian et parue dans le Courrier du Fonds Arménien de France n°118 – ©Mars 2025, Florence Provendier nous éclaire sur cette démarche qui prend corps à travers l’appel à projets « Arménie » et les prochaines assises de la coopération décentralisée à Goris, dans le Syunik. La coopération décentralisée s’impose aujourd’hui comme un levier central dans la dynamique de renforcement des relations franco-arméniennes. Portée par la feuille de route économique signée en 2021, cette stratégie vise à mobiliser l’ensemble des acteurs publics, associatifs et économiques autour de projets concrets.",
        date: "2025-04-08",
        image: florence, // Remplacez par une image appropriée si nécessaire
        lien: interviewFlorencePDF
    }
];

export const regions = [
  { 
    id: '1', 
    name: 'Shirak', 
    refugees: 3.368,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  { 
    id: '2', 
    name: 'Lorri', 
    refugees: 5.496,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  { 
    id: '3', 
    name: 'Tavush', 
    refugees: 2.383,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  { 
    id: '4', 
    name: 'Aragatsotn', 
    refugees: 4.014,
    associations: [
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  { 
    id: '5', 
    name: 'Kotayk', 
    refugees: 20.331,
    associations: [
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  { 
    id: '6', 
    name: 'Armavir', 
    refugees: 10.416,
    associations: [
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],    
  },
  { 
    id: '7', 
    name: 'Ararat', 
    refugees: 14.743,
    associations: [
      { name: 'Santé Arménie', domain: ["Formation/Emploi", "Santé"], },
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],    
  },
  { 
    id: '8', 
    name: 'Gegharkunik', 
    refugees: 3.468,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  { 
    id: '9', 
    name: 'Vayots Dzor', 
    refugees: 1.274,
    associations: [
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
  { 
    id: '10', 
    name: 'Syunik', 
    refugees: 3.439,
    associations: [
      { name: 'Chene', domain: ["Logement", "Agriculture", "Education", "Social"], },
      { name: 'Croix Bleue des Arméniens de France', domain: ["Logement", "Social", "Santé"], },
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
      { name: 'Santé Arménie', domain: ["Formation/Emploi", "Santé"], },
    ],
  },
  { 
    id: '11', 
    name: 'Erevan',
    refugees: 46.512,
    associations: [
      { name: 'Union franco-arménienne', domain: ["Education", "Social", "Culture"], },
      { name: 'Fonds Arménien de France', domain: ["Logement", "Education", "Social", "Formation/Emploi", "Agriculture"], },
      { name: 'UGAB', domain: ["Logement", "Education", "Social", "Santé", "Formation/Emploi"], },
    ],
  },
];