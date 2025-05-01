notas = [8, 10, 8.5, 10]
print(notas[1])

notas.append(9)

print(notas)
notas.sort()
print(notas)

notas.sort(reverse=True)
print(notas)

x = notas.pop()
print(notas)
print(x)

notas.insert(0, 8)
print("Após inserção")
print(notas)

notas.pop(0)
print(notas)

pessoa = ["Dante", 25, "123abc"]
print("O nome é", pessoa[0])
print("A idade é", pessoa[1])

pessoas = [
    ["Leo", 43],
    ["Mario", 31],
]

i = 0
total = 0
while i<len(notas):
    total += notas[i]
    i += 1

print("A média das notas é:", total/len(notas))