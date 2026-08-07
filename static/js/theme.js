/* =========================================================
   LEARNING PATH
   LIGHT / NIGHT MODE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const themeToggle =
            document.getElementById(
                "themeToggle"
            );


        if (!themeToggle) {
            return;
        }


        const root =
            document.documentElement;


        /* =================================================
           CHECK CURRENT THEME
           ================================================= */

        function isDarkMode() {

            return (
                root.getAttribute(
                    "data-theme"
                ) === "dark"
            );

        }


        /* =================================================
           UPDATE BUTTON
           ================================================= */

        function updateToggle() {

            const dark =
                isDarkMode();


            themeToggle.setAttribute(
                "aria-pressed",
                dark
                    ? "true"
                    : "false"
            );


            themeToggle.setAttribute(
                "aria-label",
                dark
                    ? "Switch to light mode"
                    : "Switch to night mode"
            );


            themeToggle.setAttribute(
                "title",
                dark
                    ? "Switch to light mode"
                    : "Switch to night mode"
            );

        }


        /* =================================================
           SAVE THEME
           ================================================= */

        function saveTheme(
            theme
        ) {

            try {

                localStorage.setItem(
                    "learningPathTheme",
                    theme
                );

            } catch (error) {

                /*
                 * Theme still works even if
                 * localStorage is unavailable.
                 */

            }

        }


        /* =================================================
           CLICK TOGGLE
           ================================================= */

        themeToggle.addEventListener(
            "click",
            function () {

                const nextTheme =
                    isDarkMode()
                        ? "light"
                        : "dark";


                if (
                    nextTheme === "dark"
                ) {

                    root.setAttribute(
                        "data-theme",
                        "dark"
                    );

                } else {

                    root.removeAttribute(
                        "data-theme"
                    );

                }


                saveTheme(
                    nextTheme
                );


                updateToggle();

            }
        );


        /* =================================================
           INITIAL STATE
           ================================================= */

        updateToggle();

    }
);