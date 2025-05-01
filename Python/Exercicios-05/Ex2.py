class Produto:
    total_produtos = 0
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco
        self.__class__.total_produtos += 1

    def exibir(self):
        print(f"Produto: {self.nome} - R${self.preco}")

compra1 = Produto("Banana", 3.50)
compra1.exibir()
compra2 = Produto("Maçã", 2.00)
compra3 = Produto("Pêra", 4.20)
compra2.exibir()
print(Produto.total_produtos)  # Deve imprimir 3
