# Ex 1

# i = 1
# lista = []
# while i >= 0:
#     i = int(input("Digite um número: "))
#     if i < 0:
#         break
#     lista.append(i)

# print(lista)

# Ex 2

# lista = [1, 10, 20, 35, 22, 12] 
# # Resultado deve ser = 100
# resultado = 0

# # for num in lista:
# #     resultado += num
# # print(resultado)

# i = 0
# while i < len(lista):
#     resultado += lista[i]
#     i += 1
# print(resultado)

# Ex 3

# lista = [1, 10, 20, 35, 22, 12] 
# # Resultado deve ser 16

# total = 0
# for num in lista:
#     total += num

# print("A média é:", total//len(lista))

# Ex 4

# alunos = [
#     ("Alice", 8),
#     ("Bob", 7),
#     ("Carlos", 9)
# ]

# total = 0
# i = 0
# while i<len(alunos):
#     total += alunos[i][1]
#     i += 1

# print("A média das notas é: ", total/len(alunos))

# Ex 5

# alunos = [
#     {
#         "nome": "Alice",
#         "nota": 8,
#     },
#     {
#         "nome": "Bob",
#         "nota": 7,
#     },
#     {
#         "nome": "Carlos",
#         "nota": 9,
#     }
# ]
# total = 0
# for aluno in alunos:
#     total += aluno["nota"]

# print("A média das notas é:", total/len(alunos))

# Ex 6

# lista = [1, 3, 9, 5, 4, 2]
# # Deve imprimir 9

# i = lista[0]

# for num in lista:
#     if num > i:
#         i = num
# print(i)

# Ex 7

# texto = input("Digite um texto: ")
# letrario = {
#     "a": 0,
#     "b": 0,
#     "c": 0,
#     "d": 0,
#     "e": 0,
#     "f": 0,
#     "g": 0,
#     "h": 0,
#     "i": 0,
#     "j": 0,
#     "k": 0,
#     "l": 0,
#     "m": 0,
#     "n": 0,
#     "o": 0,
#     "p": 0,
#     "q": 0,
#     "r": 0,
#     "t": 0,
#     "u": 0,
#     "v": 0,
#     "w": 0,
#     "x": 0,
#     "y": 0,
#     "z": 0
# }

# for x in texto:
#     letrario[x] += 1
#     print(x)

# print(letrario)

# Ex 8

# lista = ["a", 5, {1}] 

# def inverte_lista(lista):
#     lista_invertida = []
#     tam = len(lista) - 1
#     for obj in lista:
#         tam -= 1
#         return lista_invertida.append(lista[tam])
        
    
    

# lista_invertida = inverte_lista(lista) 
# print(lista_invertida) 
# # [{1}, 5, "a"]

# texto = input("Digite um texto: ").lower()
# letrario = {letra: 0 for letra in "abcdefghijklmnopqrstuvwxyz"}

# for x in texto:
#     if x in letrario:
#         letrario[x] += 1

# print(letrario)

texto = input("Digite um texto: ").lower()

contagem = {}

for letra in texto:
    if letra.isalpha():  # verifica se é uma letra
        if letra in contagem:
            contagem[letra] += 1
        else:
            contagem[letra] = 1

print(contagem)
