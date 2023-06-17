namespace SpriteKind {
    export const Level = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite2, location2) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite3, location3) {
    info.changeScoreBy(1)
    tiles.setTileAt(location3, assets.tile`transparency16`)
})
info.setScore(0)
let mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 40, 0)
forever(function () {
    mySprite.vy += 5
    if (controller.up.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy = -140
        }
        if (mySprite.isHittingTile(CollisionDirection.Left)) {
            mySprite.ay = -80
        }
        if (mySprite.isHittingTile(CollisionDirection.Right)) {
            mySprite.vy = -80
        }
    }
})
