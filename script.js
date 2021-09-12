const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelection()
    }
})

function createTags(input) {
    const tags = input.split(' ')
    tagsElement.innerHTML = ''
    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    });
}

function randomSelection() {
    const highlightAmount = 20

    // roulette highlight and unhighlight effect
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)
    }, 100);

    // stops roulette effect and selects a tag
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, highlightAmount * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    // pick random tag from Node list
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}