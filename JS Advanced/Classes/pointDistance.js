class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(num1, num2) {
    let xy = num1.x - num2.x;
    let yx = num1.y - num2.y;
    return Math.sqrt(xy * xy + yx * yx);
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
