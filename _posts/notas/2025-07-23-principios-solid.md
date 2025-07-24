---
layout: post
title: Principios SOLID
date: 2025-07-22
type: nota
---
> Los principios SOLID son una guía para diseñar software orientado a objetos o módulos (estructuras de dato, funciones, etc.) de manera que sea más comprensible, mantenible, testeable y escalable. No son reglas rígidas, sino fundamentos que nos ayudan a razonar mejor la estructura del código y a evitar problemas comunes cuando los proyectos crecen.

## 1. Single Responsibility Principle (SRP)

**Una clase debe tener una sola razón para cambiar.**

Esto no significa que solo debe hacer una cosa, sino que esté expuesta a una sola fuente de cambio.

## 2. Open/Closed Principle (OPC)

**El software debe estar abierto para extensión, pero cerrado para modificación.**

En lugar de cambiar el código existente cuando agregamos una nueva funcionalidad, deberíamos poder extender el comportamiento sin cambiar lo que ya funciona. Esto se logra mediante el uso de interfaces, herencia o composición.

## 3. Liskov Substitution Principle (LSP)

**Los objetos de una clase deben poder sustituir a los de su clase base sin alterar el funcionamiento del software.**

Una subclase debe comportarse como una versión especializada de su superclase, sin romper expectativas. Si al sustituir una instancia padre por una hija el software falla o se comporta de forma incorrecta, está mal diseñado.

## 4. Interface Segregation Principle (ISP)

**Ninguna clase debería estar obligada a depender de interfaces que no utiliza**

En lugar de tener una interfaz con muchos métodos, es mejor tener interfaces pequeñas y específicas. Así, cada clase implementa lo que realmente necesita.

## 5. Dependency Inversion Principle (DIP)

**Las clases de alto nivel no deben depender de clases de bajo nivel. Ambas deben depender de abstracciones.**

En lugar de que un módulo de alto nivel como un controlador conozca detalles de implementación como un repositorio concreto, ambos deberían depender de una interfaz que define lo esencial del comportamiento.
