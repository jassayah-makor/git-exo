const saySomething = (text) => {
	console.log(text)
	for(let i =0; i < text.length - 1 ; i++){
		alert(text[1])
	}
}
saySomething('dfsefsdfgrdgregregh fewfefefewfgewg  fewfrfref');

const replyToAll = (text) => {}

const stopTalking = () => {
	const num = '1' + '1'
	console.log(num)
}

const poopoo = (size) => {
	let dataToSend = ''

	switch (size) {
		case 'small':
			dataToSend = '💩'
			break
		case 'medium':
			dataToSend = '💩💩'
			break
		case 'large':
			dataToSend = '💩💩💩'
			break
		default:
			dataToSend = '💩'
			break
	}
	console.log(dataToSend)
}
