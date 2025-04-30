x = (5, 10)
y = 5, 10
print(x[0])
print(x[1])
print(type(x))
print(type(y))

pessoa = ("Davi", 27)
notas = [10, 9, 8]

turma = (
    ("Nono ano", 3),
    [8, 9, 10],
)

# notas = [8, 10]
# print(notas)
# notas[0] = 9
# print(notas)

# notas = (8, 10) # A tupla é imutavel, não pode ser alterada, diferente das listas
# print(notas)
# notas[0] = 9
# print(notas)

pessoa = ("John", 26, True)
nome, idade, admin = pessoa #Desenpacotamento
print(nome, idade, admin)

pessoas = [
    ("Pessoa1", 59, True),
    ("Pessoa2", 75, False)
]
