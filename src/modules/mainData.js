import roadmapHTML from "../data/dataHtml.js";
import roadmapCSS from "../data/dataCSS.js";
import contentHTML from "./contentHTML.js";
import contentCSS from "./contentCSS.js";
import itemsRoadmap from "../data/itemsRoadmap.js";

export default function mainData(id, element) {
    const data = {...roadmapHTML, ...roadmapCSS};
    const { itemsRoadmapHTML } = itemsRoadmap;
    const { [id]: issue } = data;

    let isRoadmapHtml = itemsRoadmapHTML.filter(item => item.id === id);

    isRoadmapHtml.length > 0 ? contentHTML(element, issue) : contentCSS(element, issue)
    
}