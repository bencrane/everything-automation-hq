import { useEffect, useMemo, useRef, useState } from "react";

interface RotatingTextProps {
  phrases: string[];
  typingSpeed?: number; // ms per char
  deletingSpeed?: number; // ms per char
  holdTime?: number; // ms after full phrase
  startDelay?: number; // optional initial delay in ms
  className?: string;
}

const RotatingText = ({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  holdTime = 3000,
  startDelay = 0,
  className,
}: RotatingTextProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const currentPhrase = phrases[phraseIndex] ?? "";

  const maxLen = useMemo(() => {
    return phrases.reduce((max, p) => Math.max(max, p.length), 0);
  }, [phrases]);

  useEffect(() => {
    // Clear on unmount
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!phrases.length) return;

    const schedule = (fn: () => void, delay: number) => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(fn, delay);
    };

    if (startDelay && phraseIndex === 0 && charIndex === 0 && !isDeleting) {
      schedule(() => setCharIndex(1), startDelay || typingSpeed);
      return;
    }

    if (!isDeleting) {
      // Typing phase
      if (charIndex < currentPhrase.length) {
        schedule(() => setCharIndex((c) => c + 1), typingSpeed);
      } else {
        // Hold full phrase
        schedule(() => setIsDeleting(true), holdTime);
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        schedule(() => setCharIndex((c) => c - 1), deletingSpeed);
      } else {
        // Move to next phrase and start typing
        schedule(() => {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }, typingSpeed);
      }
    }
  }, [charIndex, currentPhrase.length, deletingSpeed, holdTime, isDeleting, phraseIndex, phrases.length, startDelay, typingSpeed, phrases]);

  const visibleText = currentPhrase.slice(0, charIndex);

  return (
    <span
      aria-live="polite"
      className={className}
      style={{ display: "inline-block", minWidth: `${maxLen}ch` }}
    >
      {visibleText}
    </span>
  );
};

export default RotatingText;
