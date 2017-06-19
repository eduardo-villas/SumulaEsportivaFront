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
}

export default RestService;