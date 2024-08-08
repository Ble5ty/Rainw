let dis = 0
basic.forever(function () {
    dis = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(dis)
    if (20 < dis) {
        motionbit.setServoPosition(MotionBitServoChannel.S1, 90)
    } else if (20 > dis) {
        motionbit.setServoPosition(MotionBitServoChannel.S1, 360)
    }
})
