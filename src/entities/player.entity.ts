import { Entity } from 'melonjs/dist/melonjs.module';

export class PlayerEntity extends Entity {
    constructor(x: number, y: number, settings: any) {
        super(x, y, settings);
    }

    update(deltaTime: number) {
        return super.update(deltaTime);
    }

    onCollision(): boolean {
        return true;
    }
}
