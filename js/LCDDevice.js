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

    const websocket = new WebSocket("ws://localhost:5678/");
    websocket.onmessage = ({ data }) => {
        const obj = JSON.parse(data);
        fecha.innerHTML = obj.fecha;
        hora.innerHTML = obj.hora;
        humedad.innerHTML = obj.humedad + "g/m3";
        temp.innerHTML = obj.temp.toFixed(2) + "°C";
        sens.innerHTML = obj.sens.toFixed(2) + "°C";
        roc.innerHTML = obj.roc.toFixed(2) + "°C";
        press.innerHTML = obj.press + "hPa";
        vel.innerHTML = obj.vel + "m/s";
        dir.innerHTML = obj.dir + "°";
        h.innerHTML = obj.hu + "g/m3";
        t.innerHTML = obj.te.toFixed(2) + "°C";
        s.innerHTML = obj.st.toFixed(2) + "°C";
        r.innerHTML = obj.pr.toFixed(2) + "°C";
        p.innerHTML = obj.pa + "hPa";
        v.innerHTML = obj.vv + "m/s";
        d.innerHTML = obj.dv + "°";

    };
}