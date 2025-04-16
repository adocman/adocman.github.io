---
layout: post
title: "Programación Orientada a Objetos"
date: 2025-03-23 00:00:00 -0300
categories: tecnologia
tags: poo python
excerpt: La Programación Orientada a Objetos (POO) permite modelar lo que queramos mediante clases y objetos, organizando el código de forma modular y reutilizable.
image: https://github.com/adocman/adocman.github.io/blob/main/assets/images/cover-programacion-orientada-a-objetos.png?raw=true
reading_time: "5 minutos"
permalink: "/:categories/:title"
---
## Resumen y Contexto

La Programación Orientada a Objetos (POO) se basa en la creación de **clases** que actúan como moldes para generar **objetos**. Cada objeto contiene atributos (datos) y métodos (comportamientos). Python es un lenguaje que permite utilizar este paradigma de manera clara y concisa, lo que la convierte en una opción popular tanto para principiantes como para desarrolladores experimentados.

En este documento, se detallan los conceptos esenciales de la POO en Python, ilustrando su importancia para proyectos de diferentes tamaños y finalidades, desde pequeños scripts hasta aplicaciones web y de ciencia de datos.

## Por qué es importante

1. **Estructura y legibilidad**: La POO organiza el código en torno a entidades coherentes (clases), facilitando la lectura y el mantenimiento.
2. **Reutilización de código**: A través de la **herencia** y la **composición**, es posible aprovechar partes de código para múltiples propósitos.
3. **Facilita la colaboración**: El código basado en objetos es más modular, lo que permite que varios desarrolladores trabajen simultáneamente en diferentes partes de la aplicación.
4. **Escalabilidad**: A medida que la aplicación crece, la POO ayuda a mantener la coherencia y a evitar la duplicación excesiva de código.

## Desarrollo / Ideas Clave

### 1. Clases y Objetos

- **Clase**: Es la plantilla o molde. Define la estructura de datos y comportamientos.
- **Objeto**: Es la instancia concreta de una clase. Cada objeto tiene atributos y métodos propios.

```python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
  
    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")

# Crear un objeto (instancia de la clase Persona)
persona1 = Persona("Ana", 30)
persona1.saludar()
```

### 2. Encapsulación

La **encapsulación** consiste en ocultar detalles internos de un objeto y exponer solo lo necesario. En Python, se suele usar un guion bajo `_` para indicar atributos “privados” a modo de convención:

```python
class CuentaBancaria:
    def __init__(self, saldo_inicial):
        self._saldo = saldo_inicial
  
    def depositar(self, cantidad):
        self._saldo += cantidad
  
    def retirar(self, cantidad):
        if cantidad <= self._saldo:
            self._saldo -= cantidad
  
    def mostrar_saldo(self):
        return self._saldo
```

### 3. Herencia

La **herencia** permite crear clases derivadas que heredan atributos y métodos de una clase padre, fomentando la reutilización de código:

```python
class Animal:
    def init(self, nombre):
        self.nombre = nombre  

    def hacer_sonido(self):
        print("Sonido genérico")

class Perro(Animal):
    def hacer_sonido(self):
        print("Guau guau")

perro1 = Perro("Fido")
perro1.hacer_sonido()  # Guau guau
```

### 4. Polimorfismo

El **polimorfismo** se refiere a la capacidad de distintas clases derivadas de una misma base para implementar un método de manera diferente. En el ejemplo anterior, `hacer_sonido()` cambia según el tipo de animal.

## Ejemplos de uso

* **Aplicaciones de escritorio** : Usar la POO para crear ventanas y componentes con bibliotecas como Tkinter o PyQt.
* **Frameworks web** : Django y Flask usan conceptos OOP para definir modelos y vistas.
* **Proyectos de ciencia de datos** : Clases que encapsulan procesos de análisis y modelado (por ejemplo, creando un objeto que represente un pipeline de Machine Learning).

## Ejercicios

1. **Crear una clase Vehículo** :

* Atributos: `marca`, `modelo`, `combustible`.
* Método: `encender()`, que muestre un mensaje indicando que el vehículo se ha encendido.

1. **Herencia** :

* Crear la clase `Coche` que herede de `Vehículo`.
* Agregar un método `tocar_bocina()`.

1. **Prueba polimorfismo** :

* Define un método `descripcion()` en ambas clases para que devuelvan información distinta sobre el vehículo.

## Acciones y Próximos pasos

* **Refactorizar** : Revisar proyectos existentes y agrupar funciones relacionadas en clases.
* **Práctica continua** : Construir mini-proyectos (juegos sencillos, utilidades de consola) aplicando herencia y polimorfismo.
* **Explorar patrones de diseño** : Entender cómo se usan conceptos OOP para resolver problemas comunes (Singleton, Factory, etc.).

## Insights y Serendipias

* La flexibilidad de Python permite usar la POO sin mucha “ceremonia” comparado con otros lenguajes (ej.: Java o C++).
* Al inicio, es común abusar de la herencia. Con el tiempo, se valora la **composición** como un método más flexible.
* La POO se integra con otros paradigmas en Python, como la programación funcional, ofreciendo un enfoque híbrido.

## Conexiones

* [Fundamentos de programación](https://adocman.github.io/tecnologia/fundamentos-de-programacion)

## Referencias

* Documentación oficial de [Python](https://docs.python.org/3/tutorial/classes.html).
