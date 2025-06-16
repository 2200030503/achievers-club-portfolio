import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function App() {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Achievers Club?",
      answer:
        "A mentorship community helping people earn while they learn trending digital skills."
    },
    {
      question: "Do I need any prior experience?",
      answer:
        "Nope! We start from scratch and give you full support with mentorship and a plan."
    },
    {
      question: "How fast can I start earning?",
      answer:
        "Most of our members start earning within 30-60 days by following the roadmap."
    }
  ];

  return (
    <div className="bg-gray-950 text-white font-sans min-h-screen">
      <header className="bg-gradient-to-r from-blue-900 to-blue-600 py-20 text-center">
        <h1 className="text-5xl font-extrabold">Manohar Pathuri</h1>
        <p className="text-xl mt-4">Achievers Club | Learn & Earn | 6-Figure Journey</p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          Work With Me
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">About My Journey</h2>
          <p className="text-gray-300 text-lg">
            I’m part of Achievers Club, a mentorship community that helps you learn high-income skills like video editing, copywriting, and design. With guidance from top 6-figure earners, I’m building income streams while gaining real client experience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-6">90-Day Plan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-semibold">Month 1</h3>
              <p>Master 2 skills & build portfolio</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-semibold">Month 2</h3>
              <p>Start building brand & outreach</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-semibold">Month 3</h3>
              <p>Land clients & generate income</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-semibold">Month 4</h3>
              <p>Scale with mentors to 6-figures</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-6">Top Skills</h2>
          <ul className="grid md:grid-cols-3 gap-6">
            <li className="bg-white/5 p-6 rounded-lg border border-white/10">🎞 Video Editing</li>
            <li className="bg-white/5 p-6 rounded-lg border border-white/10">✍️ Copywriting</li>
            <li className="bg-white/5 p-6 rounded-lg border border-white/10">🎨 Design with Canva</li>
            <li className="bg-white/5 p-6 rounded-lg border border-white/10">🤖 AI Tools (ChatGPT)</li>
            <li className="bg-white/5 p-6 rounded-lg border border-white/10">💬 Sales/Communication</li>
            <li className="bg-white/5 p-6 rounded-lg border border-white/10">📈 Funnels & Branding</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-6">FAQs</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-white/5 border border-white/10 rounded-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              {faqOpen === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Let’s Connect</h2>
          <p className="text-gray-400 mb-6">Reach out for mentorship or collaborations 👇</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="mailto:manoharpathuri99@gmail.com"
              className="hover:text-blue-400"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/message/VJQYOARY25EUC1"
              className="hover:text-green-400"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/manohar._chowdary/"
              className="hover:text-pink-500"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-800 mt-8">
        &copy; 2025 Manohar Pathuri | Achievers Club Portfolio
      </footer>
    </div>
  );
}