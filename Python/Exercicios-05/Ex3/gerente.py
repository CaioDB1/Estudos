from funcionario import Funcionario

class Gerente(Funcionario):
    def exibir(self):
        print(f"{self.nome} ganha R${self.salario} - Gerente")