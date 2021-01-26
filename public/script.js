let piecesArr = [blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, blackCastle1, blackCastle2, blackKnight1, blackKnight2, blackBishop1, blackBishop2, blackQueen, blackKing, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8, whiteCastle1, WhiteCastle2, whiteKnight1, WhiteKnight2, whiteBishop1, WhiteBishop2, whiteQueen, whiteKing]
let outOfGamePiecesWhite = []
let outOfGamePiecesBlack = []
let authenticatedMovements;
let selectedPiece;
let selectedPieceName;
let pieceName;
let icon;
let type;

// creat an empty game board
function createBoard() {
  let html = ``,
    color = "black";
  for (i = 1; i < 9; i++) {
    if (i % 2) {
      color = "white";
    } else {
      color = "black";
    }
    for (j = 1; j < 9; j++) {
      html += `<div id=${i},${j} class='board ${color}' ></div>`;
      if (color == "black") {
        color = "white";
      } else {
        color = "black";
      }
    }
  }
  document.getElementById("root").innerHTML = html;
}

// add the game pieces by position that defined in the array
function setPiecesStartPosition() {
  piecesArr.forEach(piece => {
    setPieceLocation(`${piece.position.i},${piece.position.j}`, piece.name, piece.icon, piece.type);
  })
}

// piece movement happens in two clicks. first click on the piece you want to move, and second click on the wanted new location
//click on piece
function selectPiece(event) {

  //Reduces click to tool only
  // event.cancelBubble = true;

  selectedPiece = event.target.id;
  selectedPiece = selectedPiece.split(',')// for matching later

  //catch piece details (from the DOM)
  selectedPieceName = event.target.attributes[0].value;
  pieceName = event.target.attributes[0].value;
  icon = event.target.attributes[1].value;
  type = event.target.attributes[2].value;

  // for the match between functions  , Conversion from x & y to i & j
  let objectifier = { i: selectedPiece[0], j: selectedPiece[1] }

  //get all the optional movements for the choosen piece by type and location. (the location is converting from string to number)
  let optionalmovements = checkOptionalmovements(type, { x: parseInt(selectedPiece[0], 10), y: parseInt(selectedPiece[1], 10) })

  //for match, catch all the piece object from the pieces array (and not only its details from the DOM)
  let clickedpiece = {}
  piecesArr.forEach(piece => {
    if (piece.position.i == objectifier.i && piece.position.j == objectifier.j) {
      clickedpiece = piece
    }
  });
 
  //gets the legal movements only from all the optional movements
  authenticatedMovements = movementAuthentication(optionalmovements, clickedpiece)

  //catch all the board locations, clean them (in case its alredy marked) and remove the option to click it and locate there a piece ( in case the user clicked a piece right after another without move it )
  let allBoardBox =  document.getElementById('root').children;
  for (let index = 0; index < allBoardBox.length; index++) {
    allBoardBox[index].removeEventListener('click', movePiece);
    allBoardBox[index].style.backgroundColor = '';
  }

  // highlight the legal movement locations 
  authenticatedMovements.forEach(move => {
    document.getElementById(`${move.i},${move.j}`).addEventListener('click', movePiece);
    document.getElementById(`${move.i},${move.j}`).style.backgroundColor = 'red';
  });

}

//click on new location 
function movePiece(event) {
  // get the selected location numbers
  let selectedLocation = event.target.id;
  let newSL = selectedLocation.split(',')// for matching later

  // check if there is a rival piece located in the selected location and if so - do an "eating":remove the rival piece from the pieces array and push it the right 'out of game' array according to its color
  piecesArr.map((piece, index) => {
    if (piecesArr[index].position.i==parseInt(newSL[0],10) && piecesArr[index].position.j==parseInt(newSL[1],10)){
      document.getElementById(selectedLocation).innerHTML = '';
       (piecesArr[index].color == 'black')? outOfGamePiecesBlack.push(piecesArr[index]):outOfGamePiecesWhite.push(piecesArr[index])
     piecesArr.splice(index,1)
      return;
    }
  })

  // clean old piece location
  document.getElementById(selectedPiece).innerHTML = '';

  // set piece in new location
  setPieceLocation(selectedLocation, pieceName, icon, type);

  //???
  // selectedPiece = '';

  //catch all the board locations, clean them (in case its alredy marked) and remove the option to click it and locate there a piece ( in case the user clicked a piece right after another without move it )
  authenticatedMovements.forEach(move => {
    document.getElementById(`${move.i},${move.j}`).removeEventListener('click', movePiece);
    document.getElementById(`${move.i},${move.j}`).style.backgroundColor = '';
  })

  //update the piece position in the pieces array
  piecesArr.map((piece, index) => {
    if (selectedPieceName == piece.name) {
      piecesArr[index].position = {
        i: parseInt(newSL[0], 10),
        j: parseInt(newSL[1], 10)
      }
    }
  })

}

//set specific piece to specific location (Dom)
const setPieceLocation = (selectedLocation, name, icon, type) => {
  document.getElementById(
    selectedLocation
  ).innerHTML += `<div name='${name}'  icon='${icon}' type='${type}' class="pawn" id=${selectedLocation} onclick="selectPiece(event)">${icon}</div>`;
};

// on game page loading creat the bord and set the pieces (get your room, color and turns)
onInit = () => {

const socket = io()
const roomId='room1'
socket.on('connect', function () {

    // Connected, let's sign-up for to receive messages for this room
    socket.emit('join room', roomId);
});


//  let userID = coo
//   fetch('/get-room', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'

//     },
//     body: JSON.stringify({})
// }).then(res => res.json())
//     .then(data => { 
//         console.log(data)
//     })
  
  
  createBoard();
  setPiecesStartPosition();
};
