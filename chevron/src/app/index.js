//const assert = require('assert')
const html = require('bel')
const morph = require('nanomorph')
const escapeHTML = require('escape-html')

const DOM = document.querySelector('.canvas')
const code = document.querySelector('.code')

document.forms[0].addEventListener('input', e => {
  render()
})
// select all inputs on focus
Array.from(document.forms[0].querySelectorAll('input')).forEach(link => {
  link.addEventListener('focus', (e) => {
    e.target.select()
  })
})
// select code on focus
Array.from(document.forms[0].querySelectorAll('[tabindex]')).forEach(link => {
  link.addEventListener('focus', (e) => {
    setTimeout(() => {
      window.getSelection().selectAllChildren(e.target)
    })
  })
  link.addEventListener('mouseup', (e) => {
    if (window.getSelection().type !== 'Range') {
      window.getSelection().selectAllChildren(e.target)
    }
  })
})

render()

function render() {
  const width = val('width')
  const height = val('height')
  const maxThickness = Math.floor(Math.sqrt(Math.pow(Math.min(width, height / 2), 2) * 2) / 2)
  const thickness = Math.min(val('thickness'), maxThickness)
  const direction = document.forms[0].elements['direction'].value
  const rotate = {
    left: (width, height) => [ width, height ],
    right: (width, height) => [ width, height ],
    up: (width, height) => [ height, width ],
    down: (width, height) => [ height, width ],
  }
  morph(DOM, html`
    <div class="canvas">
      <svg width=${width} height=${height} viewBox="0 0 ${width} ${height}">
        ${path(...rotate[direction](width, height), thickness, direction)}
      </svg>
    </body>
  `)
  code.innerHTML = escapeHTML(DOM.innerHTML)
}

function path(width, height, thickness, direction) {
  const a = Math.sqrt(Math.pow(thickness, 2) / 2)
  const b = Math.min(width - a, height / 2)
  const x = (width - a - b) / 2
  const y = (height - b * 2) / 2
  const transform = {
    left: ([ x, y ]) => [ width - x, y ],
    right: xy => xy,
    up: ([ x, y ]) => [ y, width - x ],
    down: ([ x, y ]) => [ y, x ],
  }
  const points = [
    [x + a, y],
    [x + b + a, y + b],
    [x + a, height - y],
    [x, height - y - a],
    [x + b - a, y + b],
    [x, y + a],
    [x + a, y],
  ]
  return html`<path d="${d(points, transform[direction])}" />`
}

function d(points, transform) {
  return 'M' + transform(points[0]).join() + points.slice(1).map( xy => 'L' + transform(xy).join() ).join('') + 'z'
}

function val(id, def = 320) {
  try {
    const el = document.getElementById(id)
    const num = parseInt(el.value)
    const min = parseIntMin(el.min, 80)
    const max = parseIntMin(el.max, 640)
    if (isNaN(num)) return parseInt(el.defaultValue) || def
    else if (num < min) return min
    else if (num > max) return max
    else return num
  } catch (e) {
    console.error(e)
    return def
  }
}

function parseIntMin(value, min) {
  const res = parseInt(value)
  return !isNaN(res) ? res : min
}
