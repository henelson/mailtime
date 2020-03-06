namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    projectile.say("mail time")
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile.say("mail time")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile.say("mail time")
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    projectile.say("mail time")
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    projectile.say("mail time")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile.say("mail time")
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    projectile.say("mail time")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile.say("mail time")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false, effects.blizzard)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
f 2 2 1 1 1 1 1 1 1 1 1 1 2 2 f 
f 2 2 2 2 1 1 1 1 1 1 2 2 2 2 f 
f 2 2 2 2 1 1 1 1 1 1 2 2 2 2 f 
f 2 2 b b 2 2 1 1 2 2 b b 2 2 f 
f 2 2 1 b 2 2 2 2 2 2 b b 2 2 f 
f 2 2 1 1 b b 2 2 b b b b 2 2 f 
f 2 2 1 1 b b 1 1 b b b b 2 2 f 
f 2 2 1 1 b 1 1 1 1 b b b 2 2 f 
f 2 2 1 b 1 1 1 1 1 1 b b 2 2 f 
f 2 2 b 1 1 1 1 1 1 1 1 b 2 2 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
forever(function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
f 1 f 1 1 1 1 1 1 1 1 1 1 f 1 f 
f 1 1 f 1 1 1 1 1 1 1 1 f 1 1 f 
f 1 1 1 f 1 1 1 1 1 1 f 1 1 1 f 
f 1 1 1 1 f 1 1 1 1 f 1 1 1 1 f 
f 1 1 1 1 f f 1 1 f f 1 1 1 1 f 
f 1 1 1 f 1 1 f f 1 1 f 1 1 1 f 
f 1 1 f 1 1 1 1 1 1 1 1 f 1 1 f 
f 1 f 1 1 1 1 1 1 1 1 1 1 f 1 f 
f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100))
    pause(200)
})
