// Array.randPick()
Array.prototype.randPick = function(count = 1, byRef = false) { const arr = byRef ? this : [...this]; return ((count = Math.max(Math.min(arr.length, count), 0)), Array(count).fill(this).map(x => arr.splice(Math.floor(Math.random() * arr.length),1)[0])) };

const resources = [
	Array(1).fill('desert'), // used fill() for desert as well with 1 length for easy customization
	Array(4).fill('wool'),
	Array(3).fill('brick'),
	Array(4).fill('grain'),
	Array(4).fill('lumber'),
	Array(3).fill('ore')
].flat().map(terrain => `https://assets.codepen.io/1580009/settlers-terrain-${terrain}.png`);
resources.init = [...resources];
const getResource = () => (resources.length || resources.push(...resources.init), resources.randPick(1,1));

const hexes = Array.from(document.querySelectorAll('.hex'));

console.log('resources', resources);

randomFillBoard = () => {
	for (hex of hexes) {
		hex.style.backgroundImage = '';
		hex.style.backgroundImage = `url(${getResource()})`;
	}
};
randomFillBoard();