const url = "http://localhost:8088"

const fetchCalls = {
    getAllPerformances() {
        return fetch(`${url}/performances`).then(response => response.json())
    },
    
    getAllProps() {
        return fetch(`${url}/props`).then(response => response.json())
    },

    newPerformances() {
        return fetch(`${url}/performances`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(response => response.json())
    },

    newProps() {
        return fetch(`${url}/props`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then(response => response.json())
    },

    deletePerformances() {
        return fetch(`${url}/performances`, {
            method: "DELETE"
        }).then(response => response.json())
    },

    deleteProps() {
        return fetch(`${url}/props`, {
            method: "DELETE"
        }).then(response => response.json)
    }
}