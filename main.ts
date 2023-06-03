controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    audience.setImage(assets.image`clap2`)
    star = sprites.createProjectileFromSprite(simplified.chooseRandomImage(assets.image`star`, assets.image`rose`, assets.image`Heart`, assets.image`Orange Rose`, assets.image`Brownish Flower`), audience, randint(-80, 80), randint(-50, -100))
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    audience.setImage(assets.image`clap1`)
})
let star: Sprite = null
let audience: Sprite = null
scene.setBackgroundImage(assets.image`stage`)
let talent = sprites.create(assets.image`towering turtles`, SpriteKind.Player)
talent.bottom = 115
audience = sprites.create(assets.image`clap1`, SpriteKind.Player)
audience.bottom = 120
game.splash("Press the (A) Button to start playing!")
info.startCountdown(10)
music.play(music.createSong(assets.song`Talent Show Theme Song`), music.PlaybackMode.InBackground)
