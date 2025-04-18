---
layout: post
title: "Fundamentos de Programación"
date: 2025-03-24 00:00:00 -0300
categories: programacion
tags: programacion python
excerpt: La programación es la clave para resolver problemas abstractos mediante código. Aquí exploro conceptos fundamentales como variables, operadores, estructuras de control, funciones y POO con ejemplos prácticos en Python.
reading_time: "5 minutos"
image: "https://github.com/adocman/adocman.github.io/blob/main/assets/images/code.jpg?raw=true"
permalink: "/:categories/:title"
---
## Resumen y Contexto

La programación básica se centra en aprender conceptos fundamentales que permiten resolver problemas mediante código. Estos conceptos incluyen:

- **Variables**: Contenedores para almacenar datos.
- **Operadores**: Símbolos que realizan operaciones en variables y valores.
- **Estructuras de control**: Como condicionales (if-else) y bucles (loops) que permiten dirigir el flujo de ejecución.
- **Funciones**: Bloques de código reutilizables que realizan tareas específicas.
- **Instancias y clases**: La base de la programación orientada a objetos, que permite modelar objetos del mundo real.
- **E/S (Entrada/Salida)**: Interacción básica con el usuario.

Estas notas son una introducción y recordatorio práctico a estos temas utilizando Python.

## Desarrollo / Ideas Clave

### 1. Variables y Tipos de Datos

Las **variables** son contenedores que almacenan datos. En Python, no es necesario declarar el tipo de dato; el lenguaje lo determina automáticamente.

**Ejemplo:**

```python
# Asignación de variables
nombre = "Carlos"
edad = 28
altura = 1.75
es_estudiante = True

print("Nombre:", nombre)
print("Edad:", edad)
print("Altura:", altura)
print("¿Es estudiante?", es_estudiante)
```

> **Concepto clave** : Una variable es simplemente un nombre asociado a un valor.

### 2. Operadores

Los operadores se utilizan para realizar cálculos y comparaciones.

* **Aritméticos** : `+`, `-`, `*`, `/`, `%`

```python
suma = 5 + 3      # Resultado: 8
resta = 5 - 3     # Resultado: 2
multiplicacion = 5 * 3  # Resultado: 15
division = 5 / 3  # Resultado: 1.666...
modulo = 5 % 3    # Resultado: 2 - devuelve el resto de la división de los números
```

* **Comparación** : `==`, `!=`, `>`, `<`, `>=`, `<=`

```python
print(5 == 3)  # False
print(5 > 3)   # True
```

* **Lógicos** : `and`, `or`, `not`

```python
print(True and False)  # False
print(not False)       # True
```

### 3. Estructuras de Control

#### Condicionales

Permiten ejecutar diferentes bloques de código en función de si se cumple o no una condición.

**Ejemplo:**

```python
if edad >= 18:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")
```

#### Loops (Bucles)

Los **loops** son estructuras que repiten una serie de instrucciones. Python ofrece principalmente dos tipos: `for` y `while`.

**Ejemplo de loop `for`:**

```python
# Imprime los números del 1 al 5
for i in range(1, 6):
    print(i)
```

**Ejemplo de loop `while`:**

```python
# Imprime números mientras la condición sea verdadera
contador = 1
while contador <= 5:
    print(contador)
    contador += 1  # Equivalente a contador = contador + 1
```

> **Concepto clave** : Los bucles ayudan a automatizar tareas repetitivas y a procesar colecciones de datos.

### 4. Funciones

Las **funciones** permiten agrupar código que realiza una tarea específica, facilitando la reutilización y organización del programa.

**Ejemplo:**

```python
def saludar(nombre):
    return f"Hola, {nombre}!"

mensaje = saludar("Ana")
print(mensaje)
```

> **Concepto clave** : Las funciones son bloques modulares que hacen el código más legible y mantenible.

### 5. Instancias y Clases

La **Programación Orientada a Objetos (POO)** permite modelar entidades del mundo real usando clases e instancias.

**Ejemplo:**

```python
class Coche:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
  
    def arrancar(self):
        print(f"El {self.marca} {self.modelo} está arrancando.")

# Crear una instancia de la clase Coche
mi_coche = Coche("Toyota", "Corolla")
mi_coche.arrancar()
```

> **Concepto clave** : Una clase es una plantilla, y una instancia es un objeto creado a partir de esa plantilla.

### 6. Entrada y Salida (E/S)

Permiten interactuar con el usuario, leyendo datos y mostrando resultados.

**Ejemplo de entrada y salida:**

```python
# Solicitar el nombre del usuario
nombre_usuario = input("¿Cuál es tu nombre? ")
print("Bienvenido,", nombre_usuario)
```

## Acciones y Próximos Pasos

* **Practicar** : Escribe pequeños scripts en Python que utilicen variables, loops, condicionales y funciones.
* **Probar** : Experimenta creando clases e instancias para modelar objetos simples, como una calculadora o un sistema de inventario.
* **Reflexionar** : Toma nota de tus errores y aprende de ellos. La práctica constante es clave en la programación.

## Insights y Serendipias

* **Simplicidad** : Python es muy amigable para principiantes, lo que facilita entender conceptos básicos de programación sin complicaciones sintácticas.
* **Modularidad** : Organizar el código en funciones y clases no solo mejora la legibilidad, sino que también facilita la reutilización en proyectos futuros.
* **Iteración** : Los loops permiten automatizar tareas que serían tediosas de realizar manualmente, reforzando el poder de la programación para resolver problemas.

## Conexiones

* [Programación Orientada a Objetos](https://adocman.github.io/tecnologia/programaci%C3%B3n-orientada-a-objetos)

## Referencias

* Documentación oficial de [Python](https://docs.python.org/3/tutorial/index.html).
