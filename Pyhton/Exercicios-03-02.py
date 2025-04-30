# Ex 1 

# texto = input("Digite um texto:")

# for letra in texto:
#     print(letra)

# Ex 2

# texto = input("Digite um texto: ")
# cont = 0
# for letra in texto:
#     if letra == "a":
#         cont += 1
# print(f"A letra A apareceu {cont} vezes")

# Ex 3

# texto = input("Digite um texto:")
# alfabeto = {}

# for letra in texto:
#     if letra in alfabeto:
#         alfabeto[letra] += 1
#     else:
#         alfabeto[letra] = 1

# print(alfabeto)

# Ex 4

# produtos = {
#     "arroz": 10,
#     "ovo": 15,
#     "abacate": 7,
#     "melancia": 9
# }

# for produto, preco in produtos.items():
#     print(f"O {produto} está custando R${preco}")

# Ex 5

# ent = 1
# total = 0
# while ent > 0:
#     ent = float(input("Digite o valor do produto a ser somado, para sair digite 0: "))
#     total += ent
# print("O total da compra foi: R$", total)

# Ex 6

# frutas1 = {"banana", "laranja", "abacaxi"}
# frutas2 = {"abacate", "melancia", "banana"}

# frutasUnidas = frutas1.union(frutas2)
# print(frutasUnidas)

# frutasInter = frutas1.intersection(frutas2)
# print(frutasInter)

# frutasDif = frutas1.difference(frutas2)
# print(frutasDif)

# Ex 7

# pessoa = {
#     "nome": "Pablo",
#     "idade": 19,
#     "endereco": {
#         "rua": 20,
#         "numero":489
#     }
# }

# for chave, valor in pessoa.items():
#     if chave == "endereco":
#         print(f"{chave}:")
#         for k, v in valor.items():
#             print(f"  {k}: {v}")
#     else:
#         print(f"{chave}: {valor} ")

# Ex 8

# alunos = [
#     ("Paulo", [5, 8, 6]),
#     ("Pedro", [7, 9, 8]),
#     ("Pablo", [4, 3, 7])
# ]

# for aluno in alunos:
#     total = 0
#     for nota in aluno[1]:
#         total += nota
#     if total/3 >= 7:
#         print(f"O aluno {aluno[0]} teve nota média {(total/3):.2f} e foi aprovado")
#     else:
#         print(f"O aluno {aluno[0]} teve nota média {(total/3):.2f} e foi reprovado")

# Ex 9

tentativas = 0

data = {
    "Jorge": "1234",
    "Mateus": "4321"
}

while tentativas < 3:
    login = input("Digite seu login: ")
    senha = input("Digite sua senha: ")
    if login in data and data[login] == senha:
        print("Login bem-sucedido")
        tentativas = 3
        break
    else:
            print("Login mal-sucedido")
    tentativas += 1