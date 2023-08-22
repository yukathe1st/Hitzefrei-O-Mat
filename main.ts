input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    play_sound = 0
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    blink_active = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    blink_active = 0
})
let play_sound = 0
let blink_active = 0
blink_active = 1
let blink = 0
play_sound = 2
basic.forever(function () {
    if (input.temperature() <= 24) {
        blink = 0
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(5000)
        basic.clearScreen()
        basic.showNumber(input.temperature())
    } else if (input.temperature() == 25) {
        blink = 0
        basic.setLedColor(0x0000ff)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(5000)
        basic.clearScreen()
        basic.showNumber(input.temperature())
    } else if (input.temperature() == 26) {
        blink = 0
        basic.setLedColor(0x0000ff)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(5000)
        basic.clearScreen()
        basic.showNumber(input.temperature())
    } else if (input.temperature() >= 27) {
        if (blink_active == 1) {
            blink = 1
            play_sound += 1
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(5000)
            basic.clearScreen()
            basic.showNumber(input.temperature())
            basic.clearScreen()
            basic.pause(1000)
            basic.showString("schulministerium.nrw/hitzefrei")
        } else {
            basic.setLedColor(0x00ff00)
            play_sound += 1
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(5000)
            basic.clearScreen()
            basic.showNumber(input.temperature())
            basic.clearScreen()
            basic.pause(1000)
            basic.showString("schulministerium.nrw/hitzefrei")
        }
    }
})
basic.forever(function () {
    if ((blink && blink_active) == 1) {
        basic.setLedColor(0x00ff00)
        basic.pause(200)
        basic.turnRgbLedOff()
        basic.pause(200)
    }
})
basic.forever(function () {
    if (play_sound == 1) {
        music.playTone(587, music.beat(BeatFraction.Whole))
        play_sound += 1
    }
})
