function overlayprocess() {
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

function sizeshards() {
    $(".stg-exhibi").each(function () {
        var t = 0.99 * $(window).width(),
            a = .625 * t,
            n = -0.2 * (a / 2);
        $(this).each(function () {
            $(this).css({
                width: t,
                height: a,
                "margin-top": n,
            })
        })
    }),
        $(window).width() < 700 || $("html.touch").length || $(".nowebkitbrowser").length ? $("html").addClass("small-nav") : $("html.webkitbrowser").length && $("html").removeClass("small-nav")
}


function nextAnimalProcess() {
    prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
        newAnimal = prevAnimal + 1,
        //index array +1 over index array length
        20 == newAnimal && (newAnimal = 0),
        nextorprevanimal()
}

function previousAnimalProcess() {
    prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
        newAnimal = prevAnimal - 1,
        //index array -1 over index array length
        -1 == newAnimal && (newAnimal = 19),
        nextorprevanimal()
}

function nextorprevanimal() {
    $("#animalchanger").attr("class", animalList[newAnimal]),
        $(".next .btn__text").attr("popanimal", animalNames[newAnimal]),
        $(".prev .btn__text").attr("popanimal", animalNames[newAnimal]),
        $(".btn__text").addClass("text-change"),
        $(".animalinfo").addClass("text-change"),

        setTimeout(function () {
            $(".animalinfo h2").text(animalNames[newAnimal]),
                $(".animalinfo li:nth-child(1) span").text((newAnimal + 1) + " |").append("&nbsp;"),
                $(".btn__text").removeClass("text-change"),
                $(".animalinfo").removeClass("text-change"),

                $(".overlay .detail h2:nth-child(1)").html("PIECE NUMBER &nbsp; : &nbsp; ").append((newAnimal + 1)),
                $(".overlay .detail h1").html(animalNames[newAnimal].toUpperCase()),
                $(".overlay .detail h2:nth-child(3)").html("SCIENTIFIC NAME &nbsp; : &nbsp; " + animalScientificName[newAnimal].toUpperCase()).append("&nbsp;&nbsp; | &nbsp;&nbsp;" + animalType[newAnimal].toUpperCase()).append("<br>CONSERVATION STATUS &nbsp; : &nbsp; " + "<span>" + animalStatus[0][newAnimal].toUpperCase() + "</span>"),
                $(".overlay .detail h2:nth-child(3) span").css("color", animalStatus[1][newAnimal]),
                $(".overlay .detail p").html(animalDetail1[newAnimal]),

                0 == newAnimal ? ($(".prev .btn__text").text(animalNames[19]), $(".next .btn__text").text(animalNames[1])) :
                    19 == newAnimal ? ($(".prev .btn__text").text(animalNames[18]), $(".next .btn__text").text(animalNames[0])) :
                        ($(".prev .btn__text").text(animalNames[newAnimal - 1]), $(".next .btn__text").text(animalNames[newAnimal + 1]))
        }, 150)
}

function updateText(text) {
    let delay = 200;
    let h1 = document.getElementsByClassName("header-project")[0];

    h1.innerHTML = text.split("").map(letter => {
        return `<span>` + letter + `</span>`;
    }).join("");

    Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("wavy");
        }, index * 60 + delay);
    });
}

function startslideshow() {
    $("body").addClass("slideshow-on"),
        $(".menu-nav li:nth-child(2) a").addClass("stop"),
        $(".menu-nav li:nth-child(2) .popout").addClass("text-change"),
        setTimeout(function () {
            $(".menu-nav li:nth-child(2) .popout").removeClass("text-change"),
                $(".menu-nav li:nth-child(2) .btn__textR").text("stop")
            $(".menu-nav li:nth-child(2) a path").attr("d", pauseSvg)
        }, 150),
        slideshowvar += 1,
        slideshowquery()
}

