import { cybersecurityService, hygieneService, roboticsService } from "@/lib/security-offerings";

export type Lang = "fr" | "en" | "nl";
export const LANGS: Lang[] = ["fr", "en", "nl"];
type Pair = [string, string];
type Svc = { short: string; t: string; d: string; items: Pair[]; v: string };
export type Dict = {
  nav: Pair[]; audit: string; home: string; rec: string; tagline: string;
  h1: [string, string, string, string]; heroP: string; cta1: string; cta2: string;
  marquee: string[];
  apLabel: string; apH: string; apP1: string; apP2: string; stats: [string, string, string];
  solLabel: string; solH: string; added: string; solNote: string; services: Svc[];
  secLabel: string; secH: string; sectors: Pair[];
  quote: string;
  metLabel: string; metH: string; step: string; steps: Pair[];
  faqH: string; faqs: Pair[];
  ctH1: string; ctH2: string; ctP: string; fName: string; fCompany: string; fEmail: string; fProject: string; fSend: string; thanks: string;
  footer: string;
  pLabel: string; pH: string; pP: string; pCats: [string, string, string, string]; pSoon: string; trustLabel: string;
  aiLabel: string; aiH: string; aiP: string; aiHow: string; aiGain: string; ai: { t: string; d: string; how: string[]; gain: string }[];
};

