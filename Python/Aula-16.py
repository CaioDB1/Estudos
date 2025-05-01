notas_originais = [8, 10, 7]
notas_ordenadas = sorted(notas_originais) # Cria uma cópia e ordena a cópia, deixando a lista original intacta
# notas_ordenadas.sort() # Ordena a lista original

print("Ordenadas:", notas_ordenadas)
print("Originais:", notas_originais)

def faz_algum_calculo(lista):
    ...
    lista.append(6)
    ...

lista1 = [1, 2, 3]
x = faz_algum_calculo(lista1)
print(lista1)

tupla = (1, 2, 3)
tupla1 = (1, 2, 3)

print(id(tupla) == id(tupla1)) # A tupla, diferente da lista, é imutavel e por isso as duas tem o mesmo id, tem o mesmo funcionamento do id de números
