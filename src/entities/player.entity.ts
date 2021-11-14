import { Entity } from 'melonjs/dist/melonjs.module';

export class PlayerEntity extends Entity {
    constructor(x: number, y: number, settings: any) {
        super(x, y, settings);
    }

    update(deltaTime: number) {
        super.update(deltaTime);

        return true;
    }

    onCollision(): boolean {
        return true;
    }
}
