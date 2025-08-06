export default function observer(elements) {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            const id = entry.target.getAttribute('id')

            if (entry.isIntersecting) {
                const $li = document.querySelector(`li[id="${id}"]`);
                if ($li) $li.classList.add('active');
            } else {
                const $li = document.querySelector(`li[id="${id}"]`);
                if ($li) $li.classList.remove('active');
            }
        }
    },
        {
            threshold: 0.7
        });

    for (const item of elements) {
        observer.observe(item)
    }
}