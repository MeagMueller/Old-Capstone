import createHTML from "../createHTML"

const loginForm = {
    createLogin() {
        let loginFragment = document.createDocumentFragment()

        let loginDiv = createHTML.createElement("div", "", "loginDiv")
        // loginDiv.classlist.add("")
        let welcomeHeader = loginDiv.appendChild(createHTML.createElement("h1", "Taksimplicity"))
        // welcomeHeader.classlist.add("")
        let login = loginDiv.appendChild(createHTML.createElement("div"))
        // login.classlist.add("")
        
    }
}