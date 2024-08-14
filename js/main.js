

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
        // turnoffslideshow(),
        prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
        newAnimal = prevAnimal + 1,
        2 == newAnimal && (newAnimal = 0),
        nextorprevanimal()
    // animationstatequestion()
}

function previousAnimalProcess() {
    $("body").removeClass("animal-animations-on"),
        // turnoffslideshow(),
        prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
        newAnimal = prevAnimal - 1,
        -1 == newAnimal && (newAnimal = 0),
        nextorprevanimal()
    // animationstatequestion()
}

function nextorprevanimal() {
    setTimeout(function () {
        $(".shadow").removeClass("inactive")
    }, 200),
        prevAnimal > newAnimal ? ($(".wrap").addClass("right-to-left"),
            $(".wrap.left-to-right").removeClass("left-to-right")) : ($(".wrap").addClass("left-to-right"),
                $(".wrap.right-to-left").removeClass("right-to-left")),
        $("#animalchanger").attr("class", animalList[newAnimal]),
        $(".next .popout").attr("popanimal", animalList[newAnimal]),
        $(".prev .popout").attr("popanimal", animalList[newAnimal]),
        $(".popout").addClass("text-change"),
        $(".animalinfo").addClass("text-change"),
        // $(".content-wrap .content-info .infos ul li:nth-child(1) span").html(animalScientificName[newAnimal]),
        // $(".content-wrap .content-info .infos ul li:nth-child(3) span").html(animalRange[newAnimal]),
        // $(".content-wrap .content-info .infos p:nth-child(3)").html(animalCopyOne[newAnimal]),
        // $(".content-wrap .content-info .infos p:nth-child(4)").html(animalCopyTwo[newAnimal]),
        // $(".content-wrap .content-info .infos p:nth-child(5)").html(animalCopyThree[newAnimal]),
        // $(".content-wrap .content-info .ctas li:nth-child(3)").html(animalCharity[newAnimal]),
        setTimeout(function () {
            $(".animalinfo h2").text(animalNames[newAnimal]),
                $(".animalinfo li:nth-child(1) span").text(newAnimal + 1),
                $(".popout").removeClass("text-change"),
                $(".animalinfo").removeClass("text-change"),
                0 == newAnimal ? ($(".prev .popout").text(animalNames[1]),
                    $(".next .popout").text(animalNames[1])) : 1 == newAnimal ? ($(".prev .popout").text(animalNames[0]),
                        $(".next .popout").text(animalNames[0])) : ($(".prev .popout").text(animalNames[newAnimal - 1]),
                            $(".next .popout").text(animalNames[newAnimal + 1]))
        }, 150)
}

newAnimal = 0;
$(document).ready(function () {

    $(".start-btn").on("click", function () {
        startexhibition(),
        prevAnimal = 2,
        nextorprevanimal()
    }),
        $(".thobbing").on("click", function () {
            overlayContent = ".overlay .detail",
                overlayprocess()
        }),
        $(".all-animal").on("click", function () {
            overlayContent = ".overlay .all-animal-stg",
                overlayprocess()
        }),
        $(".overlay .close").on("click", function () {
            $(".overlay").toggleClass("active"),
                setTimeout(function () {
                    $(".overlay div").removeClass("active")
                }, 500)
        }),
        $("footer .aboutme a").on("click", function () {
            overlayContent = ".overlay .author",
                overlayprocess()
        }),
        $(".next").on("click", function () {
            nextAnimalProcess()
        }),
        $(".prev").on("click", function () {
            previousAnimalProcess()
        }),
        // $(".menu-nav li:nth-child(3)").on("click", function () {
        //     $(".menu-nav li:nth-child(3).muted").length ? (soundManager.unmute(),
        //         $(this).removeClass("muted"),
        //         $(".menu-nav li:nth-child(3) .popout").addClass("text-change"),
        //         setTimeout(function () {
        //             $(".menu-nav li:nth-child(3) .popout").removeClass("text-change"),
        //                 $(".menu-nav li:nth-child(3) .popout").text("Get that racket off")
        //         }, 150)) : (soundManager.mute(),
        //             $(this).addClass("muted"),
        //             $(".menu-nav li:nth-child(3) .popout").addClass("text-change"),
        //             setTimeout(function () {
        //                 $(".menu-nav li:nth-child(3) .popout").removeClass("text-change"),
        //                     $(".menu-nav li:nth-child(3) .popout").text("Beautify with sound")
        //             }, 150))
        // })
        $(".menu-nav li:nth-child(3)").on("click", function () {
            $(".menu-nav li:nth-child(3).muted").length ? (
                $(this).removeClass("muted"),
                $(".menu-nav li:nth-child(3) .popout").addClass("text-change"),
                setTimeout(function () {
                    $(".menu-nav li:nth-child(3) .popout").removeClass("text-change"),
                        $(".menu-nav li:nth-child(3) .popout").text("Get that racket off"),
                        $(".menu-nav li:nth-child(3) a").text("music On")
                }, 150)) : (
                $(this).addClass("muted"),
                $(".menu-nav li:nth-child(3) .popout").addClass("text-change"),
                setTimeout(function () {
                    $(".menu-nav li:nth-child(3) .popout").removeClass("text-change"),
                        $(".menu-nav li:nth-child(3) .popout").text("Beautify with sound")
                    $(".menu-nav li:nth-child(3) a").text("music Off")
                }, 150)
            )
        })

})

