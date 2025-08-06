import roadmapHTML from "../data/dataHtml.js";
import roadmapCSS from "../data/dataCSS.js";

export default function main(search, element) {
    const data = { ...roadmapHTML, ...roadmapCSS };

    if (search[0] === 404) {
        return element.textContent = '404'
    }

    let code = "";

    for (const item of search) {
        const { [item.id]: issues } = data;
        const subtopics = issues.map(sub => `<li>${sub.title}</li>`).join("");

        code += `
            <article class="search">
                <h2 class="search-title">${item.title}</h2>
                <ul class="search-subtopics">
                    ${subtopics}
                </ul>
                <button class="search-btn" id="${item.id}">
                    Ver tema completo
                </button>
            </article>`
    }

    element.innerHTML = code;

}