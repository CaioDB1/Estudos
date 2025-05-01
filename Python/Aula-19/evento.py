import json

class Evento:
    id = 1

    def __init__(self, nome, local=""):
        self.nome = nome
        self.local = local
        self.id = Evento.id
        Evento.id += 1

    def imprimeInformacoes(self):
        print(f"ID do evento: {self.id}")
        print(f"Nome do evento: {self.nome}")
        print(f"Local do evento: {self.local}")
        print("-------------------")

    def toJson(self):
        return json.dumps({
            "id": self.id,
            "local": self.local,
            "nome": self.nome,
        })
    
    @staticmethod
    def calculaLimitePessoasArea(area):
        if 5 <= area < 10:
            return 5
        elif 10 <= area < 20:
            return 15
        elif area >= 20:
            return 30
        else:
            return 0

    # @classmethod
    # def criaEventoOnline(cls, nome):
    #     evento = cls(nome, local=f"https://evento.com.br/evento?id={cls.id}")
    #     return evento


#print(Evento.calculaLimitePessoasArea(3))

# ev = Evento("Aula de Python")
# ev2 = Evento("Aula de JavaScript", "São Paulo")
# ev2.imprimeInformacoes()

# print(ev2Online.id)
# print(Evento.id)

