export enum dataTypes {
    binary = 'binary',
    image = 'image',
    map = 'tmx',
}
export type DataSettings = {
    name: dataNames;
    type: dataTypes;
    src: string;
};

export type DataManifest = Array<DataSettings>;

export enum dataNames {
    font = 'font',
    player = 'player',
    enemy = 'enemy',
    mapBorderTile = 'mapBorderTile',
}
