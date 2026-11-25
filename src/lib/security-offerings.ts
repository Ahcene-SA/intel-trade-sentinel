import type { Lang } from "@/lib/i18n";

type Offering = { label: string; title: string; description: string; items: { title: string; description: string }[] };
type SecurityCopy = { fog: [string, string]; home: Offering; cyber: Offering };

export function cybersecurityService(lang: Lang) {
  const cyber = securityOfferings[lang].cyber;
  return {
    short: cyber.label,
    t: cyber.title,
    d: cyber.description,
    items: cyber.items.map((item): [string, string] => [item.title, item.description]),
    v: {
      fr: "Une approche coordonnée de la sécurité physique et numérique, avec des priorités adaptées à votre site.",
      en: "A coordinated approach to physical and digital security, with priorities tailored to your site.",
      nl: "Een gecoördineerde aanpak van fysieke en digitale beveiliging, met prioriteiten op maat van uw locatie.",
    }[lang],
  };
}

export function roboticsService(lang: Lang) {
  return roboticsCopy[lang];
}

export function hygieneService(lang: Lang) {
  return hygieneCopy[lang];
}

const hygieneCopy: Record<Lang, ReturnType<typeof cybersecurityService>> = {
  fr: {
    short: "Hygiène", t: "Le nettoyage assisté par la robotique.",
    d: "Robots de nettoyage et solutions humanoïdes selon leur maturité : une aide aux équipes pour l'entretien des bureaux, commerces et espaces communs. Chaque équipement est évalué en conditions réelles, sans promesse de désinfection automatique.",
    items: [
      ["Entretien des sols", "Balayage, aspiration ou lavage selon le robot, les revêtements et les contraintes du site."],
      ["Missions & circulation", "Zones et horaires définis, détection d'obstacles et cohabitation avec le personnel et les visiteurs."],
      ["Supervision & autonomie", "Suivi des missions, arrêt d'urgence, recharge et gestion de l'eau ou des consommables selon le modèle."],
      ["Hygiène & maintenance", "Protocoles de nettoyage adaptés, entretien des accessoires et contrôle des résultats avec les équipes."],
    ],
    v: "Régulariser les tâches répétitives tout en gardant une supervision humaine et des protocoles adaptés à chaque espace.",
  },
  en: {
    short: "Hygiene", t: "Robotics-assisted cleaning.",
    d: "Cleaning robots and humanoid solutions where sufficiently mature: support for teams maintaining offices, shops and shared spaces. Each device is assessed in real conditions, without promising automatic disinfection.",
    items: [
      ["Floor care", "Sweeping, vacuuming or washing depending on the robot, floor surfaces and site constraints."],
      ["Tasks & movement", "Defined zones and schedules, obstacle detection and safe coexistence with staff and visitors."],
      ["Supervision & endurance", "Task monitoring, emergency stop, charging and water or consumable management depending on the model."],
      ["Hygiene & maintenance", "Appropriate cleaning protocols, accessory maintenance and result checks together with teams."],
    ],
    v: "Make repetitive tasks more consistent while retaining human supervision and protocols suited to each space.",
  },
  nl: {
    short: "Hygiëne", t: "Reiniging ondersteund door robotica.",
    d: "Reinigingsrobots en humanoïde oplossingen waar voldoende ontwikkeld: ondersteuning voor teams die kantoren, winkels en gedeelde ruimtes onderhouden. Elk toestel wordt in de praktijk beoordeeld, zonder automatische desinfectie te beloven.",
    items: [
      ["Vloeronderhoud", "Vegen, stofzuigen of schrobben volgens de robot, vloerafwerking en omstandigheden op de locatie."],
      ["Taken & verplaatsing", "Vastgelegde zones en tijdschema's, obstakeldetectie en veilige samenwerking met personeel en bezoekers."],
      ["Toezicht & autonomie", "Taakopvolging, noodstop, opladen en beheer van water of verbruiksartikelen volgens het model."],
      ["Hygiëne & onderhoud", "Passende reinigingsprotocollen, onderhoud van accessoires en controle van resultaten met de teams."],
    ],
    v: "Repetitieve taken regelmatiger uitvoeren, met menselijk toezicht en protocollen afgestemd op elke ruimte.",
  },
};

