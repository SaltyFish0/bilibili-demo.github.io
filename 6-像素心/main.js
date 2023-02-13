let pattern = [
	'_____________',
	'_____________',
    '___00___00___',
    '__0000_0000__',
    '__000000000__',
    '__000000000__',
    '___0000000___',
    '____00000____',
    '_____000_____',
    '______0______',
	'_____________',
	'_____________'].join('')
let tag = {'_':'span', '0':'dot'}
let heart = document.querySelector('.heart')

pattern.split('').forEach((x) =>{
	let element = document.createElement(tag[x])
	heart.append(element)
})