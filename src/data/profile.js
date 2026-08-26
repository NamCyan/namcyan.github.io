// Site content, sourced from HaiNam_CV (2).pdf.
// Edit this file to update anything on the page — no other file holds content.

export const profile = {
  name: 'Nam Le Hai',
  title: 'PhD Student & Lecturer',
  affiliation:
    'School of Information and Communication Technology, Hanoi University of Science and Technology (HUST)',
  email: 'namlh@soict.hust.edu.vn',
  github: 'https://github.com/NamCyan',
  linkedin: 'https://www.linkedin.com/in/le-hai-nam-04a77a225',
  scholar: 'https://scholar.google.com/citations?user=1R5vE1UAAAAJ&hl=en',
  cvUrl: '/CV_LeHaiNam.pdf',
  bio: 'My research interests lie at the intersection of continual learning and natural language processing (NLP), where I explore techniques that let AI systems keep learning in task-streaming environments. I am also advancing AI for Code, combining NLP, large language models, and software engineering principles to tackle software engineering problems and applications.',
};

export const news = [
  {
    date: '08/2026',
    content:
      '🎉 We have 03 papers accepted to EMNLP 2026 🎉',
  },
  {
    date: '03/2026',
    content:
      '🎉 Our paper “Mozila: Continual Event Detection Through the Lens of Multi-Objective Optimization and Language Model Head Preservation” has been accepted for publication in Computational Linguistics (CL)!',
  },
  {
    date: '03/2026',
    content:
      '🎉 Our paper “Detection of Technical Debt in Java Source Code” has been accepted for publication in ACM Transactions on Software Engineering and Methodology (TOSEM)!',
  },
  {
    date: '12/2025',
    content:
      '🎉 Our paper “Do Not Treat Code as Natural Language: Implications for Repository-Level Code Generation and Beyond” has been accepted to FSE 2026!',
  },
];

