// gitprofile.config.js

const config = {
  github: {
    username: 'NamCyan', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/le-hai-nam-04a77a225/',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nam.lh173264@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'PyTorch',
    'Huggingface transformers',
    'SQL',
    'Docker'
  ],
  experiences: [
    {
      company: 'Mobifone IT Center',
      position: 'AI Engineer',
      from: 'Jan 2022',
      to: 'June 2022',
      companyLink: '',
    },
    {
      company: 'FPT Software AI Center',
      position: 'AI Resident',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://example.comhttps://www.facebook.com/aic.fsoft',
    },
  ],
  certifications: [
    {
      name: 'TOEIC',
      body: 'Score: 865',
      year: 'Oct 2023',
      link: ''
    },
  ],
  education: [
    {
      institution: 'Hanoi University of Science and Technology',
      degree: 'Bachelor',
      from: '2017',
      to: '2021',
    },
    {
      institution: 'Hanoi University of Science and Technology',
      degree: 'Master',
      from: '2021',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '1st place at Vietnamese Machine Reading Comprehension in VLSP 2021 competition',
      description:
        'nlp | mrc | vlsp-2021',
      imageUrl: '',
      link: 'https://github.com/NamCyan/mrc-vlsp2021',
    },
    {
      title: '3rd place at Quy Nhon AI Hackathon 2022',
      description:
        'hackathon-2022 | nlp | scheduler',
      imageUrl: '',
      link: 'https://github.com/NamCyan/hackathon-quynhonai-2022',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  publications: [
    {
      title: 'The Vault: A Comprehensive Multilingual Dataset for Advancing Code Understanding and Generation',
      year: 2023,
      conference: "[EMNLP] Findings of Empirical Methods in Natural Language Processing",
      description: 'continual-learning | dropout | auxiliary-variables',
      keywords: ['ai4code', 'ai4se', 'dataset', 'code-understanding', 'code-generation'],
      imageUrl: 'https://github.com/FSoft-AI4Code/TheVault/blob/main/assets/poster.jpg',
      link: 'https://arxiv.org/abs/2305.06156',
    },
    {
      title: 'Auxiliary Local Variables for Improving Regularization/Prior Approach in Continual Learning',
      year: 2022,
      conference: "[PAKDD] Pacific-Asia Conference on Knowledge Discovery and Data Mining",
      description: 'continual-learning | dropout | auxiliary-variables',
      keywords: ["continual-learning", "variational-dropout", "auxiliary-variables"],
      imageUrl: 'https://lazyprogrammer.me/wp-content/uploads/2016/04/the_neural_network2_by_rajasegar-d2xx41q.jpg',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-05933-9_2',
    },
    {
      title: 'ViMRC - VLSP 2021: Improving Retrospective Reader for Vietnamese Machine Reading Comprehension',
      year: 2021,
      conference: "[JCSCE] VNU Journal of Science: Computer Science and Communication Engineering",
      description:'vlsp-2021 | machine-reading-comprehension | vietnamese | retrospective-reader',
      keywords: ['vlsp-2021', 'machine-reading-comprehension', 'vietnamese', 'retrospective-reader'],
      imageUrl: 'https://i.pinimg.com/originals/10/26/58/102658004e2ed30dcd9ca8e45600abe6.jpg',
      link: 'https://jcsce.vnu.edu.vn/index.php/jcsce/article/view/346',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Hi, I'm Hai Nam 🤗`,
};

export default config;
