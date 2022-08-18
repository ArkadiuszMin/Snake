

let canvas = document.getElementById("plotno")

    

let draw = (canvas) => {

    let gora = 60
    let lewo = 100
    let x = 0
    let y = 0
    let spawnX
    let spawnY
    let cordX = []
    let cordY = []
    let dlugosc = 2
    cordX[0] = 100
    cordY[0] = 60

    


    spawnX = Math.ceil(Math.random()*24)*20
    spawnY = Math.ceil(Math.random()*24)*20
    
    

    let ctx = canvas.getContext("2d")

    ctx.fillStyle = "red"
    ctx.fillRect(spawnX, spawnY, 20, 20)

    ctx.fillStyle = "black"
    ctx.fillRect(lewo, gora, 20, 20)

    let licznik = setInterval(() => {

        // ----- Poruszansko ------

        for(let i = dlugosc-1; i>0; i--){
            cordX[i] = cordX[i-1]
            cordY[i] = cordY[i-1]
        }

        gora+=y
        lewo+=x
        cordX[0] = lewo
        cordY[0] = gora
        

        ctx.fillStyle = "white"
        ctx.fillRect(cordX[dlugosc-1], cordY[dlugosc-1], 20, 20)

        ctx.fillStyle = "black"
        for(let i=0; i<dlugosc-1; i++){
            ctx.fillRect(cordX[i], cordY[i], 20, 20)
        }
        

        //------ Zjadanie -------

        if(lewo == spawnX && gora == spawnY){
            spawnX = Math.ceil(Math.random()*24)*20
            spawnY = Math.ceil(Math.random()*24)*20
            ctx.fillStyle = "red"
            ctx.fillRect(spawnX, spawnY, 20, 20)
            cordX.push(0)
            cordY.push(0)
            dlugosc+=1
            ctx.fillStyle = "black"
        }

        if(gora==-20 || gora==500 || lewo==-20 || lewo==500){
            alert("Game Over")
            clearInterval(licznik)
        }
    }, 50)

    document.onkeydown = (key) => {
        console.log(key);
        switch (key.key) {
            case "ArrowRight":
                x = 20
                y = 0
                break;
            case "ArrowLeft":
                x = -20
                y = 0
                break;
            case "ArrowUp":
                x = 0
                y = -20
                break;
            case "ArrowDown":
                x = 0
                y = 20
                break;
                
        
            default:
                break;
        }
    }

}

draw(canvas)