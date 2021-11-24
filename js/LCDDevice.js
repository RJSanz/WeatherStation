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
    };
}