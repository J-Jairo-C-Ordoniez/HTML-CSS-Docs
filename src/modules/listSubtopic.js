import roadmapHTML from "../data/dataHtml.js";
import roadmapCSS from "../data/dataCSS.js";

export default function listSubtopic(id, element) {
    const data = {...roadmapHTML, ...roadmapCSS};
    const { [id]: subtopic } = data;
    let code = '';

    for (const item of subtopic) {
        code += `
            <li id="${item.id}">
                <a href="#${item.id}">
                    ${item.title}
                </a>
            </li>`;
    }

    element.innerHTML = code;
}