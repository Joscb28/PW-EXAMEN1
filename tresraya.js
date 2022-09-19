let board;



function CreateBoard(numRows,numCols){
    //arreglo board  
    const Rows=[]
  
  
      for(let i=0;i<numRows;i++) //recorrer filas
      { 
        const casillas=[]//arrglo de casilla  [1 1 1]
        
        for(let j=0;j<numCols;j++)//recorre cols
        {
          casillas.push({ //agrega casilla
            seMuestra:false,
            Equis:"X",
            Otro:false,
            Circulo:"O"
          })
        }
  
        
        Rows.push(casillas)//CASILLA A FILA 
  
      }
  
      return Rows
  
  }
  
  
  function PrintBoard(board){//q impri
  
      for(let row of board ){//filas pa
  
          let RowStr = "" //tablero
  
          for(let casilla of row){ //celdas pa
  
              RowStr=RowStr+casilla+" " //acumular tablero con celdas
          }
  
          console.log(RowStr) //pinta tablero
  
      }
  
  }
  
  
  function SetValue(board,row,col,value){
    board[row][col]=value  
  
  }
   
  
  //function getVal(board,row,col)
  const getValue=(board,row,col)=>{ 
    return board[row][col]
  
  }
  



const RenderizarBoard=(board)=>{
    for(let i=0; i< board.length;i++){ //largo tab
      const casillas=board[i] //casilla pasa por tab - 1x1
  
      for(let j=0; j< casillas.length;j++){ //recorre cas
          const butCasilla= document.getElementById(`${i}_${j}`)//INTERPOL STRING  -- el boton es HTML
          if(casillas[j].seMuestra)
          {
            butCasilla.innerHTML=casillas[j].Equis//
          }
          

          else
          {
            butCasilla.innerHTML=""
          }
      
      }
    }
  
  }
  
  
  
  const casillaOnClick=(row,col)=>{
      const casilla=getValue(board,row,col)
      casilla.seMuestra=true
  
      RenderizarBoard(board)
  }
  

  function fun() {  
    

    for(let i=0; i< board.length;i++){ //largo tab
        const casillas=board[i] //casilla pasa por tab - 1x1
        

        for(let j=0; j< casillas.length;j++){ //recorre cas
            
            
            const butCasilla= document.getElementById(`${i}_${j}`)//INTERPOL STRING  -- el boton es HTML
            casillas[i].Otro=true
            if(casillas[j].Otro)
            {
                butCasilla.innerHTML=casillas[j].Circulo
            }
            
    
         } 
        }

        const H1=document.getElementById("Ganador")

        H1.innerText="GANASTE - FIN DEL JUEGO"


  }


  function myFunction() {
    document.getElementsByClassName("col").disabled = true;
    }
  
  
  
  
  const main = ()=>{
      board=CreateBoard(3,3)
      
      RenderizarBoard(board)
      
      
    
  
  }
  
  main()

