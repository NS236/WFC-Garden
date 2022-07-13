const width = window.innerWidth;
const height = window.innerHeight;
const WIDTH = Math.floor(width / 50);
const HEIGHT = Math.floor(height / 50);

let imgs = [];
for (let i = 1; i <= 81; i++) {
  let img = new Image(100, 100);
  img.src = "images/tile_" + i + ".svg";
  imgs.push(img);
}

/*Sides Legend
0 - sky
1 - green
2 - light green
*/

const nullTile = {
  filled: false,
  rot: null,
  sides: [-1, -1, -1, -1],
};

const tiles = [
  {
    rot: 0,
    sides: [0, 0, 0, 0],
  },
  {
    rot: 0,
    sides: [0, 0, 0, 1],
  },
  {
    rot: 0,
    sides: [0, 0, 0, 2],
  },
  {
    rot: 0,
    sides: [0, 0, 1, 0],
  },
  {
    rot: 0,
    sides: [0, 0, 1, 1],
  },
  {
    rot: 0,
    sides: [0, 0, 1, 2],
  },
  {
    rot: 0,
    sides: [0, 0, 2, 0],
  },
  {
    rot: 0,
    sides: [0, 0, 2, 1],
  },
  {
    rot: 0,
    sides: [0, 0, 2, 2],
  },
  {
    rot: 0,
    sides: [0, 1, 0, 0],
  },
  {
    rot: 0,
    sides: [0, 1, 0, 1],
  },
  {
    rot: 0,
    sides: [0, 1, 0, 2],
  },
  {
    rot: 0,
    sides: [0, 1, 1, 0],
  },
  {
    rot: 0,
    sides: [0, 1, 1, 1],
  },
  {
    rot: 0,
    sides: [0, 1, 1, 2],
  },
  {
    rot: 0,
    sides: [0, 1, 2, 0],
  },
  {
    rot: 0,
    sides: [0, 1, 2, 1],
  },
  {
    rot: 0,
    sides: [0, 1, 2, 2],
  },
  {
    rot: 0,
    sides: [0, 2, 0, 0],
  },
  {
    rot: 0,
    sides: [0, 2, 0, 1],
  },
  {
    rot: 0,
    sides: [0, 2, 0, 2],
  },
  {
    rot: 0,
    sides: [0, 2, 1, 0],
  },
  {
    rot: 0,
    sides: [0, 2, 1, 1],
  },
  {
    rot: 0,
    sides: [0, 2, 1, 2],
  },
  {
    rot: 0,
    sides: [0, 2, 2, 0],
  },
  {
    rot: 0,
    sides: [0, 2, 2, 1],
  },
  {
    rot: 0,
    sides: [0, 2, 2, 2],
  },
  {
    rot: 0,
    sides: [1, 0, 0, 0],
  },
  {
    rot: 0,
    sides: [1, 0, 0, 1],
  },
  {
    rot: 0,
    sides: [1, 0, 0, 2],
  },
  {
    rot: 0,
    sides: [1, 0, 1, 0],
  },
  {
    rot: 0,
    sides: [1, 0, 1, 1],
  },
  {
    rot: 0,
    sides: [1, 0, 1, 2],
  },
  {
    rot: 0,
    sides: [1, 0, 2, 0],
  },
  {
    rot: 0,
    sides: [1, 0, 2, 1],
  },
  {
    rot: 0,
    sides: [1, 0, 2, 2],
  },
  {
    rot: 0,
    sides: [1, 1, 0, 0],
  },
  {
    rot: 0,
    sides: [1, 1, 0, 1],
  },
  {
    rot: 0,
    sides: [1, 1, 0, 2],
  },
  {
    rot: 0,
    sides: [1, 1, 1, 0],
  },
  {
    rot: 0,
    sides: [1, 1, 1, 1],
  },
  {
    rot: 0,
    sides: [1, 1, 1, 2],
  },
  {
    rot: 0,
    sides: [1, 1, 2, 0],
  },
  {
    rot: 0,
    sides: [1, 1, 2, 1],
  },
  {
    rot: 0,
    sides: [1, 1, 2, 2],
  },
  {
    rot: 0,
    sides: [1, 2, 0, 0],
  },
  {
    rot: 0,
    sides: [1, 2, 0, 1],
  },
  {
    rot: 0,
    sides: [1, 2, 0, 2],
  },
  {
    rot: 0,
    sides: [1, 2, 1, 0],
  },
  {
    rot: 0,
    sides: [1, 2, 1, 1],
  },
  {
    rot: 0,
    sides: [1, 2, 1, 2],
  },
  {
    rot: 0,
    sides: [1, 2, 2, 0],
  },
  {
    rot: 0,
    sides: [1, 2, 2, 1],
  },
  {
    rot: 0,
    sides: [1, 2, 2, 2],
  },
  {
    rot: 0,
    sides: [2, 0, 0, 0],
  },
  {
    rot: 0,
    sides: [2, 0, 0, 1],
  },
  {
    rot: 0,
    sides: [2, 0, 0, 2],
  },
  {
    rot: 0,
    sides: [2, 0, 1, 0],
  },
  {
    rot: 0,
    sides: [2, 0, 1, 1],
  },
  {
    rot: 0,
    sides: [2, 0, 1, 2],
  },
  {
    rot: 0,
    sides: [2, 0, 2, 0],
  },
  {
    rot: 0,
    sides: [2, 0, 2, 1],
  },
  {
    rot: 0,
    sides: [2, 0, 2, 2],
  },
  {
    rot: 0,
    sides: [2, 1, 0, 0],
  },
  {
    rot: 0,
    sides: [2, 1, 0, 1],
  },
  {
    rot: 0,
    sides: [2, 1, 0, 2],
  },
  {
    rot: 0,
    sides: [2, 1, 1, 0],
  },
  {
    rot: 0,
    sides: [2, 1, 1, 1],
  },
  {
    rot: 0,
    sides: [2, 1, 1, 2],
  },
  {
    rot: 0,
    sides: [2, 1, 2, 0],
  },
  {
    rot: 0,
    sides: [2, 1, 2, 1],
  },
  {
    rot: 0,
    sides: [2, 1, 2, 2],
  },
  {
    rot: 0,
    sides: [2, 2, 0, 0],
  },
  {
    rot: 0,
    sides: [2, 2, 0, 1],
  },
  {
    rot: 0,
    sides: [2, 2, 0, 2],
  },
  {
    rot: 0,
    sides: [2, 2, 1, 0],
  },
  {
    rot: 0,
    sides: [2, 2, 1, 1],
  },
  {
    rot: 0,
    sides: [2, 2, 1, 2],
  },
  {
    rot: 0,
    sides: [2, 2, 2, 0],
  },
  {
    rot: 0,
    sides: [2, 2, 2, 1],
  },
  {
    rot: 0,
    sides: [2, 2, 2, 2],
  },
  {
    rot: 90,
    sides: [0, 0, 0, 0],
  },
  {
    rot: 90,
    sides: [1, 0, 0, 0],
  },
  {
    rot: 90,
    sides: [2, 0, 0, 0],
  },
  {
    rot: 90,
    sides: [0, 0, 0, 1],
  },
  {
    rot: 90,
    sides: [1, 0, 0, 1],
  },
  {
    rot: 90,
    sides: [2, 0, 0, 1],
  },
  {
    rot: 90,
    sides: [0, 0, 0, 2],
  },
  {
    rot: 90,
    sides: [1, 0, 0, 2],
  },
  {
    rot: 90,
    sides: [2, 0, 0, 2],
  },
  {
    rot: 90,
    sides: [0, 0, 1, 0],
  },
  {
    rot: 90,
    sides: [1, 0, 1, 0],
  },
  {
    rot: 90,
    sides: [2, 0, 1, 0],
  },
  {
    rot: 90,
    sides: [0, 0, 1, 1],
  },
  {
    rot: 90,
    sides: [1, 0, 1, 1],
  },
  {
    rot: 90,
    sides: [2, 0, 1, 1],
  },
  {
    rot: 90,
    sides: [0, 0, 1, 2],
  },
  {
    rot: 90,
    sides: [1, 0, 1, 2],
  },
  {
    rot: 90,
    sides: [2, 0, 1, 2],
  },
  {
    rot: 90,
    sides: [0, 0, 2, 0],
  },
  {
    rot: 90,
    sides: [1, 0, 2, 0],
  },
  {
    rot: 90,
    sides: [2, 0, 2, 0],
  },
  {
    rot: 90,
    sides: [0, 0, 2, 1],
  },
  {
    rot: 90,
    sides: [1, 0, 2, 1],
  },
  {
    rot: 90,
    sides: [2, 0, 2, 1],
  },
  {
    rot: 90,
    sides: [0, 0, 2, 2],
  },
  {
    rot: 90,
    sides: [1, 0, 2, 2],
  },
  {
    rot: 90,
    sides: [2, 0, 2, 2],
  },
  {
    rot: 90,
    sides: [0, 1, 0, 0],
  },
  {
    rot: 90,
    sides: [1, 1, 0, 0],
  },
  {
    rot: 90,
    sides: [2, 1, 0, 0],
  },
  {
    rot: 90,
    sides: [0, 1, 0, 1],
  },
  {
    rot: 90,
    sides: [1, 1, 0, 1],
  },
  {
    rot: 90,
    sides: [2, 1, 0, 1],
  },
  {
    rot: 90,
    sides: [0, 1, 0, 2],
  },
  {
    rot: 90,
    sides: [1, 1, 0, 2],
  },
  {
    rot: 90,
    sides: [2, 1, 0, 2],
  },
  {
    rot: 90,
    sides: [0, 1, 1, 0],
  },
  {
    rot: 90,
    sides: [1, 1, 1, 0],
  },
  {
    rot: 90,
    sides: [2, 1, 1, 0],
  },
  {
    rot: 90,
    sides: [0, 1, 1, 1],
  },
  {
    rot: 90,
    sides: [1, 1, 1, 1],
  },
  {
    rot: 90,
    sides: [2, 1, 1, 1],
  },
  {
    rot: 90,
    sides: [0, 1, 1, 2],
  },
  {
    rot: 90,
    sides: [1, 1, 1, 2],
  },
  {
    rot: 90,
    sides: [2, 1, 1, 2],
  },
  {
    rot: 90,
    sides: [0, 1, 2, 0],
  },
  {
    rot: 90,
    sides: [1, 1, 2, 0],
  },
  {
    rot: 90,
    sides: [2, 1, 2, 0],
  },
  {
    rot: 90,
    sides: [0, 1, 2, 1],
  },
  {
    rot: 90,
    sides: [1, 1, 2, 1],
  },
  {
    rot: 90,
    sides: [2, 1, 2, 1],
  },
  {
    rot: 90,
    sides: [0, 1, 2, 2],
  },
  {
    rot: 90,
    sides: [1, 1, 2, 2],
  },
  {
    rot: 90,
    sides: [2, 1, 2, 2],
  },
  {
    rot: 90,
    sides: [0, 2, 0, 0],
  },
  {
    rot: 90,
    sides: [1, 2, 0, 0],
  },
  {
    rot: 90,
    sides: [2, 2, 0, 0],
  },
  {
    rot: 90,
    sides: [0, 2, 0, 1],
  },
  {
    rot: 90,
    sides: [1, 2, 0, 1],
  },
  {
    rot: 90,
    sides: [2, 2, 0, 1],
  },
  {
    rot: 90,
    sides: [0, 2, 0, 2],
  },
  {
    rot: 90,
    sides: [1, 2, 0, 2],
  },
  {
    rot: 90,
    sides: [2, 2, 0, 2],
  },
  {
    rot: 90,
    sides: [0, 2, 1, 0],
  },
  {
    rot: 90,
    sides: [1, 2, 1, 0],
  },
  {
    rot: 90,
    sides: [2, 2, 1, 0],
  },
  {
    rot: 90,
    sides: [0, 2, 1, 1],
  },
  {
    rot: 90,
    sides: [1, 2, 1, 1],
  },
  {
    rot: 90,
    sides: [2, 2, 1, 1],
  },
  {
    rot: 90,
    sides: [0, 2, 1, 2],
  },
  {
    rot: 90,
    sides: [1, 2, 1, 2],
  },
  {
    rot: 90,
    sides: [2, 2, 1, 2],
  },
  {
    rot: 90,
    sides: [0, 2, 2, 0],
  },
  {
    rot: 90,
    sides: [1, 2, 2, 0],
  },
  {
    rot: 90,
    sides: [2, 2, 2, 0],
  },
  {
    rot: 90,
    sides: [0, 2, 2, 1],
  },
  {
    rot: 90,
    sides: [1, 2, 2, 1],
  },
  {
    rot: 90,
    sides: [2, 2, 2, 1],
  },
  {
    rot: 90,
    sides: [0, 2, 2, 2],
  },
  {
    rot: 90,
    sides: [1, 2, 2, 2],
  },
  {
    rot: 90,
    sides: [2, 2, 2, 2],
  },
  {
    rot: 180,
    sides: [0, 0, 0, 0],
  },
  {
    rot: 180,
    sides: [0, 1, 0, 0],
  },
  {
    rot: 180,
    sides: [0, 2, 0, 0],
  },
  {
    rot: 180,
    sides: [1, 0, 0, 0],
  },
  {
    rot: 180,
    sides: [1, 1, 0, 0],
  },
  {
    rot: 180,
    sides: [1, 2, 0, 0],
  },
  {
    rot: 180,
    sides: [2, 0, 0, 0],
  },
  {
    rot: 180,
    sides: [2, 1, 0, 0],
  },
  {
    rot: 180,
    sides: [2, 2, 0, 0],
  },
  {
    rot: 180,
    sides: [0, 0, 0, 1],
  },
  {
    rot: 180,
    sides: [0, 1, 0, 1],
  },
  {
    rot: 180,
    sides: [0, 2, 0, 1],
  },
  {
    rot: 180,
    sides: [1, 0, 0, 1],
  },
  {
    rot: 180,
    sides: [1, 1, 0, 1],
  },
  {
    rot: 180,
    sides: [1, 2, 0, 1],
  },
  {
    rot: 180,
    sides: [2, 0, 0, 1],
  },
  {
    rot: 180,
    sides: [2, 1, 0, 1],
  },
  {
    rot: 180,
    sides: [2, 2, 0, 1],
  },
  {
    rot: 180,
    sides: [0, 0, 0, 2],
  },
  {
    rot: 180,
    sides: [0, 1, 0, 2],
  },
  {
    rot: 180,
    sides: [0, 2, 0, 2],
  },
  {
    rot: 180,
    sides: [1, 0, 0, 2],
  },
  {
    rot: 180,
    sides: [1, 1, 0, 2],
  },
  {
    rot: 180,
    sides: [1, 2, 0, 2],
  },
  {
    rot: 180,
    sides: [2, 0, 0, 2],
  },
  {
    rot: 180,
    sides: [2, 1, 0, 2],
  },
  {
    rot: 180,
    sides: [2, 2, 0, 2],
  },
  {
    rot: 180,
    sides: [0, 0, 1, 0],
  },
  {
    rot: 180,
    sides: [0, 1, 1, 0],
  },
  {
    rot: 180,
    sides: [0, 2, 1, 0],
  },
  {
    rot: 180,
    sides: [1, 0, 1, 0],
  },
  {
    rot: 180,
    sides: [1, 1, 1, 0],
  },
  {
    rot: 180,
    sides: [1, 2, 1, 0],
  },
  {
    rot: 180,
    sides: [2, 0, 1, 0],
  },
  {
    rot: 180,
    sides: [2, 1, 1, 0],
  },
  {
    rot: 180,
    sides: [2, 2, 1, 0],
  },
  {
    rot: 180,
    sides: [0, 0, 1, 1],
  },
  {
    rot: 180,
    sides: [0, 1, 1, 1],
  },
  {
    rot: 180,
    sides: [0, 2, 1, 1],
  },
  {
    rot: 180,
    sides: [1, 0, 1, 1],
  },
  {
    rot: 180,
    sides: [1, 1, 1, 1],
  },
  {
    rot: 180,
    sides: [1, 2, 1, 1],
  },
  {
    rot: 180,
    sides: [2, 0, 1, 1],
  },
  {
    rot: 180,
    sides: [2, 1, 1, 1],
  },
  {
    rot: 180,
    sides: [2, 2, 1, 1],
  },
  {
    rot: 180,
    sides: [0, 0, 1, 2],
  },
  {
    rot: 180,
    sides: [0, 1, 1, 2],
  },
  {
    rot: 180,
    sides: [0, 2, 1, 2],
  },
  {
    rot: 180,
    sides: [1, 0, 1, 2],
  },
  {
    rot: 180,
    sides: [1, 1, 1, 2],
  },
  {
    rot: 180,
    sides: [1, 2, 1, 2],
  },
  {
    rot: 180,
    sides: [2, 0, 1, 2],
  },
  {
    rot: 180,
    sides: [2, 1, 1, 2],
  },
  {
    rot: 180,
    sides: [2, 2, 1, 2],
  },
  {
    rot: 180,
    sides: [0, 0, 2, 0],
  },
  {
    rot: 180,
    sides: [0, 1, 2, 0],
  },
  {
    rot: 180,
    sides: [0, 2, 2, 0],
  },
  {
    rot: 180,
    sides: [1, 0, 2, 0],
  },
  {
    rot: 180,
    sides: [1, 1, 2, 0],
  },
  {
    rot: 180,
    sides: [1, 2, 2, 0],
  },
  {
    rot: 180,
    sides: [2, 0, 2, 0],
  },
  {
    rot: 180,
    sides: [2, 1, 2, 0],
  },
  {
    rot: 180,
    sides: [2, 2, 2, 0],
  },
  {
    rot: 180,
    sides: [0, 0, 2, 1],
  },
  {
    rot: 180,
    sides: [0, 1, 2, 1],
  },
  {
    rot: 180,
    sides: [0, 2, 2, 1],
  },
  {
    rot: 180,
    sides: [1, 0, 2, 1],
  },
  {
    rot: 180,
    sides: [1, 1, 2, 1],
  },
  {
    rot: 180,
    sides: [1, 2, 2, 1],
  },
  {
    rot: 180,
    sides: [2, 0, 2, 1],
  },
  {
    rot: 180,
    sides: [2, 1, 2, 1],
  },
  {
    rot: 180,
    sides: [2, 2, 2, 1],
  },
  {
    rot: 180,
    sides: [0, 0, 2, 2],
  },
  {
    rot: 180,
    sides: [0, 1, 2, 2],
  },
  {
    rot: 180,
    sides: [0, 2, 2, 2],
  },
  {
    rot: 180,
    sides: [1, 0, 2, 2],
  },
  {
    rot: 180,
    sides: [1, 1, 2, 2],
  },
  {
    rot: 180,
    sides: [1, 2, 2, 2],
  },
  {
    rot: 180,
    sides: [2, 0, 2, 2],
  },
  {
    rot: 180,
    sides: [2, 1, 2, 2],
  },
  {
    rot: 180,
    sides: [2, 2, 2, 2],
  },
  {
    rot: 270,
    sides: [0, 0, 0, 0],
  },
  {
    rot: 270,
    sides: [0, 0, 1, 0],
  },
  {
    rot: 270,
    sides: [0, 0, 2, 0],
  },
  {
    rot: 270,
    sides: [0, 1, 0, 0],
  },
  {
    rot: 270,
    sides: [0, 1, 1, 0],
  },
  {
    rot: 270,
    sides: [0, 1, 2, 0],
  },
  {
    rot: 270,
    sides: [0, 2, 0, 0],
  },
  {
    rot: 270,
    sides: [0, 2, 1, 0],
  },
  {
    rot: 270,
    sides: [0, 2, 2, 0],
  },
  {
    rot: 270,
    sides: [1, 0, 0, 0],
  },
  {
    rot: 270,
    sides: [1, 0, 1, 0],
  },
  {
    rot: 270,
    sides: [1, 0, 2, 0],
  },
  {
    rot: 270,
    sides: [1, 1, 0, 0],
  },
  {
    rot: 270,
    sides: [1, 1, 1, 0],
  },
  {
    rot: 270,
    sides: [1, 1, 2, 0],
  },
  {
    rot: 270,
    sides: [1, 2, 0, 0],
  },
  {
    rot: 270,
    sides: [1, 2, 1, 0],
  },
  {
    rot: 270,
    sides: [1, 2, 2, 0],
  },
  {
    rot: 270,
    sides: [2, 0, 0, 0],
  },
  {
    rot: 270,
    sides: [2, 0, 1, 0],
  },
  {
    rot: 270,
    sides: [2, 0, 2, 0],
  },
  {
    rot: 270,
    sides: [2, 1, 0, 0],
  },
  {
    rot: 270,
    sides: [2, 1, 1, 0],
  },
  {
    rot: 270,
    sides: [2, 1, 2, 0],
  },
  {
    rot: 270,
    sides: [2, 2, 0, 0],
  },
  {
    rot: 270,
    sides: [2, 2, 1, 0],
  },
  {
    rot: 270,
    sides: [2, 2, 2, 0],
  },
  {
    rot: 270,
    sides: [0, 0, 0, 1],
  },
  {
    rot: 270,
    sides: [0, 0, 1, 1],
  },
  {
    rot: 270,
    sides: [0, 0, 2, 1],
  },
  {
    rot: 270,
    sides: [0, 1, 0, 1],
  },
  {
    rot: 270,
    sides: [0, 1, 1, 1],
  },
  {
    rot: 270,
    sides: [0, 1, 2, 1],
  },
  {
    rot: 270,
    sides: [0, 2, 0, 1],
  },
  {
    rot: 270,
    sides: [0, 2, 1, 1],
  },
  {
    rot: 270,
    sides: [0, 2, 2, 1],
  },
  {
    rot: 270,
    sides: [1, 0, 0, 1],
  },
  {
    rot: 270,
    sides: [1, 0, 1, 1],
  },
  {
    rot: 270,
    sides: [1, 0, 2, 1],
  },
  {
    rot: 270,
    sides: [1, 1, 0, 1],
  },
  {
    rot: 270,
    sides: [1, 1, 1, 1],
  },
  {
    rot: 270,
    sides: [1, 1, 2, 1],
  },
  {
    rot: 270,
    sides: [1, 2, 0, 1],
  },
  {
    rot: 270,
    sides: [1, 2, 1, 1],
  },
  {
    rot: 270,
    sides: [1, 2, 2, 1],
  },
  {
    rot: 270,
    sides: [2, 0, 0, 1],
  },
  {
    rot: 270,
    sides: [2, 0, 1, 1],
  },
  {
    rot: 270,
    sides: [2, 0, 2, 1],
  },
  {
    rot: 270,
    sides: [2, 1, 0, 1],
  },
  {
    rot: 270,
    sides: [2, 1, 1, 1],
  },
  {
    rot: 270,
    sides: [2, 1, 2, 1],
  },
  {
    rot: 270,
    sides: [2, 2, 0, 1],
  },
  {
    rot: 270,
    sides: [2, 2, 1, 1],
  },
  {
    rot: 270,
    sides: [2, 2, 2, 1],
  },
  {
    rot: 270,
    sides: [0, 0, 0, 2],
  },
  {
    rot: 270,
    sides: [0, 0, 1, 2],
  },
  {
    rot: 270,
    sides: [0, 0, 2, 2],
  },
  {
    rot: 270,
    sides: [0, 1, 0, 2],
  },
  {
    rot: 270,
    sides: [0, 1, 1, 2],
  },
  {
    rot: 270,
    sides: [0, 1, 2, 2],
  },
  {
    rot: 270,
    sides: [0, 2, 0, 2],
  },
  {
    rot: 270,
    sides: [0, 2, 1, 2],
  },
  {
    rot: 270,
    sides: [0, 2, 2, 2],
  },
  {
    rot: 270,
    sides: [1, 0, 0, 2],
  },
  {
    rot: 270,
    sides: [1, 0, 1, 2],
  },
  {
    rot: 270,
    sides: [1, 0, 2, 2],
  },
  {
    rot: 270,
    sides: [1, 1, 0, 2],
  },
  {
    rot: 270,
    sides: [1, 1, 1, 2],
  },
  {
    rot: 270,
    sides: [1, 1, 2, 2],
  },
  {
    rot: 270,
    sides: [1, 2, 0, 2],
  },
  {
    rot: 270,
    sides: [1, 2, 1, 2],
  },
  {
    rot: 270,
    sides: [1, 2, 2, 2],
  },
  {
    rot: 270,
    sides: [2, 0, 0, 2],
  },
  {
    rot: 270,
    sides: [2, 0, 1, 2],
  },
  {
    rot: 270,
    sides: [2, 0, 2, 2],
  },
  {
    rot: 270,
    sides: [2, 1, 0, 2],
  },
  {
    rot: 270,
    sides: [2, 1, 1, 2],
  },
  {
    rot: 270,
    sides: [2, 1, 2, 2],
  },
  {
    rot: 270,
    sides: [2, 2, 0, 2],
  },
  {
    rot: 270,
    sides: [2, 2, 1, 2],
  },
  {
    rot: 270,
    sides: [2, 2, 2, 2],
  },
];

