class Funcionario:
    def __init__(self, nome, salario):
        self.nome = nome
        self.salario = salario
    def exibir(self):
        print(f"{self.nome} ganha R${self.salario}")