const roboticsCopy: Record<Lang, ReturnType<typeof cybersecurityService>> = {
  fr: {
    short: "Robotique", t: "Rondes de sécurité par drone.",
    d: "Un regard mobile pour compléter les caméras fixes et les équipes : inspection des abords, quais et toitures d'entrepôts ou de sites industriels. Chaque mission est adaptée au site et aux autorisations de vol.",
    items: [
      ["Rondes & levée de doute", "Parcours programmés ou mission après alerte : clôtures, portails et zones isolées, avec vérification par un opérateur."],
      ["Vision jour, nuit & thermique", "Caméra stabilisée, zoom et thermique selon l'équipement : présence, points chauds et anomalies visibles, sans voir à travers les murs."],
      ["Pilotage & supervision", "Vol télépiloté ou automatisé sous supervision, images vers le poste de sécurité et coordination avec les équipes au sol."],
      ["Autonomie & station d'accueil", "Recharge en station selon le système ; fréquence des rondes adaptée à la batterie, au vent, à la pluie et à la visibilité."],
      ["Sécurité & conformité", "Étude des zones de vol, obstacles, retour sécurisé et perte de liaison ; opérateurs qualifiés et autorisations selon les règles applicables."],
      ["Données & maintenance", "Accès sécurisés, conservation limitée et respect du RGPD ; contrôle des batteries, capteurs et mises à jour. Robots terrestres selon le terrain."],
    ],
    v: "Étendre la couverture et vérifier les alertes sans remplacer les équipes ni les dispositifs de sécurité réglementaires.",
  },
  en: {
    short: "Robotics", t: "Drone security patrols.",
    d: "A mobile viewpoint to complement fixed cameras and teams: inspecting warehouse and industrial-site surroundings, loading bays and roofs. Each mission is tailored to the site and flight permissions.",
    items: [
      ["Patrols & alarm verification", "Scheduled routes or alarm-triggered missions: fences, gates and isolated areas, with operator verification."],
      ["Day, night & thermal imaging", "Stabilised cameras, zoom and thermal imaging depending on equipment: presence, hot spots and visible anomalies, not vision through walls."],
      ["Control & supervision", "Remotely piloted or supervised automated flights, images sent to the security centre and coordination with ground teams."],
      ["Endurance & docking station", "Dock charging where supported; patrol frequency adapted to battery capacity, wind, rain and visibility."],
      ["Safety & compliance", "Flight-zone assessment, obstacles, safe return and connection loss; qualified operators and permissions under applicable rules."],
      ["Data & maintenance", "Secure access, limited retention and GDPR compliance; battery, sensor and software checks. Ground robots where terrain allows."],
    ],
    v: "Extend coverage and verify alerts without replacing teams or legally required safety systems.",
  },
  nl: {
    short: "Robotica", t: "Beveiligingsrondes met drones.",
    d: "Een mobiel zicht als aanvulling op vaste camera's en teams: inspectie van de omgeving, laadkades en daken van magazijnen en industriële sites. Elke missie wordt afgestemd op de locatie en vliegtoelatingen.",
    items: [
      ["Rondes & alarmverificatie", "Geplande routes of vluchten na een alarm: hekken, poorten en afgelegen zones, met controle door een operator."],
      ["Dag-, nacht- & warmtebeeld", "Gestabiliseerde camera, zoom en warmtebeeld volgens de uitrusting: aanwezigheid, hotspots en zichtbare afwijkingen, geen zicht door muren."],
      ["Besturing & toezicht", "Op afstand bestuurde of geautomatiseerde vluchten onder toezicht, beelden naar de meldkamer en afstemming met teams op de grond."],
      ["Vliegduur & dockingstation", "Opladen in een station indien ondersteund; frequentie afgestemd op batterij, wind, regen en zichtbaarheid."],
      ["Veiligheid & regelgeving", "Analyse van vliegzones, obstakels, veilige terugkeer en verbindingsverlies; bevoegde operators en vereiste toelatingen."],
      ["Gegevens & onderhoud", "Beveiligde toegang, beperkte bewaring en naleving van de AVG; controle van batterijen, sensoren en updates. Grondrobots volgens het terrein."],
    ],
    v: "Meer dekking en alarmverificatie zonder teams of wettelijk vereiste veiligheidssystemen te vervangen.",
  },
};