// rank: A*, A, Q1, etc. link: leave null when no verified URL exists (do not guess).
export const publications = [
  {
    year: 2026,
    authors:
      'Dung Le Quang, Dong Cao Van, **Nam Le Hai**†, Linh Ngo Van, Thi-Mai-Anh Bui, Phuong T. Nguyen',
    title:
      'XRepoTest: Benchmarking Multilingual Repository-Level Unit Test Generation for Large Language Models',
    venue:
      '2026 Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    rank: 'A*',
    link: null,
  },
  {
    year: 2026,
    authors:
      'Minh Le-Anh, **Nam Le Hai**†, Quyen Tran, Anh Nguyen Hoang, Linh Ngo Van, Bach Le, Nghi D. Q. Bui ',
    title:
      'Beyond Repository Boundaries: Cross-Repository Graph Retrieval for Code Generation',
    venue:
      'Findings of the Association for Computational Linguistics: EMNLP',
    rank: 'A*',
    link: null,
  },
  {
    year: 2026,
    authors:
      'Hoang Thanh Dat, Quoc Phong Dao, **Nam Le Hai**†, Franck Dernoncourt, Linh Ngo Van, Trung Le, Thien Huu Nguyen',
    title:
      'EventKD: Event-Aware Knowledge Distillation for Generative Event Extraction',
    venue:
      'Findings of the Association for Computational Linguistics: EMNLP',
    rank: 'A*',
    link: null,
  },
  {
    year: 2026,
    authors:
      'Minh Le-Anh, Huyen Nguyen, Khanh An Tran, **Nam Le Hai**†, Linh Ngo Van, Nghi DQ Bui, Bach Le',
    title:
      'Do Not Treat Code as Natural Language: Implications for Repository-Level Code Generation and Beyond',
    venue:
      '34th ACM International Conference on the Foundations of Software Engineering (FSE)',
    rank: 'A*',
    link: 'https://dl.acm.org/doi/abs/10.1145/3797144',
  },
  {
    year: 2026,
    authors:
      'Hung Pham Van, Nguyen Manh Hieu, Khang Pham Tran Tuan, **Nam Le Hai**†, Linh Ngo Van, Nguyen Thi Ngoc Diep, Trung Le',
    title:
      'MemORAI: Memory Organization and Retrieval via Adaptive Graph Intelligence for LLM Conversational Agents',
    venue: 'Findings of the Association for Computational Linguistics (ACL)',
    rank: 'A*',
    link: 'https://aclanthology.org/2026.findings-acl.1408/',
  },
  {
    year: 2026,
    authors: '**Nam Le Hai**, Linh Ngo Van†, Sang Dinh',
    title:
      'Mozila: Continual Event Detection Through the Lens of Multi-Objective Optimization and Language Model Head Preservation',
    venue: 'Computational Linguistics',
    rank: 'Q1',
    link: 'https://direct.mit.edu/coli/article/doi/10.1162/COLi.a.617/136052',
  },
  {
    year: 2026,
    authors:
      '**Nam Le Hai**, Anh M. T. Bui†, Phuong T. Nguyen, Davide Di Ruscio, Rick Kazman',
    title: 'Detection of Technical Debt in Java Source Code',
    venue: 'ACM Transactions on Software Engineering and Methodology (TOSEM)',
    rank: 'Q1',
    link: 'https://dl.acm.org/doi/abs/10.1145/3801745',
  },
  {
    year: 2026,
    authors:
      'Bao-Ngoc Dao, Minh Le, Quang Nguyen, Luyen Ngo Dinh, **Nam Le Hai**†, Linh Ngo Van',
    title:
      'WAVE++: Capturing Within-Task Variance for Continual Relation Extraction with Adaptive Prompting',
    venue: 'Neurocomputing',
    rank: 'Q1',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0925231226003127?via%3Dihub',
  },
  {
    year: 2026,
    authors:
      'Anh Duc Le*, Tu Vu*, **Nam Le Hai***†, Nguyen Thi Ngoc Diep, Linh Ngo Van, Trung Le, Thien Huu Nguyen',
    title:
      'Discord: Enhancing knowledge distillation via cross-chain of thought and optimal transport alignment between models with different tokenizers',
    venue: 'Knowledge-Based Systems',
    rank: 'Q1',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0950705126013328',
  },
  {
    year: 2025,
    authors:
      'Nguyen Manh Hieu, Vu Lam Anh, Hung Pham Van, **Nam Le Hai**, Diep Thi-Ngoc Nguyen, Linh Ngo Van†, Thien Huu Nguyen',
    title:
      'MaGiX: A Multi-Granular Adaptive Graph Intelligence Framework for Enhancing Cross-Lingual RAG',
    venue: 'Findings of EMNLP 2025, pages 5202–5219, Suzhou, China',
    rank: 'A*',
    link: 'https://aclanthology.org/2025.findings-emnlp.279/',
  },
  {
    year: 2025,
    authors:
      'Thanh Duc Pham, **Nam Le Hai**†, Linh Ngo Van, Nguyen Thi Ngoc Diep, Sang Dinh, Thien Huu Nguyen',
    title:
      'Mitigating Non-Representative Prototypes and Representation Bias in Few-Shot Continual Relation Extraction',
    venue:
      '63rd Annual Meeting of the Association for Computational Linguistics (ACL)',
    rank: 'A*',
    link: 'https://aclanthology.org/2025.acl-long.530/',
  },
  {
    year: 2025,
    authors:
      'Duc Anh Le*, **Nam Le Hai***†, Thanh Xuan Nguyen*, Linh Ngo Van, Diep Thi-Ngoc Nguyen, Sang Dinh, Thien Huu Nguyen',
    title:
      'Enhancing Discriminative Representation in Similar Relation Clusters for Few-Shot Continual Relation Extraction',
    venue: '2025 Conference of the North American Chapter of the ACL (NAACL)',
    rank: 'A',
    link: 'https://aclanthology.org/2025.naacl-long.123/',
  },
  {
    year: 2025,
    authors: '**Nam Le Hai**†, Dung Manh Nguyen, Nghi DQ Bui',
    title: 'On the Impacts of Contexts on Repository-Level Code Generation',
    venue: 'Findings of NAACL 2025',
    rank: 'A',
    link: 'https://aclanthology.org/2025.findings-naacl.82/',
  },
  {
    year: 2025,
    authors:
      'Dung Nguyen Manh, Thang Phan Chau, **Nam Le Hai**, Thong T. Doan, Nam V. Nguyen, Quang Pham, Nghi DQ Bui',
    title:
      'CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding Capabilities of CodeLLMs',
    venue:
      'The Thirteenth International Conference on Learning Representations (ICLR)',
    rank: 'A*',
    link: 'https://openreview.net/forum?id=CahIEKCu5Q',
  },
  {
    year: 2025,
    authors:
      'Toan Ngoc Nguyen*, **Nam Le Hai***, Nguyen Doan Hieu*, Dai An Nguyen, Linh Ngo Van, Thien Huu Nguyen, Sang Dinh†',
    title:
      'Improving Vietnamese-English Cross-Lingual Retrieval for Legal and General Domains',
    venue: '2025 Conference of the North American Chapter of the ACL (NAACL)',
    rank: 'A',
    link: 'https://aclanthology.org/2025.naacl-short.12/',
  },
  {
    year: 2024,
    authors:
      'Quyen Tran, Nguyen Xuan Thanh, Nguyen Hoang Anh, **Nam Le Hai**, Trung Le, Linh Van Ngo, Thien Huu Nguyen',
    title:
      'Preserving Generalization of Language Models in Few-shot Continual Relation Extraction',
    venue:
      '2024 Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    rank: 'A*',
    link: 'https://aclanthology.org/2024.emnlp-main.763/',
  },
  {
    year: 2024,
    authors: '**Nam Le Hai**, Nghi D. Q. Bui',
    title:
      'Dopamin: Transformer-based Comment Classifiers through Domain Post-Training and Multi-level Layer Aggregation',
    venue:
      '2024 ACM/IEEE International Workshop on NL-based Software Engineering (NLBSE)',
    rank: null,
    link: 'https://dl.acm.org/doi/abs/10.1145/3643787.3648044',
    note: 'Best Tool Award',
  },
  {
    year: 2024,
    authors:
      '**Nam Le Hai**, Trang Nguyen, Linh Ngo Van, Thien Huu Nguyen, Khoat Than',
    title:
      'Continual Variational Dropout: A View of Auxiliary Local Variables in Continual Learning',
    venue: 'Machine Learning, 113(1)',
    rank: 'Q1',
    link: 'https://link.springer.com/article/10.1007/s10994-023-06487-7',
  },
  {
    year: 2023,
    authors:
      'Dung Nguyen*, **Nam Le Hai***, Anh Dau, Anh Nguyen, Khanh Nghiem, Jin Guo, Nghi Bui',
    title:
      'The Vault: A Comprehensive Multilingual Dataset for Advancing Code Understanding and Generation',
    venue: 'Findings of the Association for Computational Linguistics (EMNLP)',
    rank: 'A*',
    link: 'https://aclanthology.org/2023.findings-emnlp.316/',
  },
  {
    year: 2022,
    authors: 'Linh Ngo Van*, **Nam Le Hai***, Hoang Pham*, Khoat Than',
    title:
      'Auxiliary Local Variables for Improving Regularization/Prior Approach in Continual Learning',
    venue:
      'Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD), Springer',
    rank: 'A',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-05933-9_2',
  },
  {
    year: 2022,
    authors: '**Nam Le Hai**, Duc Nguyen Sy, Quan Chu Quoc, Vi Ngo Van',
    title:
      'ViMRC-VLSP 2021: Improving Retrospective Reader for Vietnamese Machine Reading Comprehension',
    venue:
      'VNU Journal of Science: Computer Science and Communication Engineering (JCSCE)',
    rank: null,
    link: 'https://jcsce.vnu.edu.vn/index.php/jcsce/article/view/346',
  },
];

