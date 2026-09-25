import type { MouseEvent } from "react";

export default function scrollToSection (event: MouseEvent<HTMLAnchorElement>, sectionId: string) {
  event.preventDefault();

  const target = document.querySelector(sectionId);

  if (!target) {
    return;
  }

  const navOffset = 88;
  const startPosition = window.scrollY;
  const targetPosition = target.getBoundingClientRect().top + startPosition - navOffset;
  const distance = targetPosition - startPosition;
  const duration = 900;
  let startTime: number | null = null;

  const easeInOutCubic = (progress: number) =>
    progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const animateScroll = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
};