"use strict";

const principles = [
  {
    name: "Coherence Principle",
    meaning: "A lesson becomes easier to understand when it contains only information that matters. Avoid adding unrelated images, sounds, or decorations that might distract the audience.",
    group: "extraneous",
    videoUrl: "https://youtu.be/vPnHJSooDzA"
  },
  {
    name: "Signaling Principle",
    meaning: "Guide learners toward important details by using headings, arrows, highlights, or different colors. These visual clues make key information easier to notice.",
    group: "extraneous",
    videoUrl: "https://youtu.be/C9wlqx7yKvU"
  },
  {
    name: "Redundancy Principle",
    meaning: "Showing the exact words that are being spoken can sometimes overwhelm learners. Instead, use relevant visuals with narration so they can focus on the explanation.",
    group: "extraneous",
    videoUrl: "https://youtu.be/2U4rO7JeHiE"
  },
  {
    name: "Spatial Contiguity Principle",
    meaning: "Keep labels and their corresponding images close together. This makes it easier for learners to identify which text describes each part of a visual.",
    group: "extraneous",
    videoUrl: "https://youtu.be/u9GdFWO75s0"
  },
  {
    name: "Temporal Contiguity Principle",
    meaning: "Make sure explanations appear or are heard while the related visuals are being shown. Presenting them together helps learners understand how they are connected.",
    group: "extraneous",
    videoUrl: "https://youtu.be/WxA5ZCwW1ZU"
  },
  {
    name: "Segmenting Principle",
    meaning: "Break a long lesson into shorter parts instead of presenting everything at once. Giving learners time to pause and continue helps them absorb each topic.",
    group: "essential",
    videoUrl: "https://youtu.be/fwEuR1pZvCE"
  },
  {
    name: "Pre-training Principle",
    meaning: "Before discussing a difficult subject, introduce its basic terms and important parts. Having this background knowledge makes the next lesson less confusing.",
    group: "essential",
    videoUrl: "https://youtu.be/ldeEywU5edk"
  },
  {
    name: "Modality Principle",
    meaning: "Pair visual materials with spoken explanations instead of filling the screen with lengthy text. This gives learners another way to understand the information.",
    group: "essential",
    videoUrl: "https://youtu.be/aEGSzYhQO9M"
  },
  {
    name: "Multimedia Principle",
    meaning: "Words become more meaningful when supported by relevant pictures or illustrations. Using both can help explain ideas that might be difficult to understand through text alone.",
    group: "generative",
    videoUrl: "https://youtu.be/mZ-FOVNPozI"
  },
  {
    name: "Personalization Principle",
    meaning: "Explain lessons as if you're having a friendly conversation with the audience. Simple and familiar language can make learning feel less intimidating.",
    group: "generative",
    videoUrl: "https://youtu.be/f_D-Fld7aSE"
  },
  {
    name: "Voice Principle",
    meaning: "The way information is delivered also matters. A warm and natural human voice can make a lesson feel more engaging than a robotic-sounding narration.",
    group: "generative",
    videoUrl: "https://youtu.be/iTcbf88qlvE"
  },
  {
    name: "Image Principle",
    meaning: "Adding the presenter's face to a lesson does not automatically make it more effective. What matters most is whether the visuals and explanations help learners understand the topic.",
    group: "generative",
    videoUrl: "https://youtu.be/4h4IqoF8hBA"
  }
];

