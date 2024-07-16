export default class Operador {

    constructor(c, t, s, ht) {
        this.cedula = c;
        this.tipo = t;
        this.horasex = 0;
        this.sueldob = s;
        this.horast = ht;
    }

    get cedula() {
        return this._cedula;
    }
    set cedula(c) {
    this._cedula=c;
}
set tipo(t){
    this._tipo=t;
}
    get tipo() {
        return this._tipo;
    }

    get sueldob() {
        return this._sueldob;
    }

    
    set sueldob(s) { 
        this._sueldob = s;

    }

    set horast(ht) {
        this._horast = ht;
    }

    get horast() {
        return this._horast;
    }
    

    canthorasex()
    {
    if (this.horast > 40) {  
        return this.horasex=  this.horast - 40;
    } 
    else {
        return 0;
        
    }
    }
}
