# Dicionarios

notas = {
    "alice": 10,
    "bob": 8,
    "Carlos": 9
}
print(notas["alice"])
#print(notas["alic"])

janeiro = {
    1: "Sábado",
    2: "Domingo"
}

print(janeiro[1])

#pessoa = ("Gabriel", 28)

gabriel = {
    "nome": "Gabriel",
    "idade": 26,
    "admin": True,
}

print(gabriel["idade"])

alice = {
    "nome": "Alice",
    "endereço": {
        "rua": "25 de Março",
        "numero": 278
    }
}

print(alice["nome"])
print(alice["endereço"])
print(alice["endereço"]["rua"])