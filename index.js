const saySomething = (text) => {
	console.log(text)
}

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
