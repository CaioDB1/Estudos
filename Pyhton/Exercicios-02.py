#Ex 1

# num = int(input("Digite um numero: \n"))

# if num%3 == 0 and num%5 ==0:
#     print("FizzBuzz")
# elif num%3 == 0:
#     print("Fizz")
# elif num%5 == 0:
#     print("Buzz")

#Ex 2

# numA = float(input("Digite um número: \n"))
# numB = float(input("Digite outro número: \n"))
# operador = input("Digite a operação: \n")

# if operador == "+":
#     print("O resultado da operação é: ", numA+numB)
# elif operador == "-":
#     print("O resultado da operação é: ", numA-numB)
# elif operador == "*":
#     print("O resultado da operação é: ", numA*numB)
# elif operador == "/" and numB == 0:
#     print("Não é possível realizar divisão por zero!")
# elif operador == "/":
#     print("O resultado da operação é: ", numA/numB)

#Ex 3

# username = "Pietro"
# senha = 15975
# username_in = input("Digite seu username: \n")
# senha_in = int(input("Digite sua senha: \n"))

# if username_in == username and senha_in == senha:
#     print("Autenticação bem-sucedida")
# elif username != username_in:
#     print("Esse nome de usuário não existe")
# elif senha != senha_in:
#     print("A senha está incorreta")

#Ex 4

# num = int(input("Digite um número: \n"))
# i=1
# total = 0
# while i<=num:
#     total += i
#     i += 1

# print("As soma de todos os números de 1 até o digitado é: ", total)

#Ex 5

# num = int(input("Digite um número: \n"))
# i = 1
# while i <= num:
#     if i%2 == 0:
#         print(i)
#     i += 1

#Ex 6

num = int(input("Digite um número: \n"))

if num < 2:
    print("Não é primo")
else:
    i = 2
    eh_primo = True
    while num > i:
        if num%i == 0:
            eh_primo = False
            break
        else:
            i += 1
    if eh_primo:
        print("É primo")
    else:
        print("Não é primo")

# if num >= 2 and num < 4:
#     print("É primo")
# elif num%2 != 0 and num%3 != 0:
#     print("É primo")

#Ex 7

# resposta = 22
# tentativas = 3
# num = 0

# while tentativas > 0:
#     num = int(input("Digite o número: \n"))
#     if num == resposta:
#         print("Acertou")
#     elif num>resposta:
#         tentativas -= 1
#         print(f"Errou! O número é menor! Você tem {tentativas} tentativas ainda!")
#     elif num<resposta:
#         tentativas -= 1
#         print(f"Errou! O número é maior! Você tem {tentativas} tentativas ainda!")
    
    