//credit: https://stackoverflow.com/a/966938
function createArray(length) {
  let arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    let args = Array.prototype.slice.call(arguments, 1);
    while (i--) {
      arr[length - 1 - i] = createArray.apply(this, args);
    }
  }

  return arr;
}

let grid = createArray(WIDTH, HEIGHT);
grid.forEach(function (row) {
  row.fill(nullTile);
});
// console.log(grid);

function getSides(i, j) {
  let N = j > 0 ? grid[i][j - 1].sides[2] : -1;
  let E = i < WIDTH - 1 ? grid[i + 1][j].sides[3] : -1;
  let S = j < HEIGHT - 1 ? grid[i][j + 1].sides[0] : -1;
  let W = i > 0 ? grid[i - 1][j].sides[1] : -1;

  return [N, E, S, W];
}

function randArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function compatible(t, s) {
  for (let side = 0; side < s.length; side++) {
    if (s[side] !== -1 && s[side] !== t.sides[side]) {
      return false;
    }
  }
  return true;
}

function bestSpots() {
  let spots = [];
  let bestCount = tiles.length + 1;
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      let spot = grid[x][y];
      let count = 0;
      if (!spot.filled) {
        let sides = getSides(x, y);
        for (let tile of tiles) {
          if(compatible(tile, sides)) {
            count++;
          }
        }

        if(count == bestCount) {
          spots.push({x: x, y: y});
        } else if(count < bestCount) {
          spots = [{x: x, y: y}];
          bestCount = count;
        }
      }
    }
  }

  return spots;
}

