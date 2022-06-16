OLED.init(64, 128)
basic.forever(function () {
    if (tinkercademy.MoistureSensor(AnalogPin.P0) < 50) {
        OLED.writeStringNewLine("Moisture level is")
        OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P1))
        OLED.writeStringNewLine("Water ur plant")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        OLED.writeStringNewLine("Your plant is in good condition")
    }
})
