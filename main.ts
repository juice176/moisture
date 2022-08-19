OLED.init(128, 128)
basic.forever(function () {
    if (tinkercademy.MoistureSensor(AnalogPin.P0) < 50) {
        OLED.writeStringNewLine("Moisture level is")
        OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P0))
        OLED.writeStringNewLine("Water ur plant")
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        basic.showIcon(IconNames.Asleep)
    } else {
        OLED.writeStringNewLine("Your plant is in good condition")
        basic.showIcon(IconNames.Heart)
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
