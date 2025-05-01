def calcularConta(consumo, taxaServico=0.1, descontoFidelidade=0):
    if taxaServico == 0 and descontoFidelidade == 0:
        return consumo
    servico = consumo * taxaServico
    desconto = consumo * descontoFidelidade
    valor = consumo + servico
    valor -= desconto
    #print("O valor a ser pago é:", valor)
    return valor

print(calcularConta(consumo=100))