export const dict: Record<Lang, Dict> = {
  fr: {
    pLabel: "Partenaires & matériel", pH: "Des marques reconnues.", pP: "Nous sélectionnons le matériel de fabricants de référence, choisi pour sa fiabilité et adapté à chaque site.", pCats: ["Alarme", "Incendie", "Vidéo", "Contrôle d'accès"], pSoon: "Bientôt", trustLabel: "Ils nous font confiance",
    aiLabel: "Intelligence artificielle", aiH: "Quatre usages clés de l'IA.", aiP: "L'IA transforme les caméras en capteurs intelligents : elle analyse les images en temps réel, reconnaît les situations à risque et ne vous alerte que lorsque c'est utile.", aiHow: "Comment ça marche", aiGain: "Bénéfice",
    ai: [
      { t: "Anti-intrusion", d: "Détecter une présence humaine ou un véhicule là où il ne devrait pas être, de jour comme de nuit.", how: ["Distinction humain / véhicule / animal pour éviter les fausses alertes (feuilles, pluie, phares)", "Lignes virtuelles et zones interdites avec plages horaires", "Détection de rôdeurs et de stationnement prolongé", "Couplage avec caméras thermiques dans l'obscurité totale", "Levée de doute vidéo envoyée immédiatement au télésurveilleur"], gain: "Jusqu'à 90 % de fausses alertes en moins selon les configurations, et une intervention plus rapide." },
      { t: "Vol à l'étalage", d: "Repérer les comportements suspects en magasin pour agir avant que la perte ne se produise.", how: ["Réduction des pertes", "Détection des mouvements et comportements suspects", "Analyse en temps réel"], gain: "Alerte en moins de 10 secondes." },
      { t: "Départ de feu", d: "Voir la fumée et les flammes dès les premières secondes, même dans les grands volumes où les détecteurs classiques réagissent tard.", how: ["Détection visuelle de fumée et de flammes par analyse vidéo", "Caméras thermiques qui repèrent les points chauds avant l'incendie", "Surveillance des stocks, quais, toitures et zones extérieures", "Alerte avec image pour confirmer instantanément", "Complément aux systèmes de détection incendie réglementaires"], gain: "Une alerte plus précoce pour protéger les personnes, les marchandises et la continuité d'activité." },
       { t: "Agression", d: "Repérer les situations de violence et les menaces pour déclencher une intervention au plus vite.", how: ["École : détection de bagarres", "Supermarché : détection d'altercations", "Analyse de la voix : cris et appels à l'aide", "Reconnaissance d'arme"], gain: "Une alerte immédiate pour protéger les personnes et intervenir plus tôt." },
    ],
    nav: [["approche", "Approche"], ["solutions", "Solutions"], ["ia", "IA"], ["partenaires", "Partenaires"], ["secteurs", "Secteurs"], ["methode", "Méthode"], ["faq", "FAQ"]],
    audit: "Audit", home: "Accueil", rec: "IA ACTIVE", tagline: "Conseil • Audit • Sourcing • Négoce",
    h1: ["Anticiper les risques.", "Connecter les technologies.", "Renforcer la ", "sécurité."],
    heroP: "L'intelligence technologique au service de la sécurité et de la performance. Une approche indépendante pour identifier, comparer et mobiliser les solutions adaptées à votre organisation.",
    cta1: "Demander un audit", cta2: "Découvrir nos solutions",
    marquee: ["Vidéosurveillance IA", "Protection périmétrique", "Caméras thermiques", "Contrôle d'accès", "Biométrie", "Alarmes", "Détection incendie", "Défibrillateurs", "Sourcing international"],
    apLabel: "Notre approche", apH: "Un interlocuteur indépendant, du risque à la solution.",
    apP1: "Intel Trade by CA accompagne les entreprises, réseaux de distribution, acteurs industriels et collectivités dans l'évaluation de leurs besoins et la sélection de technologies professionnelles de sécurité.",
    apP2: "Nous associons compréhension des risques, analyse des besoins, recherche de technologies et coordination avec des partenaires spécialisés pour l'installation et la mise en service.",
    stats: ["domaines", "langues", "vision"],
    solLabel: "Solutions", solH: "Huit domaines technologiques.", added: "VALEUR AJOUTÉE —",
    solNote: "Les fonctions d'IA, de biométrie et d'analyse vidéo sont évaluées selon le contexte d'utilisation, la confidentialité, la réglementation applicable et les caractéristiques réelles des produits.",
    services: [
      roboticsService("fr"),
      { short: "Intrusion", t: "Détection anti-intrusion intérieure & extérieure avec IA", d: "Une approche unifiée couvrant espaces intérieurs, accès, façades et limites du site. L'IA aide à distinguer les événements pertinents des déclenchements indésirables.",
        items: [["Protection périmétrique", "Abords, clôtures, portails, parkings, zones de livraison, caméras thermiques."], ["Protection intérieure", "Locaux, couloirs, réserves, bureaux, zones techniques et à accès restreint."], ["Analyse intelligente", "Classification d'événements, réduction des fausses alertes, vérification visuelle."], ["Scénarios d'alerte", "Transmission et procédures d'escalade définies avec vous."]],
        v: "Une stratégie cohérente, du périmètre jusqu'aux zones intérieures." },
      {"short": "Vidéosurveillance", "t": "Des caméras pour chaque usage.", "d": "Intérieur, extérieur, jour ou nuit : format, résolution HD/4K et objectif adaptés à votre site. Capacités selon les modèles.", "items": [["Intérieur · dôme & tourelle", "Magasins, bureaux, couloirs : format discret, objectif fixe ou varifocal et WDR contre les contre-jours."], ["Extérieur · tube & dôme", "Façades, parkings, quais : protection météo IP66/IP67, antivandalisme IK10 selon le modèle et focale adaptée."], ["Vision nocturne", "Infrarouge en noir et blanc ; couleur en basse lumière avec un éclairage suffisant ou intégré."], ["Thermique", "Présences et points chauds, même sans lumière. Mesure de température sur modèles radiométriques ; pas de vision à travers les murs."], ["Comptage de personnes", "Caméras dédiées, dont stéréo 3D : entrées, sorties et occupation, sans identifier les personnes."], ["Panoramique · 180° / 360°", "Fisheye ou multisenseurs pour halls et commerces. Image redressée ; détail selon résolution et placement."], ["PTZ · orientation & zoom", "Rotation, inclinaison et zoom optique. Pilotage ou suivi automatique selon modèle, en complément des caméras fixes."], ["Accès & enregistrement", "Direct et relecture via NVR/VMS sur appareils autorisés. Droits, masquage, conservation et signalisation selon le RGPD."]], "v": "La bonne caméra, au bon endroit, pour vérifier les alertes et documenter les incidents."},
      { short: "Accès", t: "Contrôle d'accès & identification", d: "Gérer les entrées, les droits d'accès et la traçabilité des passages dans vos bâtiments et zones sensibles.",
        items: [["Badges et lecteurs", "Badge, carte, code ou identifiant mobile."], ["Biométrie & reconnaissance faciale", "Uniquement lorsque justifiée et légalement autorisée (RGPD)."], ["Gestion des visiteurs", "Accès temporaires, prestataires, zones limitées."], ["Intégration", "Portes, alarmes, vidéosurveillance et gestion technique du bâtiment."]],
        v: "Savoir qui accède à quelle zone, à quel moment, avec une traçabilité adaptée." },

      { short: "Incendie", t: "Détection & alarme incendie", d: "Des solutions sélectionnées selon l'activité, la configuration des bâtiments et les exigences réglementaires.",
        items: [["Détection adaptée", "Fumée, chaleur ou autres technologies selon l'environnement."], ["Centrales & signalisation", "Déclencheurs manuels, sirènes, dispositifs visuels."], ["Environnements spécifiques", "Entrepôts, commerces, locaux techniques, chambres froides."], ["Conformité & documentation", "Normes applicables, validation par les intervenants compétents."]],
        v: "Une solution adaptée, avec une attention particulière à la conformité." },
      { short: "Santé", t: "Défibrillateurs & sécurité des personnes", d: "Renforcer la préparation de votre organisation face aux urgences médicales.",
        items: [["DAE", "Équipements pour entreprises, commerces, industrie et ERP."], ["Accessibilité & signalétique", "Emplacement, visibilité et accès rapide."], ["Équipements complémentaires", "Armoires, supports, kits de premiers secours."], ["Sensibilisation & suivi", "Formation et contrôles avec des prestataires qualifiés."]],
        v: "Une meilleure préparation aux urgences et des moyens de première intervention clairs." },
      hygieneService("fr"),
      cybersecurityService("fr"),
    ],
    secLabel: "Secteurs", secH: "Pour qui nous travaillons.",
    sectors: [["Commerce & retail", "Prévention des pertes, comptage, levée de doute."], ["Logistique & entrepôts", "Périmètres, quais, parkings, détection thermique."], ["Sites industriels", "Zones sensibles, incendie, accès prestataires."], ["Bureaux & tertiaire", "Contrôle d'accès, visiteurs, alarmes."], ["Collectivités", "Bâtiments publics, ERP, défibrillateurs."], ["Réseaux de distribution", "Standardisation multi-sites et sourcing."]],
    quote: "« Comprendre les risques avant de choisir la technologie. »",
    metLabel: "Méthode", metH: "Quatre étapes, un seul interlocuteur.", step: "ÉTAPE",
    steps: [["Analyse des risques", "Compréhension de votre site, de votre activité et de vos enjeux."], ["Audit des besoins", "Évaluation indépendante et formalisation du besoin."], ["Sourcing international", "Recherche, comparaison et sélection des technologies."], ["Coordination", "Partenaires qualifiés pour installation, mise en service et maintenance."]],
    faqH: "Questions fréquentes",
    faqs: [["Installez-vous vous-mêmes les équipements ?", "Nous intervenons en conseil, audit et négoce. Installation, mise en service, certification et maintenance sont confiées à des partenaires qualifiés selon le projet et la réglementation."], ["La reconnaissance faciale est-elle possible ?", "Uniquement lorsque le besoin le justifie et après analyse juridique : base légale, information des personnes et respect du RGPD."], ["Travaillez-vous avec une seule marque ?", "Non. Notre approche est indépendante : nous comparons les fabricants pour retenir la solution adaptée à votre site."], ["Dans quelles langues travaillez-vous ?", "En français, en anglais et en néerlandais."]],
    ctH1: "Sécurisons votre site ", ctH2: "ensemble.", ctP: "Parlez-nous de votre projet : nous analysons vos besoins et vous orientons vers les technologies adaptées.",
    fName: "Nom", fCompany: "Société", fEmail: "Email", fProject: "Votre projet", fSend: "Demander un audit", thanks: "Merci ! Nous revenons vers vous rapidement.",
    footer: "Conseil • Audit • Négoce international — FR • EN • NL",
  },
  en: {
    pLabel: "Partners & equipment", pH: "Trusted brands.", pP: "We select equipment from leading manufacturers, chosen for reliability and tailored to each site.", pCats: ["Alarm", "Fire", "Video", "Access control"], pSoon: "Coming soon", trustLabel: "They trust us",
    aiLabel: "Artificial intelligence", aiH: "Four key uses of AI.", aiP: "AI turns cameras into smart sensors: it analyses images in real time, recognises risky situations and only alerts you when it matters.", aiHow: "How it works", aiGain: "Benefit",
    ai: [
      { t: "Intrusion detection", d: "Detect a person or vehicle where they shouldn't be, day and night.", how: ["Human / vehicle / animal classification to avoid false alarms (leaves, rain, headlights)", "Virtual tripwires and restricted zones with schedules", "Loitering and prolonged parking detection", "Paired with thermal cameras in total darkness", "Video verification sent instantly to the monitoring centre"], gain: "Up to 90% fewer false alarms depending on configuration, and faster response." },
      { t: "Shoplifting", d: "Spot suspicious behaviour in store to act before the loss happens.", how: ["Loss reduction", "Detection of suspicious movements and behaviour", "Real-time analysis"], gain: "Alert in under 10 seconds." },
      { t: "Early fire detection", d: "See smoke and flames in the first seconds, even in large spaces where conventional detectors react late.", how: ["Visual smoke and flame detection through video analytics", "Thermal cameras spotting hot spots before a fire starts", "Monitoring of stock, docks, roofs and outdoor areas", "Alerts with images for instant confirmation", "A complement to regulatory fire detection systems"], gain: "Earlier warning to protect people, goods and business continuity." },
       { t: "Aggression", d: "Spot violent situations and threats to trigger a response as quickly as possible.", how: ["Schools: fight detection", "Supermarkets: altercation detection", "Voice analysis: screams and calls for help", "Weapon recognition"], gain: "An immediate alert to protect people and respond sooner." },
    ],
    nav: [["approche", "Approach"], ["solutions", "Solutions"], ["ia", "AI"], ["partenaires", "Partners"], ["secteurs", "Sectors"], ["methode", "Method"], ["faq", "FAQ"]],
    audit: "Audit", home: "Home", rec: "AI ACTIVE", tagline: "Consulting • Audit • Sourcing • Trading",
    h1: ["Anticipate risks.", "Connect technologies.", "Strengthen ", "security."],
    heroP: "Technological intelligence serving security and performance. An independent approach to identify, compare and deploy the right solutions for your organisation.",
    cta1: "Request an audit", cta2: "Explore our solutions",
    marquee: ["AI video surveillance", "Perimeter protection", "Thermal cameras", "Access control", "Biometrics", "Alarms", "Fire detection", "Defibrillators", "International sourcing"],
    apLabel: "Our approach", apH: "One independent partner, from risk to solution.",
    apP1: "Intel Trade by CA supports companies, retail networks, industrial players and public authorities in assessing their needs and selecting professional security technologies.",
    apP2: "We combine risk understanding, needs analysis, technology research and coordination with specialised partners for installation and commissioning.",
    stats: ["domains", "languages", "vision"],
    solLabel: "Solutions", solH: "Eight technology domains.", added: "ADDED VALUE —",
    solNote: "AI, biometric and video analytics features are assessed according to the context of use, privacy, applicable regulations and the actual characteristics of the products.",
    services: [
      roboticsService("en"),
      { short: "Intrusion", t: "Indoor & outdoor AI intrusion detection", d: "A unified approach covering interiors, entrances, façades and site boundaries. AI helps tell relevant events apart from nuisance triggers.",
        items: [["Perimeter protection", "Surroundings, fences, gates, car parks, delivery areas, thermal cameras."], ["Indoor protection", "Premises, corridors, stockrooms, offices, technical and restricted areas."], ["Smart analytics", "Event classification, fewer false alarms, visual verification."], ["Alert scenarios", "Transmission and escalation procedures defined with you."]],
        v: "A consistent strategy, from the perimeter to indoor areas." },
      {"short": "Video surveillance", "t": "Cameras for every use.", "d": "Indoors, outdoors, day or night: format, HD/4K resolution and lens tailored to your site. Capabilities vary by model.", "items": [["Indoor · dome & turret", "Shops, offices, corridors: discreet formats, fixed or varifocal lenses and WDR for backlighting."], ["Outdoor · bullet & dome", "Façades, car parks, loading bays: IP66/IP67 weather protection, IK10 vandal resistance depending on model and suitable focal length."], ["Night vision", "Black-and-white infrared; low-light colour with sufficient ambient or integrated lighting."], ["Thermal", "Presence and hot spots, even without light. Temperature measurement on radiometric models; no vision through walls."], ["People counting", "Dedicated cameras, including 3D stereo: entries, exits and occupancy without identifying individuals."], ["Panoramic · 180° / 360°", "Fisheye or multisensor views for lobbies and shops. Dewarped images; detail depends on resolution and placement."], ["PTZ · direction & zoom", "Pan, tilt and optical zoom. Remote control or automatic tracking depending on model, complementing fixed cameras."], ["Viewing & recording", "Live and playback via NVR/VMS on authorised devices. Permissions, masking, retention and signage according to GDPR."]], "v": "The right camera in the right place to verify alerts and document incidents."},
      { short: "Access", t: "Access control & identification", d: "Manage entries, access rights and traceability across your buildings and sensitive areas.",
        items: [["Badges & readers", "Badge, card, code or mobile credential."], ["Biometrics & facial recognition", "Only where justified and legally permitted (GDPR)."], ["Visitor management", "Temporary access, contractors, restricted zones."], ["Integration", "Doors, alarms, video surveillance and building management."]],
        v: "Know who accesses which area, and when, with appropriate traceability." },

      { short: "Fire", t: "Fire detection & alarm", d: "Solutions selected according to your activity, building layout and regulatory requirements.",
        items: [["Suitable detection", "Smoke, heat or other technologies depending on the environment."], ["Panels & signalling", "Manual call points, sirens, visual devices."], ["Specific environments", "Warehouses, shops, technical rooms, cold stores."], ["Compliance & documentation", "Applicable standards, validated by competent parties."]],
        v: "A tailored solution with particular attention to compliance." },
      { short: "Health", t: "Defibrillators & personal safety", d: "Strengthen your organisation's readiness for medical emergencies.",
        items: [["AEDs", "Equipment for companies, shops, industry and public buildings."], ["Accessibility & signage", "Placement, visibility and fast access."], ["Complementary equipment", "Cabinets, brackets, first-aid kits."], ["Awareness & follow-up", "Training and checks with qualified providers."]],
        v: "Better emergency readiness and clear first-response resources." },
      hygieneService("en"),
      cybersecurityService("en"),
    ],
    secLabel: "Sectors", secH: "Who we work for.",
    sectors: [["Retail", "Loss prevention, counting, alarm verification."], ["Logistics & warehouses", "Perimeters, docks, car parks, thermal detection."], ["Industrial sites", "Sensitive areas, fire, contractor access."], ["Offices", "Access control, visitors, alarms."], ["Public authorities", "Public buildings, venues, defibrillators."], ["Retail networks", "Multi-site standardisation and sourcing."]],
    quote: "“Understand the risks before choosing the technology.”",
    metLabel: "Method", metH: "Four steps, one single partner.", step: "STEP",
    steps: [["Risk analysis", "Understanding your site, your activity and your challenges."], ["Needs audit", "Independent assessment and formal definition of needs."], ["International sourcing", "Research, comparison and selection of technologies."], ["Coordination", "Qualified partners for installation, commissioning and maintenance."]],
    faqH: "Frequently asked questions",
    faqs: [["Do you install the equipment yourselves?", "We work in consulting, auditing and trading. Installation, commissioning, certification and maintenance are entrusted to qualified partners depending on the project and regulations."], ["Is facial recognition possible?", "Only when the need justifies it and after legal review: legal basis, informing people and GDPR compliance."], ["Do you work with a single brand?", "No. Our approach is independent: we compare manufacturers to choose the right solution for your site."], ["Which languages do you work in?", "French, English and Dutch."]],
    ctH1: "Let's secure your site ", ctH2: "together.", ctP: "Tell us about your project: we analyse your needs and guide you to the right technologies.",
    fName: "Name", fCompany: "Company", fEmail: "Email", fProject: "Your project", fSend: "Request an audit", thanks: "Thank you! We'll get back to you shortly.",
    footer: "Consulting • Audit • International trading — FR • EN • NL",
  },
  nl: {
    pLabel: "Partners & materiaal", pH: "Erkende merken.", pP: "Wij selecteren materiaal van toonaangevende fabrikanten, gekozen om hun betrouwbaarheid en afgestemd op elke site.", pCats: ["Alarm", "Brand", "Video", "Toegangscontrole"], pSoon: "Binnenkort", trustLabel: "Zij vertrouwen ons",
    aiLabel: "Artificiële intelligentie", aiH: "Vier belangrijke toepassingen van AI.", aiP: "AI maakt van camera's slimme sensoren: ze analyseert beelden in realtime, herkent risicosituaties en waarschuwt u alleen wanneer het nodig is.", aiHow: "Hoe het werkt", aiGain: "Voordeel",
    ai: [
      { t: "Inbraakdetectie", d: "Een persoon of voertuig detecteren waar die niet hoort, dag en nacht.", how: ["Onderscheid mens / voertuig / dier om valse alarmen te vermijden (bladeren, regen, koplampen)", "Virtuele lijnen en verboden zones met tijdschema's", "Detectie van rondhangen en langdurig parkeren", "Gekoppeld aan thermische camera's in volledige duisternis", "Videoverificatie meteen naar de meldkamer"], gain: "Tot 90% minder valse alarmen afhankelijk van de configuratie, en snellere interventie." },
      { t: "Winkeldiefstal", d: "Verdacht gedrag in de winkel herkennen om in te grijpen vóór het verlies.", how: ["Verliesvermindering", "Detectie van verdachte bewegingen en gedrag", "Analyse in realtime"], gain: "Alarm in minder dan 10 seconden." },
      { t: "Brandbegin", d: "Rook en vlammen in de eerste seconden zien, ook in grote ruimtes waar klassieke detectoren laat reageren.", how: ["Visuele rook- en vlamdetectie via videoanalyse", "Thermische camera's die hotspots opsporen vóór een brand", "Bewaking van voorraden, kades, daken en buitenzones", "Alarm met beeld voor onmiddellijke bevestiging", "Aanvulling op de wettelijke branddetectiesystemen"], gain: "Vroegere waarschuwing om mensen, goederen en bedrijfscontinuïteit te beschermen." },
       { t: "Agressie", d: "Geweld en dreigingen herkennen om zo snel mogelijk een interventie op te starten.", how: ["Scholen: detectie van vechtpartijen", "Supermarkten: detectie van woordenwisselingen", "Stemanalyse: geschreeuw en hulpkreten", "Wapenherkenning"], gain: "Een onmiddellijk alarm om mensen te beschermen en sneller in te grijpen." },
    ],
    nav: [["approche", "Aanpak"], ["solutions", "Oplossingen"], ["ia", "AI"], ["partenaires", "Partners"], ["secteurs", "Sectoren"], ["methode", "Methode"], ["faq", "FAQ"]],
    audit: "Audit", home: "Home", rec: "AI ACTIEF", tagline: "Advies • Audit • Sourcing • Handel",
    h1: ["Risico's anticiperen.", "Technologieën verbinden.", "Beveiliging ", "versterken."],
    heroP: "Technologische intelligentie ten dienste van beveiliging en prestaties. Een onafhankelijke aanpak om de juiste oplossingen voor uw organisatie te identificeren, te vergelijken en in te zetten.",
    cta1: "Audit aanvragen", cta2: "Ontdek onze oplossingen",
    marquee: ["AI-camerabewaking", "Perimeterbeveiliging", "Thermische camera's", "Toegangscontrole", "Biometrie", "Alarmen", "Branddetectie", "Defibrillatoren", "Internationale sourcing"],
    apLabel: "Onze aanpak", apH: "Eén onafhankelijke partner, van risico tot oplossing.",
    apP1: "Intel Trade by CA begeleidt bedrijven, distributienetwerken, industriële spelers en overheden bij het evalueren van hun behoeften en het selecteren van professionele beveiligingstechnologieën.",
    apP2: "Wij combineren risico-inzicht, behoefteanalyse, technologieonderzoek en coördinatie met gespecialiseerde partners voor installatie en ingebruikname.",
    stats: ["domeinen", "talen", "visie"],
    solLabel: "Oplossingen", solH: "Acht technologische domeinen.", added: "MEERWAARDE —",
    solNote: "AI-, biometrische en videoanalysefuncties worden beoordeeld volgens de gebruikscontext, privacy, de geldende regelgeving en de werkelijke kenmerken van de producten.",
    services: [
      roboticsService("nl"),
      { short: "Inbraak", t: "AI-inbraakdetectie binnen & buiten", d: "Een uniforme aanpak voor binnenruimtes, toegangen, gevels en terreingrenzen. AI helpt relevante gebeurtenissen te onderscheiden van ongewenste meldingen.",
        items: [["Perimeterbeveiliging", "Omgeving, hekken, poorten, parkings, laadzones, thermische camera's."], ["Binnenbeveiliging", "Lokalen, gangen, magazijnen, kantoren, technische en afgeschermde zones."], ["Slimme analyse", "Classificatie van gebeurtenissen, minder valse alarmen, visuele verificatie."], ["Alarmscenario's", "Doormelding en escalatieprocedures in overleg met u."]],
        v: "Een coherente strategie, van de perimeter tot de binnenzones." },
      {"short": "Camerabewaking", "t": "Camera’s voor elke toepassing.", "d": "Binnen, buiten, overdag of ’s nachts: formaat, HD/4K-resolutie en lens afgestemd op uw locatie. Mogelijkheden verschillen per model.", "items": [["Binnen · dome & turret", "Winkels, kantoren, gangen: discrete modellen, vaste of varifocale lenzen en WDR bij tegenlicht."], ["Buiten · bullet & dome", "Gevels, parkings, laadkades: IP66/IP67-weerbescherming, IK10-vandalismebescherming afhankelijk van het model en passende brandpuntsafstand."], ["Nachtzicht", "Infrarood in zwart-wit; kleur bij weinig licht met voldoende omgevingslicht of ingebouwde verlichting."], ["Thermisch", "Aanwezigheid en hotspots, ook zonder licht. Temperatuurmeting met radiometrische modellen; geen zicht door muren."], ["Personentelling", "Telcamera’s, waaronder stéréo 3D: inkomende en uitgaande passages en bezetting, zonder personen te identificeren."], ["Panoramisch · 180° / 360°", "Fisheye of multisensor voor hallen en winkels. Beeldcorrectie; detail afhankelijk van resolutie en plaatsing."], ["PTZ · richting & zoom", "Draaien, kantelen en optische zoom. Bediening of automatisch volgen afhankelijk van het model, als aanvulling op vaste camera’s."], ["Beelden & opname", "Live en terugkijken via NVR/VMS op toegelaten apparaten. Rechten, maskering, bewaring en signalisatie volgens de AVG."]], "v": "De juiste camera op de juiste plaats om alarmen te verifiëren en incidenten te documenteren."},
      { short: "Toegang", t: "Toegangscontrole & identificatie", d: "Beheer van toegangen, toegangsrechten en traceerbaarheid in uw gebouwen en gevoelige zones.",
        items: [["Badges & lezers", "Badge, kaart, code of mobiele identificatie."], ["Biometrie & gezichtsherkenning", "Enkel indien gerechtvaardigd en wettelijk toegestaan (AVG)."], ["Bezoekersbeheer", "Tijdelijke toegang, onderaannemers, beperkte zones."], ["Integratie", "Deuren, alarmen, camerabewaking en gebouwbeheer."]],
        v: "Weten wie welke zone betreedt, en wanneer, met passende traceerbaarheid." },

      { short: "Brand", t: "Branddetectie & brandalarm", d: "Oplossingen geselecteerd volgens uw activiteit, de configuratie van de gebouwen en de wettelijke vereisten.",
        items: [["Gepaste detectie", "Rook, warmte of andere technologieën volgens de omgeving."], ["Centrales & signalisatie", "Handmelders, sirenes, visuele signalen."], ["Specifieke omgevingen", "Magazijnen, winkels, technische ruimtes, koelcellen."], ["Conformiteit & documentatie", "Geldende normen, gevalideerd door bevoegde partijen."]],
        v: "Een oplossing op maat, met bijzondere aandacht voor conformiteit." },
      { short: "Gezondheid", t: "Defibrillatoren & persoonlijke veiligheid", d: "Versterk de paraatheid van uw organisatie bij medische noodgevallen.",
        items: [["AED's", "Toestellen voor bedrijven, winkels, industrie en publieke gebouwen."], ["Toegankelijkheid & signalisatie", "Plaatsing, zichtbaarheid en snelle toegang."], ["Aanvullende uitrusting", "Kasten, houders, EHBO-kits."], ["Sensibilisering & opvolging", "Opleiding en controles met gekwalificeerde dienstverleners."]],
        v: "Betere voorbereiding op noodgevallen en duidelijke middelen voor eerste hulp." },
      hygieneService("nl"),
      cybersecurityService("nl"),
    ],
    secLabel: "Sectoren", secH: "Voor wie wij werken.",
    sectors: [["Handel & retail", "Verliespreventie, telling, alarmverificatie."], ["Logistiek & magazijnen", "Perimeters, kades, parkings, thermische detectie."], ["Industriële sites", "Gevoelige zones, brand, toegang voor onderaannemers."], ["Kantoren", "Toegangscontrole, bezoekers, alarmen."], ["Overheden", "Openbare gebouwen, publieke ruimtes, defibrillatoren."], ["Distributienetwerken", "Standaardisatie over meerdere sites en sourcing."]],
    quote: "„Eerst de risico's begrijpen, dan de technologie kiezen.”",
    metLabel: "Methode", metH: "Vier stappen, één aanspreekpunt.", step: "STAP",
    steps: [["Risicoanalyse", "Inzicht in uw site, uw activiteit en uw uitdagingen."], ["Behoefteaudit", "Onafhankelijke evaluatie en formalisering van de behoefte."], ["Internationale sourcing", "Onderzoek, vergelijking en selectie van technologieën."], ["Coördinatie", "Gekwalificeerde partners voor installatie, ingebruikname en onderhoud."]],
    faqH: "Veelgestelde vragen",
    faqs: [["Installeren jullie de apparatuur zelf?", "Wij zijn actief in advies, audit en handel. Installatie, ingebruikname, certificering en onderhoud worden toevertrouwd aan gekwalificeerde partners, afhankelijk van het project en de regelgeving."], ["Is gezichtsherkenning mogelijk?", "Enkel wanneer de behoefte het rechtvaardigt en na juridische analyse: rechtsgrond, informatie aan betrokkenen en naleving van de AVG."], ["Werken jullie met één merk?", "Nee. Onze aanpak is onafhankelijk: we vergelijken fabrikanten om de juiste oplossing voor uw site te kiezen."], ["In welke talen werken jullie?", "In het Frans, Engels en Nederlands."]],
    ctH1: "Laten we uw site ", ctH2: "samen beveiligen.", ctP: "Vertel ons over uw project: wij analyseren uw behoeften en leiden u naar de juiste technologieën.",
    fName: "Naam", fCompany: "Bedrijf", fEmail: "E-mail", fProject: "Uw project", fSend: "Audit aanvragen", thanks: "Bedankt! We nemen snel contact met u op.",
    footer: "Advies • Audit • Internationale handel — FR • EN • NL",
  },
};
