import createHTML from "../createHTML"

const loginForm = {
    createLogin() {
        let loginFragment = document.createDocumentFragment()

        let mainLoginDiv = createHTML.createElement("div", "", "mainLoginDiv")
        // mainLoginDiv.classlist.add("")
        let welcomeHeader = mainLoginDiv.appendChild(createHTML.createElement("h1", "Taksimplicity"))
        // welcomeHeader.classlist.add("")
        let loginContainer = mainLoginDiv.appendChild(createHTML.createElement("div"))
        // login.classlist.add("")
        let loginFormElement = loginContainer.appendChild(createHTML.createElement("form"))
        let loginformDiv = loginFormElement.appendChild(createHTML.createElement("div"))
        // loginDiv.classlist.add("")

        let usernameLabel = createHTML.createElement("label", "Username: ", "usernameLabel")
        let usernameInput = createHTML.createElement("input", "", "usernameInput")
        usernameInput.placeholder = "Username"

        let emailDiv = loginFormElement.appendChild(createHTML.createElement("div", "", ""))
        // emailDiv.classlist.add("")
        let emailLabel = createHTML.createElement("label", "Email: ", "")
        let emailInput = createHTML.createElement("input", "", "emailInput")
        emailInput.placeholder = "Email"

        let loginButtonDiv = loginFormElement.appendChild(createHTML.createElement("div"))
        let loginButton = loginButtonDiv.appendChild(createHTML.createElement("button", "Login", "loginButton"))
        loginButton.type = "button"

        loginButton.addEventListener("click", loginHandler.login)

        loginformDiv.appendChild(usernameLabel)
        loginformDiv.appendChild(usernameInput)
        emailDiv.appendChild(emailLabel)
        emailDiv.appendChild(emailInput)
        

    }
}