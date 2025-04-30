# Conjuntos

usuarios = {"Alice", "Bob", "Jorge"}
usuarios_2 = set(["Alice", "Bob", "Lucas"])

print(usuarios == usuarios_2)

print(usuarios)
usuarios.add("Bob") # Conjuntos não aceitam dados repetidos
print(usuarios)
usuarios.add("Carlos")
print(usuarios)

# Um uso possivel é tirar duplicatas de listas convertendo para conjuntos:
ex = ["Abacate", "Banana", "Abacate"]
print(ex)
ex_con = set(ex)
print(ex_con)

print(usuarios.union(usuarios_2)) # .union junta os elementos dos dois conjuntos

# e_igual = usuarios.union(usuarios_2) == usuarios | usuarios_2 # Pode usar | para union também
# print(e_igual)

print(usuarios.intersection(usuarios_2)) # .intersection junta os elementos em comum dos dois conjuntos

# e_igual = usuarios.intersection(usuarios_2) == usuarios & usuarios_2 # Pode usar & para intersection também
# print(e_igual)

print(usuarios.difference(usuarios_2)) # .difference pega apenas os elementos do primeiro conjunto que não estão no segundo

e_igual = usuarios.difference(usuarios_2) == usuarios - usuarios_2 # Pode usar - para difference também
print(e_igual)
