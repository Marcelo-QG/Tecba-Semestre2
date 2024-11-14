import random
numeros_desordenados = [random.randint(1, 100) for _ in range(10)]
print("Lista original:", numeros_desordenados)

numeros_ordenados = sorted(numeros_desordenados)
print("Lista ordenada de mayor a menor:", numeros_ordenados)
