//Canvas size
    var XW = 500;
    var YW = 600;

    




//Variables asignacion de propiedades rectangulo
    var xRec = XW/2;
    var yRec = YW-50;
    var baseRec = 100;
    var alturaRec = 10;
    var velocidadReC=5;

//Variables asignacion de propiedades Circulo
    var xCir = XW/2;
    var yCir = YW-100;
    var radioCir = 5
    var velocidadCir = 5

//Variables arreglos

var bloquesArray =[]

//crear objetos
var rec = new rectangulo(xRec,yRec,{r: 168,g: 0,b: 255},baseRec,alturaRec,velocidadReC)
var bola=new circle(xCir,yCir, {r: 174,g: 103,b: 255}, radioCir, velocidadCir);




//FUNCION RECTANGULO
function rectangulo(x,y,color,base,altura,velocidad){
    this.x=x;
    this.y=y;
    this.color=color;
    this.base=base;
    this.altura=altura;
    this.velocidad=velocidad;
    var sentidoX = true;

     this.draw = () =>{
        
        rect(this.x, this.y, this.base,this.altura);
        colision()
        
       

    }

   
    this.KeyPressed = () =>{
        if (key==='a') {
            sentidoX = true;
            if (this.x>=0 && sentidoX == true) {
                this.x -= this.velocidad;
               
            }
            
        }
        if (key==='d') {
            sentidoX = false;
            if (this.x+this.base<width && sentidoX == false) {
                this.x += this.velocidad;
                

            }
            
        }
        
    }

    const colision=() =>{
        //var colisionL = bola1.x-bola1.radio;
        //var colisionR = bola1.x+bola1.radio;
        //console.log(colisionL);

        var colisionBolaY = bola.y;
        var colisionBolaX = bola.x;

        
        
         if (colisionBolaX >= this.x && colisionBolaX <= this.x+this.base && colisionBolaY == this.y) {
            sentidoCircleY = false;
            console.log("ENTRO A COLISION")
            
            //console.log(this.color);
            }

            


        
        };

    


}
//-------------------------------------------------------------RECTANGULO

//FUNCIONES CIRCULO

function circle(x,y,color,radio,velocidad){
     //ATRIBUTOS PUBLICOS
    this.x=x;
    this.y=y;
    this.color=color; //pedir un arreglo para el rgb
    this.radio=radio;
    this.velocidad=velocidad;
    //ATRIBUTOS PRIVADOS
    sentidoCircleX = true;
    sentidoCircleY = true;
    //METODOs

    const rebotar = () =>{
     

        if(sentidoCircleX){

            this.x += this.velocidad;
            if(this.x >= XW){
            sentidoCircleX=false;

            }
        }
        else {
            this.x -= this.velocidad;
            if(this.x<=0){
            sentidoCircleX=true;
            }
        }
        
        if(sentidoCircleY){
            this.y += this.velocidad;
            if(this.y >= height){
            sentidoCircleY=false;
            }
        }
        else {
            this.y -= this.velocidad;
            if(this.y<=0){
            sentidoCircleY=true;
            }
        }
        

         
         
        
        
        

        

    }

    this.draw = () => {
        let size = this.radio*2;
        
        ellipse(this.x, this.y,size,size);
        rebotar();
    };
 }

 //-------------------------------------------------------------CIRCULO

 //Crear bloques objetos


 function bloques(x,y,color,base,altura,destruido){
    this.x=x;
    this.y=y;
    this.color=color; //pedir un arreglo para el rgb
    this.base=base;
    this.altura=altura;
    this.destruido=destruido;


    this.colision = () =>{
        var colisionBolaY = bola.y;
        var colisionBolaX = bola.x;

        
        
         if (colisionBolaX >= this.x && colisionBolaX <= this.x+this.base && colisionBolaY == this.y+this.altura && this.destruido == false && sentidoCircleY == false) {
            sentidoCircleY = true;
            this.destruido = true;
            
            //console.log(this.color);
            }else if (colisionBolaX >= this.x && colisionBolaX <= this.x+this.base && colisionBolaY == this.y && this.destruido == false && sentidoCircleY == true) {
            sentidoCircleY = false;
            this.destruido = true;
            
            //console.log(this.color);
            }else if (colisionBolaY >= this.y && colisionBolaY <= this.y+this.altura && colisionBolaX == this.x+this.base && this.destruido == false ) {
                        sentidoCircleX = true;
                        this.destruido = true
                        
            

            }else if (colisionBolaY >= this.y && colisionBolaY <= this.y+this.altura && colisionBolaX == this.x && this.destruido == false  ) {
                        sentidoCircleX = false;
                        this.destruido = true
                        console.log("ENTRO!!!");
            

        }
            


        
    };
    
 }


 //funcion para añadir bloques

 function crearBloques(){
    var base = 30
    var altura = 20
    var x= 10
    var y =50

     for (var j = 0; j < 20; j++) {
         for (let i = 0; i < 16; i++) {
            var block = new bloques(x,y,{r: 168,g: 0,b: 255},base,altura,false)

            bloquesArray.push(block);

            x+=30;

        }
        x=10
        y+=20
     }
 }



//)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
function setup(){
    
    createCanvas(XW,YW)
    crearBloques()
    
}


//es como un while
function draw(){
    background('black')
    //console.log(bloquesArray[0].x)

   


    for (var i = 0; i < bloquesArray.length; i++) {
        if (bloquesArray[i].destruido) {
            fill("black")
            rect(bloquesArray[i].x,bloquesArray[i].y,bloquesArray[i].base,bloquesArray[i].altura)
        }
        else{
            fill("red");
            rect(bloquesArray[i].x,bloquesArray[i].y,bloquesArray[i].base,bloquesArray[i].altura)
        }
        
    }

    



    for (let i = 0; i < 16; i++) {
            
               
            

    }
    
    fill(bola.color.r, bola.color.g, bola.color.b, bola.color.a || 255);
    bola.draw();
    fill(rec.color.r, rec.color.g, rec.color.b, rec.color.a || 255);
    rec.draw()
    rec.KeyPressed()


    for (var i = 0; i < bloquesArray.length; i++) {
        bloquesArray[i].colision()
        //console.log("bloque: "+i+ " destruido: "+ bloquesArray[i].destruido)
    }
    

}

