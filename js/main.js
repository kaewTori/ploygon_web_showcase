

function overlayprocess() {
    // turnoffslideshow(),
    // $("div").removeClass("main-screen"),
    // animationstateaddition(),
    $(overlayContent).toggleClass("active"),
        setTimeout(function () {
            $(".overlay").toggleClass("active")
        }, 10)
}

function startexhibition() {
    setTimeout(function () {
        $(".start-screen").fadeOut(500)
    }, 400);
}

function nextAnimalProcess() {
    $("body").removeClass("animal-animations-on"),
    turnoffslideshow(),
    prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
    newAnimal = prevAnimal + 1,
    30 == newAnimal && (newAnimal = 0),
    nextorprevanimal(),
    animationstatequestion()
}

function previousAnimalProcess() {
    $("body").removeClass("animal-animations-on"),
    turnoffslideshow(),
    prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
    newAnimal = prevAnimal - 1,
    -1 == newAnimal && (newAnimal = 29),
    nextorprevanimal(),
    animationstatequestion()
}

$(document).ready(function () {

    $(".start-btn").on("click", function () {
        startexhibition()
    }),
        $(".thobbing").on("click", function () {
            overlayContent = ".overlay .detail",
                overlayprocess()
        }),
        $(".all-animal").on("click", function () {
            overlayContent = ".overlay .all-animal-stg",
                overlayprocess()
        }),
        $("footer .aboutme a").on("click", function () {
            overlayContent = ".overlay .author",
                overlayprocess()
        }),
        $(".overlay .close").on("click", function () {
            $(".overlay").toggleClass("active"),
                setTimeout(function () {
                    $(".overlay div").removeClass("active")
                }, 500)
        })

})

SOUNDS = {
    btn: $("<a>").attr("href", "#").attr("id", "toggle-mute").addClass("toggle-mute").text(""),
    looping: null,
    fading: null,
    init: function() {
        soundManager.setup({
            url: "swf/",
            debugMode: !1,
            waitForWindowLoad: !1,
            useHighPerformance: !0,
            useHTML5Audio: !0,
            flashVersion: 9,
            multiShot: !0,
            onready: SOUNDS.onSoundManagerReady,
            ontimeout: function() {}
        })
    },
    onSoundManagerReady: function() {
        soundManager.createSound({
            id: "ambientloop",
            url: "audio/ambient-loop-piano.mp3",
            autoLoad: !0,
            multiShot: !0,
            onload: function() {
                SOUNDS.playLoop("ambientloop", 44500)
            }
        }),
        soundManager.createSound({
            id: "hover",
            url: "audio/hover_ui.mp3",
            autoLoad: !0,
            onload: function() {}
        }),
        soundManager.createSound({
            id: "softhover",
            url: "audio/hover_ui.mp3",
            autoLoad: !0,
            onload: function() {
                this.setVolume(50)
            }
        }),
        soundManager.createSound({
            id: "smashpiano",
            url: "audio/smash.mp3",
            autoLoad: !0,
            onload: function() {
                this.setVolume(30)
            }
        })
    },
    play: function(t) {
        soundManager.play(t)
    },
    playLoop: function(t, a) {
        SOUNDS[t + "looping"] || (SOUNDS[t + "looping"] = !0,
        SOUNDS.play(t),
        SOUNDS["looping" + t] = setInterval(function() {
            SOUNDS.play(t)
        }, a))
    },
    stopLoop: function(t) {
        clearInterval(SOUNDS["looping" + t]),
        SOUNDS[t + "looping"] = !1
    },
    setVolume: function(t, a) {
        var e = soundManager.getSoundById(soundID);
        e.setVolume(a)
    },
    fadeIn: function(t) {
        if ("out" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (e >= 100)
                    return SOUNDS.fading = "",
                    !1;
                SOUNDS.fading = "in",
                a.setVolume(Math.min(100, e + 10)),
                setTimeout(function() {
                    SOUNDS.fadeIn(t)
                }, 50)
            }
        }
    },
    fadeOut: function(t) {
        if ("in" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (40 >= e)
                    return SOUNDS.fading = "",
                    !1;
                SOUNDS.fading = "out",
                a.setVolume(Math.max(0, e - 10)),
                setTimeout(function() {
                    SOUNDS.fadeOut(t)
                }, 50)
            }
        }
    },
    toggleMute: function(t) {
        t.preventDefault(),
        SOUNDS.btn.hasClass("muted") ? SOUNDS.unmute() : SOUNDS.mute()
    },
    mute: function(t) {
        soundManager.mute(t),
        SOUNDS.btn.addClass("muted")
    },
    unmute: function(t) {
        soundManager.unmute(t),
        SOUNDS.btn.removeClass("muted")
    }
};