function showTile(tile, i, j) {
  let scl = (width) / WIDTH;
  if(tile.filled) {
    let tileImg = imgs[tiles.indexOf(tile) % imgs.length];
    let img = tileImg.cloneNode(true);
    img.style.width = `${scl}px`;
    img.style.height = `${scl}px`;
    img.className = "rot" + tile.rot;
    document.body.append(img);
  } else {
    let img = imgs[0].cloneNode(true);
    img.style.width = `${scl}px`;
    img.style.height = `${scl}px`;
    document.body.append(img)
  }
}

let placed = 0;

function run() {
  let best = bestSpots();
  let choiceSpot = randArr(best);
  console.log(choiceSpot);

  let options = [];
  let sides = getSides(choiceSpot.x, choiceSpot.y);
  // console.log(sides);
  for (let tile of tiles) {
    let plausible = compatible(tile, sides);

    if (plausible) {
      options.push(tile);
    }
  }

  let choice = randArr(options);
  grid[choiceSpot.x][choiceSpot.y] = choice;
  grid[choiceSpot.x][choiceSpot.y].filled = true;

  document.body.innerHTML = "";
  for (let j = 0; j < HEIGHT; j++) {
    for (let i = 0; i < WIDTH; i++) {
      showTile(grid[i][j], i, j);
    }
    let br = document.createElement("br");
    document.body.append(br);
  }

  placed++;
  if(placed < WIDTH * HEIGHT) {
    window.requestAnimationFrame(run);
  }
};

