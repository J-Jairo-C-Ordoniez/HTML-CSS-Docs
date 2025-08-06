const roadmapHTML = {
    fundamentalsHTML: [
        {
            id: "html-01",
            title: "¿Qué es HTML?",
            description: "HTML (Lenguaje de Marcado de Hipertexto) es el lenguaje estándar para crear páginas web.",
            content: `
                <p>
                    Imagina que HTML es el arquitecto de un sitio web: define la estructura, organiza los espacios y coloca los cimientos para que el navegador sepa cómo mostrar textos, imágenes, videos, formularios… todo.
                </p>
                <p>
                    Técnicamente hablando, HTML usa etiquetas (tags) que le dicen al navegador:
                </p>
                <ul>
                    <li>Que es cada contenido (un título, un párrafo, una imagen)</li>
                    <li>Como debe interpretarse</li>
                    <li>y en qué orden aparece</li>
                </ul>
            `
        },
        {
            id: "html-02",
            title: "Estructura básica de un documento HTML",
            description: "Toda página HTML tiene una estructura base necesaria para que los navegadores interpreten el contenido correctamente.",
            content: `
                <p>Consiste en <em>&lt;html&gt;</em>, <em>&lt;head&gt;</em> y <em>&lt;body&gt;</em>. El <em>&lt;head&gt;</em> contiene metadatos y el <em>&lt;body&gt;</em> el contenido visible.</p>
            `,
            example: `
                &lt;!DOCTYPE html&gt; &lt;!-- Define que el documento es HTML5 --&gt;
                &lt;html lang="en"&gt; &lt;!-- Raíz del documento, idioma inglés --&gt;
                    &lt;head&gt; &lt;!-- Metadatos --&gt;
                        &lt;meta charset="UTF-8"&gt; &lt;!-- Codificación UTF-8 --&gt;
                        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; &lt;!-- Adaptabilidad --&gt;
                        &lt;title&gt;Document&lt;/title&gt; &lt;!-- Título de la página --&gt;
                    &lt;/head&gt;
                    &lt;body&gt; &lt;!-- Contenido visible --&gt;

                    &lt;/body&gt;
                &lt;/html&gt;`
        },
        {
            id: "html-03",
            title: "Etiqueta para escribir texto",
            description: "Se utiliza para agrupar párrafos de texto en HTML.",
            content: `
                <p>
                    Es la etiqueta fundamental para separar ideas de forma semántica y darle estructura al contenido de la página. <em>&lt;p&gt;</em> representa un párrafo y permite separar bloques de texto para mejorar la legibilidad y accesibilidad de tu sitio web.
                </p>
            `,
            example: `&lt;p&gt;Este es un texto.&lt;/p&gt;`
        },
        {
            id: "html-04",
            title: "Etiquetas de encabezado",
            description: "Definen títulos y subtítulos, organizando jerárquicamente el contenido.",
            content: `
                <p>
                    Las etiquetas de encabezado van de <em>&lt;h1&gt;</em> (más importante) a <em>&lt;h6&gt;</em> (menos relevante). Son clave para la accesibilidad y el SEO.
                </p>
                <p>
                    Usarlas correctamente ayuda a los motores de búsqueda y a los usuarios a entender la estructura del documento.
                </p>
            `,
            example: `
                &lt;h1&gt;Título principal&lt;/h1&gt;
                &lt;h2&gt;Subtítulo importante&lt;/h2&gt;
                &lt;h3&gt;Subsección&lt;/h3&gt;`
        },
        {
            id: "html-05",
            title: "La etiqueta para hipertexto: creando enlaces",
            description: "Permite vincular documentos, páginas web o recursos externos.",
            content: `
                <p>
                    Con <em>&lt;a&gt;</em> defines hipervínculos que conectan tu contenido con otras páginas, secciones o recursos. Usa el atributo <em>href</em> para indicar la URL de destino.
                </p>
            `,
            example: `&lt;a href="https://avicii.com"&gt;Visita el sitio de Avicii&lt;/a&gt;`
        },
        {
            id: "html-06",
            title: "Comentarios en HTML",
            description: "Sirven para dejar notas o explicaciones en el código que no se muestran en la página.",
            content: `
                <p>
                    Los comentarios son útiles para documentar tu código, aclarar secciones o dejar recordatorios para ti o tu equipo.
                </p>
            `,
            example: `&lt;!-- Este es un comentario en HTML --&gt;`
        },
        {
            id: "html-07",
            title: "Listas ordenadas y desordenadas",
            description: "Agrupan ítems en listas con o sin orden numérico.",
            content: `
                <p>
                    Las listas permiten organizar contenidos relacionados. <em>&lt;ol&gt;</em> crea listas numeradas y <em>&lt;ul&gt;</em> listas con viñetas. Cada elemento va dentro de <em>&lt;li&gt;</em>.
                </p>
            `,
            example: `
                &lt;ol&gt;
                    &lt;li&gt;Primer paso&lt;/li&gt;
                    &lt;li&gt;Segundo paso&lt;/li&gt;
                &lt;/ol&gt;

                &lt;ul&gt;
                    &lt;li&gt;Elemento uno&lt;/li&gt;
                    &lt;li&gt;Elemento dos&lt;/li&gt;
                &lt;/ul&gt;`
        },
        {
            id: "html-08",
            title: "Saltos de línea y líneas horizontales",
            description: "Agregan separación en el contenido.",
            content: `
                <p>
                    <em>&lt;br&gt;</em> inserta un salto de línea simple, mientras que <em>&lt;hr&gt;</em> crea una línea horizontal que divide secciones del contenido.
                </p>
            `,
            example: `
                &lt;p&gt;Texto antes del salto&lt;br&gt;Texto después del salto&lt;/p&gt;
                &lt;hr&gt;
                &lt;p&gt;Texto tras la línea horizontal&lt;/p&gt;`
        }
    ],

    organization: [
        {
            id: "html-01",
            title: "Semántica en HTML: por qué importa",
            description: "La semántica en HTML ayuda a que el contenido sea comprensible tanto para humanos como para máquinas.",
            content: `
                <p>
                    Usar etiquetas semánticas mejora la accesibilidad, el SEO y el mantenimiento del código. En vez de usar <em>&lt;div&gt;</em> para todo, usa etiquetas como <em>&lt;article&gt;</em>, <em>&lt;nav&gt;</em>, <em>&lt;footer&gt;</em> según el tipo de contenido.
                </p>
            `,
            example: `
                &lt;main&gt;
                    &lt;article&gt;
                        &lt;h2&gt;Noticias&lt;/h2&gt;
                        &lt;p&gt;Contenido de la noticia...&lt;/p&gt;
                    &lt;/article&gt;
                &lt;/main&gt;`
        },
        {
            id: "html-02",
            title: "Contenedores comunes",
            description: "<em>&lt;div&gt;</em> y <em>&lt;section&gt;</em> se usan para agrupar contenido, pero con diferente propósito semántico.",
            content: `
                <p>
                    <em>&lt;div&gt;</em> es un contenedor genérico sin significado semántico. <em>&lt;section&gt;</em> indica una sección temática de contenido, ideal para dividir capítulos o bloques relacionados.
                </p>
            `,
            example: `
                &lt;section&gt;
                    &lt;h2&gt;Preguntas Frecuentes&lt;/h2&gt;
                    &lt;p&gt;¿Cómo funciona?&lt;/p&gt;
                &lt;/section&gt;`
        },
        {
            id: "html-03",
            title: "Estructura semántica de una página",
            description: "Estas etiquetas representan las secciones comunes de una página web.",
            content: `
                <p>
                    <em>&lt;header&gt;</em> contiene encabezados y navegación, <em>&lt;main&gt;</em> el contenido principal, <em>&lt;footer&gt;</em> la parte inferior con información adicional. Mejoran la comprensión del contenido y la accesibilidad.
                </p>
            `,
            example: `
                &lt;header&gt;
                    &lt;h1&gt;Mi Blog&lt;/h1&gt;
                &lt;/header&gt;
                &lt;main&gt;
                    &lt;p&gt;Contenido del artículo...&lt;/p&gt;
                &lt;/main&gt;
                &lt;footer&gt;
                    &lt;p&gt;© 2025&lt;/p&gt;
                &lt;/footer&gt;`
        },
        {
            id: "html-04",
            title: "Artículos y contenido independiente",
            content: `
                <p>
                    <em>&lt;article&gt;</em> es ideal para publicaciones, entradas de blog o noticias. <em>&lt;aside&gt;</em> se usa para barras laterales, anuncios o contenido relacionado que complementa el principal.
                </p>
            `,
            example: `
                &lt;article&gt;
                    &lt;h2&gt;Cómo aprender HTML&lt;/h2&gt;
                    &lt;p&gt;Empieza por lo básico y practica mucho.&lt;/p&gt;
                &lt;/article&gt;
                &lt;aside&gt;
                    &lt;p&gt;Anuncios o enlaces útiles&lt;/p&gt;
                &lt;/aside&gt;`
        },
        {
            id: "html-05",
            title: "La etiqueta <em>&lt;nav&gt;</em> y los menús",
            content: `
                <p>
                    <em>&lt;nav&gt;</em> agrupa enlaces que permiten moverse entre secciones o páginas. Facilita la accesibilidad y la organización de los menús de navegación.
                </p>
            `,
            example: `
                &lt;nav&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href="#home"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#services"&gt;Servicios&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
                &lt;/nav&gt;`
        },
        {
            id: "html-06",
            title: "El uso correcto de <em>&lt;span&gt;</em> y su diferencia con <em>&lt;div&gt;</em>",
            content: `
                <p>
                    Usa <em>&lt;span&gt;</em> para aplicar estilos o manipular pequeñas partes de texto sin contenido. <em>&lt;div&gt;</em> se usa para agrupar bloques completos de contenido.
                </p>
            `,
            example: `
                &lt;p&gt;Este texto tiene un &lt;span style="color:red"&gt;enlace rojo&lt;/span&gt;&lt;/p&gt;`
        }
    ],

    forms: [
        {
            id: "forms-01",
            title: "La etiqueta <em>&lt;form&gt;</em> y su estructura básica",
            description: "Define un formulario para recopilar datos del usuario.",
            content: `
                <p>
                    La etiqueta <em>&lt;form&gt;</em> envuelve todos los campos y botones del formulario. Usa atributos como <em>action</em> para indicar a dónde enviar los datos y <em>method</em> para definir el método HTTP.
                </p>
            `,
            example: `
                &lt;form action="/submit" method="post"&gt;
                    &lt;input type="text" placeholder="Nombre"&gt;
                    &lt;button type="submit"&gt;Enviar&lt;/button&gt;
                &lt;/form&gt;`
        },
        {
            id: "forms-02",
            title: "Campos de texto: <em>&lt;input type=\"text\"&gt;</em> y <em>&lt;textarea&gt;</em>",
            description: "Permiten al usuario escribir datos cortos o largos.",
            content: `
                <p>
                    Usa <em>&lt;input type="text"&gt;</em> para una sola línea de texto y <em>&lt;textarea&gt;</em> para varias líneas.
                </p>
            `,
            example: `
                &lt;input type="text" placeholder="Nombre"&gt;
                &lt;textarea placeholder="Comentario"&gt;&lt;/textarea&gt;`
        },
        {
            id: "forms-03",
            title: "Botones",
            description: "Permiten enviar o reiniciar formularios.",
            content: `
                <p>
                    Con <em>&lt;button&gt;</em> puedes definir botones con contenido HTML dentro, mientras que <em>&lt;input type="submit"&gt;</em> crea un botón para enviar el formulario.
                </p>
            `,
            example: `
                &lt;button type="submit"&gt;Enviar&lt;/button&gt;
                &lt;input type="submit" value="Enviar con input"&gt;`
        },
        {
            id: "forms-04",
            title: "Checkbox y radio: selección múltiple y única",
            description: "Permiten seleccionar opciones dentro de un formulario.",
            content: `
                <p>
                    Usa <em>&lt;input type="checkbox"&gt;</em> para selección múltiple y <em>&lt;input type="radio"&gt;</em> para una única opción dentro de un grupo.
                </p>
            `,
            example: `
                &lt;label&gt;
                    &lt;input type="checkbox" name="intereses" value="html"&gt;
                    HTML
                &lt;/label&gt;
                &lt;label&gt;
                    &lt;input type="radio" name="genero" value="masculino"&gt;
                    Masculino
                &lt;/label&gt;`
        },
        {
            id: "forms-05",
            title: "Listas desplegables: <em>&lt;select&gt;</em> y <em>&lt;option&gt;</em>",
            description: "Permiten elegir una opción de un listado.",
            content: `
                <p>
                    La etiqueta <em>&lt;select&gt;</em> crea un menú desplegable, y <em>&lt;option&gt;</em> define cada elemento de la lista.
                </p>
            `,
            example: `
                &lt;select name="lenguaje"&gt;
                    &lt;option value="html"&gt;
                        HTML
                    &lt;/option&gt;
                    &lt;option value="css"&gt;
                        CSS
                    &lt;/option&gt;
                &lt;/select&gt;`
        },
        {
            id: "forms-06",
            title: "Etiqueta <em>&lt;label&gt;</em> y la accesibilidad",
            description: "Asocian un texto descriptivo a un campo.",
            content: `
                <p>
                    La etiqueta <em>&lt;label&gt;</em> mejora la accesibilidad enlazando un texto con un input mediante el atributo <em>for</em> coincidiendo con el <em>id</em> del campo.
                </p>
            `,
            example: `
                &lt;label for="email"&gt; Correo: &lt;/label&gt;
                &lt;input id="email" type="email" placeholder="correo@ejemplo.com"&gt;`
        },
        {
            id: "forms-07",
            title: "Atributos comunes: required, placeholder y disabled",
            description: "Controlan el comportamiento y la experiencia del usuario.",
            content: `
                <p>
                    Usa <em>required</em> para que el campo sea obligatorio, <em>placeholder</em> para mostrar texto de ayuda y <em>disabled</em> para deshabilitar un campo.
                </p>
            `,
            example: `
                &lt;input type="text" placeholder="Nombre" required&gt;
                &lt;input type="text" value="No editable" disabled&gt;`
        }
    ],

    multimedia: [
        {
            id: "html-media-01",
            title: "Insertar imágenes con <em>&lt;img&gt;</em>",
            description: "La etiqueta <em>&lt;img&gt;</em> permite mostrar imágenes dentro del contenido web.",
            content: `
                <p>
                    Para mostrar imágenes se usa la etiqueta <em>&lt;img&gt;</em>, que es de tipo vacío (no necesita etiqueta de cierre). Sus atributos más comunes son <em>src</em> (ruta de la imagen), <em>alt</em> (texto alternativo), <em>width</em> y <em>height</em>. Es importante usar siempre <em>alt</em> para mejorar la accesibilidad.
                </p>
            `,
            example: `&lt;img src="cat.jpg" alt="Un gato bonito" width="300"&gt;`
        },
        {
            id: "html-media-02",
            title: "Insertar videos con <em>&lt;video&gt;</em>",
            description: "La etiqueta <em>&lt;video&gt;</em> permite insertar videos directamente en la web.",
            content: `
                <p>
                    Con HTML5 puedes usar <em>&lt;video&gt;</em> para reproducir videos sin necesidad de plugins. Puedes usar atributos como <em>controls</em>, <em>autoplay</em>, <em>loop</em>, y anidar múltiples <em>&lt;source&gt;</em> para compatibilidad con diferentes formatos.
                </p>
            `,
            example: `
                &lt;video width="320" controls&gt;
                    &lt;source src="video.mp4" type="video/mp4"&gt;
                    Tu navegador no soporta este video.
                &lt;/video&gt;`
        },
        {
            id: "html-media-03",
            title: "Insertar audio con <em>&lt;audio&gt;</em>",
            description: "La etiqueta <em>&lt;audio&gt;</em> permite insertar archivos de audio en tu sitio web.",
            content: `
                <p>
                    Al igual que los videos, puedes usar <em>&lt;audio&gt;</em> con atributos como <em>controls</em> y múltiples <em>&lt;source&gt;</em> para formatos distintos. Esto permite reproducir música o sonidos directamente desde el navegador.
                </p>
            `,
            example: `
                &lt;audio controls&gt;
                    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
                    Tu navegador no soporta este audio.
                &lt;/audio&gt;`
        },
        {
            id: "html-media-04",
            title: "Agrupar contenido multimedia con <em>&lt;figure&gt;</em>",
            description: "La etiqueta <em>&lt;figure&gt;</em> agrupa contenido visual junto con su descripción.",
            content: `
                <p>
                    Usa <em>&lt;figure&gt;</em> cuando quieras asociar una imagen, gráfico o multimedia con un texto descriptivo mediante <em>&lt;figcaption&gt;</em>. Esta combinación mejora la semántica del contenido y ayuda a los usuarios a entender el contexto del recurso.
                </p>
            `,
            example: `
                &lt;figure&gt;
                    &lt;img src="ufo.jpg" alt="Objeto volador no identificado"&gt;
                    &lt;figcaption&gt;Avistamiento en Colombia, 2025&lt;/figcaption&gt;
                &lt;/figure&gt;`
        }
    ],

    accessibility: [
        {
            id: "html-access-01",
            title: "Texto alternativo con <em>alt</em>",
            description: "Esencial para lectores de pantalla y SEO.",
            content: `
                <p>
                    El atributo <em>alt</em> permite proporcionar una descripción textual de una imagen. Esto es fundamental para usuarios con discapacidad visual que usan lectores de pantalla, y también mejora el SEO al ofrecer contexto al contenido visual.
                </p>
            `,
            example: `&lt;img src="logo.png" alt="Logo de la empresa"&gt;`
        },
        {
            id: "html-access-02",
            title: "Navegación con <em>&lt;nav&gt;</em> y estructura semántica",
            description: "Ayuda a los lectores de pantalla a identificar menús de navegación.",
            content: `
                <p>
                    La etiqueta <em>&lt;nav&gt;</em> define bloques de navegación dentro de la estructura del documento. Esto permite que tecnologías asistivas detecten y describan correctamente las opciones de menú a los usuarios.
                </p>
            `,
            example: `
                &lt;nav&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="#home"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#services"&gt;Servicios&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/nav&gt;`
        },
        {
            id: "html-access-03",
            title: "Atributos ARIA para mejorar la accesibilidad",
            description: "Proporcionan contexto adicional a usuarios con discapacidad.",
            content: `
                <p>
                    Los atributos ARIA como <em>aria-label</em>, <em>aria-hidden</em> o <em>aria-expanded</em> ayudan a que las interfaces sean más accesibles para usuarios que utilizan lectores de pantalla, describiendo la funcionalidad de elementos que no son evidentes visualmente.
                </p>
            `,
            example: `&lt;button aria-label="Abrir menú principal"&gt;☰&lt;/button&gt;`
        },
        {
            id: "html-access-04",
            title: "Formularios accesibles",
            description: "Relaciona correctamente <em>label</em> e <em>input</em> con <em>for</em> e <em>id</em>.",
            content: `
                <p>
                    Un formulario accesible permite que el usuario sepa qué debe ingresar en cada campo. Para ello, el atributo <em>for</em> en la etiqueta <em>&lt;label&gt;</em> debe coincidir con el <em>id</em> del campo <em>&lt;input&gt;</em>. Esto mejora tanto la accesibilidad como la usabilidad.
                </p>
            `,
            example: `
                &lt;label for="email"&gt;Correo:&lt;/label&gt;
                &lt;input type="email" id="email" name="email"&gt;`
        }
    ],

    optimization: [
        {
            id: "html-opt-01",
            title: "Reducir el tamaño del HTML",
            description: "Elimina espacios y comentarios para mejorar la carga.",
            content: `
                <p>
                    Para mejorar el rendimiento del sitio web, se recomienda eliminar espacios innecesarios, saltos de línea y comentarios HTML antes de llevar el código a producción. Esto reduce el tamaño de los archivos enviados al navegador.
                </p>
            `,
            example: `
                &lt;!-- Código original --&gt;
                &lt;div&gt;     Hola     &lt;/div&gt;
                &lt;!-- Código minificado --&gt;
                &lt;div&gt;Hola&lt;/div&gt;`
        },
        {
            id: "html-opt-02",
            title: "Evitar el uso innecesario de <em>&lt;div&gt;</em>",
            description: "Usar etiquetas semánticas reduce la carga cognitiva para el navegador y el usuario.",
            content: `
                <p>
                    Aunque <em>&lt;div&gt;</em> es útil, no debes usarlo para todo. Prioriza etiquetas como <em>&lt;section&gt;</em>, <em>&lt;article&gt;</em> o <em>&lt;nav&gt;</em> para dar significado al contenido. Esto hace tu HTML más claro, accesible y optimizado para buscadores.
                </p>
            `,
            example: `
                &lt;!-- No recomendado --&gt;
                &lt;div class="navegacion"&gt;...&lt;/div&gt;
                &lt;!-- Mejor opción --&gt;
                &lt;nav&gt;...&lt;/nav&gt;`
        },
        {
            id: "html-opt-03",
            title: "Carga diferida (Lazy Loading) de imágenes",
            description: "Aumenta la velocidad inicial del sitio.",
            content: `
                <p>
                    Al usar el atributo <em>loading="lazy"</em> en elementos como <em>&lt;img&gt;</em> e <em>&lt;iframe&gt;</em>, se pospone su carga hasta que estén a punto de ser visibles en pantalla. Esto ahorra ancho de banda y mejora la experiencia del usuario.
                </p>
            `,
            example: `&lt;img src="banner.jpg" alt="Banner principal" loading="lazy"&gt;`
        },
        {
            id: "html-opt-04",
            title: "Optimización con metadatos en <em>&lt;head&gt;</em>",
            description: "Mejora la visibilidad en buscadores.",
            content: `
                <p>
                    Incluir metadatos relevantes dentro de la etiqueta <em>&lt;head&gt;</em> permite a los motores de búsqueda entender mejor el contenido del sitio. Usa <em>&lt;meta&gt;</em> para descripciones, palabras clave y etiquetas.
                </p>
            `,
            example: `
                &lt;meta name="description" content="Blog de desarrollo web con HTML, CSS y más."&gt;
                &lt;meta property="og:image" content="image.png"&gt;`
        }
    ],

    bestPracticesHTML: [
        {
            id: "html-bp-01",
            title: "Etiquetas obsoletas: qué evitar y por qué",
            description: "El HTML moderno ha reemplazado etiquetas antiguas por alternativas más semánticas y accesibles.",
            content: `
                <p>
                    Evita etiquetas como <em>&lt;center&gt;</em>, <em>&lt;font&gt;</em>, <em>&lt;b&gt;</em> o <em>&lt;i&gt;</em>. En su lugar usa CSS y etiquetas semánticas como <em>&lt;strong&gt;</em>, <em>&lt;em&gt;</em> y reglas de estilo externas.
                </p>
            `,
            example: `
                &lt;!-- Incorrecto --&gt;
                &lt;center&gt;&lt;font color="red"&gt;Importante&lt;/font&gt;&lt;/center&gt;

                &lt;!-- Correcto --&gt;
                &lt;p style="text-align: center; color: red;"&gt;&lt;strong&gt;Importante&lt;/strong&gt;&lt;/p&gt;`
        },
        {
            id: "html-bp-02",
            title: "HTML semántico vs no semántico: impacto real",
            description: "Usar etiquetas semánticas facilita el mantenimiento, la accesibilidad y el posicionamiento SEO.",
            content: `
                <p>
                    Mientras que <em>&lt;div&gt;</em> o <em>&lt;span&gt;</em> son genéricas, etiquetas como <em>&lt;article&gt;</em>, <em>&lt;section&gt;</em>, <em>&lt;aside&gt;</em>, <em>&lt;main&gt;</em> ayudan a describir el contenido de forma clara y estructurada.
                </p>
            `,
            example: `
                &lt;section&gt;
                    &lt;h2&gt;Noticias&lt;/h2&gt;
                    &lt;p&gt;Esta semana lanzamos una nueva sección del blog.&lt;/p&gt;
                &lt;/section&gt;`
        },
        {
            id: "html-bp-03",
            title: "Consejos para escribir HTML limpio, legible y escalable",
            description: "El código limpio es más fácil de mantener, versionar y escalar.",
            content: `
                <ul>
                    <li>Usa indentación consistente (2 o 4 espacios).</li>
                    <li>Evita anidar etiquetas innecesariamente.</li>
                    <li>Nombra clases e IDs de forma significativa y en inglés si es posible.</li>
                    <li>Agrupa secciones con el mismo propósito.</li>
                    <li>Comenta bloques complejos para facilitar la comprensión.</li>
                </ul>
            `
        },
        {
            id: "html-bp-04",
            title: "Crea tu primera plantilla HTML reutilizable",
            description: "Una base sólida te permite ahorrar tiempo y mantener la coherencia en tus proyectos.",
            content: `
                <p>
                    Incluye <em>&lt;header&gt;</em>, <em>&lt;main&gt;</em>, <em>&lt;footer&gt;</em> y carga externa de scripts CSS y JS. Puedes duplicarla para crear nuevas páginas rápidamente.
                </p>
            `,
            example: `&lt;!DOCTYPE html&gt;
                &lt;html lang="es"&gt;
                    &lt;head&gt;
                        &lt;meta charset="UTF-8"&gt;
                        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                        &lt;title&gt;Mi Sitio&lt;/title&gt;
                        &lt;link rel="stylesheet" href="styles.css"&gt;
                    &lt;/head&gt;
                    &lt;body&gt;
                        &lt;header&gt;...&lt;/header&gt;
                        &lt;main&gt;...&lt;/main&gt;
                        &lt;footer&gt;...&lt;/footer&gt;
                        &lt;script src="main.js"&gt;&lt;/script&gt;
                    &lt;/body&gt;
                &lt;/html&gt;`
        },
        {
            id: "html-bp-07",
            title: "Usa el inspector del navegador para aprender y depurar",
            description: "Las DevTools del navegador son tu mejor aliado para aprender y corregir errores.",
            content: `
                <ul>
                    <li>Inspecciona elementos para ver su estructura y estilos aplicados.</li>
                    <li>Edita HTML y CSS en vivo para probar cambios rápidamente.</li>
                    <li>Analiza rendimiento y accesibilidad desde pestañas como "Performance" o "Accessibility".</li>
                    <li>Usa la consola para revisar errores y ejecutar pruebas de JS.</li>
                </ul>
            `
        }
    ]
};

export default roadmapHTML;