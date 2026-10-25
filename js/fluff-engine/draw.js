import { Feature } from "./entities/Feature.js";

let ctx = null;
let canvasWidth = 0;
let canvasHeight = 0;

export function initCanvas() {
    const canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
}

export function drawShape(id) {
    const shape = Feature.storage.shape.get(id);
    const verts = shape.vertices;

    if (verts.length < 3) return;

    const transform = Feature.storage.transform.get(id);

    ctx.beginPath();
    ctx.moveTo(verts[0] + transform.position.x, verts[1] + transform.position.y);

    for (let x = 2; x < verts.length - 1; x += 2) {
        const y = x + 1;

        ctx.lineTo(verts[x] + transform.position.x, verts[y] + transform.position.y);
    }

    ctx.closePath();

    ctx.fillStyle = shape.fillColor;
    ctx.fill();
}

export function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}