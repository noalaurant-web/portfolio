/* ------------------------------------------------------------------
   CONTENU DU PORTFOLIO — tout se modifie ici.
   Ajouter un client = copier un bloc dans `clients`.
   media.o : 'v' = vertical 9:16, 'h' = horizontal 16:9
------------------------------------------------------------------- */
const R2 = 'https://pub-a56bebf01cf34815873f44877e90a86e.r2.dev/codeishot-link-previews/1216/';

window.PORTFOLIO = {
  name: 'Noah',
  whatsapp: 'https://wa.me/33769776056',
  phone: '07 69 77 60 56',
  instagram: 'https://www.instagram.com/noah_lrnt',
  avatar: R2 + '361c8bfdcc61464ba5000055619bad5c',
  showreel: { src: R2 + 'f650978018a74232b20596df5ba6f431.mp4', o: 'h', tag: 'Showreel 2026' },

  // Les 3 vidéos du haut de page : [gauche, centre, droite]. client = id de fiche, i = n° de la vidéo dans sa fiche (0 = première).
  hero: [
    { client: 'theoaudace', i: 0 },
    { client: 'iori', i: 0 },
    { client: 'mohasmile', i: 2 },
  ],

  // Bandeau « Ils m'ont fait confiance ». subs/net : abonnés du créateur, affichés dans sa fiche projet (relevés le 04/10/2026, à mettre à jour à la main). client : id de la fiche projet ouverte au clic (sans fiche → lien externe `url`). pp : image carrée dans assets/pp/ (sinon initiales affichées).
  trusted: [
    { name: 'Arntreal', client: 'arntreal', url: 'https://www.instagram.com/arntreal.co/?hl=fr', pp: R2 + '31a48c109dc948c4ad3ae9574231c179' },
    { name: 'Fady', client: 'fady', url: 'https://www.instagram.com/fady.app', pp: R2 + 'b90812416af84b429f30899a72672fa5' },
    { name: 'Iori', subs: '1,7 M', net: 'TikTok', client: 'iori', url: 'https://www.tiktok.com/@iroytoutcourt_', pp: 'assets/pp/iori.jpg' },
    { name: 'Mickael Wu', subs: '119 K', net: 'TikTok', client: 'mickaelwu', url: 'https://www.tiktok.com/@mickaelwu9', pp: 'assets/pp/mickaelwu.jpg' },
    { name: 'Mohasmile', subs: '1,1 M', net: 'TikTok', client: 'mohasmile', url: 'https://www.tiktok.com/@mohasmilefr?lang=fr', pp: R2 + '899e82a326ec411abb19de2372bcc249' },
    { name: 'Naali', client: 'naali', url: 'https://naali.fr/', pp: 'assets/pp/naali.png' },
    { name: 'Nightpass', client: 'nightpass', url: 'https://www.tiktok.com/@nightpass_app?lang=fr', pp: R2 + '341f5abe780d462c88b3b1d6f90e27f8' },
    { name: 'Ribeifoot', subs: '52 K', net: 'YouTube', client: 'ribeifoot', url: 'https://www.youtube.com/@Ribeifoot', pp: R2 + '3b3605b9ae804442adf87ceac3aaa8c3' },
    { name: 'Shannen', subs: '28 K', net: 'YouTube', client: 'shannen', url: 'https://www.youtube.com/@Shannenlouiz', pp: R2 + '5845a54922494d19bb11094c342a5d3a' },
    { name: 'Theo Audace', subs: '1,3 M', net: 'TikTok', client: 'theoaudace', url: 'https://www.tiktok.com/@theo.audace?lang=fr', pp: 'assets/pp/theoaudace.jpg' },
  ],

  clients: [
    {
      id: 'mickaelwu', name: 'Mickael Wu', platform: 'TikTok', handle: '@mickaelwu9',
      url: 'https://www.tiktok.com/@mickaelwu9', logo: 'assets/pp/mickaelwu.jpg',
      accent: '#ff2a3c', tags: ['VSL', 'Montage', 'Motion design'],
      blurb: 'VSL de 6 minutes : dérush, montage, zooms et motion design sur mesure.',
      // preview = boucle muette affichée dans la grille, src = vidéo complète du lecteur
      media: [{ src: 'media/mickael-wu-vsl.mp4', preview: 'media/mickael-wu-vsl-preview.mp4', o: 'h', tag: 'VSL · 6 min' }],
    },
    {
      id: 'theoaudace', name: 'Theo Audace', platform: 'TikTok', handle: '@theo.audace',
      url: 'https://www.tiktok.com/@theo.audace?lang=fr', logo: 'assets/pp/theoaudace.jpg',
      accent: '#ff8a1f', tags: ['TikTok', 'Formats courts'],
      blurb: 'Formats courts montés pour TikTok.',
      media: [
        { src: 'media/theo-audace-1.mp4', o: 'v' },
        { src: 'media/theo-audace-2.mp4', o: 'v' },
        { src: 'media/theo-audace-3.mp4', o: 'v' },
      ],
    },
    {
      id: 'naali', name: 'Naali', platform: 'Site web', handle: 'naali.fr',
      url: 'https://naali.fr/', logo: 'assets/pp/naali.png',
      accent: '#ffd23f', tags: ['Ads', 'Hooks & CTA'],
      blurb: 'Publicités verticales déclinées en variantes de hooks et de CTA.',
      media: [
        { src: 'media/naali-1.mp4', o: 'v' },
        { src: 'media/naali-2.mp4', o: 'v' },
      ],
    },
    {
      id: 'iori', name: 'Iori', platform: 'TikTok', handle: '@iroytoutcourt_',
      url: 'https://www.tiktok.com/@iroytoutcourt_', logo: 'assets/pp/iori.jpg',
      accent: '#5ce1ff', tags: ['TikTok', 'Formats courts'],
      blurb: 'Formats courts montés pour TikTok.',
      media: [
        { src: 'media/iori-mcdo.mp4', o: 'v' },
        { src: 'media/iori-tiktok.mp4', o: 'v' },
      ],
    },
    {
      id: 'liam', name: 'Liam', platform: 'Instagram', handle: '@liam.fady',
      url: 'https://www.instagram.com/liam.fady/', logo: R2 + '857ae6f1abe8429cab7bfc5d2c03b446',
      accent: '#ff5fd2', tags: ['Créa IA', 'Reels'],
      blurb: 'Contenus verticaux générés et montés avec l’IA.',
      media: [
        { src: R2 + '8e429f8692f94599b62e4d2551a3f987.mp4', o: 'v', tag: 'Créa IA' },
        { src: R2 + 'f0f696a5596449a9bfc9c73b94b899bb.mp4', o: 'v', tag: 'Créa IA' },
      ],
    },
    {
      id: 'shannen', name: 'Shannen', platform: 'YouTube', handle: '@Shannenlouiz',
      url: 'https://www.youtube.com/@Shannenlouiz', logo: R2 + '5845a54922494d19bb11094c342a5d3a',
      accent: '#ff7a9c', tags: ['YouTube', 'Motion design'],
      blurb: 'Habillage et animations pour une chaîne YouTube.',
      media: [
        { src: R2 + 'b0da2e4f577041d4a9b9b3802f8a7141.mp4', o: 'h' },
        { src: R2 + 'e0fc12b7e0e4453289ca3945861a321d.mp4', o: 'h' },
        { src: R2 + '707de76489a44128add0e9d5e5aec3aa.mp4', o: 'h' },
        { src: R2 + '7bd8bb28f45b4880b5c6a1e819c2cea7.mp4', o: 'h' },
      ],
    },
    {
      id: 'grz', name: 'GRZ Factory', platform: 'Instagram', handle: '@plugmarket.fr',
      url: 'https://www.instagram.com/plugmarket.fr/?hl=fr', logo: R2 + 'b3be90d8e435485282b3d24217e5d83e',
      accent: '#ffae1a', tags: ['Reels', 'Créa IA'],
      blurb: 'Tournage, montage et créa IA pour Plugmarket.',
      media: [
        { src: R2 + 'da2a2f907b504641a946358ad671e563.mp4', o: 'v' },
        { src: R2 + '63906c78017146a5a6d12414e17164b9.mp4', o: 'v' },
        { src: R2 + '2386e8c61abf4d889f3f68b068e97585.mp4', o: 'v', tag: 'Créa IA' },
      ],
    },
    {
      id: 'evan', name: 'Evan Charles', platform: 'YouTube', handle: '@evnbusiness',
      url: 'https://www.youtube.com/@evnbusiness', logo: R2 + '52eebba0ae7b43a8a9d61e7e53793120',
      accent: '#4db2ff', tags: ['YouTube', 'Montage long format'],
      blurb: 'Montage YouTube en 4K.',
      media: [{ src: R2 + 'ae391b299f2442ec982d6235d17277a6.mp4', o: 'h' }],
    },
    {
      id: 'arntreal', name: 'Arntreal', platform: 'Instagram', handle: '@arntreal.co',
      url: 'https://www.instagram.com/arntreal.co', logo: R2 + '31a48c109dc948c4ad3ae9574231c179',
      accent: '#ff4b3a', tags: ['Reels', 'Sous-titres'],
      blurb: 'Formats courts rythmés, sous-titrés sur mesure.',
      media: [
        { src: R2 + 'dd22a6ca45134061b67359036bcbd897.mp4', o: 'v' },
        { src: R2 + '40058fc91e1b483ab41c749576a37673.mp4', o: 'v' },
      ],
    },
    {
      id: 'fady', name: 'Fady', platform: 'Instagram', handle: '@fady.app',
      url: 'https://www.instagram.com/fady.app', logo: R2 + 'b90812416af84b429f30899a72672fa5',
      accent: '#9a6bff', tags: ['Co-fondateur', 'App', 'Reels'],
      blurb: 'L’app que je co-fonde : toute l’image de marque en vidéo.',
      media: [
        { src: R2 + '96cfa671926d4ec1a652abf1d6a3f192.mp4', o: 'v' },
        { src: R2 + 'edd41abe46ec4162b2f53bfa8bd5698e.mp4', o: 'v' },
        { src: R2 + 'f27a6cbbb8be4e7ebdef1abdfce63213.mp4', o: 'v' },
      ],
    },
    {
      id: 'cadence', name: 'Cadence.', platform: 'Site web', handle: 'cadenceapp.fr',
      url: 'https://cadenceapp.fr/', logo: R2 + '95272c87d8d042998279d928290d0c8b',
      accent: '#1fe3a8', tags: ['App', 'Ads', 'Reels'],
      blurb: 'Contenus viraux pour le lancement d’une app.',
      media: [
        { src: R2 + 'd269992d20e04733bd31147c53fa547e.mp4', o: 'v' },
        { src: R2 + '9380d37d32db4deca6b3285c9682e240.mp4', o: 'v' },
        { src: R2 + '527e7bf1ea334b578c86a336bd497740.mp4', o: 'v' },
      ],
    },
    {
      id: 'ribeifoot', name: 'Ribeifoot', platform: 'YouTube', handle: '@Ribeifoot',
      url: 'https://www.youtube.com/@Ribeifoot', logo: R2 + '3b3605b9ae804442adf87ceac3aaa8c3',
      accent: '#3ee07a', tags: ['YouTube', 'Foot', 'Long format'],
      blurb: 'Montage long format pour une chaîne foot à 52K abonnés.',
      media: [{ src: R2 + '8ff1b4a86955485683921fa55efed65e.mp4', o: 'h' }],
    },
    {
      id: 'mohasmile', name: 'Mohasmile', platform: 'TikTok', handle: '@mohasmilefr',
      url: 'https://www.tiktok.com/@mohasmilefr?lang=fr', logo: R2 + '899e82a326ec411abb19de2372bcc249',
      accent: '#3fe0ff', tags: ['Reels', 'Tournage'],
      blurb: 'Reels tournés et montés en 4K vertical.',
      media: [
        { src: R2 + 'e05cb425afc248d39bf3bb500a14a6d0.mp4', o: 'v' },
        { src: R2 + 'c67f06eb14df4a139f7c1cae57d45162.mp4', o: 'v' },
        { src: R2 + '1d15821d68554151965259ef0736c020.mp4', o: 'v' },
      ],
    },
    {
      id: 'b4cars', name: 'B4cars.exe', platform: 'Instagram', handle: '@b4cars.exe',
      url: 'https://www.instagram.com/b4cars.exe/?hl=fr', logo: R2 + 'dcc95925bc16480d9b5063a4be0ae564',
      accent: '#ff6f1a', tags: ['Automobile', 'Reels'],
      blurb: 'Edit automobile nerveux.',
      media: [{ src: R2 + '6ef4c67acb0f4e8b9411ed62a1cf39ae.mp4', o: 'v' }],
    },
    {
      id: 'nightpass', name: 'Nightpass', platform: 'Instagram', handle: '@nightpass_app',
      url: 'https://www.instagram.com/nightpass_app/?hl=fr', logo: R2 + '341f5abe780d462c88b3b1d6f90e27f8',
      accent: '#7d7bff', tags: ['App', 'Nightlife', 'Reels'],
      blurb: 'Formats courts pour une app de sorties.',
      media: [
        { src: R2 + '73a3ebfc80374db49f3341b2e72dc6f9.mp4', o: 'v' },
        { src: R2 + '8e0da7f5c0ee48b0a111c9b0b9080fb0.mp4', o: 'v' },
        { src: R2 + '11f8e48fe4164626aaafb0367d68628d.mp4', o: 'v' },
      ],
    },
    {
      id: 'forexfab', name: 'Forexfab', platform: 'Instagram', handle: '@forexfab',
      url: 'https://www.instagram.com/forexfab/', logo: R2 + '64e872e65688433ebff00b76631d64f0',
      accent: '#f6c945', tags: ['Trading', 'Reels'],
      blurb: 'Reels pédagogiques sur le trading.',
      media: [
        { src: R2 + '8e850ee117244aca9fae85a86477d4dd.mp4', o: 'v' },
        { src: R2 + '371fc16e06504aa782217c9c36eb7931.mp4', o: 'v' },
      ],
    },
    {
      id: 'autres', name: 'Autres', platform: 'Sélection', handle: '@noah_lrnt',
      url: 'https://www.instagram.com/noah_lrnt', logo: R2 + '361c8bfdcc61464ba5000055619bad5c',
      accent: '#c6ff3d', tags: ['Montage', 'Motion design'],
      blurb: 'D’autres projets sortis de la timeline.',
      media: [
        { src: R2 + '8b433dc224dc4102852d595d37904190.mp4', o: 'v' },
        { src: R2 + 'e605ca29e0504e2bb84cd0d2092f4824.mp4', o: 'v' },
        { src: R2 + '6558129c19b6440ca76b5b3058226f2b.mp4', o: 'h' },
      ],
    },
  ],
};
