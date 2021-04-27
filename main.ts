namespace SpriteKind {
    export const Finish = SpriteKind.create()
    export const Start = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function (sprite, otherSprite) {
    game.splash("Congratulations! ", "You beat level 1 ")
    game.splash("Now your going to level 2")
    game.over(true)
})
function Level1 () {
    tiles.setTilemap(tilemap`level2`)
    start = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 f f 1 f 1 f 1 f 1 f 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 f f 1 f 1 f 1 f 1 f 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 f f 1 f 1 f 1 f 1 f 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        `, SpriteKind.Start)
    start.setPosition(6, 295)
    finish = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 f f 1 f 1 f 1 f 1 f 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 f f 1 f 1 f 1 f 1 f 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 f f 1 f 1 f 1 f 1 f 
        . . . . . 1 f 1 f 1 f 1 f 1 f 1 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        `, SpriteKind.Finish)
    finish.setPosition(310, 7)
    mySprite.setPosition(18, 285)
}
let finish: Sprite = null
let start: Sprite = null
let mySprite: Sprite = null
game.splash("Find your way up and get to the other flag.")
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
Level1()
forever(function () {
    mySprite.ay = 70
})
