import { BitmapText, ColorLayer, game, Stage } from 'melonjs/dist/melonjs.module';
import { dataNames } from '../models/reception.models';

export class PlayStage extends Stage {
    onResetEvent(): void {
        game.world.addChild(new ColorLayer('background', '#202020', 0));

        game.world.addChild(
            new BitmapText(game.viewport.width / 2, game.viewport.height / 2, {
                font: dataNames.font,
                size: 4.0,
                textBaseline: 'middle',
                textAlign: 'center',
                text: 'Pacman',
            })
        );
    }
}
