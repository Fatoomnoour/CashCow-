"use client";

/* eslint-disable @next/next/no-img-element -- relative asset URLs keep GitHub Pages repo paths portable */

import { useEffect, useState } from "react";

const preparationVideo =
  "https://drive.google.com/file/d/17GQwtvRG-4zR91E65pR6W7TCdPMLhVSL/view?usp=drivesdk";
const trainingVideo =
  "https://www.loom.com/share/a3c561d4597b472e83846071063aa1e4";
const facebookGroup = "https://www.facebook.com/share/g/1CMba21g7u/";

type StepId = "step1" | "step2" | "step3" | "step4";
type CompletionState = Record<StepId, boolean>;

const initialCompletion: CompletionState = {
  step1: false,
  step2: false,
  step3: false,
  step4: false,
};

function CompleteButton({
  complete,
  onClick,
}: {
  complete: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`complete-button${complete ? " is-complete" : ""}`}
      type="button"
      onClick={onClick}
      aria-pressed={complete}
    >
      <span className="complete-icon" aria-hidden="true">
        {complete ? "✓" : "○"}
      </span>
      {complete ? "Completed" : "Complete"}
    </button>
  );
}

function StepLabel({ number, text }: { number: string; text: string }) {
  return (
    <div className="step-label">
      <span className="step-number">{number}</span>
      <span className="step-pill">{text}</span>
    </div>
  );
}

export default function Home() {
  const [completed, setCompleted] =
    useState<CompletionState>(initialCompletion);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(
          "cash-cow-call-preparation",
        );
        if (saved) {
          setCompleted({ ...initialCompletion, ...JSON.parse(saved) });
        }
      } catch {
        // The page still works if browser storage is unavailable.
      }
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    try {
      window.localStorage.setItem(
        "cash-cow-call-preparation",
        JSON.stringify(completed),
      );
    } catch {
      // The page still works if browser storage is unavailable.
    }
  }, [completed, isReady]);

  const toggleStep = (step: StepId) => {
    setCompleted((current) => ({ ...current, [step]: !current[step] }));
  };

  const mandatoryCompleted = [
    completed.step1,
    completed.step2,
    completed.step3,
  ].filter(Boolean).length;
  const progress = `${(mandatoryCompleted / 3) * 100}%`;

  return (
    <main className="page-shell">
      <div className="preparation-page">
        <header className="progress-card" aria-label="Preparation progress">
          <div className="progress-copy">
            <strong>{mandatoryCompleted} of 3</strong>
            <span>mandatory steps completed</span>
          </div>
          <div className="progress-track" aria-hidden="true">
            <span style={{ width: progress }} />
          </div>
          <p>
            {mandatoryCompleted === 3
              ? "You’re fully prepared for your strategy call."
              : "Complete these steps before your strategy call."}
          </p>
        </header>

        <section className="step-card step-one">
          <div className="step-content">
            <StepLabel number="01" text="MANDATORY · 5 MIN" />
            <h1>Watch the quick preparation video</h1>
            <p className="step-description">
              This short video explains exactly how to prepare, what to have
              ready, and how to make the most of our time together.
            </p>
            <div className="step-actions">
              <a
                className="primary-button"
                href={preparationVideo}
                target="_blank"
                rel="noreferrer"
              >
                Open preparation video <span aria-hidden="true">↗</span>
              </a>
              <CompleteButton
                complete={completed.step1}
                onClick={() => toggleStep("step1")}
              />
            </div>
          </div>
          <a
            className="step-media"
            href={preparationVideo}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the quick preparation video"
          >
            <img
              src="assets/quick-preparation.png"
              alt="Preview of the quick preparation video"
            />
            <span className="play-button" aria-hidden="true">
              ▶
            </span>
          </a>
        </section>

        <section className="step-card step-two">
          <div className="step-media image-only">
            <img
              src="assets/meeting-confirmation.png"
              alt="Example of the meeting confirmation message"
            />
          </div>
          <div className="step-content">
            <StepLabel number="02" text="MANDATORY · 1 MIN" />
            <h2>Confirm our meeting together</h2>
            <p className="step-description">
              Check the email or SMS we just sent you and reply with
              <strong> “Confirmed”.</strong> This lets us know you’ve received
              the appointment details.
            </p>
            <button
              type="button"
              className={`reply-box${completed.step2 ? " is-confirmed" : ""}`}
              onClick={() =>
                setCompleted((current) => ({ ...current, step2: true }))
              }
              aria-label="Mark reply as Confirmed"
            >
              <span>Your reply</span>
              <strong>{completed.step2 ? "Confirmed ✓" : "Confirmed"}</strong>
            </button>
            <CompleteButton
              complete={completed.step2}
              onClick={() => toggleStep("step2")}
            />
          </div>
        </section>

        <section className="step-card step-three">
          <div className="step-content">
            <StepLabel number="03" text="MANDATORY · 70 MIN" />
            <h2>Watch the Cash Cow System training</h2>
            <p className="step-description">
              Watch the full Cash Cow System Overview &amp; Operations training
              before the call. We will ask you something specific from it.
            </p>
            <p className="important-note">
              Please watch it in full. If we ask you the question and you don’t
              know the answer, the call won’t be useful for you.
            </p>
            <div className="step-actions">
              <a
                className="primary-button"
                href={trainingVideo}
                target="_blank"
                rel="noreferrer"
              >
                Open 70-minute training <span aria-hidden="true">↗</span>
              </a>
              <CompleteButton
                complete={completed.step3}
                onClick={() => toggleStep("step3")}
              />
            </div>
          </div>
          <a
            className="step-media training-media"
            href={trainingVideo}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Cash Cow System training"
          >
            <img
              src="assets/cash-cow-training.png"
              alt="Preview of the Cash Cow System training"
            />
            <span className="play-button" aria-hidden="true">
              ▶
            </span>
          </a>
        </section>

        <section className="step-card optional-card">
          <div className="optional-number">04</div>
          <div className="optional-copy">
            <span className="optional-label">OPTIONAL</span>
            <h2>Join our free private Facebook group</h2>
            <p className="step-description">
              Meet coaches, trainers, consultants, and agency owners. Network,
              learn, and access exclusive free bonus trainings.
            </p>
          </div>
          <div className="optional-actions">
            <a
              className="primary-button"
              href={facebookGroup}
              target="_blank"
              rel="noreferrer"
            >
              Join the community <span aria-hidden="true">↗</span>
            </a>
            <CompleteButton
              complete={completed.step4}
              onClick={() => toggleStep("step4")}
            />
          </div>
        </section>

        <footer className="page-footer">
          <img src="assets/cash-cow-logo.png" alt="Cash Cow System" />
          <p>Your strategy call is booked. We’ll see you soon.</p>
        </footer>
      </div>
    </main>
  );
}
