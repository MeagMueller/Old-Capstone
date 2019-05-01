const createHTML = {

// function creates and returns an element

    createElement(element, textContent, id) {
        if (textContent) {
            newElement.textContent = textContent
        }

        if (id) {
            newElement.id = id
        }

        return newElement
    },

    clearContainer(clearElement) {
        while (clearElement.firstChild) {
            clearElement.removeChild(clearElement.firstchild)
        }
    }
}