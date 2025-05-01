from evento import Evento

class EventoOnline(Evento):
    def __init__(self, nome, _=""):
        local = f"https://evento.com.br/evento?id={EventoOnline.id}"
        super().__init__(nome, local) # Evento.__init__(self, nome, local)

    def imprimeInformacoes(self):
        print(f"ID do evento: {self.id}")
        print(f"Nome do evento: {self.nome}")
        print(f"Link para acessar o evento: {self.local}")
        print("-------------------")