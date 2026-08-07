document.addEventListener("DOMContentLoaded", function () {

    const STORAGE_KEY =
        "learningPathReadingHistory";


    const slug =
        document.body.dataset.entrySlug;


    if (!slug) {
        return;
    }


    /* =========================================================
       LOCAL STORAGE
       ========================================================= */

    function readHistory() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                )
            ) || {};

        } catch (error) {

            return {};

        }

    }


    function saveHistory(history) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(history)
        );

    }


    /* =========================================================
       OPENED DATE / TIME
       ========================================================= */

    let history =
        readHistory();


    const now =
        new Date().toISOString();


    const sessionKey =
        `learningPathVisit:${slug}`;


    const isNewVisit =
        !sessionStorage.getItem(
            sessionKey
        );


    if (!history[slug]) {

        history[slug] = {

            firstOpened: now,

            lastOpened: now,

            totalSeconds: 0,

            visits: 0

        };

    }


    history[slug].lastOpened =
        now;


    history[slug].totalSeconds =
        Number(
            history[slug].totalSeconds
        ) || 0;


    history[slug].visits =
        Number(
            history[slug].visits
        ) || 0;


    if (isNewVisit) {

        history[slug].visits += 1;


        sessionStorage.setItem(
            sessionKey,
            "1"
        );

    }


    saveHistory(history);


    /* =========================================================
       ACTIVE READING TRACKER

       Reading time only counts when:
       - visible ang page
       - focused ang browser/tab
       - recently active ang reader
       ========================================================= */

    let lastActivity =
        Date.now();


    let unsavedSeconds =
        0;


    function markActivity() {

        lastActivity =
            Date.now();

    }


    /* User activity events */

    [
        "scroll",
        "pointermove",
        "pointerdown",
        "keydown",
        "touchstart"
    ].forEach(function (eventName) {

        window.addEventListener(
            eventName,
            markActivity,
            {
                passive: true
            }
        );

    });


    /* =========================================================
       CHECK IF READER IS ACTIVE
       ========================================================= */

    function readerIsActive() {

        const activeRecently =
            Date.now() -
            lastActivity <
            60000;


        return (
            document.visibilityState ===
                "visible" &&

            document.hasFocus() &&

            activeRecently
        );

    }


    /* =========================================================
       SAVE READING TIME
       ========================================================= */

    function flushReadingTime() {

        if (unsavedSeconds <= 0) {
            return;
        }


        history =
            readHistory();


        if (!history[slug]) {

            history[slug] = {

                firstOpened: now,

                lastOpened: now,

                totalSeconds: 0,

                visits: 1

            };

        }


        history[slug].totalSeconds =
            (
                Number(
                    history[slug]
                        .totalSeconds
                ) || 0
            ) +
            unsavedSeconds;


        history[slug].lastOpened =
            new Date().toISOString();


        unsavedSeconds = 0;


        saveHistory(history);

    }


    /* =========================================================
       TIMER
       ========================================================= */

    const timer =
        window.setInterval(
            function () {

                if (readerIsActive()) {

                    unsavedSeconds += 1;

                }


                /* Save every 5 seconds */

                if (
                    unsavedSeconds >= 5
                ) {

                    flushReadingTime();

                }

            },
            1000
        );


    /* =========================================================
       TAB VISIBILITY
       ========================================================= */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState ===
                "hidden"
            ) {

                flushReadingTime();

            } else {

                markActivity();

            }

        }
    );


    /* =========================================================
       WINDOW FOCUS
       ========================================================= */

    window.addEventListener(
        "focus",
        markActivity
    );


    window.addEventListener(
        "blur",
        flushReadingTime
    );


    /* =========================================================
       WHEN LEAVING ARTICLE
       ========================================================= */

    window.addEventListener(
        "pagehide",
        function () {

            window.clearInterval(
                timer
            );


            flushReadingTime();

        }
    );


    window.addEventListener(
        "beforeunload",
        flushReadingTime
    );

});