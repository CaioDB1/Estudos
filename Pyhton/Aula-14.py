# def calcularConta(consumo, taxaServico, descontoFidelidade):
#     servico = consumo * taxaServico
#     desconto = consumo * descontoFidelidade
#     valor = consumo + servico
#     valor -= desconto
#     #print("O valor a ser pago é:", valor)
#     return valor

# valor = calcularConta(consumo=100, taxaServico=0.15, descontoFidelidade=0.10)
# print("O valor é:", valor)

"""
consumo = 100
servico = consumo * taxaServico # 10
desconto = consumo * descontoFidelidade # 5

valor = consumo + servico # 110
valor -= desconto # 105
"""

def qualquer():
    print("Oi")
    # return # A função tem um return por padrão

a = qualquer()
print(a)

def calcularConta(consumo, taxaServico, descontoFidelidade):
    if taxaServico == 0 and descontoFidelidade == 0:
        return consumo
    servico = consumo * taxaServico
    desconto = consumo * descontoFidelidade
    valor = consumo + servico
    valor -= desconto
    #print("O valor a ser pago é:", valor)
    return valor

print(calcularConta(consumo=100, taxaServico=0, descontoFidelidade=0))