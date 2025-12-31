const ready = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
};

ready(() => {
  runIntroScreen();
  setupInterestCards();
  setupResearchModal();
});

function runIntroScreen() {
  const intro = document.querySelector(".intro-screen");
  if (!intro) return;
  const hasSeenIntro = sessionStorage.getItem("introSeen");

  if (hasSeenIntro) {
    intro.remove();
    return;
  }

  sessionStorage.setItem("introSeen", "true");

  setTimeout(() => {
    intro.classList.add("intro-hide");
  }, 2200);

  intro.addEventListener("transitionend", () => {
    intro.remove();
  });
}

function setupInterestCards() {
  const cards = document.querySelectorAll(".interest-card");
  if (!cards.length) return;

  const constrain = 45;

  const setTransform = (card, xFactor, yFactor) => {
    const depth = parseInt(card.dataset.depth || "30", 10);
    const rotateX = (-xFactor * depth) / constrain;
    const rotateY = (yFactor * depth) / constrain;
    card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientY - rect.top) / rect.height - 0.5;
      const y = (event.clientX - rect.left) / rect.width - 0.5;
      setTransform(card, x * 2, y * 2);
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function setupResearchModal() {
  const modal = document.getElementById("research-modal");
  if (!modal) return;

  const modalImg = modal.querySelector("img");
  const modalMeta = modal.querySelector(".modal-meta");
  const modalTitle = modal.querySelector(".modal-title");
  const modalSummary = modal.querySelector(".modal-summary");
  const modalDetail = modal.querySelector(".modal-detail");
  const modalContact = modal.querySelector(".modal-contact");
  const modalDetailLink = modal.querySelector(".modal-detail-link");

  const openModal = (card) => {
    const { title, meta, summary, detail, img, detailPage } = card.dataset;
    modalImg.src = img || card.querySelector("img")?.src || "";
    modalImg.alt = title || "Research case";
    modalMeta.textContent = meta || "Research";
    modalTitle.textContent = title || "Research insight";
    modalSummary.textContent = summary || "";
    modalDetail.textContent = detail || "";
    if (modalContact) {
      modalContact.href = "contact.html";
    }
    if (modalDetailLink) {
      modalDetailLink.href = detailPage || "#";
    }
    modal.classList.add("open");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  };

  modal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  document.querySelectorAll(".research-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card));
  });

  document.querySelectorAll(".detail-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}

