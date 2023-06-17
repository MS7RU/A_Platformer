@namespace
class SpriteKind:
    Level = SpriteKind.create()

def on_overlap_tile(sprite, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    info.change_score_by(1)
    tiles.set_tile_at(location3, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile3)

info.set_score(0)
mySprite = sprites.create(assets.image("""
    Player
"""), SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(mySprite)
controller.move_sprite(mySprite, 40, 0)

def on_forever():
    mySprite.vy += 5
    if controller.up.is_pressed():
        if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
            mySprite.vy = -140
forever(on_forever)