SOUNDS = {
    btn: $("<a>").attr("href", "#").attr("id", "toggle-mute").addClass("toggle-mute").text(""),
    looping: null,
    fading: null,
    init: function () {
        soundManager.setup({
            url: "swf/",
            debugMode: !1,
            waitForWindowLoad: !1,
            useHighPerformance: !0,
            useHTML5Audio: !0,
            flashVersion: 9,
            multiShot: !0,
            onready: SOUNDS.onSoundManagerReady,
            ontimeout: function () { }
        })
    },
    onSoundManagerReady: function () {
        soundManager.createSound({
            id: "ambientloop",
            url: "audio/ambient-loop-piano.mp3",
            autoLoad: !0,
            multiShot: !0,
            onload: function () {
                SOUNDS.playLoop("ambientloop", 44500)
            }
        }),
            soundManager.createSound({
                id: "hover",
                url: "audio/hover_ui.mp3",
                autoLoad: !0,
                onload: function () { }
            }),
            soundManager.createSound({
                id: "softhover",
                url: "audio/hover_ui.mp3",
                autoLoad: !0,
                onload: function () {
                    this.setVolume(50)
                }
            }),
            soundManager.createSound({
                id: "smashpiano",
                url: "audio/smash.mp3",
                autoLoad: !0,
                onload: function () {
                    this.setVolume(30)
                }
            })
    },
    play: function (t) {
        soundManager.play(t)
    },
    playLoop: function (t, a) {
        SOUNDS[t + "looping"] || (SOUNDS[t + "looping"] = !0,
            SOUNDS.play(t),
            SOUNDS["looping" + t] = setInterval(function () {
                SOUNDS.play(t)
            }, a))
    },
    stopLoop: function (t) {
        clearInterval(SOUNDS["looping" + t]),
            SOUNDS[t + "looping"] = !1
    },
    setVolume: function (t, a) {
        var e = soundManager.getSoundById(soundID);
        e.setVolume(a)
    },
    fadeIn: function (t) {
        if ("out" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (e >= 100)
                    return SOUNDS.fading = "",
                        !1;
                SOUNDS.fading = "in",
                    a.setVolume(Math.min(100, e + 10)),
                    setTimeout(function () {
                        SOUNDS.fadeIn(t)
                    }, 50)
            }
        }
    },
    fadeOut: function (t) {
        if ("in" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (40 >= e)
                    return SOUNDS.fading = "",
                        !1;
                SOUNDS.fading = "out",
                    a.setVolume(Math.max(0, e - 10)),
                    setTimeout(function () {
                        SOUNDS.fadeOut(t)
                    }, 50)
            }
        }
    },
    toggleMute: function (t) {
        t.preventDefault(),
            SOUNDS.btn.hasClass("muted") ? SOUNDS.unmute() : SOUNDS.mute()
    },
    mute: function (t) {
        soundManager.mute(t),
            SOUNDS.btn.addClass("muted")
    },
    unmute: function (t) {
        soundManager.unmute(t),
            SOUNDS.btn.removeClass("muted")
    }
};