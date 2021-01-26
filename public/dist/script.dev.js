"use strict";

var piecesArr = [blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, blackCastle1, blackCastle2, blackKnight1, blackKnight2, blackBishop1, blackBishop2, blackQueen, blackKing, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8, whiteCastle1, WhiteCastle2, whiteKnight1, WhiteKnight2, whiteBishop1, WhiteBishop2, whiteQueen, whiteKing];
var outOfGamePiecesWhite = [];
var outOfGamePiecesBlack = []; // console.log(piecesArr)

var selectedPiece;
var selectedPieceName;
var pieceName;
var icon;
var type;

function createBoard() {
  var colum = true;
  var html = "",
      color = "black";

  for (i = 1; i < 9; i++) {
    if (i % 2) {
      color = "white";
    } else {
      color = "black";
    }

    for (j = 1; j < 9; j++) {
      html += "<div id=".concat(i, ",").concat(j, " class='board ").concat(color, "' ></div>");

      if (color == "black") {
        color = "white";
      } else {
        color = "black";
      }
    }
  }

  document.getElementById("root").innerHTML = html;
}

function setPiecesStartPosition() {
  piecesArr.forEach(function (piece) {
    setPieceLocation("".concat(piece.position.i, ",").concat(piece.position.j), piece.name, piece.icon, piece.type);
  });
}

var setPieceLocation = function setPieceLocation(selectedLocation, name, icon, type) {
  // console.log(selectedLocation, name, icon, type)
  document.getElementById(selectedLocation).innerHTML += "<div name='".concat(name, "'  icon='").concat(icon, "' type='").concat(type, "' class=\"pawn\" id=").concat(selectedLocation, " onclick=\"selectPiece(event)\">").concat(icon, "</div>");
};

function selectPiece(event) {
  selectedPiece = event.target.id;
  selectedPieceName = event.target.attributes[0].value;
  selectedPiece = selectedPiece.split(',');
  event.cancelBubble = true;
  pieceName = event.target.attributes[0].value;
  console.log(pieceName);
  icon = event.target.attributes[1].value;
  type = event.target.attributes[2].value;
  var objectifier = {
    i: selectedPiece[0],
    j: selectedPiece[1]
  }; // let optionalmovements =  init(type,{x:parseInt(selectedPiece[0], 10),y:parseInt(selectedPiece[1], 10)})

  for (var index = 0; index < 8; index++) {
    if (pieceName == piecesArr[index].name) {
      console.log('blackPawn');
    }
  }

  var optionalmovements = checkOptionalmovements(type, {
    x: parseInt(selectedPiece[0], 10),
    y: parseInt(selectedPiece[1], 10)
  });
  console.log(optionalmovements);
  var clickedpiece = {};
  piecesArr.forEach(function (piece) {
    if (piece.position.i == objectifier.i && piece.position.j == objectifier.j) {
      console.log(piece.position);
      console.log(objectifier);
      clickedpiece = piece;
    }
  });
  authenticatedMovements = movementAuthentication(optionalmovements, clickedpiece);
  console.log(authenticatedMovements); // let allBoardBox =  document.getElementById('root').children;
  // for (let index = 0; index < allBoardBox.length; index++) {
  //   allBoardBox[index].removeEventListener('click', movePiece);
  //   allBoardBox[index].style.backgroundColor = '';
  // }

  authenticatedMovements.forEach(function (move) {
    document.getElementById("".concat(move.i, ",").concat(move.j)).addEventListener('click', movePiece);
    document.getElementById("".concat(move.i, ",").concat(move.j)).style.backgroundColor = 'red';
  });
}

var authenticatedMovements;

function movePiece(event) {
  var selectedLocation = event.target.id;
  var newSL = selectedLocation.split(',');
  piecesArr.map(function (piece, index) {
    if (piecesArr[index].position.i == parseInt(newSL[0], 10) && piecesArr[index].position.j == parseInt(newSL[1], 10)) {
      document.getElementById(selectedLocation).innerHTML = '';
      piecesArr[index].color == 'black' ? outOfGamePiecesBlack.push(piecesArr[index]) : outOfGamePiecesWhite.push(piecesArr[index]);
      piecesArr.splice(index, 1); // console.log(piecesArr.length,outOfGamePiecesBlack)

      return;
    }
  }); // clean old piece location

  document.getElementById(selectedPiece).innerHTML = ''; // set piece in new location

  setPieceLocation(selectedLocation, pieceName, icon, type); // console.log("חיצוני");

  isClicked = false;
  selectedPiece = '';
  authenticatedMovements.forEach(function (move) {
    document.getElementById("".concat(move.i, ",").concat(move.j)).removeEventListener('click', movePiece);
    document.getElementById("".concat(move.i, ",").concat(move.j)).style.backgroundColor = '';
  });
  piecesArr.map(function (piece, index) {
    console.log(selectedPieceName, piece.name);

    if (selectedPieceName == piece.name) {
      piecesArr[index].position = {
        i: parseInt(newSL[0], 10),
        j: parseInt(newSL[1], 10)
      };
    }
  });
}

onInit = function onInit() {
  createBoard();
  setPiecesStartPosition(); // setPieceLocation(`${whiteKing.position.i},${whiteKing.position.j}`);
};