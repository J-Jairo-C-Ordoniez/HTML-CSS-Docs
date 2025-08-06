export default function contentHTML(element, issue) {
    let code = '';

    for (const item of issue) {
        let codeTem = `
            <article id=${item.id} class="module">
                <h2>${item.title}</h2>
                <h4>${item.description}</h4>
                <div>${item.content}</div>
                ${item.example ? `
                    <pre class="code">
                        <code class="language-html">${item.example}</code>
                    </pre>` : ""}
            </article>
        `

        code += codeTem
    }

    element.innerHTML = code;
}