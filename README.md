# Bienvenido a la documentación del proyecto

Esta aplicación es una herramienta de consola en JavaScript que proporciona una serie de ejemplos para diferentes estructuras de datos. Cuenta con un menú que permite al usuario seleccionar la estructura de datos que desea aprender y ejecutar ejemplos de su implementación en tiempo real. Las estructuras de datos disponibles incluyen, entre otras, arreglos, objetos, listas vinculadas, pilas y colas. La aplicación es ideal para programadores de JavaScript que deseen familiarizarse con las diferentes estructuras de datos disponibles en este lenguaje y cómo se implementan en la práctica.

- Arreglos
- Objetos
- Listas vinculadas
- Pilas
- Colas

## Instalación

Clonar el repositorio: git clone <https://github.com/tu-usuario/tu-proyecto.git>
Instalar las dependencias: npm install
Configurar las variables de entorno en un archivo .env en la raíz del proyecto.
Crear la base de datos y ejecutar las migraciones: npm run db:init
Iniciar el servidor: npm run start.

## bubbleSort

Función en JavaScript que implementa el algoritmo de ordenamiento de burbuja para ordenar un arreglo. La misma toma un arreglo como argumento y devuelve el arreglo ordenado en orden ascendente utilizando el algoritmo de ordenamiento de burbuja. El algoritmo de burbuja compara pares adyacentes de elementos en el arreglo y los intercambia si están en el orden incorrecto. En cada iteración, el algoritmo compara cada par de elementos en el arreglo y mueve el elemento más grande al final del arreglo. Esto se repite hasta que no haya más elementos que intercambiar.

La variable len representa la longitud del arreglo arr. El primer bucle for se utiliza para iterar a través del arreglo, mientras que el segundo bucle for se utiliza para comparar pares adyacentes de elementos en el arreglo. Si un par de elementos está en el orden incorrecto, el código intercambia sus posiciones en el arreglo utilizando una variable temporal temp. Cuando se hayan comparado todos los pares de elementos en el arreglo, la función devuelve el arreglo ordenado.