const questions = [
  {
    question: "A student creates a presentation with unnecessary animations, background music, and decorative images that are unrelated to the topic. Which principle should be applied to improve the presentation?",
    options: ["Multimedia Principle", "Coherence Principle", "Signaling Principle", "Personalization Principle"],
    answer: "Coherence Principle",
    explanation: "The Coherence Principle recommends removing unrelated material so learners can focus on information that matters."
  },
  {
    question: "A teacher uses arrows, bold text, and colored highlights to emphasize the most important information in a presentation. What principle does this demonstrate?",
    options: ["Signaling Principle", "Redundancy Principle", "Image Principle", "Voice Principle"],
    answer: "Signaling Principle",
    explanation: "The Signaling Principle uses visual cues to guide learners toward important information."
  },
  {
    question: "A presentation shows an illustration while the narrator explains it, but also displays the exact same explanation as on-screen text. Which principle suggests avoiding this practice?",
    options: ["Modality Principle", "Spatial Contiguity Principle", "Redundancy Principle", "Temporal Contiguity Principle"],
    answer: "Redundancy Principle",
    explanation: "The Redundancy Principle cautions against presenting narration and the same full text together with visuals."
  },
  {
    question: "In an educational infographic, labels are placed directly beside the parts of the diagram they describe. Which principle is being applied?",
    options: ["Segmenting Principle", "Spatial Contiguity Principle", "Multimedia Principle", "Pre-training Principle"],
    answer: "Spatial Contiguity Principle",
    explanation: "The Spatial Contiguity Principle keeps related words and images close together."
  },
  {
    question: "A video shows an animation of how a plant grows while the narrator explains each stage at the same time. Which principle does this demonstrate?",
    options: ["Temporal Contiguity Principle", "Coherence Principle", "Personalization Principle", "Image Principle"],
    answer: "Temporal Contiguity Principle",
    explanation: "The Temporal Contiguity Principle presents related explanations and visuals at the same time."
  },
  {
    question: "A long online lesson is divided into short sections, allowing students to pause and continue whenever they are ready. Which principle is applied?",
    options: ["Voice Principle", "Redundancy Principle", "Segmenting Principle", "Signaling Principle"],
    answer: "Segmenting Principle",
    explanation: "The Segmenting Principle breaks a lesson into learner-paced parts."
  },
  {
    question: "Before teaching students about computer hardware, a teacher introduces the names and basic functions of the keyboard, monitor, mouse, and CPU. What principle is demonstrated?",
    options: ["Pre-training Principle", "Modality Principle", "Multimedia Principle", "Spatial Contiguity Principle"],
    answer: "Pre-training Principle",
    explanation: "The Pre-training Principle introduces key terms and parts before learners study a more complex topic."
  },
  {
    question: "A lesson uses animations with spoken explanations instead of placing long paragraphs of text on the screen. Which principle supports this approach?",
    options: ["Personalization Principle", "Modality Principle", "Image Principle", "Coherence Principle"],
    answer: "Modality Principle",
    explanation: "The Modality Principle pairs visuals with spoken explanations rather than long on-screen text."
  },
  {
    question: "A student creates an educational presentation using short explanations and relevant pictures instead of using text alone. Which principle is being applied?",
    options: ["Redundancy Principle", "Voice Principle", "Multimedia Principle", "Segmenting Principle"],
    answer: "Multimedia Principle",
    explanation: "The Multimedia Principle combines words with relevant pictures to support understanding."
  },
  {
    question: "An instructor explains a difficult topic using simple, friendly, and conversational language instead of overly formal words. What principle does this demonstrate?",
    options: ["Personalization Principle", "Signaling Principle", "Temporal Contiguity Principle", "Pre-training Principle"],
    answer: "Personalization Principle",
    explanation: "The Personalization Principle uses conversational language to make learning feel more approachable."
  },
  {
    question: "An educational video uses a natural and friendly human voice instead of a robotic, computer-generated voice. Which principle is demonstrated?",
    options: ["Image Principle", "Voice Principle", "Modality Principle", "Coherence Principle"],
    answer: "Voice Principle",
    explanation: "The Voice Principle favors a natural human voice over robotic-sounding narration."
  },
  {
    question: "A teacher creates a presentation with relevant diagrams and narration but does not constantly show their face on the screen. According to which principle can this still support effective learning?",
    options: ["Spatial Contiguity Principle", "Multimedia Principle", "Image Principle", "Personalization Principle"],
    answer: "Image Principle",
    explanation: "The Image Principle notes that showing the instructor's face does not automatically improve learning."
  }
];

