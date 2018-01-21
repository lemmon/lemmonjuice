//const assert = require('assert')
const html = require('bel')
const morph = require('nanomorph')
const escapeHTML = require('escape-html')

const DOM = document.querySelector('.ribbon')
const code = document.querySelector('.code')

document.forms[0].addEventListener('input', e => {
  render()
})

render()

function render() {
  const imageWidth = val('imageWidth')
  const imageHeight = val('imageHeight')
  const ribbonGutter = val('ribbonGutter')
  const ribbonOffset = val('ribbonOffset')
  const ribbonWidth = val('ribbonWidth')
  const ribbonSize = ribbonOffset + ribbonWidth + ribbonGutter * 2
  const ribbonHue = val('ribbonHue')
  morph(DOM, html`
    <div class="ribbon">
      <figure class="bg-black-10" style="position: relative;">
        <svg style="display: block;" width=${imageWidth} height=${imageHeight}></svg>
        <svg style="display: block; position: absolute; left: -${ribbonGutter}px; top: -${ribbonGutter}px;"
          width="${ribbonSize}"
          height="${ribbonSize}"
          viewBox="-${ribbonGutter} -${ribbonGutter} ${ribbonSize} ${ribbonSize}"
        >${ribbonGutter && [
          html`<polygon points="${ribbonOffset},-${ribbonGutter} ${ribbonOffset + ribbonWidth},-${ribbonGutter} ${ribbonOffset + ribbonWidth + ribbonGutter},0 ${ribbonOffset - ribbonGutter},0" fill="hsl(${ribbonHue}, 80%, 20%)" />`,
          html`<polygon points="-${ribbonGutter},${ribbonOffset} -${ribbonGutter},${ribbonOffset + ribbonWidth} 0,${ribbonOffset + ribbonWidth + ribbonGutter} 0,${ribbonOffset - ribbonGutter}" fill="hsl(${ribbonHue}, 80%, 20%)" />`,
        ] || ``}
        <polygon points="${ribbonOffset},-${ribbonGutter} ${ribbonOffset + ribbonWidth},-${ribbonGutter} -${ribbonGutter},${ribbonOffset + ribbonWidth} -${ribbonGutter},${ribbonOffset}" fill="hsl(${ribbonHue}, 90%, 50%)" />
        <polygon points="${ribbonOffset - ribbonGutter},0 0,${ribbonOffset - ribbonGutter} 0,${ribbonOffset - ribbonGutter - 1} ${ribbonOffset - ribbonGutter - 1},0" opacity=".1" />
        <polygon points="${ribbonOffset + ribbonWidth},-${ribbonGutter} ${ribbonOffset + ribbonWidth + 2},-${ribbonGutter - 2} -${ribbonGutter - 2},${ribbonOffset + ribbonWidth + 2} -${ribbonGutter},${ribbonOffset + ribbonWidth}" opacity=".2" />
      </svg>
      </figure>
    </body>
  `)
  code.innerHTML = escapeHTML(DOM.innerHTML)
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
