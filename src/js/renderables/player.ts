import { Entity, Renderable, ResponseObject } from 'melonjs/dist/melonjs.module';

// Note : Jay Inheritance to be replaced with standard ES6 inheritance in melonjs 10+
export class PlayerEntity extends Entity {
    /**
     * constructor
     */
    constructor(x: number, y: number, settings: any) {
        // call the parent constructor
        super(x, y, settings);
    }

    /**
     * update the entity
     */
    update(dt: any) {
        // change body force based on inputs
        //....
        // call the parent method
        return super.update(dt);
    }

    /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision(response: ResponseObject, other: Renderable): boolean {
        // Make all other objects solid
        return true;
    }
}
