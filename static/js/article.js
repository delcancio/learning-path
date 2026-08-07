/* =========================================================
   ARTICLE READING PROGRESS
   Runs only on article/readable pages
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const progressBar =
            document.getElementById(
                "readingProgressBar"
            );

        const readingArea =
            document.querySelector(
                ".article-container"
            );


        if (!progressBar || !readingArea) {
            return;
        }


        function updateReadingProgress() {

            /*
             * Get the beginning and ending
             * positions of the actual article.
             *
             * The footer is intentionally NOT
             * included in the reading progress.
             */

            const rect =
                readingArea.getBoundingClientRect();

            const articleTop =
                rect.top + window.scrollY;

            const articleHeight =
                readingArea.offsetHeight;

            const articleEnd =
                articleTop + articleHeight;

            const currentPosition =
                window.scrollY +
                (window.innerHeight * 0.25);


            const totalReadableDistance =
                articleEnd - articleTop;


            let progress =
                (
                    currentPosition -
                    articleTop
                ) /
                totalReadableDistance;


            /*
             * Keep progress between
             * 0 and 1
             */

            progress =
                Math.max(
                    0,
                    Math.min(
                        1,
                        progress
                    )
                );


            progressBar.style.width =
                `${progress * 100}%`;
        }


        /*
         * Update immediately when page opens
         */

        updateReadingProgress();


        /*
         * Update while user scrolls
         */

        window.addEventListener(
            "scroll",
            updateReadingProgress,
            {
                passive: true
            }
        );


        /*
         * Recalculate when browser
         * size changes
         */

        window.addEventListener(
            "resize",
            updateReadingProgress
        );

    }
);