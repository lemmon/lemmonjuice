const html = require('bel')
const morph = require('nanomorph')
const escapeHTML = require('escape-html')
const chevron = require('./chevron')

const DOM = document.querySelector('.canvas')
const code = document.querySelector('.code')

// handle rerender
Array.from(document.forms[0].querySelectorAll('input[type=number]')).forEach(el => {
  el.addEventListener('input', (e) => {
    render()
  })
})
Array.from(document.forms[0].querySelectorAll('input[type=radio]')).forEach(el => {
  el.addEventListener('click', (e) => {
    render()
  })
})
// select all inputs on focus
Array.from(document.forms[0].querySelectorAll('input')).forEach(el => {
  el.addEventListener('focus', (e) => {
    e.target.select()
  })
})
// select code on focus
Array.from(document.forms[0].querySelectorAll('[tabindex]')).forEach(el => {
  el.addEventListener('focus', (e) => {
    setTimeout(() => {
      window.getSelection().selectAllChildren(e.target)
    })
  })
  el.addEventListener('mouseup', (e) => {
    if (window.getSelection().type !== 'Range') {
      window.getSelection().selectAllChildren(e.target)
    }
  })
})
// download svg
document.getElementById('svgDownload').addEventListener('click', e => {
  e.target.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(getCode()))
})

render()

function render() {
  const width = val('width')
  const height = val('height')
  const thickness = val('thickness')
  const gutter = val('gutter')
  const direction = document.forms[0].elements['direction'].value
  morph(DOM, html`
    <div class="canvas">
      <svg width=${width} height=${height} viewBox="0 0 ${width} ${height}">
        <path d="${d(chevron({
          width,
          height,
          thickness,
          gutter,
          direction,
        }))}" />
      </svg>
    </div>
  `)
  code.innerHTML = escapeHTML(getCode())
}

function getCode() {
  return DOM.innerHTML.replace(/^(<svg)/, '$1 xmlns="http://www.w3.org/2000/svg"')
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
