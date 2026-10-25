import { clearCanvas, drawShape, initCanvas } from "./draw.js";
import { Feature } from "./entities/Feature.js";
import { Item } from "./entities/Item.js";
import { Input } from "./input/Input.js";
import { initWorld } from "./world/world.js";

let lastTime = performance.now();

function init() {
    initCanvas();
    initWorld();
    Input.init();
    requestAnimationFrame(mainLoop);
}

function mainLoop(currentTime) {
    const deltaTime = (currentTime - lastTime) * 0.001;
    lastTime = currentTime;

    const items = Item.instances;
    const features = Feature.storage;
    const scripts = features.script.denseValues;

    for (let i = 0; i < scripts.length; i++) {
        scripts[i].loop(deltaTime);
    }

    clearCanvas();

    for (let i = 0; i < items.denseValues.length; i++) {
        if (features.shape && features.transform) {
            drawShape(i);
        }
    }

    requestAnimationFrame(mainLoop);
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});