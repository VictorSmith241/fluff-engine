import { Feature } from "../entities/Feature.js";
import { Script } from "../features/Script.js";
import { Input } from "../input/Input.js";

// The example of a player script

export class ScriptLayout extends Script {

    onReady() {
        //Called when the script is added

        this.transform = Feature.get('transform', this.itemId);

        console.log(this.item); //For debugging

        Input.onKeyDown('KeyZ', () => {
            console.log('Z pressed');
        });
        Input.onKeyUp('KeyX', () => {
            console.log('X released');
        });
    }

    loop(deltaTime) {
        //Called every frame
        
        if (Input.isKeyPressed('Space')) {
            console.log('Space is pressed');
        }

        if (Input.isKeyPressed('KeyA')) {
            this.transform.position.x -= 1;
        } else if (Input.isKeyPressed('KeyD')) {
            this.transform.position.x += 1;
        }

        if (Input.isKeyPressed('KeyW')) {
            this.transform.position.y -= 1;
        } else if (Input.isKeyPressed('KeyS')) {
            this.transform.position.y += 1;
        }
    }
}