import React from 'react'

function First() {
    


  return (
    <div>
    <div>
        <div class="board"></div>
    <img src="images/red_piece.png" alt="" hidden="true" id="red-piece" />
    <img src="images/blue_piece.png" alt="" hidden="true" id="blue-piece" />
    <img src="images/yellow_piece.png" alt="" hidden="true" id="yellow-piece" />
    <img src="images/green_piece.png" alt="" hidden="true" id="green-piece" />
    <div class="container">
      <canvas id="canvas"></canvas>
    </div>
    <div class="info-box">
      <div class="form-group">
        <input
          type="text"
          class="form-input"
          id="name"
          placeholder="Your name"
          required
        />
        <button class="btn draw-border" id="start-btn">Join</button>
      </div>
    </div>
    <div id="players-box">
      <h3>Players currently online:</h3>
      <br/>
      <table id="players-table"></table>
    </div>
    <div id="current-player"></div>
    <button class="btn draw-border" id="roll-button" hidden>Roll</button>
    <div class="dice">
      <img src="./images/dice/dice1.png" alt="" id="dice" />
    </div>
    <button class="btn draw-border" id="restart-btn" hidden>Restart</button>
    </div>
    </div>
  )
}

export default First;