let rainval = 0
basic.forever(function () {
    // to detect the presence of rain water ig
    rainval = pins.analogReadPin(AnalogPin.P0)
    if (rainval < 200) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        // if the presence of water is less, then close the lid of water tank
        servos.P1.setAngle(90)
    } else if (rainval > 200) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        // if it does raining, then open the lid of water tank
        servos.P1.setAngle(360)
    }
})
