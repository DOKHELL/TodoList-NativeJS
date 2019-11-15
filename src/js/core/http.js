export class Http {
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
                    'Content-type': 'application/json',
                },
            })
                .then(response => console.log(response))
                .catch(err => reject(err));
        });
	}
	get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => resolve(response.json()))
                .catch(err => reject(err));
        });
	}
}