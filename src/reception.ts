import { pool, state } from 'melonjs/dist/melonjs.module';

import { PlayStage } from './stages/play.stage';

import { PlayerEntity } from './entities/player.entity';

import { DataManifest, dataNames, dataTypes } from './models/reception.models';

export const registerStages = () => {
    state.set(state.PLAY, new PlayStage());
};

export const registerEntities = () => {
    pool.register('player', PlayerEntity);
};

export const dataManifest: DataManifest = [
    {
        name: dataNames.font,
        type: dataTypes.binary,
        src: './data/font/font.fnt',
    },
    {
        name: dataNames.font,
        type: dataTypes.image,
        src: './data/font/font.png',
    },
    {
        name: dataNames.player,
        type: dataTypes.image,
        src: '../data/img/pacman64.png',
    },
    {
        name: dataNames.enemy,
        type: dataTypes.image,
        src: '../data/img/ghost64.png',
    },
    {
        name: dataNames.mapBorderTile,
        type: dataTypes.image,
        src: '../data/img/map-border.tile.png',
    },
];
