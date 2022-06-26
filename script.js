var SIZE = 15;
var width = window.innerWidth;
var height = window.innerHeight;

var imgs = [];
for (var i = 1; i <= 81; i++) {
  let img = new Image(100, 100);
  img.src = "images/tile_" + i + ".svg";
  imgs.push(img);
}

/*Sides Legend
0 - sky
1 - green
2 - light green
*/

var nullTile = {
  rot: null,
  sides: [-1, -1, -1, -1]
};

var tiles = [
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
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) {
      arr[length - 1 - i] = createArray.apply(this, args);
    }
  }

  return arr;
}

var grid = createArray(SIZE, SIZE);
grid.forEach(function (row) {
  row.fill(nullTile);
});
// console.log(grid);

function getSides(i, j) {
  var N = j > 0 ? grid[i][j - 1].sides[2] : -1;
  var E = i < SIZE - 1 ? grid[i + 1][j].sides[3] : -1;
  var S = j < SIZE - 1 ? grid[i][j + 1].sides[0] : -1;
  var W = i > 0 ? grid[i - 1][j].sides[1] : -1;

  return [N, E, S, W];
}

function randArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

for (var j = 0; j < SIZE; j++) {
  for (var i = 0; i < SIZE; i++) {
    var options = [];
    var sides = getSides(i, j);
    // console.log(sides);
    for (var tile of tiles) {
      var plausible = true;
      for (var side = 0; side < sides.length; side++) {
        if (sides[side] !== -1 && sides[side] !== tile.sides[side]) {
          plausible = !true;
        }
      }

      if (plausible) {
        options.push(tile);
      }
    }

    var choice = randArr(options);
    // println("first tile: " + grid[0][0].id);
    // println("setting position: " + i + ", " + j + " to " + choice.id);
    grid[i][j] = choice;
    // println("first tile: " + grid[0][0].id);
    // println("recent tile: " + grid[i][j].id);
    // println("\n");
  }
}

function showTile(tile, i, j) {
  var scl = (width - 17) / SIZE;
  var tileImg = imgs[tiles.indexOf(tile) % imgs.length];
  var img = tileImg.cloneNode(true);
  img.style.width = scl + "px";
  img.style.height = scl + "px";
  img.className = "rot" + tile.rot;
  document.body.append(img);
}

for (var j = 0; j < SIZE; j++) {
  for (var i = 0; i < SIZE; i++) {
    showTile(grid[i][j], i, j);
  }
  var br = document.createElement("br");
  document.body.append(br);
}
