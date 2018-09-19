"use strict";

var piece = document.createElement('div');
piece.style.position = 'absolute';
piece.style.visibility = 'hidden';
piece.style.zIndex = -1;
piece.textContent = '[]';
app.appendChild(piece);

window.onload = function () {
  var pieceWidth = piece.getBoundingClientRect().width;
  var pieceHeight = piece.getBoundingClientRect().height;
  var board = app.appendChild(document.createElement('div'));
  var stats = app.appendChild(document.createElement('div'));
  var state = {
    generation: 0,
    width: Math.floor(app.clientWidth / pieceWidth),
    height: Math.floor(app.clientHeight / pieceHeight) - 2,
    perf: []
  };
  stats.innerHTML = "<br><br>";
  state.board = generateRandom(state.width, state.height);
  drawBoard(board, state.board);
  setInterval(function () {
    var t0 = Date.now();
    state.board = nextGeneration(state.board);
    state.generation++;
    drawBoard(board, state.board);
    state.perf.push(Date.now() - t0);
    state.perf.splice(0, state.perf.length - 10);
    stats.innerHTML = "<br><span class=\"color-black-40\">generation:</span> ".concat(state.generation) + " <span class=\"color-black-40\">(".concat(Math.round(state.perf.reduce(function (acc, curr) {
      return acc + curr;
    }, 0) / state.perf.length), "ms)</span>");
  }, 50);
};

function generateRandom(width, height) {
  var board = new Array(height);

  for (var y = 0; y < height; y++) {
    board[y] = new Array(width);

    for (var x = 0; x < width; x++) {
      board[y][x] = Math.round(Math.random());
    }
  }

  return board;
}

function generateRandom(width, height) {
  var board = new Array(height);

  for (var y = 0; y < height; y++) {
    board[y] = new Array(width);

    for (var x = 0; x < width; x++) {
      board[y][x] = Math.round(Math.random());
    }
  }

  return board;
}

function drawBoard(board, data) {
  var height = data.length;

  for (var y = 0; y < height; y++) {
    var row = board.children[y] || board.appendChild(document.createElement('div'));
    row.textContent = data[y].map(function (cell) {
      return cell ? '[]' : '  ';
    }).join('');
  }
}

function nextGeneration(data) {
  var height = data.length;
  var res = new Array(height);

  for (var y = 0; y < height; y++) {
    var width = data[y].length;
    res[y] = new Array(width);

    for (var x = 0; x < width; x++) {
      var n = countNeighbors(data, x, y);
      res[y][x] = data[y][x] ? n === 2 && 1 || n === 3 && 1 || 0 : n === 3 && 1 || 0;
    }
  }

  return res;
}

function countNeighbors(data, x, y) {
  return 0 + (data[y][x - 1] || 0) + (data[y][x + 1] || 0) + (data[y - 1] ? data[y - 1][x] + (data[y - 1][x - 1] || 0) + (data[y - 1][x + 1] || 0) : 0) + (data[y + 1] ? data[y + 1][x] + (data[y + 1][x - 1] || 0) + (data[y + 1][x + 1] || 0) : 0);
}
