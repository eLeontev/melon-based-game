import { dataNames } from './reception.models';

export type EntitySettings = {
    width: number;
    height: number;
    image?: dataNames | HTMLImageElement;
};