function turnoffslideshow() {
    slideshowvar += 1,
        $(".menu-nav li:nth-child(2) a").removeClass("stop"),
        $(".menu-nav li:nth-child(2) .popout").addClass("text-change"),
        setTimeout(function () {
            $(".menu-nav li:nth-child(2) .popout").removeClass("text-change"),
                $(".menu-nav li:nth-child(2) .btn__textR").text("Cycle Through"),
                $(".menu-nav li:nth-child(2) a path").attr("d", playButtonSvg)
        }, 150),
        $(".slideshow-on").removeClass("slideshow-on")
}

function slideshowquery() {
    randomAnimal(),
        slideshowvar += 1;
    var t = slideshowvar;
    setTimeout(function () {
        t == slideshowvar && slideshowquery()
    }, 2900)
}

function randomAnimal() {
    newAnimal = Math.floor(Math.random() * finishedAnimals),
        nextorprevanimal()
}

function animalStates(t) {
    setInterval(function () {
        t.removeClass("state-four"),
            setTimeout(function () {
                t.addClass("state-two")
            }, 1e3),
            setTimeout(function () {
                t.removeClass("state-two"),
                    t.addClass("state-three")
            }, 2e3),
            setTimeout(function () {
                t.removeClass("state-three"),
                    t.addClass("state-four")
            }, 3e3)
    }, 4e3)
}

function animalStatesShimmer(t) {
    setInterval(function () {
        setTimeout(function () {
            t.addClass("shimmer")
        }, 4e3),
            setTimeout(function () {
                t.removeClass("shimmer")
            }, 6e3)
    }, 5e3)
}

function turnOnAnimalNav() {
    prevAnimal = $("#animalchanger").attr("class"),
        $(".all-animals-off-btn .popout span").text(animalNames[newAnimal]),
        $("#animalchanger").removeClass(),
        $(".all-animals").removeClass("inactive"),
        $("body").removeClass("animal-animations-on"),
        $(".shadow").addClass("inactive"),
        $(".hover-detector").removeClass("inactive"),
        $(".animal-nav-content").removeClass("inactive"),
        $("body").addClass("earlyburst"),
        setTimeout(function () {
            $("body").removeClass("earlyburst")
        }, 500),
        setTimeout(function () {
            $(".hover-detector div:nth-child(" + (newAnimal + 1) + ")").addClass("active-animal")
        }, 700),
        setTimeout(function () {
            $(".hover-detector").addClass("active"),
                $(".animal-nav-content").addClass("active")
        }, 5)
}
function turnoffanimalnav() {
    "" != prevAnimal && $("#animalchanger").attr("class", prevAnimal),
        $(".all-animals").addClass("inactive"),
        $(".hover-detector").removeClass("active"),
        $(".hover-detector div").removeClass("active-animal"),
        $(".animal-nav-content").removeClass("active"),
        setTimeout(function () {
            $(".animal-nav-content").addClass("inactive")
        }, 500)
}

