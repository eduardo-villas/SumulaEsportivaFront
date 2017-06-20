class RestService {

	constructor(url) {
		this.url = url;
	}

	getFirstPage() {
		return fetch(this.url).then(
			(response) => {
				return response.json();
			}
		);
	}

	post(data) {
		return fetch(this.url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response) => {
			return response.json();
		});
	}
}

export default RestService;