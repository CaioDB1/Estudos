# Funções

# def darBoasVindas():
#     print("Olá")
#     print("Bem-vindo ao curso de Python")

# darBoasVindas()

def darBoasVindas(nome, sobrenome, nomeDoCurso):
    print("Olá,", nome, sobrenome)
    print("Bem-vindo ao curso de", nomeDoCurso)

#darBoasVindas("Jorge", "Augusto", "JavaScript")
# keyword arguments
darBoasVindas("Jorge", nomeDoCurso="JavaScript", sobrenome="Augusto")

def calcularConta(total, taxaServico, descontoFidelidade):
    ...

calcularConta(total=90, taxaServico=0.1, descontoFidelidade=0.05)

def soma(a, b):
    ...
soma(5, 10)