export const securityOfferings: Record<Lang, SecurityCopy> = {
  fr: {
    fog: ["Fumigène", "Un générateur de brouillard de sécurité pour réduire la visibilité lors d'une intrusion confirmée, selon un scénario validé et adapté au site."],
    home: {
      label: "Home Security", title: "Votre habitat, votre sécurité.",
      description: "Une approche globale pour protéger votre habitation, vos proches et vos biens, avec des équipements choisis selon vos besoins et coordonnés avec des partenaires spécialisés.",
      items: [
        { title: "Vidéosurveillance", description: "Caméras intérieures et extérieures, consultation à distance et vérification visuelle des alertes, dans le respect de la vie privée." },
        { title: "Alarme intrusion", description: "Détecteurs de mouvement, contacts d'ouverture et sirènes pour protéger les accès et les espaces de vie." },
        { title: "Appel malade", description: "Boutons d'appel et dispositifs d'assistance pour permettre à une personne de prévenir un proche ou un intervenant désigné." },
        { title: "Safety box", description: "Coffres de sécurité pour protéger vos objets de valeur et documents, avec un choix adapté à leur contenu et à l'emplacement." },
      ],
    },
    cyber: {
      label: "Cybersecurity", title: "Protéger aussi ce qui est connecté.",
      description: "Caméras, alarmes et contrôle d'accès font partie de votre environnement numérique. L'analyse des risques cyber complète la sécurité physique pour orienter le choix des équipements et leur configuration.",
      items: [
        { title: "Audit des risques numériques", description: "Identifier les équipements connectés, leurs accès et les points d'exposition à traiter en priorité." },
        { title: "Réseaux & équipements", description: "Évaluer la séparation des réseaux, les mises à jour et la configuration des caméras, centrales et systèmes d'accès." },
        { title: "Accès & données", description: "Examiner les droits utilisateurs, l'authentification renforcée et la protection des accès à distance et des enregistrements." },
        { title: "Prévention & continuité", description: "Définir les priorités de sauvegarde, de sensibilisation et de réponse aux incidents avec les partenaires compétents." },
      ],
    },
  },
  en: {
    fog: ["Security fog", "A security fog generator to reduce visibility during a confirmed intrusion, using a validated scenario suited to the site."],
    home: {
      label: "Home Security", title: "Your home, your security.",
      description: "A comprehensive approach to protecting your home, loved ones and belongings, with equipment selected for your needs and coordinated with specialist partners.",
      items: [
        { title: "Video surveillance", description: "Indoor and outdoor cameras, remote viewing and visual alarm verification, with respect for privacy." },
        { title: "Intrusion alarm", description: "Motion detectors, door and window contacts and sirens to protect entrances and living spaces." },
        { title: "Nurse call", description: "Call buttons and assistance devices that let a person notify a relative or a designated responder." },
        { title: "Safety box", description: "Security safes to protect valuables and documents, selected according to their contents and location." },
      ],
    },
    cyber: {
      label: "Cybersecurity", title: "Protect what is connected, too.",
      description: "Cameras, alarms and access control are part of your digital environment. Cyber risk analysis complements physical security to guide equipment selection and configuration.",
      items: [
        { title: "Digital risk audit", description: "Identify connected equipment, access points and exposure that needs priority attention." },
        { title: "Networks & equipment", description: "Assess network separation, updates and the configuration of cameras, alarm panels and access systems." },
        { title: "Access & data", description: "Review user permissions, stronger authentication and the protection of remote access and recordings." },
        { title: "Prevention & continuity", description: "Define backup, awareness and incident response priorities with qualified partners." },
      ],
    },
  },
  nl: {
    fog: ["Mistgenerator", "Een beveiligingsmistgenerator om het zicht bij een bevestigde inbraak te beperken, volgens een gevalideerd scenario dat bij de locatie past."],
    home: {
      label: "Home Security", title: "Uw woning, uw veiligheid.",
      description: "Een totaalaanpak om uw woning, uw naasten en uw bezittingen te beschermen, met apparatuur afgestemd op uw behoeften en gecoördineerd met gespecialiseerde partners.",
      items: [
        { title: "Camerabewaking", description: "Binnen- en buitencamera's, beelden op afstand bekijken en visuele alarmverificatie, met respect voor de privacy." },
        { title: "Inbraakalarm", description: "Bewegingsmelders, deur- en raamcontacten en sirenes om toegangen en leefruimtes te beschermen." },
        { title: "Oproepsysteem", description: "Oproepknoppen en hulpmiddelen waarmee iemand een naaste of een aangewezen hulpverlener kan waarschuwen." },
        { title: "Safety box", description: "Beveiligingskluizen voor waardevolle spullen en documenten, afgestemd op de inhoud en de plaatsing." },
      ],
    },
    cyber: {
      label: "Cybersecurity", title: "Bescherm ook wat verbonden is.",
      description: "Camera's, alarmen en toegangscontrole maken deel uit van uw digitale omgeving. Cyberrisicoanalyse vult fysieke beveiliging aan om de keuze en configuratie van apparatuur te begeleiden.",
      items: [
        { title: "Digitale risicoaudit", description: "Verbonden apparatuur, toegangspunten en kwetsbare blootstellingen identificeren die prioriteit verdienen." },
        { title: "Netwerken & apparatuur", description: "Netwerkscheiding, updates en de configuratie van camera's, alarmcentrales en toegangssystemen beoordelen." },
        { title: "Toegang & gegevens", description: "Gebruikersrechten, sterkere authenticatie en de bescherming van toegang op afstand en opnames onderzoeken." },
        { title: "Preventie & continuïteit", description: "Prioriteiten voor back-ups, bewustmaking en incidentrespons bepalen met bevoegde partners." },
      ],
    },
  },
};