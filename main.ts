namespace SpriteKind {
    export const Finish = SpriteKind.create()
    export const Start = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Bugger = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -70
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    level3()
    game.showLongText("You are now going to level three", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function (sprite, otherSprite) {
    level2()
    game.showLongText("You are now going to level two", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -70
})
function level3 () {
    start.destroy(effects.spray, 100)
    finish.destroy(effects.spray, 100)
    tiles.setTilemap(tilemap`level4`)
    blueBall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bugger)
    blueBall.setPosition(250, 5)
    mySprite.setPosition(10, 220)
}
function Level1 () {
    tiles.setTilemap(tilemap`level2`)
    start = sprites.create(img`
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
        . d . d . d . d . d . d . d . d 
        d . d . d . d . d . d . d . d . 
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
    finish.setPosition(300, 3)
    mySprite.setPosition(18, 285)
}
function level2 () {
    start.destroy(effects.spray, 100)
    finish.destroy(effects.spray, 100)
    tiles.setTilemap(tilemap`level3`)
    OrangeBall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    OrangeBall.setPosition(450, 17)
    mySprite.setPosition(13, 220)
    game.showLongText("There is lava on the next two level's. Don't fall in.", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bugger, function (sprite, otherSprite) {
    game.over(true)
    game.showLongText("Congratulations criminal! You escaped prison.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    mySprite.destroy(effects.fire, 300)
    game.over(false, effects.melt)
    pause(1000)
    Level1()
})
let OrangeBall: Sprite = null
let blueBall: Sprite = null
let finish: Sprite = null
let start: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f 1 1 1 1 1 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f d 8 d 8 d f . . . . 
    . . . . . f d d d d d f . . . . 
    . . . . . f d f f f d f . . . . 
    . . . f f f f f f f f f . . . . 
    . . f f f f 1 1 1 1 f . . . . . 
    . f f 1 1 f f f f f f f f . . . 
    . f f f f 1 1 1 1 1 1 1 f . . . 
    . f 1 f f f f f f f f 1 f . . . 
    . f f f f 1 1 1 1 1 f f f . . . 
    . . . . f 1 f f f 1 f . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
Level1()
mySprite.ay = 70
