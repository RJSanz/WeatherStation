function actualizar(){
    var fecha = document.getElementById("Fecha");
    var hora = document.getElementById("Hora");
    var humedad = document.getElementById("Humedad");
    var temp = document.getElementById("Temperatura");
    var sens = document.getElementById("Sensacion");
    var press = document.getElementById("Presion");
    var vel = document.getElementById("Velocidad");
    var dir = document.getElementById("Direccion");
    var roc = document.getElementById("Rocio");
    var h = document.getElementById("h");
    var t = document.getElementById("t");
    var s = document.getElementById("s");
    var p = document.getElementById("p");
    var v = document.getElementById("v");
    var d = document.getElementById("d");
    var r = document.getElementById("r");

    var di = document.getElementById("di").value;
    var vi = document.getElementById("vi").value;
    var si = document.getElementById("si").value;
    var ti = document.getElementById("ti").value;
    var ri = document.getElementById("ri").value;
    var hi = document.getElementById("hi").value;
    var pi = document.getElementById("pi").value;

    const websocket = new WebSocket("ws://localhost:5678/");
    websocket.onmessage = ({ data }) => {
        const obj = JSON.parse(data);
        fecha.innerHTML = obj.fecha;
        hora.innerHTML = obj.hora;

        if(di == "desconecta"){
            dir.innerHTML = obj.dir + "°";
            d.innerHTML = obj.dv + "°";
        }
        if(vi == "desconecta"){
            vel.innerHTML = obj.vel + "m/s";
            v.innerHTML = obj.vv + "m/s";
        }
        if(si == "desconecta"){
            sens.innerHTML = obj.sens.toFixed(2) + "°C";
            s.innerHTML = obj.st.toFixed(2) + "°C";
        }
        if(ti == "desconecta"){
             temp.innerHTML = obj.temp.toFixed(2) + "°C";
             t.innerHTML = obj.te.toFixed(2) + "°C";
        }
        if(ri == "desconecta"){
            roc.innerHTML = obj.roc.toFixed(2) + "°C";
            r.innerHTML = obj.pr.toFixed(2) + "°C";
        }
        if(hi == "desconecta"){
            humedad.innerHTML = obj.humedad + "g/m3";
            h.innerHTML = obj.hu + "g/m3";
        }
        if(pi == "desconecta"){
            press.innerHTML = obj.press + "hPa";
            p.innerHTML = obj.pa + "hPa";
        }

    };
}

function dv(){
    var di = document.getElementById("di").value;
    if(di == "desconecta"){
        document.getElementById("Direccion").innerHTML = "Desconectado";
        document.getElementById("d").innerHTML = "Desconectado";
        document.getElementById("di").innerHTML = "Conectar";
        document.getElementById("di").value = "conecta";
    }
    else{
        document.getElementById("di").innerHTML = "Desconectar";
        document.getElementById("di").value = "desconecta";
        document.getElementById("Direccion").innerHTML = "Conectando";
        document.getElementById("d").innerHTML = "Conectando";
    }

}
function vv(){
    var di = document.getElementById("vi").value;
    if(di == "desconecta"){
        document.getElementById("Velocidad").innerHTML = "Desconectado";
        document.getElementById("v").innerHTML = "Desconectado";
        document.getElementById("vi").innerHTML = "Conectar";
        document.getElementById("vi").value = "conecta";
    }
    else{
        document.getElementById("vi").innerHTML = "Desconectar";
        document.getElementById("vi").value = "desconecta";
        document.getElementById("Velocidad").innerHTML = "Conectando";
        document.getElementById("v").innerHTML = "Conectando";
    }

}

function st(){
    var di = document.getElementById("si").value;
    if(di == "desconecta"){
        document.getElementById("Sensacion").innerHTML = "Desconectado";
        document.getElementById("s").innerHTML = "Desconectado";
        document.getElementById("si").innerHTML = "Conectar";
        document.getElementById("si").value = "conecta";
    }
    else{
        document.getElementById("si").innerHTML = "Desconectar";
        document.getElementById("si").value = "desconecta";
        document.getElementById("Sensacion").innerHTML = "Conectando";
        document.getElementById("s").innerHTML = "Conectando";
    }

}

function te(){
    var di = document.getElementById("ti").value;
    if(di == "desconecta"){
        document.getElementById("Temperatura").innerHTML = "Desconectado";
        document.getElementById("t").innerHTML = "Desconectado";
        document.getElementById("ti").innerHTML = "Conectar";
        document.getElementById("ti").value = "conecta";
    }
    else{
        document.getElementById("ti").innerHTML = "Desconectar";
        document.getElementById("ti").value = "desconecta";
        document.getElementById("Temperatura").innerHTML = "Conectando";
        document.getElementById("t").innerHTML = "Conectando";
    }

}

function pr(){
    var di = document.getElementById("ri").value;
    if(di == "desconecta"){
        document.getElementById("Rocio").innerHTML = "Desconectado";
        document.getElementById("r").innerHTML = "Desconectado";
        document.getElementById("ri").innerHTML = "Conectar";
        document.getElementById("ri").value = "conecta";
    }
    else{
        document.getElementById("ri").innerHTML = "Desconectar";
        document.getElementById("ri").value = "desconecta";
        document.getElementById("Rocio").innerHTML = "Conectando";
        document.getElementById("r").innerHTML = "Conectando";
    }

}

function hu(){
    var di = document.getElementById("hi").value;
    if(di == "desconecta"){
        document.getElementById("Humedad").innerHTML = "Desconectado";
        document.getElementById("h").innerHTML = "Desconectado";
        document.getElementById("hi").innerHTML = "Conectar";
        document.getElementById("hi").value = "conecta";
    }
    else{
        document.getElementById("hi").innerHTML = "Desconectar";
        document.getElementById("hi").value = "desconecta";
        document.getElementById("Humedad").innerHTML = "Conectando";
        document.getElementById("h").innerHTML = "Conectando";
    }

}

function pa(){
    var di = document.getElementById("pi").value;
    if(di == "desconecta"){
        document.getElementById("Presion").innerHTML = "Desconectado";
        document.getElementById("p").innerHTML = "Desconectado";
        document.getElementById("pi").innerHTML = "Conectar";
        document.getElementById("pi").value = "conecta";
    }
    else{
        document.getElementById("pi").innerHTML = "Desconectar";
        document.getElementById("pi").value = "desconecta";
    }

}