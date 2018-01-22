const assert = require('assert')

const rotate = {
  left: (width, height) => [ width, height ],
  right: (width, height) => [ width, height ],
  up: (width, height) => [ height, width ],
  down: (width, height) => [ height, width ],
}

const transform = {
  left: (width) => ([ x, y ]) => [ width - x, y ],
  right: (width) => xy => xy,
  up: (width) => ([ x, y ]) => [ y, width - x ],
  down: (width) => ([ x, y ]) => [ y, x ],
}

module.exports = function chevron(props) {
  assert(typeof props.width === 'number' && props.width > 0, `width must be a positive number`)
  assert(typeof props.height === 'number' && props.height > 0, `height must be a positive number`)
  assert(typeof props.thickness === 'number' && props.thickness > 0, `thickness must be a positive number`)
  assert(typeof props.gutter === 'number' && props.gutter >= 0, `thickness must be a positive number or zero`)
  assert(typeof transform[props.direction] === 'function', `invalid direction: ${props.direction}`)
  // gutter
  const gutter = Math.min(props.gutter, props.width / 2 - 2, props.height / 2 - 2)
  // dimensions
  const innerWidth = props.width - gutter * 2
  const innerHeight = props.height - gutter * 2
  // define thickness
  const maxThickness = Math.floor(Math.sqrt(Math.pow(Math.min(innerWidth, innerHeight), 2) * 2) / 2)
  const thickness = Math.min(props.thickness, maxThickness)
  // rotate width/height
  const [ chevronWidth, chevronHeight ] = rotate[props.direction](innerWidth, innerHeight)
  // generate points
  return points({
    offsetX: gutter,
    offsetY: gutter,
    width: chevronWidth,
    height: chevronHeight,
    direction: props.direction,
    thickness,
  }).map(transform[props.direction](chevronWidth + gutter * 2));
}

function points({ width, height, thickness, direction, offsetX, offsetY }) {
  const a = Math.sqrt(Math.pow(thickness, 2) / 2)
  const b = Math.min(width - a, height / 2)
  const x = (width - a - b) / 2
  const y = (height - b * 2) / 2
  return [
    [x + a + offsetX, y + offsetY],
    [x + b + a + offsetX, y + b + offsetY],
    [x + a + offsetX, height - y + offsetY],
    [x + offsetX, height - y - a + offsetY],
    [x + b - a + offsetX, y + b + offsetY],
    [x + offsetX, y + a + offsetY],
    [x + a + offsetX, y + offsetY],
  ]
}
