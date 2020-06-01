sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.startCountdown(5)
    music.baDing.play()
    fuel.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.wawawawaa.play()
    info.changeLifeBy(-1)
    oil_spill.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
info.onLifeZero(function () {
    game.over(false)
})
let oil_spill: Sprite = null
let fuel: Sprite = null
scene.setBackgroundColor(7)
let car = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(car, 200, 200)
car.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(0)
fuel = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f . . . . . . . . . . . 
. . . . f f . . . . . . . . . . 
. . . . . f . 2 2 2 2 . . . . . 
. . . . . f 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
oil_spill = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f f f f f f f . . . . . . 
. . . f f f f f f f f . . . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . f . f f . . . . . 
. . . . . . . . . f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
