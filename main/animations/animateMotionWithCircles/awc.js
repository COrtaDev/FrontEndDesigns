const circles = 50;
let svg = "";
for (let i = 0; i < circles; i++) {
	const data = convertSvgCircleToPath(50, 50, i * 0.95, Math.random() * 360);
	let _circles = "";
	for (let c = 0; c < i / 2; c++) {
		_circles += `<circle r=".5" fill="hsla(${parseInt(
			Math.random() * 360
		)},90%,70%,.8)">
	  <animateMotion dur="${
				Math.random() * 12 + 4
			}s" repeatCount="indefinite" path="${data}" />
	</circle>`;
	}
	svg += `
	<path d="${data}" stroke-width=".05" fill="none" stroke="orange" />
	${_circles}
	`;
}
const svgElement = document.querySelector("svg");
svgElement.innerHTML = svg;

function convertSvgCircleToPath(cx, cy, r, deg) {
	const theta = (deg * Math.PI) / 180;
	const dx = r * Math.cos(theta);
	const dy = -r * Math.sin(theta);
	return `M ${cx} ${cy} m ${dx},${dy}  a ${r},${r} 0 1,0 ${-2 * dx},${
		-2 * dy
	}  a ${r},${r} 0 1,0 ${2 * dx},${2 * dy}`;
}
