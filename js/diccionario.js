function Buscar(texto){
    var text = document.getElementById("texto").value;
    
    if(text == "Hola"){
        Swal.fire("Su traducción:<br><br>By a pás");

    }else if(text == "Buenos dias"){
        Swal.fire("Su traducción:<br><br>Yakubix");

    }else if(text == "Buenas tardes"){
        Swal.fire("Su traducción:<br><br>Malkalix");

    }else if(text == "Buenas noches"){
        Swal.fire("Su traducción:<br><br>Ikubix");

    }else if(text == "¿Como esta?"){
        Swal.fire("Su traducción:<br><br>Lek va ayat?");

    }else if(text == "¿Que hora es?"){
        Swal.fire("Su traducción:<br><br>Jayeb hora?");

    }else if(text == "Hasta luego"){
        Swal.fire("Su traducción:<br><br>Patik kilbatik");

    }else if(text == "Cuidate"){
        Swal.fire("Su traducción:<br><br>Tsatayame");

    }else if(text == "Por favor"){
        Swal.fire("Su traducción:<br><br>Wokolok");

    }else if(text == "Me da un"){
        Swal.fire("Su traducción:<br><br>Akbaen junuk");

    }else if(text == "Disculpe"){
        Swal.fire("Su traducción:<br><br>Kaltikaway");

    }else if(text == "Adios"){
        Swal.fire("Su traducción:<br><br>Kilbatik");

    }else if(text == "¿Como se llama el lugar?"){
        Swal.fire("Su traducción:<br><br>Binti sbiil lo manty ayotiki?");
    
    }else if(text == "¿Podria indicarme el camino?"){
        Swal.fire("Su traducción:<br><br>Bidil stak kakbaetik bael?");

    }else if(text == "Gracias"){
        Swal.fire("Su traducción:<br><br>Wokolawal");

    }else if(text == "Que buen recorrido"){
        Swal.fire("Su traducción:<br><br>Slekil te bay a talotike");

    }else if(text == "Necesito el sanitario"){
        Swal.fire("Su traducción:<br><br>Manty hay te chaybanej");

    }else if(text == "¿Me podria contar acerca de su historia?"){
        Swal.fire("Su traducción:<br><br>Cholbej xkuxlejal bidil kaxelntal?");

    }else if(text == "¿Me podria tomar una foto?"){
        Swal.fire("Su traducción:<br><br>Loktaon");

    }else if(text == "¿Cuanto seria el total a pagar?"){
        Swal.fire("Su traducción:<br><br>Jayeb ta spicil?");

    }else if(text == "Rojo"){
        Swal.fire("Su traducción:<br></br>Tzàj");

    }else if(text == "Blanco"){
        Swal.fire("Su traducción:<br><br></br>Zak");

    }else if(text == "Verde"){
        Swal.fire("Su traducción:<br><br>Yax");

    }else if(text == "Amarillo"){
        Swal.fire("Su traducción:<br><br>Kàn");

    }else if(text == "Negro"){
        Swal.fire("Su traducción:<br><br>Ìik");

    }else{
        Swal.fire("<stronge>Lo sentimos mucho, pero esta palabra no esta disponible</stronge>");
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos mucho',
            text: 'Esta palabra no esta disponible',
          })
    }


} 

