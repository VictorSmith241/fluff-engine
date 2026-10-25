export class Input {
    static pressed = {};

    static desirous = {
        keyDown: {},
        keyUp: {}
    };

    static init() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    static handleKeyDown(event) {
        const code = event.code;

        if (this.pressed[code]) return;

        this.pressed[code] = true;

        if (this.desirous.keyDown[code]) {
            this.desirous.keyDown[code].forEach(callback => callback());
        }
    }

    static handleKeyUp(event) {
        const code = event.code;

        this.pressed[code] = false;

        if (this.desirous.keyUp[code]) {
            this.desirous.keyUp[code].forEach(callback => callback());
        }
    }

    static isKeyPressed(keyCode) {
        return !!this.pressed[keyCode];
    }

    static onKeyDown(keyCode, callback) {
        if (!this.desirous.keyDown[keyCode]) {
            this.desirous.keyDown[keyCode] = [];
        }
        this.desirous.keyDown[keyCode].push(callback);
    }

    static onKeyUp(keyCode, callback) {
        if (!this.desirous.keyUp[keyCode]) {
            this.desirous.keyUp[keyCode] = [];
        }
        this.desirous.keyUp[keyCode].push(callback);
    }
}