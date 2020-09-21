'use strict';

/*
const req = new Promise((resolve, reject) => {
	console.log('Запрос данных...');
	setTimeout(() => {
		console.log('Подготовка данных...');
		const product = {
			name: 'TV',
			price: 150
		};
		//reject('error!');
		resolve(product);
	}, 2000);
});

req.then(product => {
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 2000);
	});
	
}).then(data => {
	data.modify = true;
	return data;
}).then(data => {
	console.log(data);
}).catch(e => {
	console.error('ошибка - ' + e);
}).finally(() => {
	console.log('finally');
});
*/

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

//test(2000).then(() => console.log('2s'));
//test(5000).then(() => console.log('5s'));

/*Promise.all([test(2000), test(4000)]).then(() => {
	console.log('ALL');
});*/

Promise.race([test(2000), test(4000)]).then(() => {
	console.log('race');
});