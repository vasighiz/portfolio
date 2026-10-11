import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaExternalLinkAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import humanAIBehaviorImage from '../../blog/designing-human-ai-behavior.png';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-[#CCD6F6] mt-10 mb-4">{children}</h2>
);

const HumanAIBehaviorBlogPost = () => {
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

      <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-white">
        <img
          src={humanAIBehaviorImage}
          alt="Designing Human-AI Behavior: traditional workflow compared with an agent-native workflow"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-[#CCD6F6] mb-4">
        Designing Human–AI Behavior: From Workflow Automation to Agent-Native Interaction
      </h1>

      <p className="text-xl text-[#8892B0] mb-6 leading-relaxed">
        What if the most important question in agentic AI is not what we can automate, but what the human–machine workflow should have been in the first place?
      </p>

      <div className="flex flex-wrap items-center gap-4 text-[#8892B0] text-sm mb-8">
        <div className="flex items-center gap-2">
          <FaCalendar className="text-[#FFD700]" />
          <span>2026-10-10</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-[#FFD700]" />
          <span>Akram Vasighi</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {['Human-AI Interaction', 'Agentic AI', 'AI Agents', 'HCI', 'Behavior Design'].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-[#233554] text-[#FFD700] rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none text-[#8892B0] leading-relaxed">
        <div className="border-l-4 border-[#FFD700] pl-5 py-1 mb-8">
          <p className="text-[#CCD6F6] italic mb-0">
            Human defines the goal → Agent prepares the path → Human evaluates and decides → Agent executes.
          </p>
        </div>

        <p className="mb-4">
          The emergence of AI agents is often framed as an automation problem: identify an existing workflow, determine which tasks can be delegated to AI, and measure the resulting gains in speed, cost, or throughput.
        </p>

        <p className="mb-4">
          That framing is useful, but it may be too narrow. Many enterprise workflows were designed around the limitations of earlier generations of software. They assume that users must navigate interfaces, understand internal data structures, complete forms, manage queues, move between systems, and explicitly coordinate each step of a process.
        </p>

        <p className="mb-4">
          AI agents introduce a different possibility: instead of asking how an agent can automate an existing workflow, we can ask a more fundamental question — <strong className="text-[#CCD6F6]">if intelligent agents had existed when the workflow was originally designed, would we have designed the workflow in the same way?</strong>
        </p>

        <SectionTitle>1. From task automation to interaction redesign</SectionTitle>

        <p className="mb-4">
          Traditional software often makes the user act as the integration layer. A person has to find the right application, understand the correct form, collect the required information, translate that information into the system's schema, submit it, monitor its status, and respond when something is missing.
        </p>

        <p className="mb-4">
          Agentic systems can reverse this relationship. The human can increasingly express an intention, while the system determines what information is required, retrieves what already exists, asks only for what is missing, prepares candidate actions, and brings meaningful decisions back to the person.
        </p>

        <p className="mb-4">
          The design question therefore changes from <em>“How can AI operate our workflow?”</em> to <em>“What workflow would we design if the system could understand intent, retrieve information, reason about missing inputs, and coordinate actions?”</em>
        </p>

        <SectionTitle>2. The idea has a research history</SectionTitle>

        <p className="mb-4">
          The theoretical foundations of this question predate generative AI. In 1999, Eric Horvitz described <strong className="text-[#CCD6F6]">mixed-initiative interaction</strong> as an alternative to the false choice between complete automation and complete user control. Rather than assigning control permanently to either the person or the computer, mixed-initiative systems allow each participant to contribute where and when it is most appropriate.
        </p>

        <p className="mb-4">
          This maps naturally to modern agents. Machines are often better suited to retrieval, tracking dependencies, comparing structured information, coordinating APIs, and executing repetitive actions. Humans remain better suited to ambiguous judgment, preference, accountability, interpretation of context, and consequential decisions.
        </p>

        <p className="mb-4">
          The important design problem is therefore not simply whether to automate. It is deciding <strong className="text-[#CCD6F6]">where initiative should live at each point in the interaction</strong>.
        </p>

        <SectionTitle>3. Human–AI interaction is more than model accuracy</SectionTitle>

        <p className="mb-4">
          A technically capable model can still produce a poor human–AI system. The interface may create inappropriate expectations, hide uncertainty, remove useful control, or make errors difficult to correct.
        </p>

        <p className="mb-4">
          Amershi et al.'s <em>Guidelines for Human-AI Interaction</em> (CHI 2019) synthesized more than two decades of research into 18 guidelines. Among them are principles such as making system capabilities clear, timing AI actions appropriately, supporting efficient correction, making unwanted behavior easy to dismiss, and helping users understand when the system may be wrong.
        </p>

        <p className="mb-4">
          These principles matter even more for agents because agents do not merely generate responses. They can retrieve information, coordinate systems, prepare actions, and increasingly execute decisions. An agent is therefore not just a model connected to tools; it is part of a <strong className="text-[#CCD6F6]">behavioral system</strong>.
        </p>

        <SectionTitle>4. Mental models and calibrated agency</SectionTitle>

        <p className="mb-4">
          Users develop a mental model of every system they interact with: what it can do, how it behaves, and how their own actions affect it. Google's People + AI Guidebook emphasizes that poor alignment between a user's mental model and the actual capability of an AI system can lead to misuse, frustration, unmet expectations, and abandonment.
        </p>

        <p className="mb-4">
          Conversational agents make this especially important. A conversational interface can make a narrow system appear broadly intelligent. That can encourage users to overestimate what the system can safely do. At the other extreme, an agent that asks for confirmation after every low-risk action becomes cumbersome and may train users to approve mechanically.
        </p>

        <p className="mb-4">
          The goal is not maximum autonomy. It is <strong className="text-[#CCD6F6]">calibrated agency</strong>: enough autonomy to remove unnecessary work, while preserving meaningful human control where judgment and accountability matter.
        </p>

        <SectionTitle>5. Human control and automation are not opposites</SectionTitle>

        <p className="mb-4">
          Ben Shneiderman's Human-Centered AI framework argues that high automation does not necessarily require low human control. Systems can automate substantial amounts of low-level work while preserving the person's authority over consequential decisions.
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>The machine can collect information automatically.</li>
          <li>The machine can identify missing inputs and retrieve related records.</li>
          <li>The machine can prepare valid options and explain uncertainty.</li>
          <li>The human can determine which option is appropriate.</li>
          <li>The machine can execute the decision and maintain an audit trail.</li>
        </ul>

        <p className="mb-4">
          The result is neither fully manual nor fully autonomous. It is a designed allocation of responsibility.
        </p>

        <SectionTitle>6. A simple agent-native interaction pattern</SectionTitle>

        <h3 className="text-xl font-semibold text-[#CCD6F6] mt-6 mb-3">1. Human defines the goal</h3>
        <p className="mb-4">
          The interaction begins with intention rather than procedure. The person describes the outcome they want instead of specifying every step required to reach it.
        </p>

        <h3 className="text-xl font-semibold text-[#CCD6F6] mt-6 mb-3">2. Agent prepares the path</h3>
        <p className="mb-4">
          The agent determines what is required. Depending on its permissions and capabilities, it may retrieve existing information, identify missing inputs, ask targeted questions, structure unstructured data, validate constraints, coordinate systems, generate candidate actions, and surface uncertainty. The user should not be asked for information the system can reliably obtain itself.
        </p>

        <h3 className="text-xl font-semibold text-[#CCD6F6] mt-6 mb-3">3. Human evaluates and decides</h3>
        <p className="mb-4">
          The system brings meaningful decisions back to the person. Human-in-the-loop should not mean human-in-every-loop. Human attention should be concentrated where judgment, preference, risk acceptance, or accountability genuinely matters.
        </p>

        <h3 className="text-xl font-semibold text-[#CCD6F6] mt-6 mb-3">4. Agent executes</h3>
        <p className="mb-4">
          After the decision is made, the agent performs the mechanical work required to implement it: updating systems, initiating downstream workflows, generating records, communicating results, or coordinating additional services.
        </p>

        <SectionTitle>7. A simpler interface can hide a more sophisticated system</SectionTitle>

        <p className="mb-4">
          One consequence of this model is that sophisticated agentic systems may produce extremely simple interfaces. The visible surface could be little more than a conversation: the user states a goal and the system asks only what is necessary to proceed.
        </p>

        <p className="mb-4">
          That simplicity does not mean the underlying system is simple. Behind it may be identity resolution, authorization, retrieval, deterministic business rules, APIs, databases, workflow engines, policy enforcement, uncertainty handling, audit logs, human approval gates, rollback mechanisms, and failure recovery.
        </p>

        <p className="mb-4">
          The complexity does not disappear. <strong className="text-[#CCD6F6]">It moves away from the user.</strong>
        </p>

        <SectionTitle>8. Conversational interfaces should not become conversational bureaucracy</SectionTitle>

        <p className="mb-4">
          Replacing a form with a chatbot does not automatically constitute better interaction design. If a traditional form contains ten fields and the chatbot simply asks ten questions sequentially, the interface has changed but the workflow has not.
        </p>

        <p className="mb-4">An agent-native design should instead ask:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Which inputs already exist elsewhere?</li>
          <li>Which can be inferred reliably?</li>
          <li>Which are actually necessary?</li>
          <li>Which can be obtained from connected systems?</li>
          <li>Which require explicit confirmation?</li>
          <li>Which are artifacts of the old workflow rather than real business requirements?</li>
        </ul>

        <p className="mb-4">
          Conversation should reduce procedural burden, not merely disguise it.
        </p>

        <SectionTitle>9. From process state to goal state</SectionTitle>

        <p className="mb-4">
          Traditional workflow systems are often organized around predefined stages. Agentic systems create the possibility of organizing work around a goal state instead: rather than asking <em>“What is the next step?”</em>, the system can ask <em>“What prevents the user's goal from being achieved?”</em>
        </p>

        <div className="bg-[#112240] border border-[#233554] rounded-xl p-5 mb-6 font-mono text-sm">
          <div className="text-[#FFD700] mb-2">Goal: READY</div>
          <div>Known information&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓</div>
          <div>Identity resolved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓</div>
          <div>Required evidence&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓</div>
          <div>Policy validation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓</div>
          <div>One ambiguity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!</div>
          <div>Human decision&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pending</div>
        </div>

        <p className="mb-4">
          Different requests can then take different paths toward the same goal instead of being forced through an identical sequence.
        </p>

        <SectionTitle>10. Design for judgment, not approval</SectionTitle>

        <p className="mb-4">
          A common architecture is “AI performs action → human approves action.” This is useful in some contexts, but it can also create approval fatigue. If humans must approve dozens of obvious machine actions, approval itself becomes mechanical.
        </p>

        <p className="mb-4">
          A stronger principle is: <strong className="text-[#CCD6F6]">use humans for judgment, not ceremony.</strong>
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Low-risk deterministic action → automatic execution.</li>
          <li>Recoverable action with strong evidence → execution plus audit trail.</li>
          <li>Material ambiguity → human judgment.</li>
          <li>External commitment or financial consequence → explicit human decision.</li>
          <li>Irreversible action → stronger confirmation or escalation.</li>
        </ul>

        <SectionTitle>11. Trust should be designed, not requested</SectionTitle>

        <p className="mb-4">
          Users should not be asked to “trust the AI.” Trust should emerge from system behavior. A trustworthy agent should make it possible to understand what it knows, what it does not know, what it inferred, what evidence it used, what action it intends to take, what happened after execution, and how an error can be corrected or reversed.
        </p>

        <p className="mb-4">
          In many situations, saying “I am missing one piece of information” is better than confidently producing a potentially incorrect result.
        </p>

        <SectionTitle>12. Behavior design at the system level</SectionTitle>

        <p className="mb-4">
          “Behavior design” is often associated with influencing individual user actions. In agentic systems, there is another useful interpretation: designing the behavior of the entire human–AI system.
        </p>

        <p className="mb-4">That means explicitly designing questions such as:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Who initiates?</li>
          <li>Who asks?</li>
          <li>Who investigates?</li>
          <li>Who decides?</li>
          <li>Who acts?</li>
          <li>Who verifies?</li>
          <li>Who remains accountable?</li>
          <li>Who can override whom?</li>
          <li>What happens when confidence is low?</li>
          <li>What happens when the system is wrong?</li>
        </ul>

        <p className="mb-4">
          These are technical, behavioral, and organizational design decisions at the same time.
        </p>

        <SectionTitle>13. The behavior we normalize matters</SectionTitle>

        <p className="mb-4">
          Repeated interaction creates habits. Habits create expectations. Expectations eventually become norms. Previous generations of software normalized searching instead of memorizing locations, clicking links, dragging objects, using autocomplete, and expecting instant access to information.
        </p>

        <p className="mb-4">
          Agentic systems may create a new set of defaults. Future users may consider it unusual to search through several applications, learn where information is stored, manually move information between systems, fill out forms whose answers already exist, or monitor a process simply to determine what should happen next.
        </p>

        <p className="mb-4">
          Instead, they may expect to express an intention and collaborate with a system that helps transform that intention into an actionable outcome. If that transition occurs, we are not merely automating work. We are changing the expected relationship between people and software.
        </p>

        <SectionTitle>14. Questions to ask before adding an agent</SectionTitle>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>What is the user's actual goal?</li>
          <li>Which parts of the current workflow exist because of real business requirements, and which exist because of historical software limitations?</li>
          <li>What information can the system obtain without asking the user?</li>
          <li>Where does human judgment genuinely add value?</li>
          <li>Which actions are safe to automate?</li>
          <li>Which actions should remain explicitly controlled by humans?</li>
          <li>What should happen when uncertainty is high?</li>
          <li>How does the user recover from a mistake?</li>
          <li>What new user behavior are we implicitly encouraging?</li>
        </ul>

        <div className="border-l-4 border-[#FFD700] pl-5 py-1 my-8">
          <p className="text-[#CCD6F6] text-lg mb-0">
            If we were designing this process today, with AI agents available from the beginning, would we build it this way?
          </p>
        </div>

        <SectionTitle>Conclusion</SectionTitle>

        <p className="mb-4">
          AI agents are frequently discussed as a new layer of automation. They may become something more significant: an opportunity to reconsider assumptions that have shaped software interaction for decades.
        </p>

        <p className="mb-4">
          Forms, screens, queues, explicit workflows, and application-specific procedures were solutions to particular technological constraints. Those constraints are changing. The design opportunity is therefore not simply to insert AI into existing processes, but to reconsider the relationship between human intention, machine capability, human judgment, and machine execution.
        </p>

        <p className="mb-8">
          The central question becomes: <strong className="text-[#CCD6F6]">what behavior should emerge when humans and intelligent systems work together?</strong>
        </p>

        <SectionTitle>References</SectionTitle>

        <div className="space-y-5 mb-10">
          <p>
            Amershi, S. et al. (2019). <em>Guidelines for Human-AI Interaction</em>. CHI '19.{' '}
            <a className="text-[#FFD700] hover:text-[#FFE55C]" href="https://doi.org/10.1145/3290605.3300233" target="_blank" rel="noopener noreferrer">
              DOI <FaExternalLinkAlt className="inline ml-1 text-xs" />
            </a>
          </p>

          <p>
            Horvitz, E. (1999). <em>Principles of Mixed-Initiative User Interfaces</em>. CHI '99.{' '}
            <a className="text-[#FFD700] hover:text-[#FFE55C]" href="https://doi.org/10.1145/302979.303030" target="_blank" rel="noopener noreferrer">
              DOI <FaExternalLinkAlt className="inline ml-1 text-xs" />
            </a>
          </p>

          <p>
            Google People + AI Research. <em>People + AI Guidebook</em>.{' '}
            <a className="text-[#FFD700] hover:text-[#FFE55C]" href="https://pair.withgoogle.com/guidebook-v2/" target="_blank" rel="noopener noreferrer">
              Guidebook <FaExternalLinkAlt className="inline ml-1 text-xs" />
            </a>
          </p>

          <p>
            Microsoft. <em>Human-AI eXperience (HAX) Toolkit</em>.{' '}
            <a className="text-[#FFD700] hover:text-[#FFE55C]" href="https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/" target="_blank" rel="noopener noreferrer">
              HAX Guidelines <FaExternalLinkAlt className="inline ml-1 text-xs" />
            </a>
          </p>

          <p>
            Shneiderman, B. (2020). <em>Human-Centered Artificial Intelligence: Reliable, Safe &amp; Trustworthy</em>.{' '}
            <a className="text-[#FFD700] hover:text-[#FFE55C]" href="https://arxiv.org/abs/2002.04087" target="_blank" rel="noopener noreferrer">
              arXiv <FaExternalLinkAlt className="inline ml-1 text-xs" />
            </a>
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default HumanAIBehaviorBlogPost;
