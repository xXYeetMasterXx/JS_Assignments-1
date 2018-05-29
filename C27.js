function userName(str) {
	usnm = /^[a-z]+_[0-9]{2}$/;
	usnm_test = usnm.test(str);
	return usnm_test;
}

function searchPrice(str) {
	find_price = /[0-9]+/;
	price_finder = find_price.exec(str);
	dollar = "$" + price_finder[0];
	return dollar;
}




console.log(userName("george_68"));

console.log(searchPrice("The raspberry pi cost $35 at the store."));
