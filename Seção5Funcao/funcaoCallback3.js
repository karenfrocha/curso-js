//Exemplo de callback no browser
document.getEmentsByTagName('body')[0].onclick = function (e) {
	console.log('O evento aconteceu!')
}
