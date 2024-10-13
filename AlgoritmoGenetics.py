import random

# Parámetros
POBLACION_INICIAL = 100
TASA_MUTACION = 0.01
GENERACIONES = 40
OBJETIVO = "UNEMI"

# Función de aptitud: cuenta el número de caracteres correctos
def calcular_fitness(individuo):
    fitness = sum(1 for i, c in enumerate(individuo) if c == OBJETIVO[i])
    return fitness

# Generar un individuo aleatorio
def generar_individuo(longitud):
    letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
    return ''.join(random.choice(letras) for _ in range(longitud))

# Generar población inicial
def generar_poblacion(tamaño, longitud):
    return [generar_individuo(longitud) for _ in range(tamaño)]

# Selección: selecciona dos individuos con mayor fitness
def seleccionar(poblacion):
    poblacion = sorted(poblacion, key=lambda x: calcular_fitness(x), reverse=True)
    return poblacion[:2]

# Cruce: combinación simple de dos padres
def cruzar(padre1, padre2):
    punto = random.randint(1, len(padre1)-1)
    hijo1 = padre1[:punto] + padre2[punto:]
    hijo2 = padre2[:punto] + padre1[punto:]
    return hijo1, hijo2

# Mutación: cambia un carácter con cierta probabilidad
def mutar(individuo):
    letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
    individuo = list(individuo)
    for i in range(len(individuo)):
        if random.random() < TASA_MUTACION:
            individuo[i] = random.choice(letras)
    return ''.join(individuo)

# Algoritmo Genético
def algoritmo_genetico():
    poblacion = generar_poblacion(POBLACION_INICIAL, len(OBJETIVO))
    for generacion in range(GENERACIONES):
        # Evaluar fitness
        poblacion = sorted(poblacion, key=lambda x: calcular_fitness(x), reverse=True)
        if poblacion[0] == OBJETIVO:
            print(f"Objetivo alcanzado en la generación {generacion}: {poblacion[0]}")
            return

        # Seleccionar los mejores individuos
        padres = seleccionar(poblacion)

        # Crear nueva población
        nueva_poblacion = padres.copy()
        while len(nueva_poblacion) < POBLACION_INICIAL:
            padre1, padre2 = random.sample(padres, 2)
            hijo1, hijo2 = cruzar(padre1, padre2)
            nueva_poblacion.append(mutar(hijo1))
            if len(nueva_poblacion) < POBLACION_INICIAL:
                nueva_poblacion.append(mutar(hijo2))

        poblacion = nueva_poblacion

    print("No se alcanzó el objetivo dentro del límite de generaciones.")

# Ejecutar el Algoritmo Genético
algoritmo_genetico()
