class Evento:
    def __init__(self, nome):
        self.nome = nome
        self.local = "Brasil"


    def alteraNomeEvento(self, novoNome):
        print("Alterando nome do evento")
        self.nome = novoNome 
    pass
ev = Evento("Aula de Python")
ev2 = Evento("Aula de JavaScript")

print(ev.nome)
print(ev.local)
print(ev2.nome)
print(ev2.local)

# ev.nome = "Aula de Python"
# print(ev.nome)

# ev2 = Evento()
# ev2.nome = "Aula de Python"
# print(id(ev) == id(ev2))

# ev.alteraNomeEvento("Aula de JavaScript")
# print(ev.nome)

# ev2 = Evento()
# print(ev2.nome) 
