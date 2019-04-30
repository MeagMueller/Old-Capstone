const url = "http://localhost:8088"

const fetchCalls = {

    // General fetch call

    getAllPerformances() {
        return fetch(`${url}/performances`).then(response => response.json())
    },

    // Fetch call specifically by ID

    getPerformancesWithId(id) {
        return fetch(`${url}/performances/${id}`).then(response => response.json())
    },

    // General fetch call
    
    getAllProps() {
        return fetch(`${url}/props`).then(response => response.json())
    },

    // Fetch call specifically by ID

    getPropsWithId(id) {
        return fetch(`${url}/props/${id}`).then(response => response.json())
    },

    // POST when new performance is added

    newPerformances() {
        return fetch(`${url}/performances`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(response => response.json())
    },

    // POST when new prop is added

    newProps() {
        return fetch(`${url}/props`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(response => response.json())
    },

    // Delete

    deletePerformances() {
        return fetch(`${url}/performances`, {
            method: "DELETE"
        }).then(response => response.json())
    },

    // Delete

    deleteProps() {
        return fetch(`${url}/props`, {
            method: "DELETE"
        }).then(response => response.json)
    }
}

export default fetchCalls