window.requestAnimationFrame(run);

// for (let i = 0; i < WIDTH * HEIGHT; i++) {
//   let best = bestSpots();
//   let choiceSpot = randArr(best);
//   console.log(choiceSpot);

//   let options = [];
//   let sides = getSides(choiceSpot.x, choiceSpot.y);
//   // console.log(sides);
//   for (let tile of tiles) {
//     let plausible = compatible(tile, sides);

//     if (plausible) {
//       options.push(tile);
//     }
//   }

//   let choice = randArr(options);
//   grid[choiceSpot.x][choiceSpot.y] = choice;
//   grid[choiceSpot.x][choiceSpot.y].filled = true;
// }

// function showTile(tile, i, j) {
//   let scl = (width - 17) / WIDTH;
//   let tileImg = imgs[tiles.indexOf(tile) % imgs.length];
//   let img = tileImg.cloneNode(true);
//   img.style.width = scl + "px";
//   img.style.height = scl + "px";
//   img.className = "rot" + tile.rot;
//   document.body.append(img);
// }

// for (let j = 0; j < HEIGHT; j++) {
//   for (let i = 0; i < WIDTH; i++) {
//     showTile(grid[i][j], i, j);
//   }
//   let br = document.createElement("br");
//   document.body.append(br);
// }