export const education = [
  {
    institution: 'Hanoi University of Science and Technology (HUST)',
    degree: 'PhD in Computer Science',
    from: '2025',
    to: 'present',
    detail: null,
  },
  {
    institution: 'Hanoi University of Science and Technology (HUST)',
    degree: 'Master of Science (Honors) in Computer Science',
    from: '2021',
    to: '2023',
    detail: 'GPA: 3.94/4.0',
  },
  {
    institution: 'Hanoi University of Science and Technology (HUST)',
    degree: 'Bachelor of Science (Honors) in Computer Science',
    from: '2017',
    to: '2021',
    detail: 'GPA: 3.59/4.0 — ranked top 1 in Vietnam in Computer Science',
  },
];

export const awards = [
  {
    year: '2024',
    title: 'Best Tool Award',
    org: 'International Workshop on Natural Language-based Software Engineering (NLBSE)',
  },
  {
    year: '2022',
    title: 'Third Prize, Quy Nhon AI Hackathon (Top 3 of 73 teams)',
    org: 'FPT Software',
  },
  {
    year: '2021',
    title: 'First Prize, VLSP Competition (Top 1 of 77 teams)',
    org: 'Association for Vietnamese Language and Speech Processing',
  },
  {
    year: '2021',
    title: 'Best Thesis Presentation Award',
    org: 'Hanoi University of Science and Technology',
  },
];
