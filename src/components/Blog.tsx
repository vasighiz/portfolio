import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Fine-tuning your first LLM using Hugging Face Transformers",
    excerpt: "A comprehensive tutorial on fine-tuning large language models using Hugging Face Transformers, from setup to deployment.",
    content: `Fine-tuning a large language model might sound intimidating—but with the right tools, it's surprisingly accessible. In this tutorial, you'll learn how to fine-tune a **pretrained LLM** like BERT or DistilBERT on a **custom dataset**, using Python and Hugging Face Transformers.

By the end, you'll have a model tailored to your specific domain—ready to improve everything from document understanding to chatbot performance.

🔧 What You Need

✅ Python (>=3.8)  
✅ A GPU (recommended for speed)  
✅ Libraries: \`transformers\`, \`datasets\`, \`evaluate\`, \`scikit-learn\`  
✅ Your dataset (we'll use a simple text classification example)

🧪 Step 1: Install Dependencies

\`\`\`bash
pip install transformers datasets evaluate scikit-learn
\`\`\`

📁 Step 2: Prepare Your Dataset

Let's say you have customer support data like this:

\`\`\`csv
text,label
"System crash when opening file", bug
"Need help installing drivers", support
"Performance issues after update", bug
"How to request warranty?", support
\`\`\`

We'll load this using Hugging Face Datasets:

\`\`\`python
from datasets import load_dataset

# You can load from a CSV, JSON, or even pandas DataFrame
dataset = load_dataset("csv", data_files={"train": "your_data.csv"})
\`\`\`

🤖 Step 3: Load a Pretrained Model & Tokenizer

We'll use **DistilBERT** for classification:

\`\`\`python
from transformers import AutoTokenizer, AutoModelForSequenceClassification

model_name = "distilbert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)

model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=2)
\`\`\`

✂️ Step 4: Tokenize the Dataset

\`\`\`python
def tokenize(example):
    return tokenizer(example["text"], padding="max_length", truncation=True)

tokenized_data = dataset.map(tokenize, batched=True)
\`\`\`

🏋️ Step 5: Fine-Tune the Model

\`\`\`python
from transformers import TrainingArguments, Trainer

training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=8,
    num_train_epochs=3,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_data["train"],
    eval_dataset=tokenized_data["train"],  # You can split into train/eval
)

trainer.train()
\`\`\`

📈 Step 6: Evaluate Your Model

\`\`\`python
from sklearn.metrics import classification_report
import numpy as np

preds = trainer.predict(tokenized_data["train"])
pred_labels = np.argmax(preds.predictions, axis=1)
true_labels = preds.label_ids

print(classification_report(true_labels, pred_labels))
\`\`\`

🧠 Bonus: Save & Use Your Model

\`\`\`python
model.save_pretrained("my-custom-llm")
tokenizer.save_pretrained("my-custom-llm")
\`\`\`

Then, load it back anytime:

\`\`\`python
from transformers import pipeline

nlp = pipeline("text-classification", model="my-custom-llm", tokenizer="my-custom-llm")
nlp("I can't update my BIOS")
\`\`\`

✅ You're Done!

You've just fine-tuned a powerful LLM to **understand your domain**. From here, you can:

- Fine-tune for other tasks: QA, summarization, translation, etc.
- Use \`Trainer\` callbacks for logging to WandB or TensorBoard
- Experiment with newer architectures like RoBERTa or Falcon

🧩 Want More?

I can help you extend this into:

- A version for **text generation** (e.g., GPT-2 or LLaMA)  
- A **Streamlit app** to demo your fine-tuned model  
- A **Dockerized pipeline** for deployment  
- Or even a full **LLM fine-tuning workshop series**`,
    date: "March 20, 2024",
    author: "Akram Vasighi",
    tags: ["LLM", "Hugging Face", "Machine Learning", "Python"],
    image: "/portfolio/blog/llm-fine-tuning.jpg",
    slug: "fine-tuning-llm-huggingface-transformers"
  },
  {
    id: 2,
    title: "Fine-Tuning Large Language Models.",
    excerpt: "A glance to the basics of Fine-Tuning Large Language Models.",
    content: "Fine-Tuning Large Language Models: Custom Intelligence for Real-World Impact...",
    date: "March 15, 2024",
    author: "Akram Vasighi & ChatGPT!",
    tags: ["Deep Learning", "AI", "Machine Learning"],
    image: "/portfolio/blog/deep-learning.jpg",
    slug: "fine-tuning-large-language-models"
  },
  {
    id: 3,
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is transforming the healthcare industry.",
    content: "Artificial intelligence is revolutionizing healthcare in ways we never imagined possible. From diagnosis to treatment planning, AI is becoming an integral part of modern medicine...",
    date: "March 10, 2024",
    author: "Akram Vasighi",
    tags: ["AI", "Healthcare", "Technology"],
    image: "/portfolio/blog/ai-healthcare.jpg",
    slug: "future-of-ai-in-healthcare"
  }
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A192F] rounded-xl p-6 min-h-full"
    >
      <h1 className="text-4xl font-bold text-[#CCD6F6] mb-8">Blog</h1>
      
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            className="bg-[#112240] rounded-xl shadow-lg overflow-hidden border border-[#233554]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-48 md:h-64">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#CCD6F6] mb-4">
                {post.title}
              </h2>
              
              <div className="flex items-center gap-4 text-[#8892B0] text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[#FFD700]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#FFD700]" />
                  <span>{post.author}</span>
                </div>
              </div>

              <p className="text-[#8892B0] mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#233554] text-[#FFD700] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-[#FFD700] hover:text-[#FFE55C] transition-colors duration-300"
              >
                Read More
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog; 