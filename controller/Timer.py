
class Timer:
    def __init__(self, exacto):
        print('Inicia Timer')
        self.time = str(exacto.hour) + ':' + str(exacto.minute) + ':' + str(exacto.second) + ':' + str(exacto.microsecond)

    @property
    def hora(self):
        return self.time

    @hora.setter
    def hora(self, exacto):
        self.time = str(self.exacto.hour) + ':' + str(self.exacto.minute) + ':' + str(self.exacto.second) + ':' + str(self.exacto.microsecond)
