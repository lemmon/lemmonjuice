const state = {
  snakeLength: 10,
  snakeDirection: ['l'],
  snake: [],
  snakeTiles: [],
  prizeNumber: 0,
}

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37:
      if (state.snakeDirection[state.snakeDirection.length - 1] !== 'r') {
        state.snakeDirection.push('l')
      }
      break
    case 38:
      if (state.snakeDirection[state.snakeDirection.length - 1] !== 'd') {
        state.snakeDirection.push('u')
      }
      break
    case 39:
      if (state.snakeDirection[state.snakeDirection.length - 1] !== 'l') {
        state.snakeDirection.push('r')
      }
      break
    case 40:
      if (state.snakeDirection[state.snakeDirection.length - 1] !== 'u') {
        state.snakeDirection.push('d')
      }
      break
  }
})

window.onload = () => {

  const tileWidth = 16
  const tileHeight = 16
  const appWidth = app.clientWidth
  const appHeight = app.clientHeight
  const gridWidth = Math.floor(appWidth / tileWidth)
  const gridHeight = Math.floor(appHeight / tileHeight)

  const tile = (x, y, content = '[]') => (
    dom.appendChild(el('div', {
      className: 'tile',
      style: `left: ${x * tileWidth}px; top: ${y * tileHeight}px;`,
      textContent: content,
    }))
  )

  const dom = el('div', {
    classList: 'bg-blue color-white',
    style: `position: relative; width: ${gridWidth * tileWidth}px; height: ${gridHeight * tileHeight}px;`,
  })

  app.appendChild(dom)

  state.snakeX = Math.floor(gridWidth / 2)
  state.snakeY = Math.floor(gridHeight / 2)

  state.game = setInterval(() => {
    // move
    if (state.snakeDirection.length > 1) {
      state.snakeDirection.shift()
    }
    switch (state.snakeDirection[0]) {
      case 'l':
        state.snakeX--
        if (state.snakeX < 0) state.snakeX += gridWidth
        break
      case 'r':
        state.snakeX++
        if (state.snakeX >= gridWidth) state.snakeX -= gridWidth
        break
      case 'u':
        state.snakeY--
        if (state.snakeY < 0) state.snakeY += gridHeight
        break
      case 'd':
        state.snakeY++
        if (state.snakeY >= gridHeight) state.snakeY -= gridHeight
        break
    }
    // snake collision
    const pos = state.snakeY * gridWidth + state.snakeX
    if (state.snake.includes(pos)) {
      dom.classList.add('bg-red')
      clearInterval(state.game)
      return
    }
    state.snake.unshift(pos)
    // prize collision
    if (state.prize && state.prize === state.snake[0]) {
      // win
      if (state.prizeNumber === 99) {
        dom.classList.add('bg-green')
        clearInterval(state.game)
        return
      }
      state.prize = null
      dom.removeChild(state.prizeTile)
      state.snakeLength += 2
    }
    // new prize
    if (!state.prize) {
      state.prizeNumber++
      const max = gridWidth * gridHeight
      do {
        state.prize = Math.floor(Math.random() * max)
      } while (state.snake.includes(state.prize))
      state.prizeTile = tile(state.prize % gridWidth, Math.floor(state.prize / gridWidth), state.prizeNumber.toString().padStart(2, '0'))
    }
    // draw
    if (state.snake.length < state.snakeLength) {
      state.snakeTiles.unshift(tile(state.snakeX, state.snakeY))
    } else {
      state.snake.pop()
      const tile = state.snakeTiles.pop()
      tile.style.left = `${state.snakeX * tileWidth}px`
      tile.style.top = `${state.snakeY * tileWidth}px`
      state.snakeTiles.unshift(tile)
    }
  }, 40)

}

function el(name, props = {}, children = []) {
  const el = document.createElement(name)
  Object.assign(el, props)
  children.forEach(child => {
    el.appendChild(child)
  })
  return el
}
