const IPTV_SOURCES = {
  playlists: [
    {
      name: 'BDIX IPTV',
      url: 'https://raw.githubusercontent.com/abusaeeidx/Mrgify-BDIX-IPTV/main/playlist.m3u',
    },
    {
      name: 'BDIX IPTV 222',
      url: 'https://github.com/ahan443/FAST-IPTV/blob/main/FIFA.m3u',
    },
    {
      name: 'BDIX IPTV 333',
      url: 'https://iptv-org.github.io/iptv/languages/ben.m3u',
    },
    // {
    //   name: 'BDIX IPTV 4444444444',
    //   url: 'https://iptv-org.github.io/iptv/categories/sports.m3u',
    // },
    // {
    //   name: 'BDIX IPTV 5555555555',
    //   url: 'https://www.scribd.com/document/789677819/New.m3u8',
    // },
  ],

  channels: [
    {
      name: 'Bein Sports 3',
      url: 'http://145.239.5.177:80/559/index.m3u8',
      category: 'Fifa',
      group: 'Fifa',
      logo: 'https://assets.football-logos.cc/logos/tournaments/1500x1500/fifa-world-cup-2026--white.10e0b37b.png',
    },
    {
      name: 'Sony Ten+',
      url: 'https://inproviszon.st/sony-ten-1.m3u8',
      category: 'Kids',
      group: 'Fifa',
      logo: 'https://assets.football-logos.cc/logos/tournaments/1500x1500/fifa-world-cup-2026--white.10e0b37b.png',
    },
    // {
    //   name: 'SSSSSSSSSSSSSSSSSSS+',
    //   url: 'https://inproviszon.st/sony-ten-1.m3u8',
    //   category: 'Fifa',
    //   group: 'Fifa',
    //   logo: 'https://assets.football-logos.cc/logos/tournaments/1500x1500/fifa-world-cup-2026--white.10e0b37b.png',
    // },
    // Example manual channels:
    // {
    //   name: "Somoy TV",
    //   url: "https://example.com/somoy.m3u8",
    //   category: "News",
    //   group: "Bangla TV",
    //   logo: "https://example.com/somoy.png"
    // }
  ],
};

/*
    Playlist/manual channel যেগুলোর category তুমি fixed করতে চাও,
    এখানে channel name -> category map করে দাও।
  
    Allowed categories:
    - Bangla
    - FIFA
    - Kids
    - Global
    - News
    - Indian
    - Entertainment
  */
const CATEGORY_RULES = {
  // Bangla
  'Aakaash Aath': 'Bangla',
  'Aakaash Aath (576p)': 'Bangla',

  'Aamar Bangla': 'Bangla',
  'Aamar Bangla (720p)': 'Bangla',

  'ATN Bangla': 'Bangla',
  'ATN Bangla UK (576p)': 'Bangla',

  'ATN News': 'Bangla',

  'Bangla Vision': 'Bangla',
  'Boishakhi TV': 'Bangla',

  BTV: 'Bangla',
  'BTV National (1080p)': 'Bangla',

  'Channel i': 'Bangla',
  'Channel I HD': 'Bangla',

  'Channel 9 HD': 'Bangla',

  'Channel 24': 'Bangla',
  'Channel 24 HD': 'Bangla',

  'DBC News': 'Bangla',
  'DBC News HD': 'Bangla',

  'Deepto TV': 'Bangla',
  'Deepto TV HD': 'Bangla',

  'Desh TV': 'Bangla',
  'Deshe Bideshe': 'Bangla',

  'Ekushey TV': 'Bangla',

  'Ekattor HD': 'Bangla',
  'Ekattor TV (1080p)': 'Bangla',

  'Green TV (1080p)': 'Bangla',

  'Independent TV': 'Bangla',

  'Jamuna TV': 'Bangla',

  'Maasranga TV': 'Bangla',

  'Mohona TV (1080p)': 'Bangla',

  'News 24 HD': 'Bangla',

  NTV: 'Bangla',
  RTV: 'Bangla',

  'Somoy TV': 'Bangla',

  // Sports / FIFA
  'T Sports': 'FIFA',
  'Sony Sports Ten 1': 'FIFA',
  'Sony Sports Ten 2': 'FIFA',
  'Sony Sports Ten 3': 'FIFA',
  'Star Sports 1': 'FIFA',
  'Star Sports 2': 'FIFA',

  // Kids
  'Cartoon Network': 'Kids',
  Pogo: 'Kids',
  Nick: 'Kids',
  'Disney Channel': 'Kids',

  // Indian
  'Star Jalsha': 'Indian',
  'Zee Bangla': 'Indian',
  'Sony Aath': 'Indian',
  'Colors Bangla': 'Indian',

  // Entertainment
  HBO: 'Entertainment',
  'Sony Max': 'Entertainment',
  'Star Gold': 'Entertainment',
  'Zee Cinema': 'Entertainment',
};
// const BLOCKED_CHANNELS = [
//   'Ekushey TV',
//   'Jamuna TV',
//   'Cartoon Network',
//   'Bein Sports',
//   'Bein Sports 1',
// ];
const CUSTOM_LOGOS = {
  'Ekushey TV': 'https://example.com/logos/ekushey.png',
  'Jamuna TV': 'https://example.com/logos/jamuna.png',
  'Cartoon Network': 'https://example.com/logos/cartoon-network.png',
};
const PRIORITY_CHANNELS = ['WIN SPORTS', 'Bein Sports 3', 'Fifa+'];
