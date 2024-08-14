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

function nextAnimalProcess() {
    prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
        newAnimal = prevAnimal + 1,
        2 == newAnimal && (newAnimal = 0),
        nextorprevanimal()
}

function previousAnimalProcess() {
    prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
        newAnimal = prevAnimal - 1,
        -1 == newAnimal && (newAnimal = 1),
        nextorprevanimal()
}

function sizeshards() {
    $(".stg-exhibi").each(function () {
        var t = .99 * $(window).width(),
            a = .7 * t,
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

function nextorprevanimal() {
    $("#animalchanger").attr("class", animalList[newAnimal]),
        $(".next .popout").attr("popanimal", animalList[newAnimal]),
        $(".prev .popout").attr("popanimal", animalList[newAnimal]),
        $(".popout").addClass("text-change"),
        $(".animalinfo").addClass("text-change"),

        setTimeout(function () {
            $(".animalinfo h2").text(animalNames[newAnimal]),
                $(".animalinfo li:nth-child(1) span").text(newAnimal + 1),
                $(".popout").removeClass("text-change"),
                $(".animalinfo").removeClass("text-change"),

                $(".overlay .detail h2").html(animalScientificName[newAnimal]),
                $(".overlay .detail p:nth-child(2)").html(animalDetail1[newAnimal]),
                $(".overlay .detail p:nth-child(3)").html(animalDetail2[newAnimal]),
                $(".overlay .detail p:nth-child(4)").html(animalDetail3[newAnimal]),

                0 == newAnimal ? ($(".prev .popout").text(animalNames[1]),
                    $(".next .popout").text(animalNames[1])) : 1 == newAnimal ? ($(".prev .popout").text(animalNames[0]),
                        $(".next .popout").text(animalNames[0])) : ($(".prev .popout").text(animalNames[newAnimal - 1]),
                            $(".next .popout").text(animalNames[newAnimal + 1]))
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
    setTimeout(function() {
        $(".menu-nav li:nth-child(2) .popout").removeClass("text-change"),
        $(".menu-nav li:nth-child(2) .popout").text("stop")
    }, 150),
    slideshowvar += 1,
    slideshowquery()
}

function turnoffslideshow() {
    slideshowvar += 1,
    $(".menu-nav li:nth-child(2) a").removeClass("stop"),
    $(".menu-nav li:nth-child(2) .popout").addClass("text-change"),
    setTimeout(function() {
        $(".menu-nav li:nth-child(2) .popout").removeClass("text-change"),
        $(".menu-nav li:nth-child(2) .popout").text("Cycle Through")
    }, 150),
    $(".slideshow-on").removeClass("slideshow-on")
}

function slideshowquery() {
    randomAnimal(),
    slideshowvar += 1;
    var t = slideshowvar;
    setTimeout(function() {
        t == slideshowvar && slideshowquery()
    }, 2900)
}

function randomAnimal() {
    newAnimal = Math.floor(Math.random() * finishedAnimals),
    console.log(newAnimal),
    nextorprevanimal()
}

newAnimal = 0;
slideshowvar = 0;
finishedAnimals = 2;
$(document).ready(function () {
    sizeshards()
    updateText("NO TALES IN the sea NO SEE")
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
        $(".menu-nav li:nth-child(2) a").on("click", function() {
            $("body.slideshow-on").length ? turnoffslideshow() : startslideshow()
        }),
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
        }),
        sizeshards()
})
$(window).resize(function () {
    sizeshards()
})