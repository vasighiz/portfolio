import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
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
    title: "Fine-Tuning Large Language Models",
    content: `Fine-Tuning Large Language Models: Custom Intelligence for Real-World Impact
As artificial intelligence moves from research labs into real-world products, Large Language Models (LLMs) like GPT, BERT, and their derivatives are becoming central to innovation across industries. But while these models are powerful out of the box, their real strength lies in fine-tuning—adapting them to specific tasks, domains, and use cases.

At hardware companies, where cutting-edge hardware and intelligent software collide, fine-tuning LLMs opens the door to smarter tools, faster development, and deeper product insights.

What is Fine-Tuning in LLMs?
Fine-tuning is the process of taking a pre-trained model and training it further on a specific dataset. Think of it as customizing a general-purpose model to become a domain expert—whether that domain is semiconductor manufacturing, technical documentation, or customer support.

For example, you might start with a general model like GPT-3, then fine-tune it on engineering logs or product manuals to create a specialized assistant that understands your internal data and workflows.

Why It Matters
🧠 Domain Expertise: Out-of-the-box LLMs might not understand industry-specific jargon or context. Fine-tuning helps models speak your language.

🛠 Task Specialization: You can teach a model to perform specific tasks like summarizing system diagnostics, generating code, or prioritizing bug reports.

⚙️ Performance Boost: Fine-tuned models typically achieve higher accuracy and relevance compared to generic ones—especially in technical or niche settings.

🔒 Data Privacy: By using internal datasets, you can keep sensitive information in-house and still benefit from cutting-edge AI.

Fine-Tuning in Practice
Fine-tuning is a core part of the AI engineering pipeline. From optimizing infrastructure performance to enabling intelligent automation across the product lifecycle, fine-tuned LLMs:

Interpret millions of logs and system records

Automate technical documentation generation

Assist engineers with debugging, predictions, and code completion

Adapt to specific team needs—whether it's research, software, or hardware`,
    date: "2024-03-15",
    author: "Akram Vasighi",
    tags: ["AI", "Machine Learning", "LLM", "Fine-tuning"],
    image: "/portfolio/blog/llm-fine-tuning.jpg",
    slug: "fine-tuning-large-language-models"
  },
  {
    id: 2,
    title: "Fine-tuning your first LLM using Hugging Face Transformers",
    content: `Tutorial: Fine-Tune Your First Large Language Model (LLM) with Hugging Face Transformers

Fine-tuning a large language model might sound intimidating—but with the right tools, it's surprisingly accessible. In this tutorial, you'll learn how to fine-tune a **pretrained LLM** like BERT or DistilBERT on a **custom dataset**, using Python and Hugging Face Transformers.

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
- Experiment with newer architectures like RoBERTa or Falcon`,
    date: "2024-03-20",
    author: "Akram Vasighi",
    tags: ["AI", "Machine Learning", "LLM", "Hugging Face", "Tutorial"],
    image: "/portfolio/blog/huggingface-transformers.jpg",
    slug: "fine-tuning-llm-huggingface-transformers"
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#CCD6F6] mb-4">Post not found</h1>
        <Link to="/blog" className="text-[#FFD700] hover:text-[#FFE55C]">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <Link
        to="/blog"
        className="inline-flex items-center text-[#FFD700] hover:text-[#FFE55C] mb-8"
      >
        <FaArrowLeft className="mr-2" />
        Back to Blog
      </Link>

      <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
      </div>

      <h1 className="text-4xl font-bold text-[#CCD6F6] mb-6">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-[#8892B0] text-sm mb-8">
        <div className="flex items-center gap-2">
          <FaCalendar className="text-[#FFD700]" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-[#FFD700]" />
          <span>{post.author}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#233554] text-[#FFD700] rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-bold text-[#CCD6F6] mt-8 mb-4">
                {paragraph.slice(3)}
              </h2>
            );
          }
          if (paragraph.startsWith('![') && paragraph.includes('](')) {
            const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
            if (match) {
              return (
                <div key={index} className="my-8">
                  <img
                    src={match[2]}
                    alt={match[1]}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              );
            }
          }
          return (
            <p key={index} className="text-[#8892B0] mb-4">
              {paragraph}
            </p>
          );
        })}
      </div>
    </motion.article>
  );
};

export default BlogPost; 