import animateTitle from "./modules/animateTitle.js";
import mainSearch from "./modules/mainSearch.js";
import search from "./utils/search.js";
import listRoadmap from "./modules/listRoadmap.js";
import mainData from "./modules/mainData.js";
import listSubtopic from "./modules/listSubtopic.js";
import observer from "./utils/observer.js";
import roadmapCSS from "./data/dataCSS.js";


const $modeColorBtn = document.querySelector('.h-mode-color  button img')
const $animateTitle = document.querySelector('.h-text-animate');

const $contentInputSearch = document.querySelector('.h-input-search');
const $inputSearch = document.querySelector('.h-input-search-filter');
const $search = document.querySelector('.h-input-search button');
const $valueSearch = document.querySelector('.h-input-search input');

const $roadmapHTML = document.querySelector('.a-learn-html-nav');
const $roadmapCSS = document.querySelector('.a-learn-css-nav');

const $main = document.querySelector('main');

const $subtopicNav = document.querySelector('.subtopic-nav-items');

let bodyMode = document.body;
const mode = localStorage.getItem('mode');

// mode color
!mode ? localStorage.setItem('mode', bodyMode.dataset.mode) : handleMode(mode);

function handleMode(mode) {
    if (mode === 'dark') {
        bodyMode.dataset.mode = 'dark';
        $modeColorBtn.src = './src/icons/sunny.png';
    } else {
        bodyMode.dataset.mode = 'light';
        $modeColorBtn.src = './src/icons/moon.png';
    }
}

$modeColorBtn.addEventListener('click', () => {
    if (bodyMode.dataset.mode === 'dark') {
        bodyMode.dataset.mode = 'light';
        $modeColorBtn.src = './src/icons/moon.png';

        localStorage.setItem('mode', 'light');
    } else {
        bodyMode.dataset.mode = 'dark';
        $modeColorBtn.src = './src/icons/sunny.png';

        localStorage.setItem('mode', 'dark');
    }
});

// active animate text header
animateTitle($animateTitle);

// control input search
document.addEventListener('keypress', e => {
    if (e.ctrlKey && e.code === 'KeyB') {
        $inputSearch.focus();
        $contentInputSearch.classList.add('focus');
    }
});

$inputSearch.addEventListener('focus', e => {
    $contentInputSearch.classList.add('focus');
});

$inputSearch.addEventListener('blur', e => {
    $contentInputSearch.classList.remove('focus');
});

$search.addEventListener('click', e => {
    e.preventDefault();
    const itemSearch = search($valueSearch.value);
    mainSearch(itemSearch, $main);
});

$main.addEventListener('click', e => {
    if (e.target.matches('.search-btn')) {
        const id = e.target.getAttribute('id');
        if (!id) return

        mainData(id, $main);
        listSubtopic(id, $subtopicNav);
        observer($main.children);

        const roadmapAllItems = [...$roadmapHTML.children, ...$roadmapCSS.children];

        for (const item of roadmapAllItems) {
            item.classList.remove('active')
        }

        document.querySelector(`#${id}`).classList.add('active');
        Prism.highlightAll();
    }
})


// list roadmap
listRoadmap($roadmapHTML, 'html');
listRoadmap($roadmapCSS, 'css');

//add content main and class
if ($roadmapHTML.children.length > 0) {
    const firstId = $roadmapHTML.children[0].getAttribute('id');
    mainData(firstId, $main);
    listSubtopic(firstId, $subtopicNav);
    $roadmapHTML.children[0].classList.add('active');
}

// Roadmap list dinamic
function handleClickRoadmap(e, items) {
    const id = e.target.getAttribute('id');
    if (!id) return

    mainData(id, $main);
    listSubtopic(id, $subtopicNav);
    observer($main.children);

    for (const item of items) {
        item.classList.remove('active')
    }

    e.target.classList.add('active');
    Prism.highlightAll();
};

const roadmapAllItems = [...$roadmapHTML.children, ...$roadmapCSS.children];

roadmapAllItems.forEach(item => {
    item.addEventListener('click', (event) => {
        handleClickRoadmap(event, roadmapAllItems)
    });
});

// Subtopic list dinamic
$subtopicNav.addEventListener('click', (e) => {
    const id = e.target.getAttribute('id');
    if (!id) return

    for (const item of $subtopicNav.children) {
        item.classList.remove('active')
    }

    e.target.classList.add('active');
}, true);

// observer subtopic  list
observer($main.children);