const principleGrid = document.getElementById("principle-grid");
const principleBackdrop = document.getElementById("principle-backdrop");
const principleModal = document.getElementById("principle-modal");
const principleTitle = document.getElementById("principle-title");
const principleMeaning = document.getElementById("principle-meaning");
const videoFrame = document.getElementById("video-frame");
const filterButtons = document.querySelectorAll(".filter-button");
const resultCount = document.getElementById("result-count");
const principleClose = document.getElementById("principle-close");
const principleBack = document.getElementById("principle-back");
const principleNext = document.getElementById("principle-next");
const quizBackdrop = document.getElementById("quiz-backdrop");
const quizModal = document.getElementById("quiz-modal");
const quizClose = document.getElementById("quiz-close");
const quizLaunch = document.getElementById("quiz-launch");
const quizCard = document.getElementById("quiz-card");
const quizFront = document.getElementById("quiz-front");
const quizAnswer = document.getElementById("quiz-answer");
const quizStatus = document.getElementById("quiz-status");
const questionText = document.getElementById("question-text");
const quizOptions = document.getElementById("quiz-options");
const answerResult = document.getElementById("answer-result");
const correctAnswer = document.getElementById("correct-answer");
const answerExplanation = document.getElementById("answer-explanation");
const nextQuestion = document.getElementById("next-question");
const quizResults = document.getElementById("quiz-results");
const finalScore = document.getElementById("final-score");
const scoreMessage = document.getElementById("score-message");

let currentPrincipleIndex = 0;
let principleOpener = null;
let quizOpener = null;
let quizDeck = [];
let currentQuestionIndex = 0;
let score = 0;
let questionAnswered = false;
let selectedFilter = "all";

function renderPrincipleButtons() {
  principles.forEach((principle, index) => {
    const button = document.createElement("button");
    button.className = "number";
    button.type = "button";
    const videoId = getYouTubeVideoId(principle.videoUrl);
    if (videoId) {
      const thumbnail = document.createElement("img");
      thumbnail.className = "number-thumbnail";
      thumbnail.src = `https://img.youtube.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
      thumbnail.alt = "";
      thumbnail.loading = "lazy";
      thumbnail.addEventListener("error", () => thumbnail.remove(), { once: true });
      button.append(thumbnail);
    }
    const number = document.createElement("span");
    number.textContent = String(index + 1);
    button.append(number);
    button.setAttribute("aria-label", `Open ${index + 1}. ${principle.name}`);
    button.dataset.group = principle.group;
    principleGrid.append(button);
  });
}

function getYouTubeVideoId(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    if (url.protocol !== "https:" ||
        !(host === "youtube.com" || host.endsWith(".youtube.com") ||
          host === "youtube-nocookie.com" || host.endsWith(".youtube-nocookie.com") ||
          host === "youtu.be")) {
      return null;
    }
    const videoId = host === "youtu.be"
      ? url.pathname.slice(1).split("/")[0]
      : url.pathname.startsWith("/embed/")
        ? url.pathname.split("/")[2]
        : url.searchParams.get("v");
    return videoId && /^[\w-]{6,}$/.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}

function renderVideoPlaceholder(message = "Add a videoUrl to this principle in function.js") {
  const placeholder = document.createElement("div");
  placeholder.className = "video-placeholder";
  placeholder.innerHTML = '<span class="video-play-icon" aria-hidden="true">▶</span><strong>Video preview</strong>';
  const note = document.createElement("span");
  note.textContent = message;
  placeholder.append(note);
  videoFrame.replaceChildren(placeholder);
}

function renderVideoPreview(principle) {
  videoFrame.replaceChildren();
  videoFrame.setAttribute("aria-label", `Video preview for ${principle.name}`);

  if (!principle.videoUrl) {
    renderVideoPlaceholder();
    return;
  }

  let url;
  try {
    url = new URL(principle.videoUrl);
  } catch {
    console.error(`Invalid videoUrl for ${principle.name}. Use an https URL.`);
    renderVideoPlaceholder("Add a valid videoUrl in function.js");
    return;
  }

  if (url.protocol !== "https:") {
    console.error(`Invalid videoUrl for ${principle.name}. Video URLs must use https.`);
    renderVideoPlaceholder("Add a valid videoUrl in function.js");
    return;
  }

  const host = url.hostname.toLowerCase();
  const isYouTube = host === "youtube.com" || host.endsWith(".youtube.com") ||
    host === "youtube-nocookie.com" || host.endsWith(".youtube-nocookie.com") ||
    host === "youtu.be";

  if (isYouTube) {
    const videoId = host === "youtu.be"
      ? url.pathname.slice(1).split("/")[0]
      : url.pathname.startsWith("/embed/")
        ? url.pathname.split("/")[2]
        : url.searchParams.get("v");

    if (!videoId || !/^[\w-]{6,}$/.test(videoId)) {
      console.error(`Invalid YouTube videoUrl for ${principle.name}.`);
      renderVideoPlaceholder("Add a valid YouTube videoUrl in function.js");
      return;
    }

    const preview = document.createElement("button");
    preview.className = "video-thumbnail";
    preview.type = "button";
    preview.setAttribute("aria-label", `Play ${principle.name} video`);

    const thumbnail = document.createElement("img");
    thumbnail.src = `https://img.youtube.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
    thumbnail.alt = `Preview thumbnail for ${principle.name} video`;
    thumbnail.loading = "lazy";
    thumbnail.addEventListener("error", () => {
      thumbnail.alt = "YouTube thumbnail is unavailable";
      preview.classList.add("thumbnail-unavailable");
    }, { once: true });

    const playIcon = document.createElement("span");
    playIcon.className = "thumbnail-play-icon";
    playIcon.setAttribute("aria-hidden", "true");
    playIcon.textContent = "▶";

    preview.append(thumbnail, playIcon);
    preview.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
      iframe.title = `${principle.name} video`;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      videoFrame.replaceChildren(iframe);
    }, { once: true });
    videoFrame.append(preview);
    return;
  }

  if (/\.(mp4|webm|ogg)$/i.test(url.pathname)) {
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", `${principle.name} video`);
    video.src = url.href;
    videoFrame.append(video);
    return;
  }

  console.error(`Unsupported videoUrl for ${principle.name}. Use a YouTube URL or https direct video URL.`);
  renderVideoPlaceholder("Add a valid YouTube videoUrl in function.js");
}

