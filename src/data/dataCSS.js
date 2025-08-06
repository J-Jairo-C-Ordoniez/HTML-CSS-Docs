const roadmapCSS = {
  fundamentalsCSS: [
    {
      id: "css-fn-01",
      title: "¿Qué es CSS?",
      description: "CSS (Cascading Style Sheets) es el lenguaje que da estilo a las páginas web.",
      content: `<p>Mientras que HTML define la estructura, <em>&lt;CSS&gt;</em> se encarga de cómo se ve esa estructura. Desde colores y fuentes hasta diseños complejos, CSS lo hace posible.</p>`,
      example: `
        p {
          color: blue;
          font-size: 18px;
        }`
    },
    {
      id: "css-fn-02",
      title: "Cómo se aplica CSS",
      description: "CSS se puede aplicar de tres formas: inline, interno y externo.",
      content: `<p>Usar CSS correctamente depende del contexto. Para proyectos grandes, lo ideal es usar hojas de estilo externas. Las otras dos formas son útiles en casos específicos.</p>`,
      example: `
        /* CSS interno: en etiqueta */
        &lt;p style="color: red;"&gt;CSS inline&lt;/p&gt;

        /* CSS interno: en el head */
         
          p { color: green; }
      

        /* CSS externo: con un link señalas la ubicación de la hoja de etilos */
        &lt;link rel="stylesheet" href="styles.css"&gt; `
    },
    {
      id: "css-fn-03",
      title: "Sintaxis básica de CSS",
      description: "CSS se basa en selectores, propiedades y valores.",
      content: `<p>Un bloque CSS indica a qué elementos aplicar estilos y cómo deben lucir. La clave está en escribir reglas limpias y organizadas.</p>`,
      example: `
        selector {
          propiedad: valor;
        }

        p {
          color: purple;
          font-size: 16px;
        }`
    },
    {
      id: "css-fn-04",
      title: "Cascada y especificidad",
      description: "CSS prioriza reglas según su origen, orden y especificidad.",
      content: `<p>La cascada determina qué estilos se aplican cuando hay conflictos. La especificidad depende del tipo de selector (etiqueta, clase, id, inline).</p>`,
      example: `
        /* Menor especificidad */
        p { 
          color: black; 
        }

        /* Mayor especificidad */
        #parrafo { 
            color: blue; 
        }`
    },
    {
      id: "css-fn-05",
      title: "Herencia de propiedades",
      description: "Algunas propiedades se heredan automáticamente en HTML.",
      content: `<p>Propiedades como <em>color</em> o <em>font-family</em> suelen heredarse, mientras que otras como <em>margin</em> no. Puedes forzar la herencia con <em>inherit</em>.</p>`,
      example: `
        body {
          color: darkgreen;
        }

        p {
          font-size: 18px; /* Hereda el color de body */
        }`
    },
    {
      id: "css-fn-06",
      title: "Resetear o normalizar estilos por defecto",
      description: "Los navegadores aplican estilos por defecto a los elementos.",
      content: `<p>Para evitar inconsistencias, se usan reset CSS o normalizadores como <em>normalize.css</em>. Esto asegura una base común para todos los estilos.</p>`,
      example: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }`
    }
  ],

  selectors: [
    {
      id: "css-sel-01",
      title: "¿Qué es un selector en CSS?",
      description: "Es la parte del código que define a qué elementos HTML se aplican los estilos.",
      content: `<p>Los <em>selectores</em> son como detectives del DOM: buscan elementos específicos en tu HTML para aplicarles reglas de estilo. Por ejemplo, puedes seleccionar todos los &lt;p&gt;, solo un &lt;div&gt; con clase 'box', o incluso elementos dentro de otros.</p>`,
      example: `
        p {  
          color: red;
        }`
    },
    {
      id: "css-sel-02",
      title: "Selectores de tipo",
      description: "Seleccionan elementos por su nombre de etiqueta.",
      content: `<p>Apuntan directamente a etiquetas HTML como &lt;h1&gt;, &lt;section&gt;, &lt;ul&gt;. Son básicos pero poderosos.</p>`,
      example: `
        h1 {  
          font-size: 2rem;
        }`
    },
    {
      id: "css-sel-03",
      title: "Selectores de clase",
      description: "Seleccionan elementos que tienen un atributo <em>class</em> específico.",
      content: `<p>Usan un punto (.) seguido del nombre de la clase. Puedes aplicar una clase a muchos elementos y todos compartirán estilo.</p>`,
      example: `  
        .titulo-principal {  
          text-align: center; 
        }`
    },
    {
      id: "css-sel-04",
      title: "Selectores de ID",
      description: "Seleccionan un elemento por su atributo <em>id</em>, que debe ser único.",
      content: `<p>Usan el símbolo de numeral (#) y deben aplicarse a un único elemento por página. Úsalos con moderación.</p>`,
      example: `
        #encabezado {  
          background-color: black;  
          color: white;
        }`
    },
    {
      id: "css-sel-05",
      title: "Selectores universales",
      description: "Seleccionan todos los elementos del documento.",
      content: `<p>El asterisco (*) es el comodín de CSS. Aplica reglas a todo el contenido (aunque puede afectar el rendimiento si se usa sin control).</p>`,
      example: `  
        * {  
          margin: 0;  
          padding: 0;  
          box-sizing: 
          border-box;
        }`
    },
    {
      id: "css-sel-06",
      title: "Selectores de atributo",
      description: "Seleccionan elementos según la presencia o valor de un atributo.",
      content: `<p>Muy útiles para inputs, imágenes o cualquier elemento con atributos dinámicos. Usan corchetes [ ].</p>`,
      example: `
        input[type="text"] {  
          border: 2px solid blue;
        }`
    },
    {
      id: "css-sel-07",
      title: "Selectores descendentes",
      description: "Seleccionan elementos dentro de otros (jerarquía padre > hijo).",
      content: `<p>Permiten aplicar estilos a elementos que están dentro de otros. Ej: &lt;div&gt; &lt;p&gt;&lt;/p&gt; &lt;/div&gt;</p>`,
      example: `
        div p {
          color: gray;
        }`
    },
    {
      id: "css-sel-08",
      title: "Selectores múltiples",
      description: "Aplican un mismo estilo a varios selectores separados por comas.",
      content: `<p>Ideal para agrupar reglas repetidas y mantener el código más limpio.</p>`,
      example: `
        h1, h2, h3 {  
          font-family: 'Segoe UI', sans-serif;
        }`
    },
    {
      id: "css-sel-09",
      title: "Selectores combinados",
      description: "Combinan selectores para mayor precisión.",
      content: `<p>Puedes usar combinaciones como clase + etiqueta o clase + ID para afinar tu puntería estilística.</p>`,
      example: `  
        section.destacado p#intro {  
          color: darkblue;
        }`
    }
  ],

  properties: [
    {
      id: "css-pf-01",
      title: "Color de texto con <em>color</em>",
      description: "Permite establecer el color del texto de un elemento.",
      content: `<p>La propiedad <em>color</em> se usa para cambiar el color del texto. Puedes usar nombres de colores, códigos hexadecimales, RGB, HSL, etc.</p>`,
      example: `  
        p {  
          color: blue;
        }`
    },
    {
      id: "css-pf-02",
      title: "Color de fondo con <em>background-color</em>",
      description: "Establece el color de fondo de un elemento.",
      content: `<p>Con <em>background-color</em> puedes aplicar un color de fondo. Es útil para destacar secciones, botones o elementos interactivos.</p>`,
      example: `
        div {  
          background-color: #f0f0f0;
        }`
    },
    {
      id: "css-pf-03",
      title: "Tamaño de fuente con <em>font-size</em>",
      description: "Controla el tamaño del texto.",
      content: `<p>La propiedad <em>font-size</em> permite modificar el tamaño de fuente. Puedes usar unidades como <em>px</em>, <em>em</em>, <em>rem</em>, etc.</p>`,
      example: `
        h1 {  
          font-size: 32px;
        }`
    },
    {
      id: "css-pf-04",
      title: "Familia tipográfica con <em>font-family</em>",
      description: "Define el tipo de letra a usar en un texto.",
      content: `<p>Usa <em>font-family</em> para elegir la fuente de un texto. Siempre incluye fuentes alternativas por compatibilidad.</p>`,
      example: `
        body {  
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }`
    },
    {
      id: "css-pf-05",
      title: "Estilo de texto con <em>font-style</em>",
      description: "Permite poner texto en cursiva u otros estilos.",
      content: `<p>La propiedad <em>font-style</em> se usa para cambiar el estilo del texto a <em>italic</em>, <em>normal</em> o <em>oblique</em>.</p>`,
      example: `
        em {  
          font-style: italic;
        }`
    },
    {
      id: "css-pf-06",
      title: "Peso de la fuente con <em>font-weight</em>",
      description: "Define el grosor del texto.",
      content: `<p>Con <em>font-weight</em> puedes hacer que el texto sea más delgado o más grueso. Valores comunes: <em>normal</em>, <em>bold</em> o números como <em>400</em>, <em>700</em>.</p>`,
      example: `
        strong {  
          font-weight: bold;
        }`
    },
    {
      id: "css-pf-07",
      title: "Alineación de texto con <em>text-align</em>",
      description: "Controla cómo se alinea horizontalmente el contenido textual.",
      content: `<p><em>text-align</em> alinea el texto a la izquierda, derecha, al centro o justificado.</p>`,
      example: `
        p {  
          text-align: center;
        }`
    },
    {
      id: "css-pf-08",
      title: "Decoración del texto con <em>text-decoration</em>",
      description: "Añade o elimina decoraciones como subrayado.",
      content: `<p>Usa <em>text-decoration</em> para subrayar, tachar o quitar decoraciones del texto.</p>`,
      example: `
        a {  
          text-decoration: none;
        }`
    },
    {
      id: "css-pf-09",
      title: "Espaciado entre letras con <em>letter-spacing</em>",
      description: "Ajusta el espacio entre caracteres.",
      content: `<p><em>letter-spacing</em> permite separar o acercar los caracteres de un texto.</p>`,
      example: `
        h2 {  
          letter-spacing: 2px;
        }`
    },
    {
      id: "css-pf-10",
      title: "Transformar texto con <em>text-transform</em>",
      description: "Cambia la capitalización del texto.",
      content: `<p>Con <em>text-transform</em> puedes convertir texto en mayúsculas, minúsculas o capitalizarlo.</p>`,
      example: `
        h3 {  
          text-transform: uppercase;
        }`
    }
  ],

  boxModel: [
    {
      id: "css-bm-01",
      title: "¿Qué es el Modelo de Caja en CSS?",
      description: "Es la forma en que CSS representa visualmente los elementos HTML como cajas rectangulares.",
      content: `<p>
      En CSS, todo elemento visual se representa como una caja. Este modelo define cómo se calcula el tamaño total de un elemento,
      incluyendo su contenido, padding, borde y margen. Comprenderlo es esencial para posicionar y alinear correctamente elementos en pantalla.
    </p>`,
      example: `
      &lt;div style="width: 100px; padding: 10px; border: 5px solid black; margin: 20px;"&gt;
        Caja de ejemplo
      &lt;/div&gt;
    `
    },
    {
      id: "css-bm-02",
      title: "Contenido: la esencia de la caja",
      description: "Es el espacio donde se muestra el texto o el contenido multimedia del elemento.",
      content: `<p>
      El área de contenido es el espacio donde se renderiza el contenido como texto, imágenes u otros elementos. Su tamaño se define generalmente con las propiedades
      <em>width</em> y <em>height</em>.
    </p>`,
      example: `
      &lt;div style="width: 150px; height: 100px;"&gt;
        Contenido aquí
      &lt;/div&gt;
    `
    },
    {
      id: "css-bm-03",
      title: "Padding: el espacio interno",
      description: "El relleno entre el contenido y el borde de la caja.",
      content: `<p>
      El <em>padding</em> se usa para generar espacio interior entre el borde de la caja y su contenido. No afecta el tamaño del contenido, pero suma al tamaño total de la caja.
    </p>`,
      example: `
      &lt;div style="padding: 20px; background-color: lightblue;"&gt;
        Texto con padding
      &lt;/div&gt;
    `
    },
    {
      id: "css-bm-04",
      title: "Border: el borde de la caja",
      description: "Es el límite visible entre el padding y el margen.",
      content: `<p>
      El <em>border</em> define un contorno alrededor de la caja. Puede personalizarse con grosor, color y estilo (<em>solid</em>, <em>dashed</em>, <em>dotted</em>, etc.).
    </p>`,
      example: `
      &lt;div style="border: 3px dashed green; padding: 10px;"&gt;
        Caja con borde
      &lt;/div&gt;
    `
    },
    {
      id: "css-bm-05",
      title: "Margin: el espacio exterior",
      description: "Define la separación entre la caja actual y las cajas vecinas.",
      content: `<p>
      El <em>margin</em> proporciona espacio alrededor de la caja, separándola de otros elementos. Es útil para crear espaciado entre componentes.
    </p>`,
      example: `
      &lt;div style="margin: 30px; background-color: #eee;"&gt;
        Caja con margen
      &lt;/div&gt;
    `
    },
    {
      id: "css-bm-06",
      title: "Propiedad box-sizing",
      description: "Controla si el padding y border se incluyen en el cálculo del ancho/alto.",
      content: `<p>
      Por defecto, <em>width</em> y <em>height</em> definen solo el contenido. Usando <em>box-sizing: border-box</em>, el padding y el border se incluyen dentro del ancho/alto definidos, lo cual facilita la maquetación.
    </p>`,
      example: `
        .caja {
          width: 200px;
          padding: 20px;
          border: 5px solid red;
          box-sizing: border-box;
        }
    `
    }
  ],

  units: [
    {
      id: "css-units-01",
      title: "Unidades absolutas",
      description: "Son unidades fijas, no dependen de otros elementos o del tamaño de pantalla.",
      content: `
      <p>
        Las unidades absolutas representan tamaños constantes que no cambian según el entorno del usuario. Son útiles cuando necesitas precisión, como en diseño para impresión.
      </p>
      <ul>
        <li><em>px</em>: píxeles (unidad más común en pantallas)</li>
        <li><em>cm</em>: centímetros</li>
        <li><em>mm</em>: milímetros</li>
        <li><em>in</em>: pulgadas</li>
        <li><em>pt</em>: puntos (1pt = 1/72in)</li>
        <li><em>pc</em>: picas (1pc = 12pt)</li>
      </ul>
    `,
      example: `
      &lt;p style="font-size: 14px;"&gt;Texto con px&lt;/p&gt;
      &lt;div style="width: 5cm;"&gt;Caja de 5cm&lt;/div&gt;
    `
    },
    {
      id: "css-units-02",
      title: "Unidades relativas",
      description: "Dependen del tamaño del contenedor o del tamaño de fuente base.",
      content: `
      <p>
        Las unidades relativas son flexibles y permiten crear interfaces más responsivas. Se ajustan al contexto del usuario.
      </p>
      <ul>
        <li><em>em</em>: relativo al tamaño de fuente del elemento padre</li>
        <li><em>rem</em>: relativo al tamaño de fuente raíz (generalmente &lt;html&gt;)</li>
        <li><em>%</em>: porcentaje respecto al contenedor padre</li>
        <li><em>vw</em>: ancho del viewport (1vw = 1% del ancho)</li>
        <li><em>vh</em>: alto del viewport</li>
        <li><em>vmin</em>: el menor entre vw y vh</li>
        <li><em>vmax</em>: el mayor entre vw y vh</li>
      </ul>
    `,
      example: `
      &lt;div style="width: 80%;"&gt;Caja al 80% del contenedor&lt;/div&gt;
      &lt;p style="font-size: 2rem;"&gt;Texto relativo al tamaño raíz&lt;/p&gt;
    `
    },
    {
      id: "css-units-03",
      title: "Diferencia entre <em>em</em> y <em>rem</em>",
      description: "Ambas unidades se basan en tamaños de fuente, pero en diferentes niveles del DOM.",
      content: `
      <p>
        <em>em</em> escala según el tamaño del elemento padre, lo que puede generar acumulación de tamaños.
        <br/>
        <em>rem</em> siempre se refiere al tamaño definido en el elemento raíz (&lt;html&gt;), brindando mayor control y previsibilidad.
      </p>
    `,
      example: `
      &lt;html style="font-size: 16px;"&gt;
        &lt;body&gt;
          &lt;div style="font-size: 2em;"&gt;2em = 32px si el padre tiene 16px&lt;/div&gt;
          &lt;div style="font-size: 2rem;"&gt;2rem = 32px sin importar el padre&lt;/div&gt;
        &lt;/body&gt;
      &lt;/html&gt;
    `
    },
    {
      id: "css-units-04",
      title: "Cuándo usar unidades absolutas o relativas",
      description: "Depende del tipo de diseño: fijo o responsivo.",
      content: `
      <p>
        Usa unidades absolutas cuando necesites precisión exacta (impresión, iconos estáticos).
        <br/>
        Prefiere unidades relativas para layouts adaptables, escalables y más accesibles.
      </p>
    `,
      example: `
      &lt;div style="width: 300px;"&gt;Diseño fijo&lt;/div&gt;
      &lt;div style="width: 50vw;"&gt;Diseño adaptativo&lt;/div&gt;
    `
    }
  ],

  displayPosition: [
    {
      id: "css-dp-01",
      title: "La propiedad <em>display</em>",
      description: "Controla cómo se renderiza un elemento en el flujo del documento.",
      content: `<p>
      La propiedad <em>display</em> determina cómo se comporta visualmente un elemento. Por defecto, algunos elementos como <em>&lt;div&gt;</em> son bloques (<em>block</em>) y otros como <em>&lt;span&gt;</em> son en línea (<em>inline</em>).
    </p>
    <p>
      Puedes cambiar este comportamiento usando valores como <em>flex</em>, <em>grid</em>, <em>inline-block</em>, entre otros.
    </p>`,
      example: `
        &lt;div style="display: inline-block;"&gt;Caja 1&lt;/div&gt;
        &lt;div style="display: inline-block;"&gt;Caja 2&lt;/div&gt;`
    },
    {
      id: "css-dp-02",
      title: "Tipos de display más comunes",
      description: "Bloque, en línea, en línea-bloque, ninguno.",
      content: `<p>
      Los tipos de display más utilizados incluyen:
    </p>
    <ul>
      <li><em>block</em>: Ocupa todo el ancho disponible.</li>
      <li><em>inline</em>: Solo el ancho de su contenido.</li>
      <li><em>inline-block</em>: Combinación de los dos anteriores.</li>
      <li><em>none</em>: Oculta el elemento.</li>
    </ul>`,
      example: `&lt;p style="display: none;"&gt;Este texto no se verá&lt;/p&gt;`
    },
    {
      id: "css-dp-03",
      title: "¿Qué es la propiedad <em>position</em>?",
      description: "Define cómo se posiciona un elemento en la página.",
      content: `<p>
      Con <em>position</em> puedes ubicar elementos respecto al flujo normal del documento o en posiciones absolutas.
    </p>
    <p>
      Los valores clave son: <em>static</em>, <em>relative</em>, <em>absolute</em>, <em>fixed</em> y <em>sticky</em>.
    </p>`,
      example: `&lt;div style="position: absolute; top: 0; right: 0;"&gt;Esquina superior derecha&lt;/div&gt;`
    },
    {
      id: "css-dp-04",
      title: "Diferencias entre relative, absolute y fixed",
      description: "Estos valores cambian el contexto de posicionamiento.",
      content: `<p>
      <em>relative</em> posiciona respecto a sí mismo. <em>absolute</em> lo hace respecto a su contenedor posicionado. <em>fixed</em> lo fija en relación con la ventana.
    </p>`,
      example: `
        &lt;div style="position: relative;"&gt;
          &lt;div style="position: absolute; top: 10px;"&gt;Absoluto dentro de relativo&lt;/div&gt;
        &lt;/div&gt;`
    },
    {
      id: "css-dp-05",
      title: "Sticky: pegajoso pero útil",
      description: "Combina posicionamiento relativo y fijo.",
      content: `<p>
      <em>sticky</em> permite que un elemento se comporte como <em>relative</em> hasta cierto punto, y luego como <em>fixed</em> mientras se hace scroll.
    </p>`,
      example: `&lt;h2 style="position: sticky; top: 0; background: white;"&gt;Título que se queda pegado&lt;/h2&gt;`
    }
  ],

  flexbox: [
    {
      id: "css-fx-01",
      title: "¿Qué es Flexbox y por qué es útil?",
      description: "Flexbox es un modelo de diseño unidimensional para distribuir espacio y alinear elementos.",
      content: `<p>
      Flexbox facilita la creación de layouts flexibles y responsivos en una sola dimensión (fila o columna). 
      A través de la propiedad <em>display: flex</em>, podemos controlar la alineación, dirección, espaciado y orden de los elementos hijos.
    </p>`,
      example: `
      &lt;div style="display: flex;"&gt;
        &lt;div&gt;Caja 1&lt;/div&gt;
        &lt;div&gt;Caja 2&lt;/div&gt;
      &lt;/div&gt;`
    },
    {
      id: "css-fx-02",
      title: "Dirección del eje con <em>flex-direction</em>",
      description: "Controla la dirección principal del layout.",
      content: `<p>
      Con <em>flex-direction</em> defines cómo se colocan los elementos: horizontal (<em>row</em>), vertical (<em>column</em>) o sus versiones inversas.
    </p>`,
      example: `
        &lt;div style="display: flex; flex-direction: column;"&gt;
          &lt;div&gt;Elemento 1&lt;/div&gt;
          &lt;div&gt;Elemento 2&lt;/div&gt;
        &lt;/div&gt;`
    },
    {
      id: "css-fx-03",
      title: "Alineación principal con <em>justify-content</em>",
      description: "Distribuye los elementos a lo largo del eje principal.",
      content: `<p>
      <em>justify-content</em> permite controlar el espacio entre los ítems en el eje principal. 
      Puedes usar valores como <em>flex-start</em>, <em>center</em>, <em>space-between</em>, entre otros.
    </p>`,
      example: `
        &lt;div style="display: flex; justify-content: space-between;"&gt;
          &lt;div&gt;Caja A&lt;/div&gt;
          &lt;div&gt;Caja B&lt;/div&gt;
          &lt;div&gt;Caja C&lt;/div&gt;
        &lt;/div&gt;`
    },
    {
      id: "css-fx-04",
      title: "Alineación cruzada con <em>align-items</em>",
      description: "Alinea los elementos en el eje perpendicular.",
      content: `<p>
      <em>align-items</em> se usa para alinear los ítems dentro del contenedor en el eje perpendicular (por ejemplo, vertical si <em>flex-direction</em> es horizontal).
    </p>`,
      example: `
        &lt;div style="display: flex; align-items: center; height: 100px;"&gt;
          &lt;div&gt;Centro vertical&lt;/div&gt;
        &lt;/div&gt;`
    },
    {
      id: "css-fx-05",
      title: "El contenedor flexible y los ítems flex",
      description: "Control individual de ítems dentro de un contenedor flexible.",
      content: `<p>
      Propiedades como <em>flex-grow</em>, <em>flex-shrink</em> y <em>flex-basis</em> definen el comportamiento individual de los ítems flexibles.
    </p>`,
      example: `
      &lt;div style="display: flex;"&gt;
        &lt;div style="flex: 2;"&gt;Ocupa el doble&lt;/div&gt;
        &lt;div style="flex: 1;"&gt;Ocupa normal&lt;/div&gt;
      &lt;/div&gt;`
    }
  ],

  grid: [
    {
      id: "css-grid-01",
      title: "¿Qué es CSS Grid Layout?",
      description: "Un sistema de diseño bidimensional potente para la web.",
      content: `<p>
      CSS Grid permite diseñar interfaces complejas utilizando filas y columnas. 
      A diferencia de Flexbox, que trabaja en una sola dirección, Grid trabaja en dos dimensiones.
    </p>`,
      example: `
      &lt;div style="display: grid; grid-template-columns: 1fr 1fr;"&gt;
        &lt;div&gt;Columna 1&lt;/div&gt;
        &lt;div&gt;Columna 2&lt;/div&gt;
      &lt;/div&gt;`
    },
    {
      id: "css-grid-02",
      title: "Definir filas y columnas con <em>grid-template</em>",
      description: "Controla la estructura básica del layout.",
      content: `<p>
      Las propiedades <em>grid-template-columns</em> y <em>grid-template-rows</em> definen cuántas columnas o filas tendrá el contenedor.
    </p>`,
      example: `
      &lt;div style="display: grid; grid-template-columns: 200px 1fr;"&gt;
        &lt;div&gt;Fija&lt;/div&gt;
        &lt;div&gt;Flexible&lt;/div&gt;
      &lt;/div&gt;`
    },
    {
      id: "css-grid-03",
      title: "Espaciado entre celdas con <em>gap</em>",
      description: "Agrega separación sin márgenes.",
      content: `<p>
      <em>gap</em> (o <em>row-gap</em> y <em>column-gap</em>) permite separar filas y columnas sin usar márgenes individuales.
    </p>`,
      example: `
        &lt;div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;"&gt;
          &lt;div&gt;A&lt;/div&gt;
          &lt;div&gt;B&lt;/div&gt;
        &lt;/div&gt;`
    },
    {
      id: "css-grid-04",
      title: "Ubicar elementos con <em>grid-column</em> y <em>grid-row</em>",
      description: "Controla la posición específica de los elementos.",
      content: `<p>
      Puedes controlar dónde empieza y termina un ítem dentro del grid usando <em>grid-column</em> y <em>grid-row</em>.
    </p>`,
      example: `
        &lt;div style="display: grid; grid-template-columns: repeat(3, 1fr);"&gt;
        &lt;div style="grid-column: 1 / 3;"&gt;Ocupa 2 columnas&lt;/div&gt;
        &lt;div&gt;Col 3&lt;/div&gt;
      &lt;/div&gt;`
    },
    {
      id: "css-grid-05",
      title: "Auto-placement y flujo automático",
      description: "CSS coloca los elementos automáticamente si no defines su ubicación.",
      content: `<p>
      Si no defines la ubicación, CSS Grid coloca los ítems en orden siguiendo el flujo natural. 
      Puedes controlar esto con <em>grid-auto-flow</em>.
    </p>`,
      example: `
        &lt;div style="display: grid; grid-template-columns: 1fr 1fr;"&gt;
          &lt;div&gt;1&lt;/div&gt;
          &lt;div&gt;2&lt;/div&gt;
          &lt;div&gt;3&lt;/div&gt;
        &lt;/div&gt;`
    }
  ],

  responsiveDesign: [
    {
      id: "css-rd-01",
      title: "¿Qué es el diseño responsive?",
      description: "Adaptar el diseño web a múltiples tamaños de pantalla.",
      content: `<p>
      El diseño responsive permite que tu sitio se vea y funcione correctamente en diferentes dispositivos, como móviles, tablets y escritorios. 
      Esto mejora la experiencia del usuario y el posicionamiento SEO.
    </p>`,
      example: `&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;`
    },
    {
      id: "css-rd-02",
      title: "Uso de unidades relativas en CSS",
      description: "Unidades como <em>em</em>, <em>rem</em>, <em>%</em> y <em>vw/vh</em> permiten mayor flexibilidad.",
      content: `<p>
      Usar unidades relativas en lugar de absolutas (<em>px</em>) ayuda a que el diseño escale de forma más natural en distintos dispositivos.
    </p>`,
      example: `&lt;div style="width: 80%;"&gt;Caja adaptable&lt;/div&gt;`
    },
    {
      id: "css-rd-03",
      title: "Media Queries: diseño adaptable por resolución",
      description: "Permite aplicar estilos condicionales según el ancho del dispositivo.",
      content: `<p>
      Las <em>media queries</em> son fundamentales para crear diseños que cambian según el tamaño de pantalla. 
      Puedes definir puntos de ruptura (<em>breakpoints</em>) y estilos específicos para cada uno.
    </p>`,
      example: `
        @media (max-width: 768px) {
          body {
            font-size: 14px;
          }
        }`
    },
    {
      id: "css-rd-04",
      title: "Breakpoints comunes en diseño responsive",
      description: "Puntos de ruptura típicos para adaptar contenido.",
      content: `<p>
      Aunque cada proyecto puede requerir breakpoints distintos, algunos valores comunes son:
      <br><br>
      <strong>480px</strong> móviles pequeños<br>
      <strong>768px</strong> tablets<br>
      <strong>1024px</strong> laptops<br>
      <strong>1280px+</strong> monitores grandes
    </p>`,
      example: `
        @media (min-width: 1024px) {
          .menu {
            display: flex;
          }
        }`
    },
    {
      id: "css-rd-05",
      title: "Diseño fluido vs diseño adaptativo",
      description: "Diferentes enfoques para responder al tamaño del dispositivo.",
      content: `<p>
      <strong>Diseño fluido</strong> usa porcentajes y unidades relativas para escalar contenido proporcionalmente. 
      <strong>Diseño adaptativo</strong> define diseños fijos en función de ciertos breakpoints.
    </p>`,
      example: `&lt;div style="width: 50%;"&gt;Fluido&lt;/div&gt;`
    }
  ],

  animationsTransitions: [
    {
      id: "css-at-01",
      title: "¿Qué son las transiciones en CSS?",
      description: "Permiten cambios suaves entre estados de un elemento.",
      content: `<p>
      Una transición en CSS define cómo deben animarse las propiedades de un elemento cuando cambian. 
      Puedes controlar la duración, el tipo de easing, y la propiedad a animar con <em>transition</em>.
    </p>`,
      example: `
        .button {
          background: blue;
          transition: background 0.3s ease;
        }
        .button:hover {
          background: green;
        }`
    },
    {
      id: "css-at-02",
      title: "Propiedades comunes para transiciones",
      description: "No todas las propiedades pueden animarse.",
      content: `<p>
      Algunas propiedades comunes que admiten transiciones son: 
      <em>background</em>, <em>color</em>, <em>transform</em>, <em>opacity</em> y <em>margin</em>.
    </p>`,
      example: `
        .box {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }
        .box:hover {
          opacity: 0.5;
        }`
    },
    {
      id: "css-at-03",
      title: "Animaciones con @keyframes",
      description: "Define cambios de estilo en varios puntos de tiempo.",
      content: `<p>
      Las animaciones en CSS permiten definir múltiples etapas mediante <em>@keyframes</em>. 
      Puedes nombrar la animación y asignarla con <em>animation-name</em> y <em>animation-duration</em>.
    </p>`,
      example: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .element {
          animation-name: fadeIn;
          animation-duration: 2s;
        }`
    },
    {
      id: "css-at-04",
      title: "Propiedades clave para animaciones",
      description: "Controlan el tiempo, repetición y comportamiento de la animación.",
      content: `<p>
      Las propiedades más usadas son: <em>animation-name</em>, <em>animation-duration</em>, <em>animation-delay</em>, 
      <em>animation-iteration-count</em> y <em>animation-direction</em>.
    </p>`,
      example: `
        .bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }`
    },
    {
      id: "css-at-05",
      title: "Diferencias entre transición y animación",
      description: "Ambas animan, pero tienen propósitos diferentes.",
      content: `<p>
      <strong>Transiciones</strong> dependen de un cambio de estado (como <em>:hover</em>).
      <br>
      <strong>Animaciones</strong> pueden ejecutarse automáticamente y tienen múltiples etapas gracias a <em>@keyframes</em>.
    </p>`,
      example: `
        &lt;!-- Transición --&gt;
        &lt;div class="box"&gt;hover me&lt;/div&gt;

        &lt;!-- Animación --&gt;
        &lt;div class="animate"&gt;auto animation&lt;/div&gt;`
    }
  ],

  variables: [
    {
      id: "css-vars-01",
      title: "¿Qué son las variables en CSS?",
      description: "Permiten almacenar valores reutilizables como colores, tamaños o fuentes.",
      content: `<p>
      Las variables en CSS comienzan con dos guiones (<em>--</em>) y se definen dentro de un selector (generalmente <em>:root</em>). 
      Se accede a ellas con la función <em>var()</em>.
    </p>`,
      example: `
        :root {
          --main-color: #3498db;
        }
        .title {
          color: var(--main-color);
        }`
    },
    {
      id: "css-vars-02",
      title: "Uso de :root para variables globales",
      description: "Define variables disponibles en todo el documento.",
      content: `<p>
      <em>:root</em> representa el elemento raíz del documento (<em>html</em>). Es el lugar ideal para declarar variables globales reutilizables.
    </p>`,
      example: `
        :root {
          --font-size: 16px;
          --padding: 1rem;
        }
        body {
          font-size: var(--font-size);
          padding: var(--padding);
        }`
    },
    {
      id: "css-vars-03",
      title: "Variables locales vs globales",
      description: "Una variable puede estar limitada a un selector específico.",
      content: `<p>
      Si defines una variable dentro de un selector, solo será válida dentro de ese contexto. 
      Las variables globales viven en <em>:root</em>.
    </p>`,
      example: `
        .card {
          --bg: white;
          background: var(--bg);
        }
        .dark {
          --bg: #121212;
        }`
    },
    {
      id: "css-vars-04",
      title: "Valores por defecto con var()",
      description: "Puedes definir un valor alternativo si la variable no existe.",
      content: `<p>
      La función <em>var()</em> permite usar un segundo argumento como valor por defecto si la variable no está definida.
    </p>`,
      example: `
        h1 {
          color: var(--primary-color, black);
        }`
    },
    {
      id: "css-vars-05",
      title: "Ventajas de usar variables CSS",
      description: "Más control, flexibilidad y mantenibilidad.",
      content: `<p>
      Usar variables CSS permite centralizar valores, facilita el mantenimiento de temas, y reduce errores al cambiar estilos repetidos.
    </p>`,
      example: `
        :root {
          --accent: orange;
        }
        button {
          border: 2px solid var(--accent);
        }`
    }
  ],

  pseudoClasses: [
    {
      id: "css-pc-01",
      title: "¿Qué es una pseudoclase?",
      description: "Permite aplicar estilos a un elemento en un estado específico.",
      content: `<p>
      Una pseudoclase es una palabra clave precedida por <em>:</em> que se añade a un selector para especificar un estado especial del elemento seleccionado, como <em>:hover</em> o <em>:focus</em>.
    </p>`,
      example: `
        button:hover {
          background-color: blue;
        }`
    },
    {
      id: "css-pc-02",
      title: "Pseudoclase :hover",
      description: "Aplica estilos cuando el mouse pasa sobre un elemento.",
      content: `<p>
      La pseudoclase <em>:hover</em> se activa cuando el puntero del usuario está encima del elemento.
    </p>`,
      example: `
        a:hover {
          color: red;
          text-decoration: underline;
        }`
    },
    {
      id: "css-pc-03",
      title: "Pseudoclase :focus",
      description: "Se activa cuando el elemento está enfocado (por teclado o clic).",
      content: `<p>
      La pseudoclase <em>:focus</em> es común en formularios e inputs, y mejora la accesibilidad visual al navegar con teclado.
    </p>`,
      example: `
        input:focus {
          border: 2px solid green;
        }`
    },
    {
      id: "css-pc-04",
      title: "Pseudoclase :nth-child()",
      description: "Selecciona elementos según su posición entre hermanos.",
      content: `<p>
      <em>:nth-child()</em> acepta un número o fórmula (como <em>2n</em>) para seleccionar elementos en posiciones específicas.
    </p>`,
      example: `
        li:nth-child(odd) {
          background: #f0f0f0;
        }`
    },
    {
      id: "css-pc-05",
      title: "Pseudoclase :first-child y :last-child",
      description: "Seleccionan el primer o último hijo de un padre.",
      content: `<p>
      <em>:first-child</em> se aplica al primer hijo, y <em>:last-child</em> al último. Muy útiles para estructuras listas o layouts dinámicos.
    </p>`,
      example: `
        p:first-child {
          font-weight: bold;
        }
        p:last-child {
          color: gray;
        }`
    },
    {
      id: "css-pc-06",
      title: "Pseudoclase :not()",
      description: "Permite excluir elementos que coincidan con un selector.",
      content: `<p>
      La pseudoclase <em>:not()</em> es ideal para aplicar estilos a todos los elementos excepto a los que cumplan una condición.
    </p>`,
      example: `
        li:not(.activo) {
          opacity: 0.5;
        }`
    },
    {
      id: "css-pc-07",
      title: "Pseudoclases estructurales",
      description: "Controlan el estilo en base a la posición estructural del elemento.",
      content: `<p>
      Incluye pseudoclases como <em>:only-child</em>, <em>:empty</em>, <em>:nth-of-type()</em>, que permiten escribir CSS más específico y semántico.
    </p>`,
      example: `
        p:empty {
          display: none;
        }`
    }
  ],

  pseudoElements: [
    {
      id: "css-pe-01",
      title: "¿Qué es un pseudoelemento?",
      description: "Permite aplicar estilo a partes específicas de un elemento.",
      content: `<p>
      Un pseudoelemento te permite modificar partes concretas del contenido de un elemento. Se escribe con <em>::</em> y puede afectar el texto o generar contenido visual adicional.
    </p>`,
      example: `
        p::first-line {
          font-weight: bold;
        }`
    },
    {
      id: "css-pe-02",
      title: "Pseudoelemento ::before",
      description: "Inserta contenido antes del contenido real de un elemento.",
      content: `<p>
      <em>::before</em> permite agregar contenido antes del contenido real del elemento. Requiere la propiedad <em>content</em>.
    </p>`,
      example: `
        h1::before {
          content: "🔥 ";
        }`
    },
    {
      id: "css-pe-03",
      title: "Pseudoelemento ::after",
      description: "Agrega contenido después del contenido real de un elemento.",
      content: `<p>
      <em>::after</em> es útil para añadir íconos, efectos o decoraciones sin alterar el HTML original.
    </p>`,
      example: `
        h1::after {
          content: " ✨";
        }`
    },
    {
      id: "css-pe-04",
      title: "Pseudoelemento ::first-line",
      description: "Aplica estilo solo a la primera línea de un párrafo.",
      content: `<p>
      Ideal para destacar visualmente el inicio de un párrafo. Se puede usar para estilos como <em>font-weight</em>, <em>color</em> o <em>font-variant</em>.
    </p>`,
      example: `
        p::first-line {
          color: purple;
        }`
    },
    {
      id: "css-pe-05",
      title: "Pseudoelemento ::first-letter",
      description: "Estiliza la primera letra de un bloque de texto.",
      content: `<p>
      Común en diseños editoriales o efectos decorativos, como capitulares o iniciales decoradas.
    </p>`,
      example: `
        p::first-letter {
          font-size: 2em;
          color: red;
        }`
    },
    {
      id: "css-pe-06",
      title: "Uso combinado con pseudoclases",
      description: "Puedes combinar pseudoelementos con pseudoclases para estilos más avanzados.",
      content: `<p>
      Combinando <em>:hover</em> con <em>::after</em> puedes crear efectos como tooltips o decoraciones dinámicas.
    </p>`,
      example: `
        button:hover::after {
          content: " (click)";
          font-size: 0.9em;
        }`
    }
  ],

  bestPracticesCSS: [
    {
      id: "css-bp-01",
      title: "Escribe CSS limpio y ordenado",
      description: "Un código bien estructurado mejora la mantenibilidad y colaboración.",
      content: `<p>
      Organiza tus reglas de estilo por secciones lógicas, usa indentación coherente y comentarios explicativos. Esto facilita el trabajo en equipo y la depuración.
    </p>`,
      example: `
        /* Header */
        header {
          background-color: #222;
          color: white;
        }

        /* Navegación */
        nav {
          padding: 1rem;
        }`
    },
    {
      id: "css-bp-02",
      title: "Evita el uso excesivo de !important",
      description: "Abusar de !important complica el mantenimiento del CSS.",
      content: `<p>
      Solo debe usarse en casos muy específicos. Si usas buena especificidad y estructura, rara vez será necesario.
    </p>`,
      example: `
        /* Uso innecesario */
        h1 {
          color: red !important;
        }

        /* Mejor práctica */
        .header-title {
          color: red;
        }`
    },
    {
      id: "css-bp-03",
      title: "Usa clases en lugar de selectores excesivamente específicos",
      description: "Facilita la reutilización y el mantenimiento.",
      content: `<p>
      Prefiere seleccionar elementos por clase en lugar de encadenar selectores complejos como <em>div ul li a span</em>, lo cual es frágil y difícil de sobrescribir.
    </p>`,
      example: `
        /* Mal ejemplo */
        div ul li a span {
          color: blue;
        }

        /* Mejor */
        .link-label {
          color: blue;
        }`
    },
    {
      id: "css-bp-04",
      title: "Agrupa propiedades relacionadas",
      description: "Es más legible y coherente.",
      content: `<p>
      Escribe las propiedades de forma ordenada, por tipo: box-model, tipografía, colores, etc. Algunos usan herramientas como <em>stylelint</em> para automatizarlo.
    </p>`,
      example: `
        .card {
          /* Box model */
          margin: 1rem;
          padding: 1rem;

          /* Typography */
          font-size: 1.2rem;
          line-height: 1.5;

          /* Colors */
          background-color: #fff;
          color: #333;
        }`
    },
    {
      id: "css-bp-05",
      title: "Prefiere nombres de clases descriptivos",
      description: "Un buen nombre evita ambigüedades y hace el CSS autoexplicativo.",
      content: `<p>
      Usa nombres claros y coherentes como <em>.product-card</em> o <em>.btn-primary</em>. Evita abreviaciones confusas como <em>.p1</em> o <em>.x12</em>.
    </p>`,
      example: `
        &lt;!-- Recomendado --&gt;
        &lt;div class="hero-section"&gt;&lt;/div&gt;
        &lt;button class="btn-primary"&gt;Enviar&lt;/button&gt;`
    },
    {
      id: "css-bp-06",
      title: "Evita repetir código con clases reutilizables",
      description: "Crea utilidades o componentes base para evitar redundancia.",
      content: `<p>
      Puedes definir clases como <em>.text-center</em> o <em>.mb-2</em> y aplicarlas a diferentes elementos sin duplicar reglas.
    </p>`,
      example: `
        .text-center {
          text-align: center;
        }
        .mb-2 {
          margin-bottom: 0.5rem;
        }

        &lt;p class="text-center mb-2"&gt;Texto alineado y con margen&lt;/p&gt;`
    },
    {
      id: "css-bp-07",
      title: "Usa variables CSS para colores, fuentes y tamaños",
      description: "Ayuda a mantener coherencia en todo el diseño.",
      content: `<p>
      Las variables CSS permiten cambiar el tema global sin modificar múltiples reglas. Se declaran en <em>:root</em>.
    </p>`,
      example: `
      :root {
        --primary-color: #3498db;
        --font-size-base: 16px;
      }

      body {
        color: var(--primary-color);
        font-size: var(--font-size-base);
      }`
    }
  ]
};

export default roadmapCSS;