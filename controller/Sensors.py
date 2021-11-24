import requests


class Sensors:
    def __init__(self):
        print('Verifica sensores')

    class Humedad:
        def __init__(self):
            print('Sensor de Humedad')
            self.__response = requests.get("http://api.openweathermap.org/data/2.5/weather?id=3522307&appid=75b14024248b0bd503079edfc127842c")
            self.__response = self.__response.json()
            self.__response = self.__response['main']
            self._h = self.__response['humidity']

        @property
        def h(self):
            return self._h

        @h.setter
        def h(self, h):
            self._h = h

    class Temperatura:
        def __init__(self):
            print('Sensor de Temperatura')
            self.__response = requests.get("http://api.openweathermap.org/data/2.5/weather?id=3522307&appid=75b14024248b0bd503079edfc127842c")
            self.__response = self.__response.json()
            self.__response = self.__response['main']
            self._conversion = float(self.__response['temp'])
            self._t = self._conversion - 273.15

        @property
        def t(self):
            return self._t

        @t.setter
        def t(self, t):
            self._t = t

    class Presion:
        def __init__(self):
            print('Sensor de Presion')
            self.__response = requests.get("http://api.openweathermap.org/data/2.5/weather?id=3522307&appid=75b14024248b0bd503079edfc127842c")
            self.__response = self.__response.json()
            self.__response = self.__response['main']
            self._p = self.__response['pressure']

        @property
        def p(self):
            return self._p

        @p.setter
        def p(self, p):
            self._p = p

    class Velocidad:
        def __init__(self):
            print('Sensor de Velocidad')
            self.__response = requests.get("http://api.openweathermap.org/data/2.5/weather?id=3522307&appid=75b14024248b0bd503079edfc127842c")
            self.__response = self.__response.json()
            self.__response = self.__response['wind']
            self._v = self.__response['speed']

        @property
        def v(self):
            return self._v

        @v.setter
        def v(self, v):
            self._v = v

    class Direccion:
        def __init__(self):
            print('Sensor de Direccion')
            self.__response = requests.get("http://api.openweathermap.org/data/2.5/weather?id=3522307&appid=75b14024248b0bd503079edfc127842c")
            self.__response = self.__response.json()
            self.__response = self.__response['wind']
            self._d = self.__response['deg']

        @property
        def d(self):
            return self._d

        @d.setter
        def d(self, d):
            self._d = d

    class Sensacion:
        def __init__(self):
            print('Sensor de Sensacion')
            self.__response = requests.get("http://api.openweathermap.org/data/2.5/weather?id=3522307&appid=75b14024248b0bd503079edfc127842c")
            self.__response = self.__response.json()
            self.__response = self.__response['main']
            self._conversion = float(self.__response['feels_like'])
            self._s = self._conversion - 273.15

        @property
        def s(self):
            return self._s

        @s.setter
        def s(self, s):
            self._s = s

    class Rocio:
        def __init__(self):
            print('Sensor de Sensacion')
            self.__response = requests.get("https://api.openweathermap.org/data/2.5/onecall?lat=18.85&lon=-97.1&exclude=hourly,daily&appid=75b14024248b0bd503079edfc127842c")
            self.__response = self.__response.json()
            self.__response = self.__response['current']
            self._conversion = float(self.__response['dew_point'])
            self._r = self._conversion - 273.15

        @property
        def r(self):
            return self._r

        @r.setter
        def r(self, r):
            self._r = r


humedad = Sensors().Humedad()
print(humedad.h)
humedad.h = 32
print(humedad.h)