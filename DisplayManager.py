import asyncio
import websockets
from controller.TimeDate import TimeDate
from controller.Sensors import Sensors
from controller.Sampler import Sampler
import json


class DisplayManager:
    def __init__(self):
        print('Inicia Display Manager')
        self.se = Sensors()

    async def conexion(self, websocket):
        while websocket.open:
            self.dt = TimeDate()
            datos = {'fecha': self.dt.fecha, 'hora': self.dt.hora, 'humedad': self.se.Humedad().h, 'temp': self.se.Temperatura().t, 'sens': self.se.Sensacion().s, 'press': self.se.Presion().p, 'vel': self.se.Velocidad().v, 'dir': self.se.Direccion().d, 'roc': self.se.Rocio().r}
            jason = json.dumps(datos)
            await websocket.send(jason)
            await asyncio.sleep(500)


async def main():
    async with websockets.serve(dm.conexion, 'localhost', 5678):
        await asyncio.Future()

if __name__ == "__main__":
    dm = DisplayManager()
    asyncio.run(main())
