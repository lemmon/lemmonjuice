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
  assert(typeof transform[props.direction] === 'function', `invalid direction: ${props.direction}`)
  // define thickness
  const maxThickness = Math.floor(Math.sqrt(Math.pow(Math.min(props.width, props.height / 2), 2) * 2) / 2)
  const thickness = Math.min(props.thickness, maxThickness)
  // rotate width/height
  const [ chevronWidth, chevronHeight ] = rotate[props.direction](props.width, props.height)
  // generate points
  return points({
    width: chevronWidth,
    height: chevronHeight,
    direction: props.direction,
    thickness,
  }).map(transform[props.direction](chevronWidth))
}

function points({ width, height, thickness, direction }) {
  const a = Math.sqrt(Math.pow(thickness, 2) / 2)
  const b = Math.min(width - a, height / 2)
  const x = (width - a - b) / 2
  const y = (height - b * 2) / 2
  return [
    [x + a, y],
    [x + b + a, y + b],
    [x + a, height - y],
    [x, height - y - a],
    [x + b - a, y + b],
    [x, y + a],
    [x + a, y],
  ]
}
