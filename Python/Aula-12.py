# for in

notas = [8, 9, 10]

for nota in notas:
    print(nota)

pessoas = {
    "alice": 5,
    "bob": 7
}

# for pessoa in pessoas:
#     print(pessoa)
#     print(pessoas[pessoa])

for pessoa in pessoas.items():
    print(pessoa)

for pessoa in pessoas.values():
    print(pessoa)

for pessoa in pessoas.keys():
    print(pessoa)

for k, v in pessoas.items():
    print(k, v)