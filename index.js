import { Keypad } from '../pkg/bathroom_security_aocd2';
import { memory } from '../pkg/bathroom_security_aocd2_bg';
import * as wasm from "hello-wasm-pack";

const CELL_SIZE = 5;
const height=100;
const width=120;

const pre = document.getElementById("keycode");
const keycode = Keypad.new();
keycode.enter_keycode(2);
const keys = keycode.render();

const canvas = document.getElementById("keycode_canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

const ctx = canvas.getContext('2d');

var gradient1 = ctx.createLinearGradient(0, 0, CELL_SIZE*height, CELL_SIZE*width);
gradient1.addColorStop("0"," LAVENDER");
gradient1.addColorStop("0.5", "THISTLE");
gradient1.addColorStop("1.0", "POWDERBLUE");
ctx.fillStyle = gradient1;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.shadowOffsetY = 10
ctx.shadowBlur = 10;
ctx.font = "7rem helvetica";
var gradient2 = ctx.createLinearGradient(0, 0, CELL_SIZE*height, CELL_SIZE*width);
gradient2.addColorStop("0.25"," DEEPSKYBLUE");
gradient2.addColorStop("0.35", "DODGERBLUE");
gradient2.addColorStop("1.0", "REBECCAPURPLE");
ctx.fillStyle = gradient2;


ctx.fillText(keys, canvas.width/4, canvas.height/2);
