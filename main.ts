input.onButtonPressed(Button.A, function () {
    museum += -1
})
input.onButtonPressed(Button.B, function () {
    museum += 1
})
let museum = 0
basic.forever(function () {
    basic.showNumber(museum)
})
