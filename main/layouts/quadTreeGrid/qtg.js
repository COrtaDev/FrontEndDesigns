import Quadtree from "https://cdn.skypack.dev/@timohausmann/quadtree-js@1.2.4";
import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";
import { random } from "https://cdn.skypack.dev/@georgedoescode/generative-utils";

const width = 1024;
const height = 1024;

const svg = SVG().viewbox(0, 0, width, height).addTo("body");

const colors = ["#7257fa", "#ffd53d", "#1D1934", "#F25C54"];

function generate() {
  svg.clear();

  const myTree = new Quadtree(
    {
      x: 0,
      y: 0,
      width: width,
      height: height
    },
    10,
    4
  );

  let focus;
  const choice = Math.random();

  if (choice > 0 && choice < 0.1) {
    focus = [width / 2, height / 2];
  } else if (choice > 0.1 && choice < 0.4) {
    focus = [0, 0];
  } else if (choice > 0.4 && choice < 0.6) {
    focus = [width, 0];
  } else if (choice > 0.6 && choice < 0.8) {
    focus = [width, height];
  } else {
    focus = [0, height];
  }

  for (let i = 0; i < 100; i++) {
    let x = getRandomBias(0, width, focus[0], 1);
    let y = getRandomBias(0, height, focus[1], 1);

    myTree.insert({
      x,
      y,
      width: 1,
      height: 1
    });
  }

  const cells = [];
  function renderQuadTree(node) {
    const bounds = node.bounds;
    const threshold = random(0.25, 0.75);

    if (node.nodes.length === 0) {
      const padding = 16;

      if (Math.random() > threshold) {
        if (Math.random() > 0.5) {
          svg
            .rect(bounds.width - padding * 2, bounds.height - padding * 2)
            .x(bounds.x + padding)
            .y(bounds.y + padding)
            .fill(random(colors))
            .scale(1)
            .rx(12);
        } else {
          svg
            .circle(Math.min(bounds.width, bounds.height) - padding * 2)
            .x(bounds.x + padding)
            .y(bounds.y + padding)
            .fill(random(colors))
            .scale(1);
        }
      }
    } else {
      for (var i = 0; i < node.nodes.length; i = i + 1) {
        renderQuadTree(node.nodes[i], node);
      }
    }
  }

  renderQuadTree(myTree);
}

function getRandomBias(min, max, bias, influence = 0.5) {
  const random = Math.random() * (max - min) + min;
  const mix = Math.random() * influence;

  return random * (1 - mix) + bias * mix;
}

setInterval(() => {
  generate();
}, 1000);
