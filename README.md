# Algoritmos y estructuras de datos en javascript

Esta aplicación es una herramienta de consola en JavaScript que proporciona una serie de ejemplos para diferentes algoritmos y estructuras de datos. Cuenta con un menú que permite al usuario seleccionar la opción que desea aprender y ejecutar ejemplos de su implementación en tiempo real. Las opciones disponibles incluyen, entre otras, algoritmos de clasificación, búsqueda y recorrido, así como estructuras de datos como arreglos, objetos, listas vinculadas, pilas y colas. La aplicación es ideal para programadores de JavaScript que deseen aprender cómo se implementan diferentes algoritmos y estructuras de datos en este lenguaje y cómo se pueden utilizar para resolver problemas y optimizar el rendimiento del código.

- Arreglos
- Objetos
- Listas vinculadas
- Pilas
- Colas

## bubbleSort

Función en JavaScript que implementa el algoritmo de ordenamiento de burbuja para ordenar un arreglo. La misma toma un arreglo como argumento y devuelve el arreglo ordenado en orden ascendente utilizando el algoritmo de ordenamiento de burbuja. El algoritmo de burbuja compara pares adyacentes de elementos en el arreglo y los intercambia si están en el orden incorrecto. En cada iteración, el algoritmo compara cada par de elementos en el arreglo y mueve el elemento más grande al final del arreglo. Esto se repite hasta que no haya más elementos que intercambiar.

La variable len representa la longitud del arreglo arr. El primer bucle for se utiliza para iterar a través del arreglo, mientras que el segundo bucle for se utiliza para comparar pares adyacentes de elementos en el arreglo. Si un par de elementos está en el orden incorrecto, el código intercambia sus posiciones en el arreglo utilizando una variable temporal temp. Cuando se hayan comparado todos los pares de elementos en el arreglo, la función devuelve el arreglo ordenado.
## Instalación

Clonar el repositorio: git clone <https://github.com/LuisHdezE/data-stru>
Instalar las dependencias: npm install

Iniciar la aplicacion: npm run start.

## Uso
Después de iniciar la aplicación, el usuario puede interactuar con ella a través de la línea de comandos. La aplicación proporciona las siguientes opciones:

Ordenar un conjunto de datos utilizando varios algoritmos de ordenamiento.
Crear una estructura de datos (por ejemplo, pila, cola, árbol) y realizar operaciones sobre ella.
Visualizar una estructura de datos.
Para ver una lista completa de las opciones, el usuario puede ejecutar el siguiente comando:

node bubble.js --help

## Dependencias
La aplicación utiliza las siguientes dependencias:

colors
inquirer
nodemon
uuid
Estas dependencias se instalarán automáticamente al ejecutar el comando npm install.

## Contribuciones
Si deseas contribuir a la aplicación, puedes hacer lo siguiente:

- Clonar el repositorio.
- Crear una rama con el nombre de tu función:
git checkout -b mi-nueva-funcion

Realizar tus cambios.
- Hacer commit de tus cambios:
git commit -m "Agregado mi-nueva-funcion"

- Hacer push de tu rama:
git push origin mi-nueva-funcion

- Crear una solicitud de extracción en GitHub.
## Licencia
Esta aplicación está bajo la licencia ISC. Para obtener más información, consulta el archivo LICENSE.