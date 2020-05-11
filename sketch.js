const tiles = 20
const subDiv = 5
const margin = 100

function setup() {
  let c = createCanvas(900, 900)

  tileSize = width / tiles

  noLoop()
  noStroke()
}

function draw() {
  background(0)
  
  for (var y = margin; y < height - margin; y += tileSize) {
    for (var x = margin; x < width - margin; x += tileSize) {
      
      // grid system
      //line(x, y, x + width, y)
      //line(x, y, x, y + height)
      
      // draw system
      fill('#fafafa')
      r = int(random(0, 4))
      if (r == 0) {
        rect(x,y + tileSize / subDiv,tileSize * 4 / subDiv,tileSize  * 3 / 5)
      } else if (r == 1) {
        rect(x + tileSize / subDiv, y + tileSize / subDiv, tileSize  * 3 / subDiv, tileSize * 4 / subDiv )
      } else if (r == 2) {
        rect(x + tileSize / subDiv, y + tileSize / subDiv, tileSize * 4 / subDiv, tileSize  * 3 / subDiv)
      } else if (r == 3) {
        rect(x + tileSize / subDiv, y, tileSize  * 3 / subDiv, tileSize * 4 / subDiv )
      }
    }
  }
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}