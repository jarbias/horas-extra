export default class Empresa {
    constructor() {
        this.totalcobro = 0;
        this.preciohora = 0;
        this.preciohoraex = 0;
        this.tothoraex=0;

    }
    procesaroperador(op) {
        this.preciohora= op.sueldob/ 40;
     
        
        
         this.totalcobro= this.tothoraex + op.sueldob;  
         if (op.tipo == 1) {
            this.preciohoraex = this.preciohora * 0.32;
        } else if (op.tipo == 2) {
              this.preciohoraex = this.preciohora * 0.23;
        } else if (op.tipo == 3) {
             this.preciohoraex = this.preciohora * 0.17;
        } else if (op.tipo == 4) {
            this.preciohoraex = this.preciohora * 0.07;
        } else  {
             this.preciohoraex = this.preciohora * 0.05;
        }
         this.tothoraex= this.preciohoraex * op.horasex;
 
    
            
        }
    
    devolvertotalco(){
        return this.totalcobro;
    }
 devolverphex() {
        return this.preciohoraex;
    }

 bono(){
  return  this.tothoraex;
 }
}