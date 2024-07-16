//De un operador se tienen los siguientes datos: cédula de identidad, tipo de operador (1=Supervisor,
  //  2=Diseñador, 3=Costurera, 4=Bordador, 5=Empacador), horas trabajadas en la semana y el precio de la hora
    //base. Si trabaja más de 40 horas a la semana, el operador tendrá el beneficio de bono por horas extras.
    import  Operador  from "./Operador.js";
    import  Empresa  from "./Empresa.js";
     
    let op = new Operador(12345, 1, 500, 45 );
    let todoempresa = new Empresa();
    todoempresa.procesaroperador(op);

    let salida = document.getElementById("salida");
    salida.innerHTML += "cedula:"+ op.cedula + "<br>";
    salida.innerHTML += "precio de las horas extras:"+ todoempresa.devolverphex()+  "<br>";
    salida.innerHTML += "horas extras:"+ op.canthorasex()+   "<br>";
    salida.innerHTML += "bono por horas extras:"+ todoempresa.bono()+  "<br>";
    salida.innerHTML += "total cobro:"+ todoempresa.devolvertotalco()+   "<br>";
