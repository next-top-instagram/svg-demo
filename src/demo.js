const playground = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0, 1, 0, 1],

  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const blockInfo = [
  // 1
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  //   2
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],

  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],

  //   3
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 0],

  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0],

  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],

  //   4
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 0, 0, 0],

  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 0],

  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  //   5
  [0, 0, 0, 0],
  [0, 0, 1, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 0, 1, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0],

  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],

  //   6
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 1, 1],
  [0, 0, 0, 0],

  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 0, 0, 0],

  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],

  //   7
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
  [0, 0, 0, 0],

  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],

  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
  [0, 0, 0, 0],

  [0, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
];

let currentShape = 0;
let rotate = 0;
let x = 2;
let y = 0;

let timeLineRecoder = [];

function tetrisRenderer() {
  const playgroundCopy = [];
  playground.forEach((row, _y) => {
    const mappedRow = row.map((col, _x) => {
      if (
        x <= _x &&
        _x < x + 4 &&
        y <= _y &&
        _y < y + 4 &&
        blockInfo[currentShape * 16 + rotate * 4 + _y - y][_x - x]
      ) {
        return "▤";
      }
      switch (col) {
        case 0:
          return "□";
        case 1:
          return "■";
      }
    });
    playgroundCopy.push(mappedRow);
    console.log(mappedRow.join(" "));
  });
  console.log();
  timeLineRecoder.push(playgroundCopy);
}

function turnBlock() {
  rotate = (rotate + 1) % 4;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function collisionChecker(x, y, shape, rotate) {
  for (let i = 0; i < 4; i++) {
    for (let t = 0; t < 4; t++) {
      if (
        y + i < playground.length &&
        y + i >= 0 &&
        x + t < playground[0].length &&
        x + t >= 0 &&
        playground[y + i][x + t] !== 0 &&
        blockInfo[i + shape * 16 + rotate * 4][t] !== 0
      ) {
        return true;
      }
    }
  }
  return false;
}

function blockAppend(x, y, shape, rotate) {
  for (let i = 0; i < 4; i++) {
    for (let t = 0; t < 4; t++) {
      if (
        y + i >= 0 &&
        y + i < playground.length &&
        x + t >= 0 &&
        x + t < playground[0].length &&
        blockInfo[shape * 16 + rotate * 4 + i][t]
      ) {
        playground[y + i][x + t] = blockInfo[shape * 16 + rotate * 4 + i][t];
      }
    }
  }
}

function removeLine(y) {
  playground[y] = playground[y].map(() => 0);
}

function lineShifter(y) {
  for (let i = y; i > 0; i--) {
    for (let t = 0; t < playground[i].length; t++) {
      playground[i][t] = playground[i - 1][t];
      playground[i - 1][t] = 0;
    }
  }
}

// tetrisRenderer();

// console.log("#1", collisionChecker(0, 0, 0, 0));
// console.log("#2", collisionChecker(0, 8, 0, 0));
// console.log("#3", collisionChecker(0, 9, 0, 0));
// console.log("#4", collisionChecker(0, 9, 6, 3));
// console.log("#5", collisionChecker(-1, 9, 6, 3));

// x = -1;
// y = 9;
// currentShape = 6;
// rotate = 3;
// tetrisRenderer();

// console.log("#6", collisionChecker(3, 8, 6, 3));
// console.log("#7", collisionChecker(3, 9, 6, 3));

// x = 3;
// y = 8;
// currentShape = 6;
// rotate = 3;
// tetrisRenderer();

// blockAppend(x, y, currentShape, rotate);
// console.log("\n");
// x = 2;
// y = 0;
// currentShape = 0;
// rotate = 0;
// tetrisRenderer();

// console.log("\n");
// removeLine(14);
// tetrisRenderer();

// console.log("\n");
// lineShifter(14);
// tetrisRenderer();

tetrisRenderer();
y = 1;
tetrisRenderer();
y = 2;
tetrisRenderer();
y = 3;
tetrisRenderer();
y = 4;
tetrisRenderer();
y = 5;
tetrisRenderer();

x = 1;
y = 6;
tetrisRenderer();

y = 7;
tetrisRenderer();
y = 8;
tetrisRenderer();
y = 9;
tetrisRenderer();
y = 10;
tetrisRenderer();
y = 11;
tetrisRenderer();
y = 12;
tetrisRenderer();

blockAppend(x, y, currentShape, rotate);
x = 2;
y = 0;
currentShape = 6;
rotate = 3;
tetrisRenderer();

removeLine(14);
tetrisRenderer();

lineShifter(14);
tetrisRenderer();

const head = `
<svg width="90" height="180" xmlns="http://www.w3.org/2000/svg">
      <style>
`;

let footer = "";

playground.forEach((row, _y) => {
  row.forEach((col, _x) => {
    footer += `
            .rec-${_y * row.length + _x} {
                animation: none 16000ms step-start infinite;
                animation-name: rec-${_y * row.length + _x};
            }
        `;
  });
});

playground.forEach((row, _y) => {
  row.forEach((col, _x) => {
    let keyFrame = `
            @keyframes rec-${_y * row.length + _x} {
        `;
    for (let step = 0; step < timeLineRecoder.length; step++) {
      const block = timeLineRecoder[step][_y][_x];
      keyFrame += `
                ${Math.floor((step / timeLineRecoder.length) * 100)}% {
                    fill: ${
                      block === "□"
                        ? "#F4F4F4"
                        : block === "■"
                        ? "#929191"
                        : "#EA6F3A"
                    }
                }
            `;
    }
    keyFrame += `
            }
        `;
    footer += keyFrame;
  });
});

footer += `
      </style>\n`;

playground.forEach((row, _y) => {
  row.forEach((col, _x) => {
    footer += `<rect class="rec-${_y * row.length + _x}" x="${_x * 10}" y="${
      _y * 10
    }" width="8" height="8" />`;
  });
});
footer += `\n</svg>`;

const fs = require("fs");
fs.writeFileSync("tetris.svg", head + footer);

// console.log(head + footer);
