from eventoOnline import EventoOnline
from evento import Evento

evOnline = EventoOnline("Live de Python")
ev2Online = EventoOnline("Live de JavaScript")
# evOnline.imprimeInformacoes()
# ev2Online.imprimeInformacoes()
print(evOnline.toJson())

ev = Evento("Aula de Python", "São Paulo")
# ev.imprimeInformacoes()