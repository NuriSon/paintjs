const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 450;
canvas.height = 450;

ctx.strokeStyle = "salmon";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	if (!painting) {
		//creating path in x,y
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		//creating line in x,y
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	//canvas.addEventListener("mouseleave", stopPainting);
}
