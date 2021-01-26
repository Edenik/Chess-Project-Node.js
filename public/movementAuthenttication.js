
        //--------------------------------------------------------------------game pieces information----------------------------------------------------

        // let blackPawn1 = { color: "black", position: { i: 2, j: 1 }, name: 'blackPawn1' }
        // let blackPawn2 = { color: "black", position: { i: 2, j: 2 }, name: 'blackPawn2' }
        // let blackPawn3 = { color: "black", position: { i: 2, j: 3 }, name: 'blackPawn3' }
        // let blackPawn4 = { color: "black", position: { i: 2, j: 4 }, name: 'blackPawn4' }
        // let blackPawn5 = { color: "black", position: { i: 2, j: 5 }, name: 'blackPawn5' }
        // let blackPawn6 = { color: "black", position: { i: 2, j: 6 }, name: 'blackPawn6' }
        // let blackPawn7 = { color: "black", position: { i: 2, j: 7 }, name: 'blackPawn7' }
        // let blackPawn8 = { color: "black", position: { i: 2, j: 8 }, name: 'blackPawn8' }
        // let blackCastle1 = { color: "black", position: { i: 1, j: 1 }, name: 'blackCastle1' }
        // let blackCastle2 = { color: "black", position: { i: 1, j: 8 }, name: 'blackCastle2' }
        // let blackKnight1 = { color: "black", position: { i: 1, j: 2 }, name: 'blackKnight1' }
        // let blackKnight2 = { color: "black", position: { i: 1, j: 7 }, name: 'blackKnight2' }
        // let blackBishop1 = { color: "black", position: { i: 1, j: 3 }, name: 'blackBishop1' }
        // let blackBishop2 = { color: "black", position: { i: 1, j: 6 }, name: 'blackBishop2' }
        // let blackQueen = { color: "black", position: { i: 1, j: 4 }, name: 'blackQueen' }
        // let blackKing = { color: "black", position: { i: 1, j: 5 }, name: 'blackKing' }
        // let whitePawn1 = { color: "white", position: { i: 7, j: 1 }, name: 'whitePawn1' }
        // let whitePawn2 = { color: "white", position: { i: 7, j: 2 }, name: 'whitePawn2' }
        // let whitePawn3 = { color: "white", position: { i: 7, j: 3 }, name: 'whitePawn3' }
        // let whitePawn4 = { color: "white", position: { i: 7, j: 4 }, name: 'whitePawn4' }
        // let whitePawn5 = { color: "white", position: { i: 7, j: 5 }, name: 'whitePawn5' }
        // let whitePawn6 = { color: "white", position: { i: 7, j: 6 }, name: 'whitePawn6' }
        // let whitePawn7 = { color: "white", position: { i: 7, j: 7 }, name: 'whitePawn7' }
        // let whitePawn8 = { color: "white", position: { i: 7, j: 8 }, name: 'whitePawn8' }
        // let whiteCastle1 = { color: "white", position: { i: 8, j: 1 }, name: 'whiteCastle1' }
        // let WhiteCastle2 = { color: "white", position: { i: 8, j: 8 }, name: 'whiteCastle2' }
        // let whiteKnight1 = { color: "white", position: { i: 8, j: 2 }, name: 'whiteKnight1' }
        // let WhiteKnight2 = { color: "white", position: { i: 8, j: 7 }, name: 'whiteknight2' }
        // let whiteBishop1 = { color: "white", position: { i: 8, j: 3 }, name: 'whiteBishop1' }
        // let WhiteBishop2 = { color: "white", position: { i: 8, j: 6 }, name: 'whiteBishop2' }
        // let whiteQueen = { color: "white", position: { i: 8, j: 4 }, name: 'whiteQueen' }
        // let whiteKing = { color: "white", position: { i: 8, j: 5 }, name: 'whiteKing' }

        // let piecesArr = [blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8, blackCastle1, blackCastle2, blackKnight1, blackKnight2, blackBishop1, blackBishop2, blackQueen, blackKing, whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8, whiteCastle1, WhiteCastle2, whiteKnight1, WhiteKnight2, whiteBishop1, WhiteBishop2, whiteQueen, whiteKing]
        //--------------------------------------------------------randomly genenerated variales for testing------------------------------------------------------
        // let movementArr = [{ i: 5, j: 4 }, { i: 6, j: 4 }, { i: 7, j: 4 }, { i: 8, j: 4 }]
        // blackBishop1.position.i = 4
        // blackBishop1.position.j = 4
        // let clickedPiece = { color: "black", position: { i: 4, j: 4 }, name: 'blackBishop1' }
        //---------------------------------------------------------------------functions------------------------------------------------------------------------


        function movementAuthentication(movementArr, clickedPiece) {
            // console.log(movementArr)
            // console.log(clickedPiece)
            let movementArrIJ=[]
                    movementArr.forEach(movement => {
                        console.log(movement)
                         
                        let position = {i:movement.x,j:movement.y}
                        movementArrIJ.push(position)
                        
                    });
                    // console.log(movementArrIJ)
            
         

            // console.log(clickedPiece)
            let pieceBlockedUp = false;
            let pieceBlockedDown = false;
            let pieceBlockedLeft = false;
            let pieceBlockedRight = false;
            let pieceBlockedUpLeft = false;
            let pieceBlockedUpRight = false;
            let pieceBlockedDownLeft = false;
            let pieceBlockedDownRight = false;
            let authenticatedMovementArr = [];

            movementArrIJ.forEach(position => {
                let i = position.i
                let j = position.j

                // console.log(i)
                // console.log(j)
                piecesArr.forEach(piece => {
                    if (piece.position.i == i && piece.position.j == j) {
                        console.log(`match i:${i},j:${j}`)
                        if (piece.color == clickedPiece.color) {
                            console.log('illegal move')

                            if(clickedPiece.position.i - piece.position.i > 0 && clickedPiece.position.j - piece.position.j == 0){
                                pieceBlockedUp = true;
                            }
                            if(clickedPiece.position.i - piece.position.i < 0 && clickedPiece.position.j - piece.position.j == 0){
                                pieceBlockedDown = true;
                            }
                            if(clickedPiece.position.i - piece.position.i == 0 && clickedPiece.position.j - piece.position.j > 0){
                                pieceBlockedLeft = true;
                            }
                            if(clickedPiece.position.i - piece.position.i == 0 && clickedPiece.position.j - piece.position.j < 0){
                                pieceBlockedRight = true;
                            }
                            if(clickedPiece.position.i - piece.position.i < 0 && clickedPiece.position.j - piece.position.j < 0){
                                pieceBlockedDownRight = true;
                            }
                            if(clickedPiece.position.i - piece.position.i < 0 && clickedPiece.position.j - piece.position.j > 0){
                                pieceBlockedDownLeft = true;
                            }
                            if(clickedPiece.position.i - piece.position.i > 0 && clickedPiece.position.j - piece.position.j < 0){
                                pieceBlockedUpRight = true;
                            }
                            if(clickedPiece.position.i - piece.position.i > 0 && clickedPiece.position.j - piece.position.j > 0){
                                pieceBlockedUpLeft = true;
                            }
                        }
                        
                                   
                        else {

                            if (clickedPiece.position.i - piece.position.i > 0 && clickedPiece.position.j - piece.position.j == 0)// checking if piece is blocked from above
                            {
                                if (pieceBlockedUp == false) {
                                    console.log(`legal movement from above saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedUp = true;
                                }
                                else {
                                    console.log('illegal movement, piece blocked from above')
                    
                                }
                            }
                            if (clickedPiece.position.i - piece.position.i < 0 && clickedPiece.position.j - piece.position.j == 0)// checking if piece is blocked from below
                            {
                                if (pieceBlockedDown == false) {
                                    console.log(`legal movement from below saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedDown = true;
                                }
                                else { console.log('illegal movement, piece blocked from below ') }
                            }
                            if (clickedPiece.position.i - piece.position.i == 0 && clickedPiece.position.j - piece.position.j > 0)// checking if piece is blocked from left
                            {
                                if (pieceBlockedLeft == false) {
                                    console.log(`legal movement left saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedLeft = true;
                                }
                                else { console.log('illegal movement, piece blocked from left ') }
                            }
                            if (clickedPiece.position.i - piece.position.i == 0 && clickedPiece.position.j - piece.position.j < 0)// checking if piece is blocked from right
                            {
                                if (pieceBlockedRight == false) {
                                    console.log(`legal movement right saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedRight = true;
                                }
                                else { console.log('illegal movement, piece blocked from right ') }
                            }
                            if (clickedPiece.position.i - piece.position.i < 0 && clickedPiece.position.j - piece.position.j < 0)// checking if piece is blocked from down/right
                            {
                                if (pieceBlockedDownRight == false) {
                                    console.log(`legal movement down/right saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedDownRight = true;
                                }
                                else { console.log('illegal movement, piece blocked from down/right ') }
                            }
                            if (clickedPiece.position.i - piece.position.i < 0 && clickedPiece.position.j - piece.position.j > 0)// checking if piece is blocked from down/left
                            {
                                if (pieceBlockedDownLeft == false) {
                                    console.log(`legal movement down/left saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedDownLeft = true;
                                }
                                else { console.log('illegal movement, piece blocked from down/left ') }
                            }
                            if (clickedPiece.position.i - piece.position.i > 0 && clickedPiece.position.j - piece.position.j < 0)// checking if piece is blocked from up/right
                            {
                                if (pieceBlockedUpRight == false) {
                                    console.log(`legal movement up/right saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedUpRight = true;
                                }
                                else { console.log('illegal movement, piece blocked from up/right ') }
                            }
                            if (clickedPiece.position.i - piece.position.i > 0 && clickedPiece.position.j - piece.position.j > 0)// checking if piece is blocked from up/left
                            {
                                if (pieceBlockedUpLeft == false) {
                                    console.log(`legal movement/up left saved movement i:${i},j:${j}`)
                                    authenticatedMovementArr.push({i,j})
                                    pieceBlockedUpLeft = true;
                                }
                                else {
                                    console.log('illegal movement, piece blocked from up/left ')
                                }
                            }

                        }



                    }
                 


                });
                
                 
                        if (clickedPiece.position.i - i > 0 && clickedPiece.position.j - j == 0)// checking if piece is blocked from above
                        {
                            if (pieceBlockedUp == false) {
                                console.log(`legal movement from above saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                               
                            }
                            else {
                                console.log('illegal movement, piece blocked from above')

                            }
                        }
                        if (clickedPiece.position.i - i < 0 && clickedPiece.position.j - j == 0)// checking if piece is blocked from below
                        {
                            if (pieceBlockedDown == false) {
                                console.log(`legal movement from below saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                                
                            }
                            else { console.log('illegal movement, piece blocked from below ') }
                        }
                        if (clickedPiece.position.i - i == 0 && clickedPiece.position.j - j > 0)// checking if piece is blocked from left
                        {
                            if (pieceBlockedLeft == false) {
                                console.log(`legal movement left saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                                
                            }
                            else { console.log('illegal movement, piece blocked from left ') }
                        }
                        if (clickedPiece.position.i - i == 0 && clickedPiece.position.j - j < 0)// checking if piece is blocked from right
                        {
                            if (pieceBlockedRight == false) {
                                console.log(`legal movement right saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                                
                            }
                            else { console.log('illegal movement, piece blocked from right ') }
                        }
                        if (clickedPiece.position.i - i < 0 && clickedPiece.position.j - j < 0)// checking if piece is blocked from down/right
                        {
                            if (pieceBlockedDownRight == false) {
                                console.log(`legal movement down/right saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                                
                            }
                            else { console.log('illegal movement, piece blocked from down/right ') }
                        }
                        if (clickedPiece.position.i - i < 0 && clickedPiece.position.j - j > 0)// checking if piece is blocked from down/left
                        {
                            if (pieceBlockedDownLeft == false) {
                                console.log(`legal movement down/left saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                                
                            }
                            else { console.log('illegal movement, piece blocked from down/left ') }
                        }
                        if (clickedPiece.position.i - i > 0 && clickedPiece.position.j - j < 0)// checking if piece is blocked from up/right
                        {
                            if (pieceBlockedUpRight == false) {
                                console.log(`legal movement up/right saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                                
                            }
                            else { console.log('illegal movement, piece blocked from up/right ') }
                        }
                        if (clickedPiece.position.i - i > 0 && clickedPiece.position.j - j > 0)// checking if piece is blocked from up/left
                        {
                            if (pieceBlockedUpLeft == false) {
                                console.log(`legal movement/up left saved movement i:${i},j:${j}`)
                                authenticatedMovementArr.push({i,j})
                                
                            }
                            else {
                                console.log('illegal movement, piece blocked from up/left ')
                            }
                        }
                    


            });
            console.log(authenticatedMovementArr)
            return authenticatedMovementArr

        }
       
        
 