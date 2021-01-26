let direction = "f";
const strateDirections = ['f','r','b','l'];
const diagonallyDirections = ['fr','br','bl','fl']
allDirections = strateDirections.concat(diagonallyDirections);

function stepStraight(location,direction){
  let newLocation = {};
  (direction === "f" && location.y!==8) ? newLocation = {x:location.x,y:(location.y+1)} :
    (direction === "r" && location.x!==8) ? newLocation = {x:(location.x+1),y:location.y} : 
      (direction === "b" && location.y!==1) ? newLocation = {x:location.x,y:(location.y-1)} :
        (direction === "l" && location.x!==1) ? newLocation = {x:(location.x-1),y:location.y} :
          console.log('יצאת מחוץ ללוח');      
    return newLocation
}

function stepDiagonally(location,direction){
  let newLocation = {};
  (direction === "fr" && location==location && location.y!==8 && location.x!==8) ?
    newLocation = {x:(location.x+1),y:(location.y+1)} :
  (direction === "br" && location.y!==1 && location.x!==8) ?
    newLocation = {x:(location.x+1),y:(location.y-1)}:
  (direction === "bl" && location.y!==1&& location.x!==1) ?
    newLocation = {x:(location.x-1),y:(location.y-1)} :
  (direction === "fl"&& location.y!==8 && location.x!==1)?
    newLocation = {x:(location.x-1),y:(location.y+1)} :
    console.log('יצאת מחוץ ללוח');

  // if(Object.keys(newLocation).length !==0){
    return newLocation
  // }; 
}

function stepOverRow(location,direction){
  let locations = [];
  if(direction === "f" && location.y!==8){
    for (let i = location.y+1; i <= 8; i++) {
      locations.push({X:location.x ,y:i});
    } 
  }else if(direction === "r" && location.x!==8){
    for (let i = location.x+1; i <= 8; i++) {
      locations.push({X:i ,y:location.y});
    } 
  }else if(direction === "b" && location.y!==1){
    for (let i = location.y-1; 0 < i; i--) {
      locations.push({X:location.x ,y:i});
    } 
  }else if(direction === "l"  && location.x!==1){
    for (let i = location.x-1; 0 < i; i--) {
      locations.push({X:i ,y:location.y});
    } 
  }else {

  }
  if(locations){
    return locations
  }; 
}

function stepOverDiagonalRow(location,direction){
  let locations = [];
  let newLocation = location;
  if(direction === "fr" && location.y!==8 && location.x!==8){
    for (let i = location.y; i < 8; i++) {
      newLocation = stepDiagonally(newLocation,direction);
      locations.push(newLocation);
    } 
  }else if(direction === "br" && location.y!==1 && location.x!==8){
    for (let i = location.x+1; i <= 8; i++) {
      newLocation = stepDiagonally(newLocation,direction);
      locations.push(newLocation);
    } 
  }else if(direction === "bl" && location.y!==1&& location.x!==1){
    for (let i = location.y-1; 0 < i; i--) {
      newLocation = stepDiagonally(newLocation,direction);
      locations.push(newLocation);
    } 
  }else if(direction === "fl"&& location.y!==8 && location.x!==1){
    for (let i = location.x-1; 0 < i; i--) {
      newLocation = stepDiagonally(newLocation,direction);
      locations.push(newLocation);
    } 
  }else {

  }

  if(locations){
    return locations
  };
}

function checkOptionalmovements(type,location){
  let optionalmovements = [];
  if(type == 'rook'){
    let f = stepOverRow(location,'f');
    var r = stepOverRow(location,'r');
    var b = stepOverRow(location,'b');
    var l = stepOverRow(location,'l');
    optionalmovements = f.concat(r,b,l);
  }else if(type == 'bishop'){
    let fr = stepOverDiagonalRow(location,'fr');
    var br = stepOverDiagonalRow(location,'br');
    var bl = stepOverDiagonalRow(location,'bl');
    var fl = stepOverDiagonalRow(location,'fl');
    optionalmovements = fr.concat(br,bl,fl);
    optionalmovements = optionalmovements.filter(obg=> Object.keys(obg).length !==0 && obg.x == obg.x);
  }else if(type == 'pawn'){
    let newLocation;
    if(location.x == 7){
    newLocation = stepStraight(location,'l');
    optionalmovements.push(newLocation);
    newLocation = stepStraight(newLocation,'l');
    optionalmovements.push(newLocation);
    }else{
      optionalmovements.push(stepStraight(location,'l'));
    }
  }else if(type == 'knight'){
    let newLocation;
    newLocation = stepStraight(location,'f');
    optionalmovements.push(stepDiagonally(newLocation,'fr'),stepDiagonally(newLocation,'fl'));
    newLocation = stepStraight(location,'r');
    optionalmovements.push(stepDiagonally(newLocation,'fr'),stepDiagonally(newLocation,'br'));
    newLocation = stepStraight(location,'b');
    optionalmovements.push(stepDiagonally(newLocation,'br'),stepDiagonally(newLocation,'bl'));
    newLocation = stepStraight(location,'l');
    optionalmovements.push(stepDiagonally(newLocation,'bl'),stepDiagonally(newLocation,'fl'));
    optionalmovements = optionalmovements.filter(obg=> Object.keys(obg).length !==0 && obg.x == obg.x);
  }else if(type == 'queen'){
    let f = stepOverRow(location,'f');
    let r = stepOverRow(location,'r');
    let b = stepOverRow(location,'b');
    let l = stepOverRow(location,'l');
    let fr = stepOverDiagonalRow(location,'fr');
    let br = stepOverDiagonalRow(location,'br');
    let bl = stepOverDiagonalRow(location,'bl');
    let fl = stepOverDiagonalRow(location,'fl');
    optionalmovements = f.concat(r,b,l,fr,br,bl,fl);
    optionalmovements = optionalmovements.filter(obg=> Object.keys(obg).length !==0 && obg.x == obg.x);
  }else if(type == 'king'){
    strateDirections.forEach(dir => {
      optionalmovements.push(stepStraight(location,dir));
    });
    diagonallyDirections.forEach(dir => {
      optionalmovements.push(stepDiagonally(location,dir));
    });
    optionalmovements = optionalmovements.filter(obg=> obg && Object.keys(obg).length !==0);
    }
  return optionalmovements;
}





