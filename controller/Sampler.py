from Sensors import Sensors
import requests


class Sampler:
    def __init__(self):
        print('Muestreo de 24 horas')
        self._rango = ''
        self._d = Sensors.Direccion()
        self._v = Sensors.Velocidad()
        self._s = Sensors.Sensacion()
        self._t = Sensors.Temperatura()
        self._r = Sensors.Rocio()
        self._h = Sensors.Humedad()
        self._p = Sensors.Presion()
        self._api = requests.get("https://api.openweathermap.org/data/2.5/onecall?lat=18.85&lon=-97.1&exclude=hourly,minutely&appid=75b14024248b0bd503079edfc127842c")
        self._api = self._api.json()
        self._var = self._api['daily']

    def uno(self, tipo):
        for self.i in self._var:
            for self.x in self.i:
                if self.x == tipo:
                    if tipo == 'wind_speed':
                        if self.v < self.i[self.x]:
                            self.v = self.i[self.x]
                            self.d = self.i['wind_deg']
                    if tipo == 'dew_point':
                        if self.r < self.i[self.x]:
                            self.r = self.i[self.x]
                    if tipo == 'humidity':
                        if self.h < self.i[self.x]:
                            self.h = self.i[self.x]
                    if tipo == 'pressure':
                        if self.p < self.i[self.x]:
                            self.p = self.i[self.x]

    def dos(self, tipo):
        for self.i in self._var:
            for self.x in self.i:
                if self.x == tipo:
                    self._j = self.i[self.x]
                    for self.n in self._j:
                        if tipo == 'feels_like':
                            if self.s < self._j[self.n]:
                                self.s = self._j[self.n]
                        if tipo == 'temp':
                            if self.t < self._j[self.n]:
                                self.t = self._j[self.n]

    @property
    def d(self):
        return self._d.d

    @property
    def v(self):
        return self._v.v

    @property
    def s(self):
        return self._s.s

    @property
    def t(self):
        return self._t.t

    @property
    def r(self):
        return self._r.r

    @property
    def h(self):
        return self._h.h

    @property
    def p(self):
        return self._p.p

    @d.setter
    def d(self, d):
        self._d.d = d

    @v.setter
    def v(self, v):
        self._v.v = v

    @s.setter
    def s(self, s):
        self._s.s = s

    @t.setter
    def t(self, t):
        self._t.t = t

    @r.setter
    def r(self, r):
        self._r.r = r

    @h.setter
    def h(self, h):
        self._h.h = h

    @p.setter
    def p(self, p):
        self._p.p = p


s = Sampler()
s.uno('wind_speed')
s.uno('dew_point')
s.uno('humidity')
s.dos('feels_like')
s.dos('temp')
s.uno('pressure')
print(s.v)
print(s.d)
print(s.s)
print(s.t)
print(s.r)
print(s.h)
print(s.p)
'''
api = requests.get("https://api.openweathermap.org/data/2.5/onecall?lat=18.85&lon=-97.1&exclude=hourly,minutely&appid=75b14024248b0bd503079edfc127842c")
api = api.json()
api = api['daily']
print(api)
var = 0
for i in api:
    for x in i:
        if x == 'temp':
            print(i[x])
            var = i[x]
            for n in var:
                print(var[n])
'''