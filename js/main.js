

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
        $("body").removeClass("animal-animations-on"),
        prevAnimal = animalList.indexOf($("#animalchanger").attr("class")),
        newAnimal = prevAnimal - 1,
        -1 == newAnimal && (newAnimal = 1),
        nextorprevanimal()
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