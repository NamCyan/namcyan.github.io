// gitprofile.config.js

const config = {
  github: {
    username: 'NamCyan', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 3, // How many projects to display.
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
    'AI4Code',
    'AI4SE',
    'NLP 🤗',
    'Continual learning',
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
      company: 'VietAI',
      position: 'Teaching assistant',
      from: 'Jan 2021',
      to: 'Present',
      companyLink: 'https://vietai.org/',
    },
    {
      company: 'FPT Software AI Center',
      position: 'AI Resident',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://www.fpt-aicenter.com/ai-residency/',
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
      title: '1st place at Vietnamese Language and Speech Processing 2021',
      description:
        'vlsp-2021 | nlp | machine-reading-comprehension',
      imageUrl: 'https://i.pinimg.com/originals/53/92/b9/5392b938d681f7c6eb9dbad8ed00d90d.png',
      link: 'https://github.com/NamCyan/mrc-vlsp2021',
    },
    {
      title: '3rd place at Quy Nhon AI Hackathon 2022',
      description:
        'hackathon-2022 | nlp | scheduler',
      imageUrl: 'https://i.pinimg.com/564x/c9/ca/2a/c9ca2a4c0f585ef61671e263a0d55411.jpg',
      link: 'https://github.com/NamCyan/hackathon-quynhonai-2022',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  news: {
    items: [
      {
        date: "Dec 29, 2023", 
        content: "🎉 Our paper “Dopamin: Transformer-based Comment Classifiers through Domain Post-Training and Multi-level Layer Aggregation” has been accepted to 3rd Workshop on Natural Language-based Software Engineering (NLBSE 2024), co-located with ICSE 2024.."
      },
      {
        date: "Nov 05, 2023", 
        content: "🎉 Our paper “Continual Variational Dropout: A View of Auxiliary Local Variables in Continual Learning” has been accepted to Machine Learning journal."
      },
      {
        date: "Oct 28, 2023", 
        content: "✨ Happy to share that I completed the Master of Data Science with the excellent score."
      },
      {
        date: "Oct 08, 2023", 
        content: "🎉 Our paper “The Vault: A Comprehensive Multilingual Dataset for Advancing Code Understanding and Generation” has been accepted to Findings of EMNLP."
      },
    ],
    limit: 3
  },
  publications: [
    {
      title: 'The Vault: A Comprehensive Multilingual Dataset for Advancing Code Understanding and Generation',
      year: 2023,
      authors: 'Dung Nguyen Manh*, Nam Le Hai*, Anh T. V. Dau, Anh Minh Nguyen, Khanh Nghiem, Jin Guo, and Nghi D. Q. Bui',
      conference: "[EMNLP'23] Findings of Empirical Methods in Natural Language Processing (rank A*)",
      description: 'continual-learning | dropout | auxiliary-variables',
      keywords: ['ai4code', 'ai4se', 'dataset', 'code-understanding', 'code-generation'],
      imageUrl: 'https://www.am.ai/static/553caff9083f9234c51c1732a6bcf827/8c557/logo_emnlp.png',
      link: 'https://arxiv.org/abs/2305.06156',
    },
    {
      title: 'Continual Variational Dropout: A View of Auxiliary Local Variables in Continual Learning',
      year: 2023,
      authors: 'Nam Le Hai*, Trang Nguyen*, Linh Ngo Van, Thien Huu Nguyen and Khoat Than',
      conference: "[Mach. Learn.'23] Machine Learning journal (rank Q1)",
      description: 'continual-learning | dropout | auxiliary-variables',
      keywords: ["continual-learning", "variational-dropout", "auxiliary-variables"],
      imageUrl: 'https://media.springernature.com/w138/springer-static/cover/journal/10994/112/11.jpg',
      link: '',
    },
    {
      title: 'Auxiliary Local Variables for Improving Regularization/Prior Approach in Continual Learning',
      year: 2022,
      authors: 'Linh Ngo Van*, Nam Le Hai*, Hoang Pham and Khoat Than',
      conference: "[PAKDD'22] Pacific-Asia Conference on Knowledge Discovery and Data Mining (rank A)",
      description: 'continual-learning | dropout | auxiliary-variables',
      keywords: ["continual-learning", "variational-dropout", "auxiliary-variables"],
      imageUrl: 'https://i.pinimg.com/originals/57/20/8c/57208ceae53b08bccde452a465bbdfed.png',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-05933-9_2',
    },
    {
      title: 'ViMRC - VLSP 2021: Improving Retrospective Reader for Vietnamese Machine Reading Comprehension',
      year: 2021,
      authors: 'Nam Le Hai, Nguyen Sy Duc, Chu Quoc Quan and Ngo Van Vi',
      conference: "[JCSCE'21] VNU Journal of Science: Computer Science and Communication Engineering",
      description:'vlsp-2021 | machine-reading-comprehension | vietnamese | retrospective-reader',
      keywords: ['vlsp-2021', 'machine-reading-comprehension', 'vietnamese', 'retrospective-reader'],
      imageUrl: 'https://i.pinimg.com/originals/53/92/b9/5392b938d681f7c6eb9dbad8ed00d90d.png',
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
    disableSwitch: true,

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
  footer: `Profile page of Nam Le Hai 🤗`,
};

export default config;
