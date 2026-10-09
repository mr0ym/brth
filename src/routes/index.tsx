import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { PasswordGate } from "@/components/PasswordGate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Who Is My baby? | A Birthday Surprise" },
      {
        name: "description",
        content: "A Birthday gift for you made with love.",
      },
      { property: "og:title", content: "Who Is My baby? | A Birthday Surprise" },
      {
        property: "og:description",
        content: "A Birthday gift for you made with love.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GatedBirthdayPage,
});

const reactions = ["😭", "😼", "😾"];
const messages = [
  "who is Meriem's baby",
  "wait... are you sure?",
  "really? try again 👀",
  "okay this is getting ridiculous 😤",
];

const confetti = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  className: `confetti-${(index % 10) + 1}`,
  emoji: ["🩷", "🌹", "✨", "💋", "🎉"][index % 5],
}));

function playNoSound(step: number) {
  const AudioContextClass = window.AudioContext ??
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const now = context.currentTime;
  const frequencies = [330, 440, 560];
  const frequency = frequencies[step] ?? 330;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = step === 2 ? "square" : "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.58, now + 0.16);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.14, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.21);
  window.setTimeout(() => void context.close(), 300);
}

function playCelebrationSound() {
  const AudioContextClass = window.AudioContext ??
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;

  const context = new AudioContextClass();
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((frequency, index) => {
    const start = context.currentTime + index * 0.09;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.16, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.3);
  });
  window.setTimeout(() => void context.close(), 800);
}

function GatedBirthdayPage() {
  return (
    <PasswordGate>
      <BirthdayPage />
    </PasswordGate>
  );
}

function BirthdayPage() {
  const [attempt, setAttempt] = useState(0);
  const [reactionKey, setReactionKey] = useState(0);
  const [celebrated, setCelebrated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const revealTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(revealTimer.current), []);

  const chooseNo = () => {
    if (attempt >= 3 || celebrated) return;
    playNoSound(attempt);
    setReactionKey((key) => key + 1);
    setAttempt((value) => Math.min(value + 1, 3));
  };

  const chooseMe = () => {
    if (celebrated) return;
    playCelebrationSound();
    setCelebrated(true);
    revealTimer.current = window.setTimeout(() => setShowMessage(true), 550);
  };

  return (
    <main className="birthday-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      {celebrated && (
        <div className="confetti-field" aria-hidden="true">
          {confetti.map((piece) => (
            <span key={piece.id} className={`confetti-piece ${piece.className}`}>
              {piece.emoji}
            </span>
          ))}
        </div>
      )}

      <section className={`birthday-glass ${celebrated ? "is-celebrating" : ""}`}>
        <div className="tiny-hearts" aria-hidden="true">
          <span>♡</span><span>♡</span><span>♡</span>
        </div>

        <div className="question-wrap" aria-live="polite">
          <p className="eyebrow"> very important birthday question</p>
          <h1 key={celebrated ? "yes" : attempt} className="birthday-title">
            {celebrated ? "yes you are :)" : messages[attempt]}
          </h1>
          {!celebrated && <p className="birthday-subtitle">choose carefully, birthday boy</p>}
        </div>

        {!celebrated ? (
          <div className={`choice-stage attempt-${attempt}`}>
            <Button className="glass-button yes-button" onClick={chooseMe}>
              me <span aria-hidden="true">🩷</span>
            </Button>

            {attempt < 3 && (
              <div className="no-button-wrap">
                <Button
                  variant="outline"
                  className="glass-button no-button"
                  onClick={chooseNo}
                  aria-label={`Not me${attempt ? `, attempt ${attempt + 1}` : ""}`}
                >
                  not me
                </Button>
                {reactionKey > 0 && (
                  <span key={reactionKey} className="reaction-burst" aria-hidden="true">
                    {reactions[attempt - 1]}
                  </span>
                )}
              </div>
            )}

            {attempt === 3 && (
              <p className="only-choice" role="status">interesting. one option left ✨</p>
            )}
          </div>
        ) : (
          <div className={`birthday-message ${showMessage ? "is-visible" : ""}`}>
            <div className="message-emoji" aria-hidden="true">🩷 🌹 💋 😻</div>
            <p className="personal-copy">
              Happy birthday to my baby ❤️ Im so grateful to have you in my life and I hope you know how much I love you. You mean so much to me.
               I hope you have the best birthday ever because you deserve nothing but happiness. Love you always 🫶
               I Love You so much ❤️
            </p>
            <p className="message-emoji closing" aria-hidden="true">😻 🩷</p>
          </div>
        )}
      </section>

      <p className="footer-note">made with a suspicious amount of love</p>
    </main>
  );
}