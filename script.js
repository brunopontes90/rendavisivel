// ================================================
// RENDA VISÍVEL 30 - LANDING PAGE JAVASCRIPT
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // FAQ ACCORDION
    // ================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
    
    // ================================
    // COUNTDOWN TIMER
    // ================================
    function startCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;
        
        // Define o countdown para 12 horas a partir de agora
        const endTime = new Date().getTime() + (12 * 60 * 60 * 1000);
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endTime - now;
            
            if (distance < 0) {
                countdownElement.innerHTML = "Oferta encerrada!";
                return;
            }
            
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `Termina em <strong>${hours}h ${minutes}m ${seconds}s</strong>`;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    startCountdown();
    
    // ================================
    // SMOOTH SCROLL
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora se for apenas "#" (links que não apontam para nenhum lugar)
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ================================
    // CTA CLICK TRACKING
    // ================================
    const ctaButtons = document.querySelectorAll('[id^="cta-"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ctaId = this.id;
            
            // Console log para debug
            console.log('CTA clicked:', ctaId);
            
            // Facebook Pixel Event (se configurado)
            if (typeof fbq !== 'undefined') {
                fbq('track', 'InitiateCheckout', {
                    content_name: 'Renda Visível 30',
                    content_category: 'Finanças',
                    value: 67.00,
                    currency: 'BRL',
                    cta_location: ctaId
                });
            }
            
            // Google Analytics Event (se configurado)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': ctaId,
                    'value': 67.00
                });
            }
        });
    });
    
    // ================================
    // SCROLL ANIMATIONS
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos para animar
    const elementsToAnimate = document.querySelectorAll(`
        .problem-card,
        .module-card,
        .bonus-card,
        .testimonial-card
    `);
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ================================
    // URGENCY BANNER VISIBILITY
    // ================================
    const urgencyBanner = document.querySelector('.urgency-banner');
    let hasScrolled = false;
    
    window.addEventListener('scroll', function() {
        if (!hasScrolled && window.scrollY > 100) {
            hasScrolled = true;
            
            // Adiciona classe para efeito visual
            if (urgencyBanner) {
                urgencyBanner.style.animation = 'shake 3s infinite';
            }
        }
    });
    
    // ================================
    // PREVENT FORM SUBMISSION (se houver)
    // ================================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Redireciona para checkout se for um form de captura
            window.location.href = 'https://pay.kiwify.com.br/IVsN7qE';
        });
    });
    
    // ================================
    // MOBILE MENU (se adicionar depois)
    // ================================
    // Placeholder para futuro menu mobile
    
    // ================================
    // CONSOLE LOG - DESENVOLVEDOR
    // ================================
    console.log('%c🚀 Renda Visível 30 - Landing Page Loaded', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%c📊 Tracking configurado', 'color: #10b981; font-size: 12px;');
    console.log('%c⏰ Countdown ativo', 'color: #f59e0b; font-size: 12px;');
    
});

// ================================
// FACEBOOK PIXEL HELPER FUNCTIONS
// ================================

/**
 * Dispara evento PageView quando página carrega
 * (Já está no HTML, mas pode ser chamado via JS também)
 */
function trackPageView() {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'PageView');
        console.log('📊 Facebook Pixel: PageView tracked');
    }
}

/**
 * Dispara evento AddToCart quando usuário demonstra interesse
 * Pode ser usado em scroll depth, tempo na página, etc.
 */
function trackAddToCart() {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'AddToCart', {
            content_name: 'Renda Visível 30',
            content_category: 'Finanças',
            value: 67.00,
            currency: 'BRL'
        });
        console.log('📊 Facebook Pixel: AddToCart tracked');
    }
}

/**
 * Dispara quando usuário está a 75% da página
 * (indica alto interesse)
 */
let scrollDepthTracked = false;
window.addEventListener('scroll', function() {
    if (scrollDepthTracked) return;
    
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent > 75) {
        scrollDepthTracked = true;
        trackAddToCart();
    }
});

// ================================
// UTILITY FUNCTIONS
// ================================

/**
 * Formata valor em moeda BRL
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

/**
 * Detecta se é mobile
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Scroll suave para elemento
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
