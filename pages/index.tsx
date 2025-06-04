// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const toggleForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showForm]);

  return (
    <>
      <Head>
        <title>Iron Living | Train Hard. Live Free.</title>
        <meta name="description" content="Train for real life. Personal training that builds endurance, strength, and grit — online or in-person." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Iron Living" />
        <link rel="icon" href="/favicon-iron.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-neutral-900 text-white px-6 py-16 flex flex-col items-center font-sans">
        <header className="w-full max-w-6xl flex justify-between items-center mb-12">
          <Image src="/ironliving-logo.png" alt="Iron Living Logo" width={140} height={60} />
          <button onClick={toggleForm} className="text-red-500 hover:underline text-sm font-semibold">Apply</button>
        </header>

        <section className="max-w-4xl text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" style={{ color: '#E6B800' }}>
            Train Hard. <span className="text-red-500">Live Free.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Functional strength. Mountain grit. Real training for real life — from snow to summit.
          </p>
          <button
            onClick={toggleForm}
            className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Apply for Coaching
          </button>
        </section>

        <section className="max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#E6B800' }}>What is Iron Living?</h2>
          <p className="text-gray-300 text-lg">
            Created by Zach, Iron Living is about building strength that shows up outside the gym — climbing mountains, pushing through miles, staying ready for anything. This isn’t about beach muscles. It’s about functional freedom.
          </p>
        </section>

        <section className="w-full max-w-6xl grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard title="1-on-1 Coaching" description="Work directly with Zach to get a program built around your real-life goals." />
          <FeatureCard title="Endurance & Trail Prep" description="Conditioning and mobility to prepare for trail runs, hikes, and peak-bagging." />
          <FeatureCard title="Functional Strength" description="Train to move better, perform longer, and recover faster." />
          <FeatureCard title="Outdoor Conditioning" description="Real movement. Real terrain. Zach’s programs don’t live in a spreadsheet." />
          <FeatureCard title="Mobility + Core" description="Stay injury-free with routines that support your spine, joints, and posture." />
          <FeatureCard title="Online Training" description="Full virtual support if you can’t train in person — weekly check-ins and form reviews." />
        </section>

        <section className="max-w-4xl text-center mb-20">
          <h3 className="text-3xl font-bold mb-6" style={{ color: '#E6B800' }}>From the Gram</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['ig-1.jpg', 'ig-2.jpg', 'ig-3.jpg'].map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-md border border-white/10">
                <img
                  src={`/${img}`}
                  alt={`Instagram Post ${index + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Follow Zach at <a href="https://instagram.com/ironlivingzach" target="_blank" className="text-red-400 hover:underline">@ironlivingzach</a>
          </p>
        </section>

        <section className="w-full max-w-3xl mb-20 text-center">
          <h3 className="text-3xl font-bold mb-6" style={{ color: '#E6B800' }}>What Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard name="Mason H." title="Outdoor Athlete" quote="I train to summit peaks, not just squat racks. Zach gets it. Real results for real life." />
            <TestimonialCard name="Kyle T." title="Marathoner" quote="The endurance programming is next level. I’ve hit PRs without wrecking my joints." />
            <TestimonialCard name="Olivia B." title="Weekend Warrior" quote="I never liked gyms, but Zach’s style made me love training again. Highly recommend." />
          </div>
        </section>

        <section className="w-full max-w-3xl mb-20">
          <h3 className="text-3xl font-bold text-center mb-6" style={{ color: '#E6B800' }}>Zach In Action</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="Iron Living Video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allowFullScreen
              className="rounded-xl w-full h-96 border-0 shadow-lg"
            ></iframe>
          </div>
        </section>

        <AnimatePresence>
          {showForm && (
            <motion.section
              ref={formRef}
              className="w-full max-w-3xl mb-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#E6B800' }}>Apply for Coaching</h2>
              <iframe
                title="Coaching Application Form"
                src="https://form.jotform.com/251482303686156"
                width="100%"
                height="600"
                className="rounded-xl border-0 shadow-lg"
                loading="lazy"
              ></iframe>
            </motion.section>
          )}
        </AnimatePresence>

        <footer className="w-full max-w-6xl text-center text-sm text-gray-500 border-t border-white/10 pt-8">
          &copy; {new Date().getFullYear()} Iron Living. All rights reserved.
          <div className="mt-2">
            Powered by <a href="mailto:info@built-simple.ai" className="text-red-400 hover:underline">Built Simple</a>
          </div>
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-left">
      <h3 className="text-xl font-bold mb-2" style={{ color: '#E6B800' }}>{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, title, quote }: { name: string; title: string; quote: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left shadow-md">
      <p className="italic text-sm text-gray-300 mb-4">&quot;{quote}&quot;</p>
      <h4 className="text-md font-semibold text-white">{name}</h4>
      <p className="text-xs text-gray-400">{title}</p>
    </div>
  );
}