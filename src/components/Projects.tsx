import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'LLM-Based Question Answering System (RAG-Powered)',
      description: 'Developed a RAG pipeline using Python that combines: Document processing with LangChain, Semantic search using Hugging Face Transformers and FAISS, Local LLM inference with CTransformers (Mistral 7B), Interactive UI with Streamlit.',
      technologies: ["CTransformers", "LangChain", "Hugging Face", "FAISS", "Streamlit", "RAG"],
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/RAG-chat',
      liveUrl: 'https://healthcare-dl-demo.com'
    },
    {
      title: 'scAgentic: AI Agents for Automated Genomic Data Analysis',
      description: 'Innovative project focusing on automating genomic data analysis, powered by LLMs and AI Agents. Automate NGS data analysis and enabled researchers to query and interpret genomic analysis results via natural language',
      technologies: ["Python ", "GPT", "prompt engineering", "Fine-Tuning", "NGS data analysis", "MCP"],
      image: '/portfolio/project1.jpg',
      githubUrl: 'https://github.com/vasighiz/scAgentic',
      liveUrl: 'https://healthcare-dl-demo.com'
    },
    {
      title: 'SEGCECO: Subgraph Embedding of Gene expression matrix for prediction of CEll-cell COmmunication',
      description: 'Research project focusing on development of machine learning models for cellular interacction prediction.',
      technologies: ['Python', 'Grapg Neural Networks', 'TensorFlow', 'PyTorch', 'GPU clusters', 'Large-scale Data Processing'],
      image: '/portfolio/segceco.jpg',
      githubUrl: 'https://github.com/vasighiz/SEGCECO',
      liveUrl: 'https://bioinformatics-ai-demo.com'
    },
    {
      title: 'Text Data Mining and Topic Modeling of Historical Newspapers',
      description: 'Collaborated in an interactive workshop series focused on mining and analyzing digitized historical newspaper data within a JupyterHub environment. Utilized Python tools including NLTK, Whoosh, Pandas, and Non-negative Matrix Factorization (NMF) to preprocess OCR-generated text, perform sentiment analysis, and uncover latent topics. Employed OCR text indexing and search to extract relevant snippets from historical newspapers (Essex County’s Amherstburg Echo, 1874–2012). Applied sentiment analysis using VADER lexicon to gauge polarity across historical text segments. Implemented NMF-based topic modeling to identify key themes and trends in newspaper content spanning 1920–1930. Interpreted topic clusters by analyzing high-weight terms and corresponding documents, linking findings to historical socio-economic contexts. Combining text mining and machine learning for historical data research in a collaborative JupyterHub setting.',
      technologies: ['Python', 'NLP', 'Optimization', 'HPC'],
      image: '/portfolio/project3.jpg',
      githubUrl: 'https://github.com/vasighiz/TDMnewspapers-NMF',
      liveUrl: 'https://nn-optimization-demo.com'
    },
    {
      title: 'THouse Price Prediction using ML',
      description: 'Developed a real-world data science project focused on predicting housing prices. Addressed challenges of working with authentic, industry-relevant datasets and implemented various regression models using state-of-the-art tools such as PyCaret to optimize accuracy and speed. Deployed the final model as an interactive web application using Streamlit, showcasing end-to-end data analysis, modeling, and productization skills',
      technologies: ['Python', 'NLP', 'Optimization', 'HPC', 'Streamlit', 'PyCaret'],
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com'
    },
    {
      title: 'Apple Stock Price Prediction Using Deep Learning',
      description: 'Designed and implemented a practical deep learning project to predict Apple Inc.’s stock prices using real historical data sourced from Yahoo Finance. Covered core deep learning architectures and applied advanced feature extraction and data preprocessing techniques. Delivered an end-to-end solution encompassing model building, evaluation, and result interpretation to enhance investment decision-making.',
      technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Keras', 'Data Preprocessing', 'Stock Market Analysis'],
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },
    {
      title: 'Face Image Generation Using Generative Adversarial Networks (GANs)',
      description: 'Led a hands-on project focused on generating realistic human face images using GAN-based generative AI techniques. Leveraged a celebrity face dataset to train GAN models comprising generator and discriminator networks. Provided deep insights into the architecture, training procedures, and optimization strategies of GANs.',
      technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Keras', 'Data Preprocessing', 'GANs', 'Generative AI'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },
    {
      title: 'Literary Text Generation Using Recurrent Neural Networks (RNNs)',
      description: 'Conducted a hands-on project to generate Shakespearean-style literary text using advanced generative AI techniques. Utilized a dataset of Shakespeare’s works to train RNN-based models, introducing participants to fundamental and advanced recurrent architectures. Explored the core structure and applications of RNNs in text generation. Covered enhanced layers such as LSTM and GRU, and their advantages over traditional RNNs. Investigating practical applications including artistic writing, storytelling, and chatbot content creation. This project fostered deep understanding of sequential generative models and creative text synthesis using RNNs.',
      technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Keras', 'Data Preprocessing', 'GANs', 'Generative AI', 'RNNs'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },  
    {
      title: 'Discovering Cell Types Using Manifold Learning and Enhanced Visualization of Single-Cell RNA-Seq Data',
      description: 'Developed a computational method combining nonlinear dimensionality reduction techniques with clustering algorithms to identify representative cell type clusters in high-dimensional, sparse single-cell RNA-seq (scRNA-seq) data. Evaluated the approach on thirteen diverse publicly available scRNA-seq datasets, demonstrating that combining modified locally linear embedding (LLE) with independent component analysis (ICA) outperforms existing unsupervised methods. Performed gene set enrichment analysis to validate cluster biological relevance, advancing disease module identification through precise cell type characterization.',
      technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Keras', 'Data Preprocessing', 'Manifold Learning', 'Clustering', 'Single-Cell RNA-Seq', 'Gene Set Enrichment Analysis', 'Dimensionality Reduction', 'Unsupervised Learning'],
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },    
    {
      title: 'Cell Type Annotation Model Selection: General-Purpose vs. Pattern-Aware Feature Gene Selection in Single-Cell RNA-Seq Data',
      description: 'Compared and evaluated state-of-the-art supervised models, including XGBoost and Support Vector Machines (SVM) with information gain feature selection, for automated cell type annotation in single-cell RNA-seq datasets. Demonstrated that XGBoost provides a scalable and effective framework for cell type identification, outperforming traditional methods. Highlighted the potential of combining boosting tree algorithms with deep neural networks to improve marker gene identification and biological insights from scRNA-seq data.',
      technologies: ['Python', 'Deep Learning', 'Single-Cell RNA-Seq', 'Dimensionality Reduction', 'Unsupervised Learning', 'XGBoost', 'SVM', 'Information Gain', 'Feature Selection', 'Cell Type Identification', 'Clustering', 'Visualization'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },    
    {
      title: 'Unsupervised Identification of SARS-CoV-2 Target Cell Groups via Nonlinear Dimensionality Reduction on Single-Cell RNA-Seq Data',
      description: 'Applied advanced unsupervised learning methods combining nonlinear dimensionality reduction (modified Locally Linear Embedding and Independent Component Analysis) with clustering to identify representative lung cell clusters targeted by SARS-CoV-2. Conducted comprehensive preprocessing including normalization and quality filtering on large-scale COVID-19 scRNA-seq datasets. Validated findings by identifying immune-related target cell types and overlapping marker genes linked to COVID-19, Influenza A, and HSV-1 infections, providing insights into disease mechanisms and potential therapeutic targets. Led literature review, data curation, algorithm design, implementation, and result presentation in collaboration with Mitacs and University of Windsor.',
      technologies: ['Python', 'Deep Learning', 'Literature Review', 'Data Curation', 'Nonlinear Dimensionality Reduction', 'Single-Cell RNA-Seq', 'Therapeutic Targets'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },      
    {
      title: 'Cell Type Identification Using Convolutional Neural Networks and Self-Organizing Maps on Single-Cell RNA-Seq Data',
      description: 'Developed a two-step supervised learning approach combining convolutional neural networks (CNNs) and self-organizing maps (SOMs) for automatic cell type identification in high-dimensional single-cell RNA-seq data. Applied unsupervised feature selection to identify key genes, achieving an average prediction accuracy of 98% across six human pancreas cell types. Biological validation confirmed that the majority of selected genes are relevant markers, demonstrating the method’s effectiveness in accelerating cell type annotation.',
      technologies: ['Python', 'Deep Learning', 'Convolutional Neural Networks', 'Self-Organizing Maps'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },  
    {
      title: 'Identifying Therapeutically Targetable Tumor-Immune Interactions in Small Cell Lung Cancer',
      description: 'Applied machine learning and single-cell RNA sequencing (scRNA-seq) analysis to investigate tumor heterogeneity and uncover novel therapeutic targets in small cell lung cancer (SCLC). Leveraged published datasets to identify key biomarkers predictive of tumor-immune interactions and gene expression changes across immune and epithelial subtypes. Conducted pathway analysis and literature validation to pinpoint genes such as RBP1 and CD74 with strong protective roles. This research provides molecular insights to guide pre-clinical validation and supports the development of stage-specific therapeutic strategies with potential clinical translation.',
      technologies: ['Python', 'Deep Learning', 'Machine Learning', 'Single-Cell RNA-Seq', 'Tumor-Immune Interactions', 'Therapeutic Targets'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },  
    {
      title: 'C-PUGP: Cluster-Based Positive Unlabeled Learning for Disease Gene Prediction and Prioritization',
      description: 'Developed a novel semi-supervised machine learning method to identify and prioritize candidate disease genes despite the challenge of lacking reliable negative samples. Introduced a three-step approach combining clustering of positive data, one-class classification to generate a reliable negative set, and SVM-based binary classification for gene ranking. Achieved significant performance improvements with precision, recall, and F-measure exceeding 92%, outperforming existing methods by over 11% in F-measure and enhancing gene prioritization accuracy by approximately 6%.',
      technologies: ['Python', 'Deep Learning', 'Machine Learning', 'Clustering', 'One-Class Classification', 'SVM', 'Binary Classification', 'Gene Prioritization'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },    
    {
      title: 'One-Class Classification Approach for Accurate Prediction of Disease-Gene Associations in Acute Myeloid Leukemia (AML)',
      description: 'Developed a novel one-class SVM method focused on precisely identifying disease-causing genes in AML by treating the problem as a one-class classification task. Unlike traditional binary classifiers, this approach emphasizes high sensitivity and precision in detecting known disease genes while minimizing false negatives. Evaluated on an AML gene expression benchmark dataset, the method demonstrated superior performance in precision, recall, and F-measure compared to existing techniques. The model and benchmark dataset are publicly available, promoting reproducibility and further research.',
      technologies: ['Python', 'Deep Learning', 'Machine Learning', 'One-Class Classification', 'OCSVM', 'Gene Prioritization','Reproducibility'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },    
    {
      title: 'Canadian Medicinal Plant Detection via Transfer Learning',
      description: 'Utilized convolutional neural networks with transfer learning to classify plant images. Leveraged transfer learning on the InceptionV3 convolutional neural network architecture to efficiently train the model on a limited dataset of plant images. Collected and curated a high-quality image dataset representing various medicinal plant species native to Canada. Applied transfer learning to fine-tune a pre-trained InceptionV3 model, reducing the need for large-scale data and computational resources. Implemented data augmentation techniques to enhance model robustness and generalization. Evaluated model performance using standard metrics such as accuracy, precision, recall, and F1-score. ',
      technologies: ['Python', 'Deep Learning', 'Machine Learning', 'Transfer Learning', 'InceptionV3', 'Data Augmentation', 'Image Classification'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },  
    {
      title: 'Online Data Visualization and Analysis Tool',
      description: 'Designed and implemented a comprehensive data visualization and analysis platform tailored for the insurance industry, leveraging ETL (Extract, Transform, Load) processes and OLAP (Online Analytical Processing) systems. Designed OLAP cubes to facilitate multi-dimensional data analysis, enabling users to perform dynamic slicing, dicing, and drill-down operations. Created interactive PowerBI dashboards with rich visualizations (charts, maps, KPIs) to highlight key insurance metrics such as customer segmentation, claims trends, and risk assessment. Enabled non-technical stakeholders to explore and interpret data easily, improving operational efficiency and strategic planning. Collaborated with domain experts to tailor analytics solutions addressing industry-specific challenges and regulatory requirements.',
      technologies: ['Python', 'ETL', 'OLAP', 'PowerBI', 'Data Visualization', 'Data Analysis', 'Data Mining', 'Data Warehousing'],  
      image: '/portfolio/.jpg',
      githubUrl: 'https://github.com/vasighiz/',
      liveUrl: 'https://nn-optimization-demo.com' 
    },  
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-[#0B1B2D] mb-4">Projects</h1>
        <p className="text-[#334155] leading-relaxed">
          Explore my contributions in Machine Learning and Artificial Intelligence.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
