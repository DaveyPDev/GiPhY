// $('form').on('submit', async function (e) {
// 	e.preventDefault();
// 	let searchVal = $searchInput.val();
// 	$searchInput.val('');
// 	const res = await axios.get('api.giphy.com/v1/gifs/random', {
// 		params : { api_key: 'o2gTKlP7dwRqDfVV0vbx3VqbG9GEzEhd', q: searchVal }
// 	});
// 	console.log(res);
// });

// searchGif();

// async function getGif () {
// 	// const res = await axios.get('api.giphy.com/v1/gifs/search');
// 	const res = await axios.get('api.giphy.com/v1/gifs/random');
// 	const ul = document.querySelector('#gifs');
// 	// for (let gif of res.data) {
// 	// 	const newLI = document.createElement('LI');
// 	// 	console.log();
// 	// }
// }
// async function postGif () {
// 	// const res = await axios.get('api.giphy.com/v1/gifs/search');
// 	const res = await axios.post('api.giphy.com/v1/gifs/random');
// 	const ul = document.querySelector('#gifs');
// 	// for (let gif of res.data) {
// 	// 	const newLI = document.createElement('LI');
// 	// 	console.log();
// 	// }
// }

// // getGif()

// async function login (username, password) {
// 	const res = await axios.post('api.giphy.com/v1/login', { user: { username, password } });
// 	console.log(res);
// 	return res.data.token;
// }

// async function getUsers (token) {
// 	const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', { params: { token } });
// 	console.log(res);
// }
// async function signUp (username, password, name) {
// 	const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {
// 		user : { name, username, password }
// 	});
// 	console.log(res);
// }
// async function login (username, password) {
// 	const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {
// 		user : { username, password }
// 	});
// 	console.log(res);
// 	return res.data.token;
// }

// // login('butterschicken', '238197sadhj');
// // signUp('butterschicken', '238197sadhj', 'butters the chicken');

// async function createStory () {
// 	const token = await login('butterschicken', '238197sadhj');
// 	const newStory = {
// 		token,
// 		story : {
// 			author : 'Butters',
// 			title  : 'bock bock',
// 			url    : 'http://chickens4lyfe'
// 		}
// 	};
// 	const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
// 	console.log(res);
// }

// async function getUsersWithAuth () {
// 	const token = await login('butterschicken', '238197sadhj');
// 	getUsers(token);
// }
// // getUsersWithAuth();
// createStory();


