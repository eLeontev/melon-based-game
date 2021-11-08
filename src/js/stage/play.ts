import { Stage, ColorLayer, game, BitmapText } from 'melonjs/dist/melonjs.module';

// Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
export class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent(): void {
        // add a gray background to the default Stage
        game.world.addChild(new ColorLayer('background', '#202020', 0));

        // add a font text display object
        game.world.addChild(
            new BitmapText(game.viewport.width / 2, game.viewport.height / 2, {
                font: 'PressStart2P',
                size: 4.0,
                textBaseline: 'middle',
                textAlign: 'center',
                text: 'Pacman',
            })
        );
    }
}
