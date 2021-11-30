from controller.Timer import Timer
from datetime import date, datetime


class TimeDate(Timer):
    def __init__(self):
        print('Inicia TimeDate')
        super().__init__(datetime.now())
        self.now = date.today()
        self.date = str(self.now.day) + '/' + str(self.now.month) + '/' + str(self.now.year)


    @property
    def fecha(self):
        return self.date

    @fecha.setter
    def fecha(self):
        self.date = str(self.date.day) + '/' + str(self.date.month) + '/' + str(self.date.year)


