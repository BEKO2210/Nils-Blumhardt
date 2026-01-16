/**
 * Gallery Lightbox and Mobile Navigation
 * Blumhardt Maler Website
 */

(function() {
  'use strict';

  // ======================
  // Gallery Image Data
  // ======================

  const galleryImages = [
    { src: 'images/projekt-1.jpg', alt: 'Fassadenanstrich Projekt' },
    { src: 'images/projekt-2.jpg', alt: 'Innenmalerarbeiten Projekt' },
    { src: 'images/projekt-3.jpg', alt: 'Tapezierarbeiten Projekt' },
    { src: 'images/projekt-4.jpg', alt: 'Bodenbelagsarbeiten Projekt' },
    { src: 'images/projekt-5.jpg', alt: 'Dekorative Putzarbeiten Projekt' },
    { src: 'images/projekt-6.jpg', alt: 'Kreative Wandgestaltung Projekt' },
    { src: 'images/projekt-7.jpg', alt: 'Aussenarbeiten Projekt' },
    { src: 'images/projekt-8.jpg', alt: 'Renovierungsarbeiten Projekt' }
  ];

  let currentImageIndex = 0;
  let lightboxElement = null;

  // ======================
  // Lightbox Functions
  // ======================

  /**
   * Create the lightbox DOM structure
   */
  function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Bildvorschau');

    lightbox.innerHTML = `
      <button class="lightbox__close" aria-label="Schliessen">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <button class="lightbox__nav lightbox__nav--prev" aria-label="Vorheriges Bild">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <img class="lightbox__image" src="" alt="">
      <button class="lightbox__nav lightbox__nav--next" aria-label="Nachstes Bild">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      <div class="lightbox__counter">1 / ${galleryImages.length}</div>
    `;

    document.body.appendChild(lightbox);
    return lightbox;
  }

  /**
   * Open lightbox with specific image
   */
  function openLightbox(index) {
    if (!lightboxElement) {
      lightboxElement = createLightbox();
      attachLightboxListeners();
    }

    currentImageIndex = index;
    updateLightboxImage();
    lightboxElement.classList.add('lightbox--open');
    document.body.classList.add('no-scroll');

    // Focus on close button for accessibility
    const closeBtn = lightboxElement.querySelector('.lightbox__close');
    if (closeBtn) closeBtn.focus();
  }

  /**
   * Close the lightbox
   */
  function closeLightbox() {
    if (lightboxElement) {
      lightboxElement.classList.remove('lightbox--open');
      document.body.classList.remove('no-scroll');

      // Return focus to the gallery item that opened the lightbox
      const galleryItems = document.querySelectorAll('.galerie__item');
      if (galleryItems[currentImageIndex]) {
        galleryItems[currentImageIndex].focus();
      }
    }
  }

  /**
   * Update lightbox image and counter
   */
  function updateLightboxImage() {
    if (!lightboxElement) return;

    const img = lightboxElement.querySelector('.lightbox__image');
    const counter = lightboxElement.querySelector('.lightbox__counter');
    const imageData = galleryImages[currentImageIndex];

    if (img && imageData) {
      img.src = imageData.src;
      img.alt = imageData.alt;

      // Handle image load error (since images are placeholders)
      img.onerror = function() {
        this.src = '';
        this.alt = 'Bild wird geladen...';
        this.style.minWidth = '300px';
        this.style.minHeight = '200px';
        this.style.backgroundColor = 'rgba(255,255,255,0.1)';
        this.style.display = 'flex';
      };
    }

    if (counter) {
      counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }
  }

  /**
   * Show next image
   */
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }

  /**
   * Show previous image
   */
  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }

  /**
   * Attach event listeners to lightbox
   */
  function attachLightboxListeners() {
    if (!lightboxElement) return;

    // Close button
    const closeBtn = lightboxElement.querySelector('.lightbox__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    // Navigation buttons
    const prevBtn = lightboxElement.querySelector('.lightbox__nav--prev');
    const nextBtn = lightboxElement.querySelector('.lightbox__nav--next');

    if (prevBtn) {
      prevBtn.addEventListener('click', showPrevImage);
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', showNextImage);
    }

    // Click on overlay (outside image) closes lightbox
    lightboxElement.addEventListener('click', function(e) {
      if (e.target === lightboxElement) {
        closeLightbox();
      }
    });
  }

  /**
   * Initialize gallery lightbox
   */
  function initGallery() {
    const galleryItems = document.querySelectorAll('.galerie__item');

    galleryItems.forEach(function(item) {
      // Click handler
      item.addEventListener('click', function() {
        const index = parseInt(item.getAttribute('data-index'), 10) || 0;
        openLightbox(index);
      });

      // Keyboard handler for accessibility (Enter and Space)
      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const index = parseInt(item.getAttribute('data-index'), 10) || 0;
          openLightbox(index);
        }
      });
    });
  }

  // ======================
  // Mobile Menu Functions
  // ======================

  /**
   * Initialize mobile menu toggle
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav-link');

    if (!menuToggle || !nav) return;

    // Toggle menu on button click
    menuToggle.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('header__nav--open');
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
      menuToggle.setAttribute('aria-label', isOpen ? 'Menu schliessen' : 'Menu offnen');
    });

    // Close menu when clicking a nav link
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('header__nav--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menu offnen');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      const isClickInsideNav = nav.contains(e.target);
      const isClickOnToggle = menuToggle.contains(e.target);

      if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('header__nav--open')) {
        nav.classList.remove('header__nav--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Menu offnen');
      }
    });
  }

  // ======================
  // Keyboard Navigation
  // ======================

  /**
   * Global keyboard event handler
   */
  function handleKeydown(e) {
    // Only handle when lightbox is open
    if (!lightboxElement || !lightboxElement.classList.contains('lightbox--open')) {
      return;
    }

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrevImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
    }
  }

  // ======================
  // Initialization
  // ======================

  function init() {
    initGallery();
    initMobileMenu();
    document.addEventListener('keydown', handleKeydown);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
