# Portfolio V5 — Design System

## Direction visuelle

La V5 conserve une base sombre bleu profond avec un accent indigo/violet, mais abandonne le rendu de landing page freelance au profit d'une interface plus sobre, technique et éditoriale.

Principes :

- fond sombre bleu profond ;
- surfaces légèrement plus claires pour structurer les contenus ;
- accent indigo réservé aux actions, liens et éléments importants ;
- contraste fort pour les textes ;
- animations discrètes ;
- composants sobres et cohérents ;
- hiérarchie typographique plus nette ;
- densité raisonnable sur mobile.

## Tokens

Les tokens principaux sont définis dans `src/app/globals.css` via des variables CSS puis exposés à Tailwind dans `tailwind.config.ts`.

Couleurs :

- `background`
- `surface`
- `surface-soft`
- `border`
- `primary`
- `primary-strong`
- `text-primary`
- `text-muted`
- `success`
- `danger`

Rayons :

- `sm`
- `md`
- `lg`
- `xl`

Espacement principal :

- `section-y`

## Typographie

Police principale : Geist via `next/font`.

Police monospace : Geist Mono via `next/font`.

Principes :

- H1 très dominant sur les pages principales ;
- H2 en `text-3xl` à `text-4xl` ;
- paragraphes importants en `text-base` ou `text-lg` ;
- largeur de lecture recommandée autour de `68ch`.

## Composants UI

### Button

Variantes :

- `primary`
- `secondary`
- `ghost`

Les boutons interactifs utilisent une hauteur minimale de 44 px.

### Card

Variantes :

- `default`
- `project`
- `experience`
- `info`

Les cartes non interactives n'utilisent pas de translation au hover.

### Badge

Variantes :

- `tech`
- `muted`
- `success`

### SectionTitle

Structure :

- kicker optionnel ;
- titre H2 ;
- description facultative.

## Animation

L'animation `fade-in-up` est limitée à une transition légère de 10 px sur 450 ms.

`prefers-reduced-motion: reduce` désactive pratiquement toutes les animations et transitions.

## Compatibilité temporaire

Les anciens aliases `qp-*` restent disponibles pendant la migration des composants V3 afin d'éviter une refonte massive dans un seul commit. Ils seront supprimés lorsque toutes les sections utiliseront les tokens sémantiques.
