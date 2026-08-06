document.addEventListener("DOMContentLoaded", () => {
    /*
     * These are the sections/cards that will move upward
     * and fade in while scrolling.
     */
    const selectors = [
        ".featured-heading",
        ".featured-card",
        ".recent-header",
        ".recent-card",
        ".about-card"
    ];

    const revealElements = document.querySelectorAll(
        selectors.join(",")
    );

    if (revealElements.length === 0) {
        return;
    }

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /*
     * Add the animation class automatically.
     * No need to edit every HTML element manually.
     */
    revealElements.forEach((element) => {
        element.classList.add("scroll-reveal");
    });

    /*
     * Show everything immediately when animations are disabled
     * or IntersectionObserver is unsupported.
     */
    if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
    ) {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    document.documentElement.classList.add("reveal-ready");

    const observerOptions = {
        /*
         * Start the animation when around 15% of the element
         * becomes visible.
         */
        threshold: 0.15,

        /*
         * Trigger slightly before the element reaches
         * the bottom of the screen.
         */
        rootMargin: "0px 0px -70px 0px"
    };

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");

                /*
                 * Stop watching after the first reveal.
                 * The animation will not repeatedly reset.
                 */
                observer.unobserve(entry.target);
            });
        },
        observerOptions
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
});