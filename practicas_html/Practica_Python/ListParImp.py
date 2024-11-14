import random
numeros = [random.randint(1, 100) for _ in range(10)]
print("Lista original:", numeros)

numeros_pares = []
numeros_impares = []

for numero in numeros:
    if numero % 2 == 0:
        numeros_pares.append(numero)
    else:
        numeros_impares.append(numero)

print("Números pares:", numeros_pares)
print("Números impares:", numeros_impares)