newAnimal = 0;
slideshowvar = 0;
finishedAnimals = 21;
$(document).ready(function () {
    sizeshards(),
        updateText("No Tales in the Sea"),
        $(".start-btn").on("click", function () {
            startexhibition(),
                prevAnimal = 2,
                SOUNDS.init(),
                setTimeout(function () {
                    nextorprevanimal()
                }, 350)
        }),
        $(".thobbing").on("click", function () {
            overlayContent = ".overlay .detail",
                overlayprocess(),
                turnoffslideshow()
        }),
        $(".all-animal").on("click", function () {
            turnOnAnimalNav(),
                turnoffslideshow()
        }),
        $(".overlay .close").on("click", function () {
            $(".overlay").toggleClass("active"),
                setTimeout(function () {
                    $(".overlay div").removeClass("active")
                }, 500)
        }),
        $(".aboutme-btn a").on("click", function () {
            overlayContent = ".overlay .author",
                overlayprocess()
        }),
        $(".next").on("click", function () {
            nextAnimalProcess()
        }),
        $(".prev").on("click", function () {
            previousAnimalProcess()
        }),
        $(".menu-nav li:nth-child(2) a").on("click", function () {
            $("body.slideshow-on").length ? turnoffslideshow() : startslideshow()
        }),
        $(".menu-nav li:nth-child(3)").on("click", function () {
            $(".menu-nav li:nth-child(3).muted").length ? (soundManager.unmute(),
                $(this).removeClass("muted"),
                $(".menu-nav li:nth-child(3) .popout").addClass("text-change"),
                setTimeout(function () {
                    $(".menu-nav li:nth-child(3) .popout").removeClass("text-change"),
                        $(".menu-nav li:nth-child(3) .btn__textR").text("Beautify with sound")
                    $(".menu-nav li:nth-child(3) a path").attr("d", musicSvg)
                }, 150)) : (soundManager.mute(),
                    $(this).addClass("muted"),
                    $(".menu-nav li:nth-child(3) .popout").addClass("text-change"),
                    setTimeout(function () {
                        $(".menu-nav li:nth-child(3) .popout").removeClass("text-change"),
                            $(".menu-nav li:nth-child(3) .btn__textR").text("Get that racket off")
                        $(".menu-nav li:nth-child(3) a path").attr("d", muteSvg)
                    }, 150)
            )
        }),
        $(".all-animals-off-btn").on("click", function () {
            turnoffanimalnav()
        }),
        $(".hover-detector div").on("mouseover", function () {
            $(".shard-wrap .shard").not(this).removeClass("active"),
                $(".level-one").addClass("shadow-active");
            var t = $(this).index() + 1;
            $(".shard-wrap:nth-child(" + t + ") .shard").addClass("active"),
                $(".animal-nav-content ul li:nth-child(" + t + ")").addClass("active"),
                $(".animal-nav-content .title-content").addClass("inactive");
            var a = $(this).attr("data-animalClick");
            $(".animal-nav-content").attr("animal", a),
                $(".animal-nav-content div").each(function () {
                    $(this).hasClass(a) ? $(this).addClass("active") : $(this).removeClass("active")
                })
        }),
        $(".hover-detector").on("mouseout", function () {
            $(".animal-nav-content ul li").removeClass("active"),
                $(".animal-nav-content .title-content").removeClass("inactive")

        }),
        $(".hover-detector div").on("click", function () {
            $(".hover-detector div").removeClass("active-animal"),
                prevAnimal = "",
                newAnimal = animalList.indexOf($(this).attr("data-animalClick")),
                nextorprevanimal(),
                $(".animal-nav-content div").each(function () {
                    $(this).removeClass("active")
                }),
                turnoffanimalnav()
        }),
        $(".animal-nav-content ul li").on("click", function () {
            newAnimal = $(this).index(),
                turnoffanimalnav(),
                nextorprevanimal()
        }),
        $("body").each(function () {
            animalStates($(this))
        }),
        $("body").each(function () {
            animalStatesShimmer($(this))
        }),
        sizeshards()
})
$(window).resize(function () {
    sizeshards()
}),
    document.addEventListener("visibilitychange", function () {
        document.hidden ? soundManager.setVolume("ambientloop", 10) : soundManager.setVolume("ambientloop", 25)
    }),
    SOUNDS = {
        btn: $("<a>").attr("href", "#").attr("id", "toggle-mute").addClass("toggle-mute").text(""),
        looping: null,
        init: function () {
            soundManager.setup({
                url: "sound/",
                debugMode: false,
                waitForWindowLoad: false,
                useHighPerformance: true,
                useHTML5Audio: true,
                flashVersion: 9,
                multiShot: true,
                onready: SOUNDS.onSoundManagerReady,
                ontimeout: function () { }
            })
        },
        onSoundManagerReady: function () {
            soundManager.createSound({
                id: "ambientloop",
                url: "sound/relaxing.mp3",
                autoLoad: !0,
                multiShot: !0,
                onload: function () {
                    SOUNDS.playLoop("ambientloop", 95000),
                        this.setVolume(25)
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
        mute: function (t) {
            soundManager.mute(t),
                SOUNDS.btn.addClass("muted")
        },
        unmute: function (t) {
            soundManager.unmute(t),
                SOUNDS.btn.removeClass("muted")
        }
    };