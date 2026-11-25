// micro:bit V2 전용: A 집기 / B 개봉 / A+B 중지 / 로고 새 게임
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    serial.writeLine("P," + input.rotation(Rotation.Roll) + "," + input.rotation(Rotation.Pitch) + "," + (input.buttonIsPressed(Button.A) ? 1 : 0) + "," + (input.buttonIsPressed(Button.B) ? 1 : 0) + "," + (input.logoIsPressed() ? 1 : 0))
    basic.pause(80)
})