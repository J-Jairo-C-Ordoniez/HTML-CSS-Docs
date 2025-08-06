import itemsRoadmap from "../data/itemsRoadmap.js";

export default function listRoadmap(parentElemnt, type) {
    const { itemsRoadmapHTML, itemsRoadmapCSS } = itemsRoadmap;
    let code = '';

    if (type === 'html') {
        for (const item of itemsRoadmapHTML) {
            code += `
                <li id="${item.id}">
                    <button>${item.title}</button>
                </li>
            `;
        }
    } else {
        for (const item of itemsRoadmapCSS) {
            code += `
                <li id="${item.id}">
                    <button>${item.title}</button>
                </li>
            `;
        }
    }

    parentElemnt.innerHTML = code;
}