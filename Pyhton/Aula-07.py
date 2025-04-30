# while True:
#     print("1")
#     print("2")

# i = 1
# while i<=100:
#     print(i)
#     i += 1
# print("Fim.")

total = 0
while True:
    valor = float(input("Digite o valor da compra: \n"))
    total = total + valor

    continuar = input("Deseja continuar? (s/n) \n")
    if continuar != "s":
        break
print("O valor total da compra é: ", total)