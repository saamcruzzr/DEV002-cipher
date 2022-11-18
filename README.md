# PROYECTO: DEV002 - cipher

[TOCM]

### Objetivo General

- Crear una aplicación web, de forma individual, que servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

- La temática es libre, aplicable a situaciones de la vida real.

- La aplicación web interactuará con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript, como tecnologías.

# Desarrollo del Proyecto

De los proyectos a elegir decidí trabajar con el **Cifrado César.**

Determiné el tema de mi proyecto 2 veces. El primer tema no terminaba de convencerme ni emocionarme lo suficiente para proyectar una idea concreta, tenía ideas muy dispersas, hasta que tuve un momento de "iluminación" durante el primer día de hacking oficial, y decidí enfocar el proyecto en un tema que conozco y que nos atraviesa a todas, la Violencia de Género. Pensando particularmente en la  ***Violencia Doméstica.***

Planteando como primera hipótesis, una situación donde la mujer víctima de violencia quiere huir de su hogar, pero necesita comunicarse con su red de apoyo y hacer un plan en conjunto para llevar a cabo la huida de la forma más segura posible, y/o en dado caso pedir ayuda sin que su abusador se entere.

######  Primeros bosquejos

![](https://github.com/saamcruzzr/DEV002-cipher/blob/main/src/img%20readme/inicial.jpeg "Bosquejos")

Después de algunos bocetos en papel y pluma, pasé a desarrollar un prototipo en figma, sencillo en blanco y negro con textos falsos.

Cabe mencionar que era mi primera interacción con el software por lo que demoré un poco en entender las cosas que podía hacer dentro del programa.

######  Prototipo blanco y negro - figma

[B/N](https://www.figma.com/proto/eKPJwxCksMqNQW2Cv0VSr6/PROTOTIPO-BN?page-id=0%3A1&node-id=1%3A3&viewport=102%2C419%2C0.11&scaling=min-zoom)

Para el prototipo en blanco y negro definí algunas características generales de cómo imaginaba el proyecto.

Elección de Fuentes Tipográficas
- Rubik Maze
Para imagen (logotipo)
- Inter
Para textos en general

######  Prototipo color - figma

[Color](https://www.figma.com/proto/qWGaTRWjfUoZXP18C5hMtK/PROTOTIPO-COLOR?page-id=0%3A1&node-id=1%3A3&viewport=170%2C343%2C0.06&scaling=scale-down&starting-point-node-id=1%3A3 "Figma Color")

El segundo prototipo ya a color y con interacción en los botones, aún con textos falsos, que posteriormente se redactaron.

La idea inicial es que lo primero que aparezca sea una alerta al usuario, recordemos que son víctimas de violencia doméstica, por lo que se advierte que la página puede dejar rastros en el historial, recuerda los números de emergencia e indica cómo salir de la página de ser necesario.

Una vez aceptando la alerta, vez el menú de navegación con dos opciones, redirigirte a los *contactos de emergencia* y redirigirte a *cómo borrar el historial.*

La página principal inicia con una serie de instrucciones para indicar a las usuarias cómo utilizar el sitio, los botones para redirigirte a Cifrar y Descifrar, y el botón rojo de emergencia, el cual pinchandolo te redirige a otra página totalmente diferente, en este caso SHEIN, para que las usuarias en caso de ser descubiertas y no les de tiempo de cerrar la web puedan poner una excusa creíble.

En la opción de cifrar aparece la caja para teclear texto el botón de codificar, después en otra pantalla la caja de texto donde aparece el cifrado y tres opciones de botones: volver, para regresar a la página de inicio; copiar y mandar por correo.

Para la opcion de decifrar, una vez que se pasa por la pantalla para poner el texto, la siguiente solamente muestra el resultado descifrado y un botón de volver, pues tomando en cuenta el contexto, no es conveniente tener un boton de copiar o mandar por correo, considerando que lo que se busca es evitar que cualquier persona pueda leer el mensaje.

Algo que en el prototipo no había considerado era el espacio para asignar una clave, posteriormente en el desarrollo decidí utilizar un input tipo range.

###### Desarrollo web

Lo primero que hice una vez que tuve el prototipo, fue comenzar con el HTML y CSS.
Apliqué algunas cosas que aprendí en el proyecto pasado de la trivia, y me puse a investigar un poco más, pues por mi inexperiencia no me resultaba lo que quería hacer, como ordenar el header para que quedara alineado con el logo al centro.

Enlace el logo al index para que al darle click se refresque la página. Así mismo las opciones de navegación funcionan, pero no redifigen mas que a un 404.

También investigué e implemente un input de tipo range, al cual logré modificarle la apariencia.

Implementé el hover en los botones, ya tenía un acercamiento por la trivia. Quise agregarle animación pero no me salió como quería, así que decidí prescindir de ella para enfocarme en lo escencial del proyecto. 

Pude aclarar muchas cosas sobre los estilos en CSS, y aprendí que no es necesario poner los atributos 10 veces cuando son iguales, simplemente se llaman en la misma línea con comas. Conocí muchos atributos como float, webkit-appearance, background-image: linear-gradient, entre otros; además de aprender como se llaman de forma más específica ciertas características.

Aprendí como llamar en CSS a class, id y las etiquetas de HTML, y conocí que se pueden poner variables en este.

Aclaré un poco más mis conocimientos sobre HTML semántico y traté de implementarlo lo mejor que pude.

Cree diferentes archivos HTML para cambiar pantallas y repliqué lo necesario.*

Lo primero que declaré en JS fue la alerta de seguridad, investigué sobre cómo ponerla lo más fiel al prototipo, pero al no ser escencial para los requerimientos mínimos de funcionalidad del proyecto, decidí dejarla para después. 

Investigué sobre window location, y traté de implementar un replace en el botón de emergencia, pero no tuve exito en hacerlo funcionar, así que lo cambié por un href.

Ajusté la apariencia de la web, tratando seguir algunos criterios de UX, usando por ejemplo display flex.

Para darle funcionalidad al proyecto investigué sobre addEventListener, getElementById, for, funciones, codigo ASCII, ...

Para tratar de darle claridad a lo que tenía que hacer traté de ponerlo en una oración sin lenguajes de programación. Encontré muchas formas viables para poder resolverlo, sin embargo, tuve complicaciones con el código por lo que tuve que tomar decisiones.

######  Ajuste de expectativas a proyecto funcional entregable

No podía hacer funcionar el código JS, tomé la decisión de dejar en una sola página mi aplicación, pues no encontraba el error ni con ayuda de otra persona.

También en esta toma de decisiones tuve que optar por dejar un solo contenedor para teclear el texto, uno sólo para mostrar el resultado y limitar a dos botones para cifrar y descifrar el mensaje. 

Eso me permitió encontrar el error en el código, se trataba de una letra equivocada en minúscula que debía ser mayúscula. 
Decidí, por el tiempo, dejarlo así en una sola pantalla. Y continuar con los test unitarios.

Busqué la manera de mantener la escencia del prototipo estéticamente hablando, por lo que investigué sobre z-index y fixed por recomendación de una coach. Implementé el fixed en el header, el botón de emergencia y el footer.

###### Cumplimiento de requerimientos mínimos

- Usa VanillaJS.
- Implementa `cipher.encode`.
- Implementa `cipher.decode`.
- Pasa linter con configuración provista.
- Pasa pruebas unitarias.
- Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un mínimo del 50% de _branches_.
- Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el cifrado/descifrado.
- Interfaz permite escribir un texto para ser cifrado.
- Interfaz muestra el resultado del cifrado correctamente.
- Interfaz permite escribir un texto para ser descifrado.
- Interfaz muestra el resultado del descifrado correctamente.
