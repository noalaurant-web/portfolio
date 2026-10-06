/* ------------------------------------------------------------------
   CONTENU DU PORTFOLIO — tout se modifie ici.
   Ajouter un client = copier un bloc dans `clients`.
   media.o : 'v' = vertical 9:16, 'h' = horizontal 16:9
   media.preview : boucle légère de 8 s affichée dans la page (la vidéo complète `src` ne se charge qu'au clic)
   media.poster  : image affichée tout de suite, avant que la vidéo arrive
------------------------------------------------------------------- */
window.PORTFOLIO = {
  name: 'Noah',
  whatsapp: 'https://wa.me/33769776056',
  phone: '07 69 77 60 56',
  instagram: 'https://www.instagram.com/noah_lrnt',
  avatar: 'assets/noah.png',
  showreel: { src: 'media/showreel-2026.mp4', poster: 'media/posters/showreel-2026.jpg', o: 'h', tag: 'Showreel 2026' },

  // Les 3 vidéos du haut de page : [gauche, centre, droite]. client = id de fiche, i = n° de la vidéo dans sa fiche (0 = première).
  hero: [
    { client: 'theoaudace', i: 0 },
    { client: 'iori', i: 0 },
    { client: 'mohasmile', i: 2 },
  ],

  // Bandeau « Ils m'ont fait confiance ». subs/net : abonnés du créateur, affichés dans sa fiche projet (relevés le 04/10/2026, à mettre à jour à la main). client : id de la fiche projet ouverte au clic (sans fiche → lien externe `url`). pp : image carrée dans assets/pp/ (sinon initiales affichées).
  trusted: [
    { name: 'Arntreal', client: 'arntreal', url: 'https://www.instagram.com/arntreal.co/?hl=fr', pp: 'assets/pp/arntreal.jpg' },
    { name: 'Fady', client: 'fady', url: 'https://www.instagram.com/fady.app', pp: 'assets/pp/fady.jpg' },
    { name: 'Iori', subs: '1,7 M', net: 'TikTok', client: 'iori', url: 'https://www.tiktok.com/@iroytoutcourt_', pp: 'assets/pp/iori.jpg' },
    { name: 'Mickael Wu', subs: '119 K', net: 'TikTok', client: 'mickaelwu', url: 'https://www.tiktok.com/@mickaelwu9', pp: 'assets/pp/mickaelwu.jpg' },
    { name: 'Mohasmile', subs: '1,1 M', net: 'TikTok', client: 'mohasmile', url: 'https://www.tiktok.com/@mohasmilefr?lang=fr', pp: 'assets/pp/mohasmile.jpg' },
    { name: 'Naali', client: 'naali', url: 'https://naali.fr/', pp: 'assets/pp/naali.png' },
    { name: 'Nightpass', client: 'nightpass', url: 'https://www.tiktok.com/@nightpass_app?lang=fr', pp: 'assets/pp/nightpass.jpg' },
    { name: 'Ribeifoot', subs: '52 K', net: 'YouTube', client: 'ribeifoot', url: 'https://www.youtube.com/@Ribeifoot', pp: 'assets/pp/ribeifoot.jpg' },
    { name: 'Shannen', subs: '28 K', net: 'YouTube', client: 'shannen', url: 'https://www.youtube.com/@Shannenlouiz', pp: 'assets/pp/shannen.jpg' },
    { name: 'Theo Audace', subs: '1,3 M', net: 'TikTok', client: 'theoaudace', url: 'https://www.tiktok.com/@theo.audace?lang=fr', pp: 'assets/pp/theoaudace.jpg' },
  ],

  clients: [
    {
      id: 'mickaelwu', name: 'Mickael Wu', platform: 'TikTok', handle: '@mickaelwu9',
      url: 'https://www.tiktok.com/@mickaelwu9', logo: 'assets/pp/mickaelwu.jpg',
      accent: '#ff2a3c', tags: ['VSL', 'Ads', 'Montage', 'Motion design'],
      blurb: 'Une VSL de 6 minutes et des publicités verticales : dérush, montage, zooms et motion design sur mesure.',
      // preview = boucle muette affichée dans la grille, src = vidéo complète du lecteur
      media: [
        { src: 'media/mickael-wu-vsl-web.mp4', preview: 'media/mickael-wu-vsl-preview.mp4', poster: 'media/posters/mickael-wu-vsl-web.jpg', o: 'h', tag: 'VSL · 6 min' },
        { src: 'media/mickaelwu-ads-6.mp4', preview: 'media/previews/mickaelwu-ads-6.mp4', poster: 'media/posters/mickaelwu-ads-6.jpg', o: 'v', tag: 'Ads' },
        { src: 'media/mickaelwu-ads-11.mp4', preview: 'media/previews/mickaelwu-ads-11.mp4', poster: 'media/posters/mickaelwu-ads-11.jpg', o: 'v', tag: 'Ads' },
        { src: 'media/mickaelwu-ads-18.mp4', preview: 'media/previews/mickaelwu-ads-18.mp4', poster: 'media/posters/mickaelwu-ads-18.jpg', o: 'v', tag: 'Ads' },
      ],
    },
    {
      id: 'theoaudace', name: 'Theo Audace', platform: 'TikTok', handle: '@theo.audace',
      url: 'https://www.tiktok.com/@theo.audace?lang=fr', logo: 'assets/pp/theoaudace.jpg',
      accent: '#ff8a1f', tags: ['TikTok', 'Formats courts'],
      blurb: 'Formats courts montés pour TikTok.',
      media: [
        { src: 'media/theo-audace-1.mp4', preview: 'media/previews/theo-audace-1.mp4', poster: 'media/posters/theo-audace-1.jpg', o: 'v' },
        { src: 'media/theo-audace-2.mp4', preview: 'media/previews/theo-audace-2.mp4', poster: 'media/posters/theo-audace-2.jpg', o: 'v' },
        { src: 'media/theo-audace-3.mp4', preview: 'media/previews/theo-audace-3.mp4', poster: 'media/posters/theo-audace-3.jpg', o: 'v' },
      ],
    },
    {
      id: 'naali', name: 'Naali', platform: 'Site web', handle: 'naali.fr',
      url: 'https://naali.fr/', logo: 'assets/pp/naali.png',
      accent: '#ffd23f', tags: ['Ads', 'Hooks & CTA'],
      blurb: 'Publicités verticales déclinées en variantes de hooks et de CTA.',
      media: [
        { src: 'media/naali-1.mp4', preview: 'media/previews/naali-1.mp4', poster: 'media/posters/naali-1.jpg', o: 'v' },
        { src: 'media/naali-2.mp4', preview: 'media/previews/naali-2.mp4', poster: 'media/posters/naali-2.jpg', o: 'v' },
      ],
    },
    {
      id: 'iori', name: 'Iori', platform: 'TikTok', handle: '@iroytoutcourt_',
      url: 'https://www.tiktok.com/@iroytoutcourt_', logo: 'assets/pp/iori.jpg',
      accent: '#5ce1ff', tags: ['TikTok', 'Formats courts'],
      blurb: 'Formats courts montés pour TikTok.',
      media: [
        { src: 'media/iori-mcdo.mp4', preview: 'media/previews/iori-mcdo.mp4', poster: 'media/posters/iori-mcdo.jpg', o: 'v' },
        { src: 'media/iori-tiktok.mp4', preview: 'media/previews/iori-tiktok.mp4', poster: 'media/posters/iori-tiktok.jpg', o: 'v' },
      ],
    },
    {
      id: 'liam', name: 'Liam', platform: 'Instagram', handle: '@liam.fady',
      url: 'https://www.instagram.com/liam.fady/', logo: 'assets/pp/liam.jpg',
      accent: '#ff5fd2', tags: ['Créa IA', 'Reels'],
      blurb: 'Contenus verticaux générés et montés avec l’IA.',
      media: [
        { src: 'media/liam-1.mp4', preview: 'media/previews/liam-1.mp4', poster: 'media/posters/liam-1.jpg', o: 'v', tag: 'Créa IA' },
        { src: 'media/liam-2.mp4', preview: 'media/previews/liam-2.mp4', poster: 'media/posters/liam-2.jpg', o: 'v', tag: 'Créa IA' },
      ],
    },
    {
      id: 'shannen', name: 'Shannen', platform: 'YouTube', handle: '@Shannenlouiz',
      url: 'https://www.youtube.com/@Shannenlouiz', logo: 'assets/pp/shannen.jpg',
      accent: '#ff7a9c', tags: ['YouTube', 'Motion design'],
      blurb: 'Habillage et animations pour une chaîne YouTube.',
      media: [
        { src: 'media/shannen-1.mp4', poster: 'media/posters/shannen-1.jpg', o: 'h' },
        { src: 'media/shannen-2.mp4', poster: 'media/posters/shannen-2.jpg', o: 'h' },
        { src: 'media/shannen-3.mp4', poster: 'media/posters/shannen-3.jpg', o: 'h' },
        { src: 'media/shannen-4.mp4', poster: 'media/posters/shannen-4.jpg', o: 'h' },
      ],
    },
    {
      id: 'grz', name: 'GRZ Factory', platform: 'Instagram', handle: '@plugmarket.fr',
      url: 'https://www.instagram.com/plugmarket.fr/?hl=fr', logo: 'assets/pp/grz.png',
      accent: '#ffae1a', tags: ['Reels', 'Créa IA'],
      blurb: 'Tournage, montage et créa IA pour Plugmarket.',
      media: [
        { src: 'media/grz-1.mp4', preview: 'media/previews/grz-1.mp4', poster: 'media/posters/grz-1.jpg', o: 'v' },
        { src: 'media/grz-2.mp4', preview: 'media/previews/grz-2.mp4', poster: 'media/posters/grz-2.jpg', o: 'v' },
        { src: 'media/grz-3.mp4', preview: 'media/previews/grz-3.mp4', poster: 'media/posters/grz-3.jpg', o: 'v', tag: 'Créa IA' },
      ],
    },
    {
      id: 'evan', name: 'Evan Charles', platform: 'YouTube', handle: '@evnbusiness',
      url: 'https://www.youtube.com/@evnbusiness', logo: 'assets/pp/evan.jpg',
      accent: '#4db2ff', tags: ['YouTube', 'Montage long format'],
      blurb: 'Montage YouTube en 4K.',
      media: [{ src: 'media/evan-1.mp4', preview: 'media/previews/evan-1.mp4', poster: 'media/posters/evan-1.jpg', o: 'h' }],
    },
    {
      id: 'arntreal', name: 'Arntreal', platform: 'Instagram', handle: '@arntreal.co',
      url: 'https://www.instagram.com/arntreal.co', logo: 'assets/pp/arntreal.jpg',
      accent: '#ff4b3a', tags: ['Reels', 'Sous-titres'],
      blurb: 'Formats courts rythmés, sous-titrés sur mesure.',
      media: [
        { src: 'media/arntreal-1.mp4', preview: 'media/previews/arntreal-1.mp4', poster: 'media/posters/arntreal-1.jpg', o: 'v' },
        { src: 'media/arntreal-2.mp4', preview: 'media/previews/arntreal-2.mp4', poster: 'media/posters/arntreal-2.jpg', o: 'v' },
      ],
    },
    {
      id: 'fady', name: 'Fady', platform: 'Instagram', handle: '@fady.app',
      url: 'https://www.instagram.com/fady.app', logo: 'assets/pp/fady.jpg',
      accent: '#9a6bff', tags: ['Co-fondateur', 'App', 'Reels'],
      blurb: 'L’app que je co-fonde : toute l’image de marque en vidéo.',
      media: [
        { src: 'media/fady-1.mp4', preview: 'media/previews/fady-1.mp4', poster: 'media/posters/fady-1.jpg', o: 'v' },
        { src: 'media/fady-2.mp4', preview: 'media/previews/fady-2.mp4', poster: 'media/posters/fady-2.jpg', o: 'v' },
        { src: 'media/fady-3.mp4', preview: 'media/previews/fady-3.mp4', poster: 'media/posters/fady-3.jpg', o: 'v' },
      ],
    },
    {
      id: 'cadence', name: 'Cadence.', platform: 'Site web', handle: 'cadenceapp.fr',
      url: 'https://cadenceapp.fr/', logo: 'assets/pp/cadence.jpg',
      accent: '#1fe3a8', tags: ['App', 'Ads', 'Reels'],
      blurb: 'Contenus viraux pour le lancement d’une app.',
      media: [
        { src: 'media/cadence-1.mp4', preview: 'media/previews/cadence-1.mp4', poster: 'media/posters/cadence-1.jpg', o: 'v' },
        { src: 'media/cadence-2.mp4', preview: 'media/previews/cadence-2.mp4', poster: 'media/posters/cadence-2.jpg', o: 'v' },
        { src: 'media/cadence-3.mp4', preview: 'media/previews/cadence-3.mp4', poster: 'media/posters/cadence-3.jpg', o: 'v' },
      ],
    },
    {
      id: 'ribeifoot', name: 'Ribeifoot', platform: 'YouTube', handle: '@Ribeifoot',
      url: 'https://www.youtube.com/@Ribeifoot', logo: 'assets/pp/ribeifoot.jpg',
      accent: '#3ee07a', tags: ['YouTube', 'Foot', 'Long format'],
      blurb: 'Montage long format pour une chaîne foot à 52K abonnés.',
      media: [{ src: 'media/ribeifoot-1.mp4', preview: 'media/previews/ribeifoot-1.mp4', poster: 'media/posters/ribeifoot-1.jpg', o: 'h' }],
    },
    {
      id: 'mohasmile', name: 'Mohasmile', platform: 'TikTok', handle: '@mohasmilefr',
      url: 'https://www.tiktok.com/@mohasmilefr?lang=fr', logo: 'assets/pp/mohasmile.jpg',
      accent: '#3fe0ff', tags: ['Reels', 'Tournage'],
      blurb: 'Reels tournés et montés en 4K vertical.',
      media: [
        { src: 'media/mohasmile-1.mp4', preview: 'media/previews/mohasmile-1.mp4', poster: 'media/posters/mohasmile-1.jpg', o: 'v' },
        { src: 'media/mohasmile-2.mp4', preview: 'media/previews/mohasmile-2.mp4', poster: 'media/posters/mohasmile-2.jpg', o: 'v' },
        { src: 'media/mohasmile-3.mp4', preview: 'media/previews/mohasmile-3.mp4', poster: 'media/posters/mohasmile-3.jpg', o: 'v' },
      ],
    },
    {
      id: 'b4cars', name: 'B4cars.exe', platform: 'Instagram', handle: '@b4cars.exe',
      url: 'https://www.instagram.com/b4cars.exe/?hl=fr', logo: 'assets/pp/b4cars.jpg',
      accent: '#ff6f1a', tags: ['Automobile', 'Reels'],
      blurb: 'Edit automobile nerveux.',
      media: [{ src: 'media/b4cars-1.mp4', preview: 'media/previews/b4cars-1.mp4', poster: 'media/posters/b4cars-1.jpg', o: 'v' }],
    },
    {
      id: 'nightpass', name: 'Nightpass', platform: 'Instagram', handle: '@nightpass_app',
      url: 'https://www.instagram.com/nightpass_app/?hl=fr', logo: 'assets/pp/nightpass.jpg',
      accent: '#7d7bff', tags: ['App', 'Nightlife', 'Reels'],
      blurb: 'Formats courts pour une app de sorties.',
      media: [
        { src: 'media/nightpass-1.mp4', preview: 'media/previews/nightpass-1.mp4', poster: 'media/posters/nightpass-1.jpg', o: 'v' },
        { src: 'media/nightpass-2.mp4', preview: 'media/previews/nightpass-2.mp4', poster: 'media/posters/nightpass-2.jpg', o: 'v' },
        { src: 'media/nightpass-3.mp4', preview: 'media/previews/nightpass-3.mp4', poster: 'media/posters/nightpass-3.jpg', o: 'v' },
      ],
    },
    {
      id: 'forexfab', name: 'Forexfab', platform: 'Instagram', handle: '@forexfab',
      url: 'https://www.instagram.com/forexfab/', logo: 'assets/pp/forexfab.jpg',
      accent: '#f6c945', tags: ['Trading', 'Reels'],
      blurb: 'Reels pédagogiques sur le trading.',
      media: [
        { src: 'media/forexfab-1.mp4', preview: 'media/previews/forexfab-1.mp4', poster: 'media/posters/forexfab-1.jpg', o: 'v' },
        { src: 'media/forexfab-2.mp4', preview: 'media/previews/forexfab-2.mp4', poster: 'media/posters/forexfab-2.jpg', o: 'v' },
      ],
    },
    {
      id: 'autres', name: 'Autres', platform: 'Sélection', handle: '@noah_lrnt',
      url: 'https://www.instagram.com/noah_lrnt', logo: 'assets/noah.png',
      accent: '#c6ff3d', tags: ['Montage', 'Motion design'],
      blurb: 'D’autres projets sortis de la timeline.',
      media: [
        { src: 'media/autres-1.mp4', preview: 'media/previews/autres-1.mp4', poster: 'media/posters/autres-1.jpg', o: 'v' },
        { src: 'media/autres-2.mp4', preview: 'media/previews/autres-2.mp4', poster: 'media/posters/autres-2.jpg', o: 'v' },
        { src: 'media/autres-3.mp4', preview: 'media/previews/autres-3.mp4', poster: 'media/posters/autres-3.jpg', o: 'h' },
      ],
    },
  ],
};
