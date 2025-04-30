# Ex 1

# numero = input("Insira um número: ")
# numero = int(numero)
# print("O número é par:", numero%2 == 0)

# Ex 2

# a = 5 
# b = 10 
# x = True 
# y = False 
# print((x or y) and (a < b)) # True
# print((x or y) and not (a < b)) # False

# Ex 3

# resultado = (2 + 3) * 2 ** 2 # 20
# resultado = 2 + 3 * (2 ** 2) # 14
# resultado = 2 + (3 * 2) ** 2 # 38
# resultado = ((2 + 3) * 2) ** 2 # 100
# print(resultado) 

# Ex 4

compra = input("Valor de compra: ")
compra = float(compra)
frete = input("Valor do frete: ")
frete = float(frete)
cliente_cadastrado = input("Cliente é cadastrado no programa fidelidade: ")

cupom_valido = compra + frete > 100 or cliente_cadastrado == "s"

print("O cupom pode ser utilizado: ", cupom_valido)