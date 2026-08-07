document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".category-card");
    const panels = document.querySelectorAll(".category-panel");
    const results = document.getElementById("categoryResults");
    const categoryStage = document.querySelector(".category-stage");
    const backButtons = document.querySelectorAll(".back-to-categories");

    if (!cards.length || !panels.length || !results || !categoryStage) {
        return;
    }

    function openCategory(category, shouldScroll = true) {

        cards.forEach(function (card) {

            const active =
                card.dataset.category === category;

            card.classList.toggle(
                "is-active",
                active
            );

            card.setAttribute(
                "aria-expanded",
                active
                    ? "true"
                    : "false"
            );
        });


        panels.forEach(function (panel) {

            panel.hidden =
                panel.dataset.panel !== category;

        });


        if (shouldScroll) {

            window.setTimeout(function () {

                results.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 80);
        }


        if (history.replaceState) {

            history.replaceState(
                null,
                "",
                `#${category}`
            );

        }
    }


    cards.forEach(function (card) {

        card.setAttribute(
            "aria-expanded",
            "false"
        );


        card.addEventListener(
            "click",
            function () {

                openCategory(
                    card.dataset.category
                );

            }
        );

    });


    backButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                cards.forEach(function (card) {

                    card.classList.remove(
                        "is-active"
                    );

                    card.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });


                panels.forEach(function (panel) {

                    panel.hidden = true;

                });


                if (history.replaceState) {

                    history.replaceState(
                        null,
                        "",
                        window.location.pathname
                    );

                }


                categoryStage.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    const initialCategory =
        window.location.hash
            .replace("#", "")
            .toLowerCase();


    const allowed = [
        "projects",
        "lessons",
        "insights"
    ];


    if (
        allowed.includes(
            initialCategory
        )
    ) {

        openCategory(
            initialCategory,
            false
        );

    }

});