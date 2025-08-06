import itemsRoadmap from "../data/itemsRoadmap.js";

export default function search(value) {
    const { 
        itemsRoadmapHTML, 
        itemsRoadmapCSS 
    } = itemsRoadmap;

    const items = [...itemsRoadmapHTML, ...itemsRoadmapCSS];
    const filterSearch = items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));

    return (filterSearch.length > 0) ? filterSearch : [404];

};