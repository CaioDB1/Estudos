# Ex 1

def ePrimo(n):
    cont = 1
    x = 1
    if n <= 1:
        return False
    elif n <= 3:
        return True
    while x < n:
        if n%x == 0:
            cont += 1
        x += 1
    if cont > 2:
        return False
    else: 
        return True
    
print(ePrimo(23))

# Ex 2

def reTupla(lista):
    maior = lista[0]
    i = 0
    pos = 0
    for num in lista:
        if num > maior:
            maior = num
            pos = i
        i += 1
    return (pos, maior)

print(reTupla([1, 2, 5, 3, 4, 10, 9, 8]))

# Ex 3

# def maiorIdade(pessoa):
#     if pessoa[1] >= 18:
#         print(f"{pessoa[0]} é maior de idade.")
#     else:
#         print(f"{pessoa[0]} é menor de idade.")

# maiorIdade(("Claudio", 17))

# Ex 4

pessoa = {
    "nome": "Claudio",
    "idade": 18,
}

def maiorIdade(pessoa):
    if type(pessoa) == dict:
        if pessoa["idade"] >= 18:
            print(f"{pessoa["nome"]} é maior de idade.")
        else:
            print(f"{pessoa["nome"]} é menor de idade.")
    elif type(pessoa) == tuple:
        if pessoa[1] >= 18:
            print(f"{pessoa[0]} é maior de idade.")
        else:
            print(f"{pessoa[0]} é menor de idade.")

maiorIdade(pessoa)
maiorIdade(("Claudio", 17))

# Ex 5

def buscaLista(lista, elemento):
    i = 0
    while i < len(lista):
        if elemento == lista[i]:
            return True
        i += 1
    return False

print(buscaLista([1,2,3,4,5], 6))

# Ex 6

def fatorial(n):
    if n == 0 or n == 1:
        return 1
    elif n < 0:
        return "Digite um número valido."
    else:
        total = n
        while n > 1:
            total *= n-1
            n -= 1
        return total

print(fatorial(9))