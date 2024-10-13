import random

# Parámetros del algoritmo
NUM_BITS = 10        # Longitud de la cadena binaria
POP_SIZE = 5        # Tamaño de la población
NUM_GENERATIONS = 5  # Número de generaciones
MUTATION_RATE = 0.1  # Tasa de mutación

# Función de fitness: cuenta el número de unos
def fitness(individual):
    return sum(individual)

# Genera un individuo aleatorio
def create_individual():
    return [random.randint(0, 1) for _ in range(NUM_BITS)]

# Selección: torneo binario
def select(population):
    i, j = random.sample(range(len(population)), 2)
    return population[i] if fitness(population[i]) > fitness(population[j]) else population[j]

# Cruce de un punto
def crossover(parent1, parent2):
    point = random.randint(1, NUM_BITS - 1)
    return parent1[:point] + parent2[point:]

# Mutación: invierte bits con cierta probabilidad
def mutate(individual):
    for i in range(NUM_BITS):
        if random.random() < MUTATION_RATE:
            individual[i] = 1 - individual[i]

# Inicializa la población
population = [create_individual() for _ in range(POP_SIZE)]

# Evolución
for generation in range(NUM_GENERATIONS):
    print(f"Generación {generation}")
    population = sorted(population, key=fitness, reverse=True)
    print("Mejor individuo:", population[0], "Fitness:", fitness(population[0]))

    new_population = []
    while len(new_population) < POP_SIZE:
        parent1 = select(population)
        parent2 = select(population)
        offspring = crossover(parent1, parent2)
        mutate(offspring)
        new_population.append(offspring)
    population = new_population
