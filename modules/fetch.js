class JsonFetch {
    constructor () {
        this.contentType = 'application/json';
    }

    get(url) {
        return this.#send(url, "GET")
    }

    post(url, data) {
        return this.#send(url, "POST", data)
    }

    patch(url, data) {
        return this.#send(url, "PATCH", data)
    }

    delete(url) {
        return this.#send(url, "DELETE")
    }

    #send(url, method, data) {
        return data
            ? fetch(url, {
                method: method,
                headers: {
                    'Content-Type': this.contentType
                },
                body: JSON.stringify(data)
            })
            : fetch(url, { method: method })
    }
}

export const jsonFetch = new JsonFetch();