export type LocalizedText = { fr: string; en: string };
export type LocalizedList = { fr: string[]; en: string[] };

export type ProjectCategory =
  "Python" | "Applications" | "Backend" | "Web" | "Java" | "DevOps" | "QA/Automation";

export type ProjectStatus = "production" | "active" | "completed" | "experimental";

export type ProjectContentStatus = "placeholder" | "ready";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
}

export interface Project {
  slug: string;
  title: string;
  type: string | LocalizedText;
  categories: ProjectCategory[];
  status: ProjectStatus;
  contentStatus: ProjectContentStatus;
  year: number;
  featured: boolean;
  order: number;
  image?: string;
  gallery: string[];
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  problem: LocalizedText;
  goals: LocalizedList;
  architecture: LocalizedList;
  challenges: LocalizedList;
  solutions: LocalizedList;
  results: LocalizedList;
  stack: string[];
  highlights: LocalizedList;
  tests: string[] | LocalizedList;
  infrastructure: string[] | LocalizedList;
  links: ProjectLinks;
  seoDescription?: LocalizedText;
}

const projects: Project[] = [
  {
    slug: "pygeolab",
    title: "PyGeoLab",
    type: {
      fr: "Application desktop de géométrie dynamique et de visualisation mathématique",
      en: "Dynamic geometry and mathematical visualization desktop application",
    },
    categories: ["Python", "Applications"],
    status: "active",
    contentStatus: "ready",
    year: 2026,
    featured: true,
    order: 30,
    image: "/images/projects/pygeolab/pygeolab-workspace.png",
    gallery: [
      "/images/projects/pygeolab/pygeolab-geometry.png",
      "/images/projects/pygeolab/pygeolab-math.png",
    ],
    shortDescription: {
      fr: "PyGeoLab est une application desktop de géométrie dynamique et de visualisation mathématique développée en Python avec PySide6. Elle associe un moteur géométrique typé, un graphe de dépendances pour la recomputation incrémentale, un parseur mathématique sans eval(), une persistance versionnée, des tests automatisés et des distributions Windows/Linux.",
      en: "PyGeoLab is a Python/PySide6 desktop application for dynamic geometry and mathematical visualization. It combines a typed geometry engine, dependency-driven incremental recomputation, a mathematical parser without eval(), versioned persistence, automated tests, and packaged Windows/Linux distributions.",
    },
    longDescription: {
      fr: "PyGeoLab repose sur un cœur métier Python indépendant de l’interface Qt. Ses objets géométriques immuables sont identifiés par UUID. Un graphe de dépendances acyclique propage les modifications et recalcule les constructions affectées. L’application comprend aussi un moteur d’expressions mathématiques, des documents .pgl versionnés, un historique Undo/Redo et une chaîne de qualité avec Ruff, mypy strict, pytest, pytest-qt, CI multi-OS et packaging PyInstaller.",
      en: "PyGeoLab is built around a Python domain core independent of the Qt interface. Its immutable geometric objects have stable UUIDs. An acyclic dependency graph propagates edits and recomputes affected constructions. The application also includes a mathematical expression engine, versioned .pgl documents, Undo/Redo history, and quality checks with Ruff, strict mypy, pytest, pytest-qt, multi-OS CI, and PyInstaller packaging.",
    },
    problem: {
      fr: "Construire une application interactive où des objets géométriques et mathématiques dépendent les uns des autres et réagissent aux modifications sans recalculer toute la scène, tout en conservant un document validable et robuste face aux cas dégénérés.",
      en: "Build an interactive application where geometric and mathematical objects depend on each other and react to edits without recomputing the entire scene, while keeping the document validatable and robust to degenerate cases.",
    },
    goals: {
      fr: [
        "Séparer le domaine géométrique de l’interface Qt.",
        "Maintenir des dépendances cohérentes et ne recalculer que les objets affectés.",
        "Gérer explicitement les cas géométriques dégénérés.",
        "Sauvegarder et charger des documents versionnés et validés.",
        "Vérifier le code par typage strict et tests automatisés.",
      ],
      en: [
        "Keep the geometry domain independent from the Qt UI.",
        "Maintain consistent dependencies and recompute only affected objects.",
        "Handle degenerate geometric cases explicitly.",
        "Save and load versioned, validated documents.",
        "Check code with strict typing and automated tests.",
      ],
    },
    architecture: {
      fr: [
        "Domaine géométrique et mathématique indépendant de Qt.",
        "Modèle Document avec objets immuables et UUID stables.",
        "Graphe acyclique avec détection de cycles, tri topologique et recomputation ciblée.",
        "Couche de commandes Undo/Redo ; interaction, rendu et UI séparés.",
        "Persistance .pgl versionnée avec validation avant reconstruction.",
      ],
      en: [
        "Geometry and math domain independent of Qt.",
        "Document model with immutable objects and stable UUIDs.",
        "Acyclic graph with cycle detection, topological ordering, and targeted recomputation.",
        "Undo/Redo command layer; separate interaction, rendering, and UI.",
        "Versioned .pgl persistence validated before reconstruction.",
      ],
    },
    challenges: {
      fr: [
        "Propager les modifications dans un graphe de constructions sans incohérence.",
        "Traiter les configurations géométriques impossibles et les limites numériques.",
        "Analyser des expressions utilisateur sans exécuter du Python arbitraire.",
        "Tester les interactions Qt en plus du cœur métier.",
      ],
      en: [
        "Propagate edits through a construction graph consistently.",
        "Handle impossible geometric configurations and numerical limits.",
        "Parse user expressions without running arbitrary Python.",
        "Test Qt interactions alongside the domain core.",
      ],
    },
    solutions: {
      fr: [
        "Validation du DAG, tri topologique et recalcul des descendants affectés.",
        "Définitions métier immuables et modifications du Document validées avant publication.",
        "Tolérance géométrique centralisée et états d’erreur explicites.",
        "Parseur recursive-descent avec AST interne, sans eval() ni exec().",
        "Tests pytest-qt et contrôles CI sur Windows/Linux et Python 3.12 à 3.14.",
      ],
      en: [
        "DAG validation, topological ordering, and recomputation of affected descendants.",
        "Immutable domain definitions and Document changes validated before publication.",
        "Centralized geometric tolerance and explicit error states.",
        "Recursive-descent parser with an internal AST, without eval() or exec().",
        "pytest-qt tests and CI checks on Windows/Linux and Python 3.12 to 3.14.",
      ],
    },
    results: {
      fr: [
        "355 tests passés localement sur la révision 1.1.1 inspectée.",
        "Ruff (lint et format) et mypy strict validés localement.",
        "Release v1.1.1 publiée avec archives Windows x64 et Linux x64.",
        "Contrôles de non-régression des performances présents dans la suite de tests.",
      ],
      en: [
        "355 tests passed locally on the inspected 1.1.1 revision.",
        "Ruff (lint and format) and strict mypy passed locally.",
        "Release v1.1.1 published with Windows x64 and Linux x64 archives.",
        "Performance regression checks are included in the test suite.",
      ],
    },
    stack: [
      "Python",
      "PySide6",
      "Qt",
      "pytest",
      "pytest-qt",
      "Ruff",
      "mypy",
      "Hatchling",
      "PyInstaller",
      "GitHub Actions",
    ],
    highlights: {
      fr: [
        "Moteur géométrique 2D indépendant de l’UI.",
        "Graphe de dépendances avec recomputation incrémentale.",
        "Modèle documentaire immuable et mises à jour atomiques.",
        "Parseur mathématique sans eval().",
        "Tests unitaires, d’intégration, UI, système et de non-régression.",
        "Packaging PyInstaller et releases Windows/Linux.",
      ],
      en: [
        "UI-independent 2D geometry engine.",
        "Dependency graph with incremental recomputation.",
        "Immutable document objects and atomic updates.",
        "Mathematical parser without eval().",
        "Unit, integration, UI, system, and regression tests.",
        "PyInstaller packaging and Windows/Linux releases.",
      ],
    },
    tests: {
      fr: [
        "pytest · 355 tests réussis localement",
        "pytest-qt pour les interactions UI",
        "Ruff : lint et format",
        "mypy en mode strict",
        "CI : Windows/Linux · Python 3.12/3.13/3.14",
        "Tests de démarrage des exécutables PyInstaller",
      ],
      en: [
        "pytest · 355 tests passed locally",
        "pytest-qt for UI interactions",
        "Ruff lint and format",
        "mypy in strict mode",
        "CI: Windows/Linux · Python 3.12/3.13/3.14",
        "PyInstaller executable smoke tests",
      ],
    },
    infrastructure: {
      fr: [
        "GitHub Actions : CI Windows/Linux",
        "PyInstaller : archives Windows x64 et Linux x64",
      ],
      en: [
        "GitHub Actions: Windows/Linux CI",
        "PyInstaller: Windows x64 and Linux x64 archives",
      ],
    },
    links: { github: "https://github.com/Trycky64/PyGeoLab" },
    seoDescription: {
      fr: "Application desktop Python/PySide6 de géométrie dynamique avec moteur géométrique, graphe de dépendances, tests automatisés et packaging Windows/Linux.",
      en: "Python/PySide6 dynamic geometry desktop application with a geometry engine, dependency graph, automated tests, and Windows/Linux packaging.",
    },
  },
  {
    slug: "jellyfin-media-integrity",
    title: "Jellyfin Media Integrity",
    type: {
      fr: "Plugin serveur Jellyfin de diagnostic et réparation contrôlée de médias",
      en: "Jellyfin server plugin for media diagnostics and guarded repair",
    },
    categories: ["Backend", "Applications"],
    status: "active",
    contentStatus: "ready",
    year: 2026,
    featured: true,
    order: 25,
    image: "/images/projects/jellyfin-media-integrity/settings.png",
    gallery: [
      "/images/projects/jellyfin-media-integrity/scheduled-tasks.png",
      "/images/projects/jellyfin-media-integrity/status.png",
    ],
    shortDescription: {
      fr: "Plugin serveur C#/.NET qui analyse les médias Jellyfin avec ffprobe, détecte les anomalies de conteneur et de timeline audio/vidéo, puis peut réparer certains cas éligibles avec FFmpeg. Classification, validation des flux, contrôle des lectures actives, sauvegardes SHA-256, staging et retour arrière encadrent les réparations A/V, explicitement opt-in.",
      en: "C#/.NET server plugin that analyzes Jellyfin media with ffprobe, detects container and audio/video timeline issues, and can repair selected eligible cases with FFmpeg. Classification, stream validation, active-playback checks, SHA-256-verified backups, staging, and rollback guard A/V repairs, which remain explicitly opt-in.",
    },
    longDescription: {
      fr: "Le plugin utilise les API de bibliothèque et de sessions de Jellyfin pour analyser les médias connus et suivre les lectures actives. Le scan combine ffprobe, diagnostic structurel et comparaison des timelines audio/vidéo : début, durée, fin et dérive présumée. Il classifie les anomalies avant de sélectionner les cas réparables. Le remux classique copie les flux sans réencodage ; les réparations A/V bornées décalent les timestamps ou, avec autorisation explicite, réencodent uniquement la piste audio ciblée. La vidéo n’est jamais réencodée. Les deux voies passent par la validation du candidat, la sauvegarde avec empreintes SHA-256, le staging, la validation après remplacement et le retour arrière en cas d’échec détecté.",
      en: "The plugin uses Jellyfin's library and session APIs to analyze known media and check active playback. Scanning combines ffprobe, structural checks, and audio/video timeline comparisons for start, duration, end, and suspected drift. It classifies anomalies before selecting repairable cases. Classic remux copies streams without re-encoding; bounded A/V repairs shift timestamps or, when explicitly allowed, re-encode only the targeted audio track. Video is never re-encoded. Both paths use candidate validation, SHA-256-verified backups, staging, post-replacement validation, and rollback on detected failures.",
    },
    problem: {
      fr: "Un média peut présenter un conteneur défectueux ou des timelines audio/vidéo incohérentes. Le diagnostic seul ne suffit pas à autoriser une réparation : il faut borner le changement, vérifier les flux et éviter les lectures actives.",
      en: "Media may have a damaged container or inconsistent audio/video timelines. A diagnosis alone does not authorize repair: the change must be bounded, streams validated, and active playback avoided.",
    },
    goals: {
      fr: [
        "Détecter les anomalies structurelles et diagnostiquer les incohérences de timeline A/V.",
        "Classifier les anomalies avant toute décision de réparation.",
        "Réparer uniquement les cas bornés et suffisamment fiables ; garder la réparation A/V opt-in.",
        "Préserver la vidéo sans réencodage et protéger les originaux par validation, sauvegarde et retour arrière.",
        "Éviter les remplacements pendant une lecture active.",
      ],
      en: [
        "Detect structural issues and diagnose A/V timeline inconsistencies.",
        "Classify anomalies before deciding whether repair is eligible.",
        "Repair only bounded, sufficiently confident cases; keep A/V repair opt-in.",
        "Preserve video without re-encoding and protect originals through validation, backups, and rollback.",
        "Avoid replacement during active playback.",
      ],
    },
    architecture: {
      fr: [
        "Plugin Jellyfin natif avec injection de dépendances, page d’administration et API réservée aux administrateurs.",
        "Media Integrity Scan : bibliothèque Jellyfin → ffprobe → diagnostic structurel et A/V → classification → file JSON persistante.",
        "Trois tâches planifiées : Media Integrity Scan, Media Remux Repair et A/V Repair.",
        "Media Remux Repair : FFmpeg en copie de flux ; A/V Repair : AvRepairPlanner puis TimestampShift, AudioTimeStretch, AudioPad, AudioTrim ou ManualOnly.",
        "MediaValidationService et MediaReplacementService : validation, sauvegarde SHA-256, staging, remplacement, post-validation et retour arrière si nécessaire.",
      ],
      en: [
        "Native Jellyfin plugin with dependency injection, an admin page, and an administrator-only API.",
        "Media Integrity Scan: Jellyfin library → ffprobe → structural and A/V diagnostics → classification → persistent JSON queue.",
        "Three scheduled tasks: Media Integrity Scan, Media Remux Repair, and A/V Repair.",
        "Media Remux Repair: FFmpeg stream copy; A/V Repair: AvRepairPlanner then TimestampShift, AudioTimeStretch, AudioPad, AudioTrim, or ManualOnly.",
        "MediaValidationService and MediaReplacementService: validation, SHA-256 backup, staging, replacement, post-validation, and rollback when needed.",
      ],
    },
    challenges: {
      fr: [
        "Superviser ffprobe et FFmpeg avec annulation et délais d’expiration.",
        "Distinguer diagnostic A/V, classification et éligibilité à une réparation automatique.",
        "Préserver les flux attendus et éviter un remplacement pendant la lecture.",
        "Limiter les accès hors des racines autorisées et les liens symboliques.",
        "Récupérer l’original après certains échecs de remplacement.",
      ],
      en: [
        "Supervise ffprobe and FFmpeg with cancellation and timeouts.",
        "Keep A/V diagnosis, classification, and automatic repair eligibility distinct.",
        "Preserve expected streams and avoid replacing files during playback.",
        "Constrain paths to allowed roots and reject symbolic links.",
        "Recover the original after certain replacement failures.",
      ],
    },
    solutions: {
      fr: [
        "ProcessStartInfo.ArgumentList, opérations asynchrones, CancellationToken et timeouts.",
        "Classification A/V explicite ; les cas ambigus, dangereux ou multi-pistes réparables passent en ManualOnly.",
        "Réparation A/V et réencodage audio désactivés par défaut ; simulation activée et une réparation A/V par exécution au maximum par défaut.",
        "Validation ffprobe et passe complète des paquets configurable avant remplacement.",
        "Contrôle des sessions, validation des chemins et des points de réanalyse.",
        "Seuils de confiance et d’écart, contrôle des discontinuités de paquets et plafond absolu de 30 secondes.",
        "Sauvegarde SHA-256, staging, manifeste et retour arrière en cas d’échec détecté ; suppression de sauvegarde uniquement sur option après validation complète réussie.",
      ],
      en: [
        "ProcessStartInfo.ArgumentList, asynchronous operations, CancellationToken, and timeouts.",
        "Explicit A/V classification; ambiguous, unsafe, or multiple auto-repairable tracks become ManualOnly.",
        "A/V repair and audio re-encoding disabled by default; dry run enabled and one A/V repair per run by default.",
        "ffprobe validation and a configurable full packet pass before replacement.",
        "Session checks, path containment, and reparse-point checks.",
        "Confidence and mismatch thresholds, packet-discontinuity checks, and an absolute 30-second safety ceiling.",
        "SHA-256 backup, staging, recovery manifest, and rollback on detected failures; backup deletion only by opt-in after full successful validation.",
      ],
    },
    results: {
      fr: [
        "Version 1.2.0 compilée et packagée localement pour Jellyfin 10.11.11 et .NET 9.",
        "229 tests xUnit réussis localement en Release ; test du contrat JavaScript réussi.",
        "La suite couvre les diagnostics A/V, la planification, les filtres FFmpeg et les contrôles de validation ; la CI publie ZIP et résultats TRX.",
        "Plugin v1.2.0 chargé sur Jellyfin 10.11.11 jetable ; page d’administration, trois tâches et statistiques d’un scan vérifiées localement.",
      ],
      en: [
        "Version 1.2.0 built and packaged locally for Jellyfin 10.11.11 and .NET 9.",
        "229 xUnit tests passed locally in Release; the JavaScript contract test passed.",
        "The suite covers A/V diagnostics, planning, FFmpeg filters, and validation checks; CI publishes ZIP and TRX artifacts.",
        "Plugin v1.2.0 loaded on disposable Jellyfin 10.11.11; admin page, three tasks, and scan statistics verified locally.",
      ],
    },
    stack: [
      "C#",
      ".NET 9",
      "Jellyfin API",
      "ASP.NET Core",
      "FFmpeg",
      "ffprobe",
      "xUnit",
      "HTML / JavaScript",
      "GitHub Actions",
      "Linux",
    ],
    highlights: {
      fr: [
        "Plugin serveur natif Jellyfin en C#/.NET.",
        "Diagnostics structurels et de timeline audio/vidéo avec ffprobe.",
        "Classification A/V avant planification : diagnostic ne signifie pas réparation.",
        "Remux en copie de flux ; réparation A/V opt-in avec réencodage possible de la seule piste audio ciblée.",
        "Vidéo jamais réencodée ; contrôle des lectures actives avant remplacement.",
        "Sauvegarde SHA-256, staging, validation et retour arrière sur échec détecté.",
        "229 tests xUnit réussis localement, test JavaScript et CI avec packaging.",
      ],
      en: [
        "Native Jellyfin server plugin in C#/.NET.",
        "Structural and audio/video timeline diagnostics with ffprobe.",
        "A/V classification before planning: diagnosis alone does not mean repair.",
        "Stream-copy remux; opt-in A/V repair may re-encode only the targeted audio track.",
        "Video is never re-encoded; active playback is checked before replacement.",
        "SHA-256 backup, staging, validation, and rollback on detected failures.",
        "229 xUnit tests passed locally, JavaScript test, and CI packaging.",
      ],
    },
    tests: {
      fr: [
        "xUnit : 229 tests réussis localement en Release, aucun échec ni test ignoré.",
        "Test du contrat JavaScript de la page d’administration : réussi.",
        "dotnet format --verify-no-changes et build Release : réussis.",
        "Packaging PowerShell local : ZIP v1.2.0 contenant DLL et meta.json.",
        "Validation sur Jellyfin local jetable : chargement, configuration A/V, trois tâches et scan sur bibliothèque vide.",
      ],
      en: [
        "xUnit: 229 tests passed locally in Release, no failures or skips.",
        "Admin-page JavaScript contract test: passed.",
        "dotnet format --verify-no-changes and Release build: passed.",
        "Local PowerShell packaging: v1.2.0 ZIP containing DLL and meta.json.",
        "Disposable local Jellyfin validation: plugin load, A/V settings, three tasks, and scan on an empty library.",
      ],
    },
    infrastructure: {
      fr: [
        "Cible Jellyfin 10.11.11 et .NET 9 ; plugin chargé en conteneur local, interface d’administration et API de statistiques réservée aux administrateurs.",
        "GitHub Actions : restore, format, build, tests, vérification JavaScript, packaging et artefacts ZIP/TRX.",
      ],
      en: [
        "Targets Jellyfin 10.11.11 and .NET 9; loaded in a local container, with admin page and administrator-only statistics API.",
        "GitHub Actions: restore, format, build, tests, JavaScript check, packaging, and ZIP/TRX artifacts.",
      ],
    },
    links: { github: "https://github.com/Trycky64/Jellyfin.Plugin.MediaIntegrity" },
    seoDescription: {
      fr: "Plugin serveur Jellyfin en C#/.NET pour diagnostiquer les anomalies de conteneur et de timeline A/V, avec remux et réparations A/V opt-in, validation, sauvegarde et retour arrière.",
      en: "C#/.NET Jellyfin server plugin for container and A/V timeline diagnostics, with remux and opt-in A/V repair, validation, backups, and rollback.",
    },
  },
  {
    slug: "tec",
    title: "Trycky's Enchantment Cracker",
    type: {
      fr: "Port NeoForge 1.21.1 d'outils de cracking et de suivi déterministe du RNG Minecraft",
      en: "NeoForge 1.21.1 port of Minecraft RNG cracking and deterministic tracking tools",
    },
    categories: ["Java", "Applications"],
    status: "active",
    contentStatus: "ready",
    year: 2026,
    featured: true,
    order: 22,
    gallery: [],
    shortDescription: {
      fr: "TEC est un mod client-side Java pour Minecraft 1.21.1 / NeoForge qui porte et adapte des fonctionnalités de cracking d'enchantement et de suivi du RNG issues de ClientCommands. Il reconstruit des seeds à partir d'informations observables côté client, simule le générateur pseudo-aléatoire Java 48 bits et suit certains événements susceptibles de désynchroniser l'état prédit.",
      en: "TEC is a client-side Java mod for Minecraft 1.21.1 / NeoForge that ports and adapts enchantment and player-RNG cracking features from ClientCommands. It reconstructs seeds from client-observable information, reproduces Java's 48-bit pseudo-random generator, and tracks selected gameplay events that may invalidate the predicted RNG state.",
    },
    longDescription: {
      fr: "TEC adapte vers NeoForge 1.21.1 des mécanismes de cracking d'enchantement et de RNG provenant de ClientCommands. Le mod reconstruit des seeds candidats à partir des informations affichées par la table d'enchantement, reproduit localement le LCG 48 bits utilisé par java.util.Random et maintient un état local du RNG joueur. Des mixins interceptent certains événements susceptibles de consommer ou d'invalider cet état, tandis que les recherches coûteuses sont déportées hors du thread principal. Le travail spécifique à TEC porte principalement sur le port NeoForge, les hooks runtime, l'intégration client, le lifecycle, les commandes et le packaging.",
      en: "TEC adapts enchantment and player-RNG cracking mechanisms from ClientCommands to NeoForge 1.21.1. The mod reconstructs candidate seeds from enchanting-table observations, locally reproduces Java's 48-bit LCG, and maintains a predicted player RNG state. Mixins observe selected gameplay events that may consume or invalidate that state, while expensive searches are moved off the main client thread. TEC-specific work primarily focuses on the NeoForge port, runtime hooks, client integration, lifecycle handling, commands, and packaging.",
    },
    problem: {
      fr: "Les mécanismes pseudo-aléatoires de Minecraft sont déterministes mais leur état évolue au travers de nombreux événements internes. Porter une logique conçue pour un autre mod loader demande de reproduire précisément ces transitions et de rester synchronisé avec Minecraft 1.21.1.",
      en: "Minecraft's pseudo-random mechanisms are deterministic, but their state evolves through many internal events. Porting logic designed for a different mod loader requires precisely reproducing these transitions and staying synchronized with Minecraft 1.21.1.",
    },
    goals: {
      fr: [
        "Porter les mécanismes de cracking d'enchantement et de RNG de ClientCommands vers NeoForge 1.21.1.",
        "Reproduire exactement le générateur pseudo-aléatoire Java 48 bits utilisé par le client et le serveur.",
        "Reconstruire des seeds candidats à partir des informations observables côté client.",
        "Maintenir un état RNG joueur local et l'invalider dès qu'un événement non maîtrisé peut le désynchroniser.",
        "Exposer les fonctionnalités via des commandes client dédiées, sans dépendance côté serveur.",
        "Éviter tout blocage du thread principal pendant les recherches coûteuses.",
      ],
      en: [
        "Port ClientCommands' enchantment and RNG cracking mechanisms to NeoForge 1.21.1.",
        "Exactly reproduce the 48-bit Java pseudo-random generator used by client and server.",
        "Reconstruct candidate seeds from client-observable information.",
        "Maintain a local player RNG state and invalidate it whenever an uncontrolled event could desynchronize it.",
        "Expose the functionality through dedicated client commands with no server-side dependency.",
        "Avoid blocking the main client thread during expensive searches.",
      ],
    },
    architecture: {
      fr: [
        "CEnchantCommand et TECCrackRngCommand enregistrent les commandes client /tecenchant et /teccrackrng.",
        "EnchantmentCracker reconstruit et filtre les seeds d'enchantement ; PlayerRandCracker suit l'état du RNG joueur.",
        "JavaRandom48 encapsule la simulation du LCG Java 48 bits via la bibliothèque mc_seed (SeedFinding).",
        "Des mixins Sponge interceptent les événements client susceptibles de consommer ou d'invalider le RNG suivi.",
        "Le solveur CCrackRngGen, généré par LattiCG, résout les seeds candidats du RNG joueur.",
        "Les recherches coûteuses s'exécutent via CompletableFuture hors du thread de rendu, avec retour sur le thread Minecraft.",
      ],
      en: [
        "CEnchantCommand and TECCrackRngCommand register the /tecenchant and /teccrackrng client commands.",
        "EnchantmentCracker reconstructs and filters enchantment seeds; PlayerRandCracker tracks the player RNG state.",
        "JavaRandom48 wraps the 48-bit Java LCG simulation via the mc_seed (SeedFinding) library.",
        "Sponge mixins intercept client events that may consume or invalidate the tracked RNG state.",
        "The CCrackRngGen solver, generated by LattiCG, resolves candidate player RNG seeds.",
        "Expensive searches run via CompletableFuture off the render thread, with results delivered back on the Minecraft thread.",
      ],
    },
    challenges: {
      fr: [
        "Comprendre les internals de Minecraft 1.21.1 pour cibler les bons points d'injection.",
        "Adapter les mappings et signatures de méthodes entre ClientCommands et NeoForge 1.21.1.",
        "Écrire des mixins fiables sans casser le comportement vanilla.",
        "Simuler fidèlement le LCG Java 48 bits utilisé par le RNG joueur.",
        "Détecter et gérer la désynchronisation du RNG local suite à des événements non maîtrisés.",
        "Maîtriser un espace de recherche de seeds potentiellement grand.",
        "Exécuter des recherches asynchrones sans geler le client.",
        "Conserver une attribution claire du code dérivé de ClientCommands.",
      ],
      en: [
        "Understanding Minecraft 1.21.1 internals to target the right injection points.",
        "Adapting mappings and method signatures between ClientCommands and NeoForge 1.21.1.",
        "Writing reliable mixins without breaking vanilla behavior.",
        "Faithfully simulating the 48-bit Java LCG used by the player RNG.",
        "Detecting and handling local RNG desynchronization from uncontrolled events.",
        "Managing a potentially large seed search space.",
        "Running asynchronous searches without freezing the client.",
        "Keeping clear attribution for code derived from ClientCommands.",
      ],
    },
    solutions: {
      fr: [
        "Hooks Mixin ciblés sur les méthodes précises où le RNG ou l'état d'enchantement changent.",
        "Une machine à états CrackState explicite pour suivre la progression du cracking.",
        "Une politique d'invalidation conservative : en cas de doute, TEC invalide plutôt que de manipuler un RNG désynchronisé.",
        "Une simulation exacte du LCG Java 48 bits via JavaRandom48/mc_seed.",
        "Un filtrage déterministe des seeds candidats à partir des indices observés côté client.",
        "Le solveur généré par LattiCG pour réduire l'espace de recherche du RNG joueur.",
        "Des recherches lancées via CompletableFuture.supplyAsync.",
        "Des callbacks explicitement renvoyés sur le thread Minecraft avant toute mise à jour d'interface.",
      ],
      en: [
        "Mixin hooks targeted precisely at the methods where RNG or enchantment state changes.",
        "An explicit CrackState state machine to track cracking progress.",
        "A conservative invalidation policy: when in doubt, TEC invalidates rather than manipulate a desynchronized RNG.",
        "An exact 48-bit Java LCG simulation via JavaRandom48/mc_seed.",
        "Deterministic filtering of candidate seeds from client-observed clues.",
        "The LattiCG-generated solver to narrow the player RNG search space.",
        "Searches launched via CompletableFuture.supplyAsync.",
        "Callbacks explicitly returned to the Minecraft thread before any UI update.",
      ],
    },
    results: {
      fr: [
        "9 tests JUnit 5 réussis localement (JavaRandom48Test, PlayerRandCrackerTest).",
        "Build Gradle complet réussi, générant tec-1.0.0.jar avec licences et notices tierces embarquées.",
        "runClient vérifié : Minecraft et NeoForge démarrent, TEC 1.0.0 se charge sans erreur de mixin ni exception au démarrage.",
        "Release v1.0.0 publiée sur GitHub.",
      ],
      en: [
        "9 JUnit 5 tests passed locally (JavaRandom48Test, PlayerRandCrackerTest).",
        "Full Gradle build passed, producing tec-1.0.0.jar with bundled third-party licenses and notices.",
        "runClient verified: Minecraft and NeoForge start, TEC 1.0.0 loads with no mixin errors or startup exceptions.",
        "Release v1.0.0 published on GitHub.",
      ],
    },
    stack: [
      "Java",
      "Minecraft 1.21.1",
      "NeoForge",
      "SpongePowered Mixin",
      "Gradle",
      "ModDevGradle",
      "LattiCG",
      "SeedFinding",
      "JUnit 5",
      "GitHub Actions",
    ],
    highlights: {
      fr: [
        "Port NeoForge 1.21.1 des mécanismes de cracking d'enchantement et de RNG de ClientCommands (Earthcomputer et contributeurs, LGPL-3.0-or-later).",
        "Simulation exacte du LCG Java 48 bits pour le RNG joueur.",
        "Solveur de seeds généré par LattiCG (CCrackRngGen), pas un algorithme original TEC.",
        "Suivi et invalidation conservative de l'état RNG via des mixins ciblés.",
        "Recherches asynchrones hors thread principal avec retour sur le thread Minecraft.",
        "9 tests JUnit 5 et packaging Gradle avec licences et notices tierces embarquées.",
      ],
      en: [
        "NeoForge 1.21.1 port of ClientCommands' enchantment and RNG cracking mechanisms (Earthcomputer and contributors, LGPL-3.0-or-later).",
        "Exact 48-bit Java LCG simulation for the player RNG.",
        "Seed solver generated by LattiCG (CCrackRngGen), not an original TEC algorithm.",
        "Conservative RNG state tracking and invalidation via targeted mixins.",
        "Asynchronous searches off the main thread with results delivered back on the Minecraft thread.",
        "9 JUnit 5 tests and Gradle packaging with bundled third-party licenses and notices.",
      ],
    },
    tests: {
      fr: [
        "JUnit 5 · 9 tests réussis localement (JavaRandom48Test, PlayerRandCrackerTest).",
        "./gradlew clean build : réussi.",
        "runClient vérifié manuellement : chargement sans erreur de mixin ni exception TEC.",
      ],
      en: [
        "JUnit 5 · 9 tests passed locally (JavaRandom48Test, PlayerRandCrackerTest).",
        "./gradlew clean build: passed.",
        "runClient manually verified: loads cleanly with no mixin errors or TEC exceptions.",
      ],
    },
    infrastructure: {
      fr: [
        "GitHub Actions : build Gradle sur push/pull request.",
        "Packaging Gradle Jar-in-Jar avec licences et notices tierces embarquées dans le JAR.",
      ],
      en: [
        "GitHub Actions: Gradle build on push/pull request.",
        "Gradle Jar-in-Jar packaging with bundled third-party licenses and notices in the JAR.",
      ],
    },
    links: { github: "https://github.com/Trycky64/TEC" },
    seoDescription: {
      fr: "Mod client-side NeoForge 1.21.1 pour Minecraft qui porte le cracking d'enchantement et de RNG de ClientCommands, avec simulation du LCG Java 48 bits et suivi déterministe du RNG joueur.",
      en: "Client-side NeoForge 1.21.1 Minecraft mod porting ClientCommands' enchantment and RNG cracking, with a 48-bit Java LCG simulation and deterministic player RNG tracking.",
    },
  },

  {
    slug: "citypulse",
    title: "CityPulse",
    type: {
      fr: "Application web Vue 3 / TypeScript de consultation et comparaison de données environnementales urbaines",
      en: "Vue 3 / TypeScript web application for exploring and comparing urban environmental data",
    },
    categories: ["Web", "Applications"],
    status: "completed",
    contentStatus: "ready",
    year: 2025,
    featured: false,
    order: 20,
    image: "/images/projects/citypulse.png",
    gallery: [],
    shortDescription: {
      fr: "CityPulse est une application web Vue 3 et TypeScript qui réunit recherche géographique, météo et qualité de l’air. Elle normalise les réponses d’API publiques, conserve les préférences et favoris localement, et couvre les parcours principaux avec Vitest et Playwright.",
      en: "CityPulse is a Vue 3 and TypeScript web application combining geographic search, weather, and air quality data. It normalizes public API responses, stores preferences and favorites locally, and covers its main flows with Vitest and Playwright.",
    },
    longDescription: {
      fr: "Le frontend Vue interroge une API Hono/Node qui relaie Nominatim et les API météo et qualité de l’air d’Open-Meteo. Les services TypeScript transforment les réponses en modèles utilisables par les pages de détail et de comparaison. Pinia et localStorage conservent les préférences et favoris, tandis qu’un cache stale-while-revalidate basé sur IndexedDB limite les requêtes répétées. Leaflet affiche la position de la ville et Chart.js les séries météo et pollution. Un manifeste et un service worker fournissent une installation PWA et un fonctionnement hors ligne limité.",
      en: "The Vue frontend calls a Hono/Node API that proxies Nominatim plus Open-Meteo weather and air quality APIs. TypeScript services transform responses into models used by city detail and comparison pages. Pinia and localStorage retain preferences and favorites, while an IndexedDB-backed stale-while-revalidate cache limits repeated requests. Leaflet shows city locations and Chart.js renders weather and pollution series. A manifest and service worker provide PWA installation and limited offline behavior.",
    },
    problem: {
      fr: "Présenter des données urbaines provenant de plusieurs API aux formats différents dans une interface unique, réactive et utilisable lorsque le réseau est intermittent.",
      en: "Present urban data from several APIs with different response formats in one responsive interface that remains useful during intermittent connectivity.",
    },
    goals: {
      fr: [
        "Rechercher une ville et afficher ses données météo et de qualité de l’air.",
        "Comparer deux villes avec une URL partageable.",
        "Normaliser les réponses externes dans des modèles TypeScript stables.",
        "Conserver localement les préférences et les villes favorites.",
        "Tester les services et les principaux parcours utilisateur.",
      ],
      en: [
        "Search for a city and display its weather and air quality data.",
        "Compare two cities through a shareable URL.",
        "Normalize external responses into stable TypeScript models.",
        "Store preferences and favorite cities locally.",
        "Test services and the main user flows.",
      ],
    },
    architecture: {
      fr: [
        "SPA Vue 3 structurée par pages, composants, services et stores Pinia.",
        "API Hono exécutée sous Node.js pour relayer Nominatim et Open-Meteo.",
        "Client Axios centralisé et schémas Zod pour la recherche et la météo.",
        "Cache stale-while-revalidate IndexedDB avec repli mémoire.",
        "Service worker, manifeste et icônes pour la PWA.",
      ],
      en: [
        "Vue 3 SPA organized into pages, components, services, and Pinia stores.",
        "Node.js Hono API proxying Nominatim and Open-Meteo.",
        "Central Axios client and Zod schemas for search and weather data.",
        "IndexedDB stale-while-revalidate cache with an in-memory fallback.",
        "Service worker, manifest, and icons for PWA support.",
      ],
    },
    challenges: {
      fr: [
        "Composer avec des réponses externes hétérogènes ou partielles.",
        "Maintenir la navigation, la comparaison et le cache sans état serveur applicatif.",
        "Tester les parcours sans rendre la CI dépendante des API publiques.",
        "Garder les graphiques et la carte lisibles dans les thèmes clair et sombre.",
      ],
      en: [
        "Handle heterogeneous or partial external API responses.",
        "Maintain navigation, comparison, and caching without application server state.",
        "Test user flows without making CI depend on public APIs.",
        "Keep charts and maps readable in light and dark themes.",
      ],
    },
    solutions: {
      fr: [
        "Validation et normalisation des données dans les services TypeScript.",
        "État Pinia persistant dans localStorage et données réseau mises en cache dans IndexedDB.",
        "Routes API Playwright interceptées avec des réponses déterministes.",
        "Variables de thème partagées par l’interface et les options Chart.js.",
        "Validation des paramètres API et CORS limité à une origine configurable.",
      ],
      en: [
        "Validate and normalize data in TypeScript services.",
        "Persist Pinia state in localStorage and cache network data in IndexedDB.",
        "Intercept API routes in Playwright with deterministic responses.",
        "Share theme variables between the interface and Chart.js options.",
        "Validate API parameters and restrict CORS to a configurable origin.",
      ],
    },
    results: {
      fr: [
        "23 tests Vitest réussis dans 10 fichiers.",
        "6 scénarios Playwright réussis sur Chromium et Firefox.",
        "Lint, vérification TypeScript, build Vite et audit npm validés localement.",
        "Couverture mesurée : 33,96 % des instructions et 35,29 % des lignes.",
      ],
      en: [
        "23 Vitest tests passed across 10 files.",
        "6 Playwright scenarios passed on Chromium and Firefox.",
        "Lint, TypeScript checks, Vite build, and npm audit passed locally.",
        "Measured coverage: 33.96% statements and 35.29% lines.",
      ],
    },
    stack: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "Vue Router",
      "Hono",
      "Node.js",
      "Axios",
      "Zod",
      "IndexedDB",
      "idb-keyval",
      "Leaflet",
      "Chart.js",
      "Vitest",
      "Playwright",
      "GitHub Actions",
    ],
    highlights: {
      fr: [
        "Recherche géographique et agrégation de données météo et air.",
        "Comparaison de deux villes avec lien partageable et QR code.",
        "Carte Leaflet et graphiques Chart.js.",
        "Favoris et préférences persistés localement.",
        "Cache IndexedDB et PWA avec service worker.",
        "Tests unitaires et E2E déterministes intégrés à la CI.",
      ],
      en: [
        "Geographic search with aggregated weather and air data.",
        "Two-city comparison with a shareable link and QR code.",
        "Leaflet map and Chart.js visualizations.",
        "Locally persisted favorites and preferences.",
        "IndexedDB cache and service-worker PWA.",
        "Deterministic unit and E2E tests integrated into CI.",
      ],
    },
    tests: {
      fr: [
        "Vitest · 23 tests réussis dans 10 fichiers.",
        "Playwright · 6 scénarios réussis sur Chromium et Firefox.",
        "Couverture Istanbul : 33,96 % instructions · 35,29 % lignes.",
      ],
      en: [
        "Vitest: 23 tests passed across 10 files.",
        "Playwright: 6 scenarios passed on Chromium and Firefox.",
        "Istanbul coverage: 33.96% statements · 35.29% lines.",
      ],
    },
    infrastructure: {
      fr: [
        "GitHub Actions : npm ci, audit, lint, type-check, couverture, build et Playwright.",
        "API Hono/Node et frontend Vite ; PWA avec cache de ressources et réponses API.",
      ],
      en: [
        "GitHub Actions: npm ci, audit, lint, type checking, coverage, build, and Playwright.",
        "Hono/Node API and Vite frontend; PWA caching application assets and API responses.",
      ],
    },
    links: {
      github: "https://github.com/Trycky64/citypulse",
      demo: "https://citypulse.quentinperriere.com/",
    },
    seoDescription: {
      fr: "Application web Vue 3 et TypeScript pour rechercher et comparer météo et qualité de l’air, avec API Hono, cache IndexedDB, PWA et tests automatisés.",
      en: "Vue 3 and TypeScript web application for searching and comparing weather and air quality, with a Hono API, IndexedDB caching, PWA support, and automated tests.",
    },
  },
];

function byProjectOrder(a: Project, b: Project) {
  return b.order - a.order;
}

export function getProjectType(project: Project, locale: keyof LocalizedText): string {
  return typeof project.type === "string" ? project.type : project.type[locale];
}

export function getAllProjects(): Project[] {
  return [...projects].sort(byProjectOrder);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort(byProjectOrder)
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const orderedProjects = getAllProjects();
  const index = orderedProjects.findIndex((project) => project.slug === slug);

  if (index === -1) return {};

  return {
    previous: orderedProjects[index - 1],
    next: orderedProjects[index + 1],
  };
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects
    .filter((project) => project.categories.includes(category))
    .sort(byProjectOrder);
}
