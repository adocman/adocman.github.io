---
layout: post
title: Single Responsibility Principle
date: 2025-07-23
type: nota
---
> Una clase debe tener una sola razón para cambiar.

---

Este principio, el primero de SOLID, no expresa que una clase solo haga una cosa, sino que esté expuesta a una única fuente de cambio. Una clase que mezcla distintas responsabilidades se vuelve difícil de modificar sin romper algo.

Por ejemplo, si una clase maneja tanto la lógica de negocios como la escrituura en disco (formato de guardado), entonces cambiar el formato de guardado podría afectar también la lógica del programa. No porque esté mal implementado, sino porque las responsabilidades están acopladas.

---

## Qué es una responsabilidad

Puede entenderse como responsabilidad una dimensión de cambio.
