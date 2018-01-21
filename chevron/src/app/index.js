const html = require('bel')
const morph = require('nanomorph')
const escapeHTML = require('escape-html')
const chevron = require('./chevron')

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
  const thickness = val('thickness')
  const direction = document.forms[0].elements['direction'].value
  morph(DOM, html`
    <div class="canvas">
      <svg width=${width} height=${height} viewBox="0 0 ${width} ${height}">
        <path d="${d(chevron({
          width,
          height,
          thickness,
          direction,
        }))}" />
      </svg>
    </div>
  `)
  code.innerHTML = escapeHTML(DOM.innerHTML)
}

function d(points) {
  return 'M' + points[0].join() + points.slice(1).map( xy => 'L' + xy.join() ).join('') + 'z'
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
