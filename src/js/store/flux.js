const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://assets.breatheco.de/apis/fake/contact/";
	return {
		store: {
			contacts: []
		},
		actions: {
			fetchData: () => {
				fetch(`${baseUrl}agenda/ricardo_agenda`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						console.log(res.json());
						return res.json();
					})
					.then(data => {
						console.log(data);
						setStore({ contacts: [data.results] });
						console.log(data.results);
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
