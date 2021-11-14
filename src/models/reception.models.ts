export enum dataTypes {
    binary = 'binary',
    image = 'image',
    map = 'tmx',
    tile = 'tsx',
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
    mapBorderImage = 'mapBorderImage',
}
