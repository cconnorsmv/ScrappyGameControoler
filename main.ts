input.onPinPressed(TouchPin.P2, function () {
    score += -1
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showNumber(score)
})
input.onPinPressed(TouchPin.P1, function () {
    score += 1
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showNumber(score)
})
let score = 0
score = 0
basic.forever(function () {
    if (score < 0) {
        game.gameOver()
    }
    if (score == 10) {
        basic.showString("WIN!")
    }
})