function renderPrinciple(index) {
  currentPrincipleIndex = index;
  const principle = principles[index];
  principleTitle.textContent = `${index + 1}. ${principle.name}`;
  principleMeaning.textContent = principle.meaning;
  renderVideoPreview(principle);

  if (index === principles.length - 1) {
    principleNext.textContent = "Take the quiz →";
    principleNext.setAttribute("aria-label", "Take the quiz");
  } else {
    principleNext.textContent = `${index + 2}. ${principles[index + 1].name} →`;
    principleNext.setAttribute("aria-label", `Go to ${index + 2}. ${principles[index + 1].name}`);
  }
}

function applyFilter(filter) {
  selectedFilter = filter;
  const buttons = [...principleGrid.children];
  let visibleCount = 0;
  buttons.forEach((button) => {
    const visible = filter === "all" || button.dataset.group === filter;
    button.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });
  resultCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "principle" : "principles"}`;
}

function openPrinciple(index, opener) {
  principleOpener = opener || document.activeElement;
  renderPrinciple(index);
  principleBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  principleClose.focus();
}

function closePrinciple(restoreFocus = true) {
  if (principleBackdrop.hidden) return;
  principleBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  if (restoreFocus && principleOpener instanceof HTMLElement) principleOpener.focus();
}

function isFocusable(element) {
  return element instanceof HTMLElement && !element.hasAttribute("disabled") &&
    element.getAttribute("tabindex") !== "-1" && element.getClientRects().length > 0;
}

function keepFocusInModal(event, modal) {
  if (event.key !== "Tab") return;
  const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(isFocusable);
  if (!focusable.length) {
    event.preventDefault();
    modal.focus();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function startQuiz(opener) {
  quizOpener = opener || document.activeElement;
  quizDeck = shuffle(questions).map((question) => ({
    ...question,
    displayedOptions: shuffle(question.options)
  }));
  currentQuestionIndex = 0;
  score = 0;
  questionAnswered = false;
  quizResults.hidden = true;
  quizCard.hidden = false;
  quizCard.classList.remove("is-flipped");
  quizBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  renderQuestion();
  quizClose.focus();
}

function closeQuiz(restoreFocus = true) {
  if (quizBackdrop.hidden) return;
  quizBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  if (restoreFocus && quizOpener instanceof HTMLElement) quizOpener.focus();
}

function renderQuestion() {
  const question = quizDeck[currentQuestionIndex];
  questionAnswered = false;
  quizCard.classList.remove("is-flipped");
  quizFront.setAttribute("aria-hidden", "false");
  quizAnswer.setAttribute("aria-hidden", "true");
  quizStatus.textContent = `Question ${currentQuestionIndex + 1} of ${quizDeck.length} · Score: ${score}`;
  questionText.textContent = question.question;
  quizOptions.replaceChildren();

  question.displayedOptions.forEach((option, index) => {
    const button = document.createElement("button");
    const letter = String.fromCharCode(65 + index);
    button.className = "quiz-option";
    button.type = "button";
    button.innerHTML = `<span class="option-letter">${letter}.</span> `;
    button.append(document.createTextNode(option));
    button.setAttribute("aria-label", `Option ${letter}: ${option}`);
    button.addEventListener("click", () => chooseAnswer(option));
    quizOptions.append(button);
  });
}

function chooseAnswer(selectedOption) {
  if (questionAnswered) return;
  questionAnswered = true;
  const question = quizDeck[currentQuestionIndex];
  const isCorrect = selectedOption === question.answer;
  if (isCorrect) score += 1;

  answerResult.textContent = isCorrect ? "Correct!" : "Wrong";
  answerResult.dataset.correct = String(isCorrect);
  correctAnswer.textContent = `Correct answer: ${question.answer}`;
  answerExplanation.textContent = question.explanation;
  quizStatus.textContent = `Question ${currentQuestionIndex + 1} of ${quizDeck.length} · Score: ${score}`;
  quizCard.classList.add("is-flipped");
  quizFront.setAttribute("aria-hidden", "true");
  quizAnswer.setAttribute("aria-hidden", "false");
  window.setTimeout(() => nextQuestion.focus(), 300);
}

function showResults() {
  quizCard.hidden = true;
  quizResults.hidden = false;
  finalScore.textContent = `${score} out of ${quizDeck.length}`;
  scoreMessage.textContent = score >= 10
    ? "Excellent work—you have a strong grasp of the principles!"
    : score >= 7
      ? "Great work. A little more review will make these principles stick."
      : "Keep practicing. Review the principles and give the shuffled quiz another try.";
  quizStatus.textContent = "Quiz complete";
  document.getElementById("retry-quiz").focus();
}

principleGrid.addEventListener("click", (event) => {
  if (event.target instanceof HTMLButtonElement) {
    const index = [...principleGrid.children].indexOf(event.target);
    if (index >= 0) openPrinciple(index, event.target);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});


principleClose.addEventListener("click", () => closePrinciple());
principleBack.addEventListener("click", () => closePrinciple());
principleNext.addEventListener("click", () => {
  if (currentPrincipleIndex === principles.length - 1) {
    closePrinciple(false);
    startQuiz(principleOpener);
  } else {
    renderPrinciple(currentPrincipleIndex + 1);
    principleClose.focus();
  }
});

principleBackdrop.addEventListener("click", (event) => {
  if (event.target === principleBackdrop) closePrinciple();
});

quizLaunch.addEventListener("click", () => startQuiz(quizLaunch));
quizClose.addEventListener("click", () => closeQuiz());
document.getElementById("quiz-home").addEventListener("click", () => closeQuiz());
document.getElementById("retry-quiz").addEventListener("click", () => startQuiz(quizOpener));
quizBackdrop.addEventListener("click", (event) => {
  if (event.target === quizBackdrop) closeQuiz();
});
nextQuestion.addEventListener("click", () => {
  if (currentQuestionIndex + 1 < quizDeck.length) {
    currentQuestionIndex += 1;
    renderQuestion();
    quizOptions.querySelector("button")?.focus();
  } else {
    showResults();
  }
});

document.addEventListener("keydown", (event) => {
  if (!principleBackdrop.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closePrinciple();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      if (currentPrincipleIndex < principles.length - 1) renderPrinciple(currentPrincipleIndex + 1);
      else {
        closePrinciple(false);
        startQuiz(principleOpener);
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (currentPrincipleIndex > 0) renderPrinciple(currentPrincipleIndex - 1);
    } else {
      keepFocusInModal(event, principleModal);
    }
  } else if (!quizBackdrop.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeQuiz();
    } else {
      keepFocusInModal(event, quizModal);
    }
  }
});

renderPrincipleButtons();
applyFilter(selectedFilter);
