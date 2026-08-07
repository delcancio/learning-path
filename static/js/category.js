document.addEventListener("DOMContentLoaded", function () {

    const FAVORITES_KEY = "learningPathFavorites";
    const READING_KEY = "learningPathReadingHistory";

    const searchInput = document.getElementById("entrySearch");
    const favoritesFilter = document.getElementById("favoritesFilter");
    const sortSelect = document.getElementById("entrySort");
    const grid = document.getElementById("categoryPostGrid");

    const cards = Array.from(
        document.querySelectorAll(".category-post-card")
    );

    const emptyState = document.getElementById("emptyCategoryState");
    const countElement = document.getElementById("visibleEntryCount");
    const countLabel = document.getElementById("entryCountLabel");


    if (!grid || !cards.length) {
        return;
    }


    /* =========================================================
       LOCAL STORAGE HELPERS
       ========================================================= */

    function readJSON(key, fallback) {

        try {

            const value = localStorage.getItem(key);

            if (!value) {
                return fallback;
            }

            return JSON.parse(value);

        } catch (error) {

            return fallback;

        }

    }


    function writeJSON(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }


    /* =========================================================
       FAVORITES
       ========================================================= */

    function getFavorites() {

        const favorites = readJSON(
            FAVORITES_KEY,
            []
        );

        return Array.isArray(favorites)
            ? favorites
            : [];

    }


    function setFavorites(favorites) {

        writeJSON(
            FAVORITES_KEY,
            favorites
        );

    }


    function renderFavorites() {

        const favorites = getFavorites();

        document
            .querySelectorAll(".favorite-button")
            .forEach(function (button) {

                const slug =
                    button.dataset.favoriteSlug;

                const active =
                    favorites.includes(slug);


                button.setAttribute(
                    "aria-pressed",
                    active
                        ? "true"
                        : "false"
                );


                const icon =
                    button.querySelector("span");

                if (icon) {

                    icon.textContent =
                        active
                            ? "♥"
                            : "♡";

                }


                button.setAttribute(
                    "aria-label",
                    active
                        ? "Remove from favorites"
                        : "Add to favorites"
                );

            });

    }


    /* =========================================================
       DATE / TIME FORMATTING
       ========================================================= */

    function formatDateTime(isoDate) {

        if (!isoDate) {
            return "Not opened yet";
        }


        const date = new Date(isoDate);


        if (Number.isNaN(date.getTime())) {
            return "Not opened yet";
        }


        return new Intl.DateTimeFormat(
            undefined,
            {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
            }
        ).format(date);

    }


    /* =========================================================
       READING TIME FORMATTING
       ========================================================= */

    function formatDuration(totalSeconds) {

        const seconds = Math.max(
            0,
            Number(totalSeconds) || 0
        );


        if (seconds < 60) {

            return seconds > 0
                ? `${seconds} sec`
                : "No reading time yet";

        }


        const hours =
            Math.floor(seconds / 3600);


        const minutes =
            Math.floor(
                (seconds % 3600) / 60
            );


        if (hours > 0) {

            return `${hours} hr ${minutes} min`;

        }


        return `${minutes} min`;

    }


    /* =========================================================
       READING ACTIVITY
       ========================================================= */

    function renderReadingActivity() {

        const history = readJSON(
            READING_KEY,
            {}
        );


        cards.forEach(function (card) {

            const slug =
                card.dataset.entrySlug;


            const record =
                history[slug] || {};


            const lastOpened =
                card.querySelector(
                    `[data-last-opened="${slug}"]`
                );


            const timeSpent =
                card.querySelector(
                    `[data-time-spent="${slug}"]`
                );


            if (lastOpened) {

                lastOpened.textContent =
                    formatDateTime(
                        record.lastOpened
                    );

            }


            if (timeSpent) {

                timeSpent.textContent =
                    formatDuration(
                        record.totalSeconds
                    );

            }

        });

    }


    /* =========================================================
       SEARCH + FAVORITES FILTER
       ========================================================= */

    function applyFilters() {

        const query =
            searchInput
                ? searchInput.value
                    .trim()
                    .toLowerCase()
                : "";


        const favoritesOnly =
            favoritesFilter
                ? favoritesFilter.getAttribute(
                    "aria-pressed"
                ) === "true"
                : false;


        const favorites =
            getFavorites();


        let visibleCount = 0;


        cards.forEach(function (card) {

            const text =
                card.dataset.searchText || "";


            const slug =
                card.dataset.entrySlug;


            const matchesSearch =
                !query ||
                text.includes(query);


            const matchesFavorite =
                !favoritesOnly ||
                favorites.includes(slug);


            const visible =
                matchesSearch &&
                matchesFavorite;


            card.hidden = !visible;


            if (visible) {
                visibleCount += 1;
            }

        });


        if (countElement) {

            countElement.textContent =
                String(visibleCount);

        }


        if (countLabel) {

            countLabel.textContent =
                visibleCount === 1
                    ? "entry"
                    : "entries";

        }


        if (emptyState) {

            emptyState.hidden =
                visibleCount !== 0;

        }

    }


    /* =========================================================
       SORT
       ========================================================= */

    function applySort() {

        const mode =
            sortSelect
                ? sortSelect.value
                : "newest";


        const sorted =
            [...cards].sort(
                function (a, b) {

                    const aDate =
                        new Date(
                            a.dataset.published
                        );


                    const bDate =
                        new Date(
                            b.dataset.published
                        );


                    if (mode === "oldest") {

                        return aDate - bDate;

                    }


                    return bDate - aDate;

                }
            );


        sorted.forEach(function (card) {

            grid.appendChild(card);

        });


        applyFilters();

    }


    /* =========================================================
       FAVORITE BUTTON EVENTS
       ========================================================= */

    document
        .querySelectorAll(".favorite-button")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const slug =
                        button.dataset.favoriteSlug;


                    const favorites =
                        getFavorites();


                    const exists =
                        favorites.includes(slug);


                    const updated =
                        exists
                            ? favorites.filter(
                                function (item) {

                                    return item !== slug;

                                }
                            )
                            : [
                                ...favorites,
                                slug
                            ];


                    setFavorites(updated);


                    renderFavorites();


                    applyFilters();

                }
            );

        });


    /* =========================================================
       SEARCH EVENT
       ========================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            applyFilters
        );

    }


    /* =========================================================
       FAVORITES FILTER EVENT
       ========================================================= */

    if (favoritesFilter) {

        favoritesFilter.addEventListener(
            "click",
            function () {

                const active =
                    favoritesFilter.getAttribute(
                        "aria-pressed"
                    ) === "true";


                favoritesFilter.setAttribute(
                    "aria-pressed",
                    active
                        ? "false"
                        : "true"
                );


                const icon =
                    favoritesFilter.querySelector(
                        "span"
                    );


                if (icon) {

                    icon.textContent =
                        active
                            ? "♡"
                            : "♥";

                }


                applyFilters();

            }
        );

    }


    /* =========================================================
       SORT EVENT
       ========================================================= */

    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            applySort
        );

    }


    /* =========================================================
       INITIAL LOAD
       ========================================================= */

    renderFavorites();

    renderReadingActivity();

    applySort();


    /* Refresh saved information when returning
       from an article page */

    window.addEventListener(
        "pageshow",
        function () {

            renderFavorites();

            renderReadingActivity();

            applyFilters();

        }
    );

});