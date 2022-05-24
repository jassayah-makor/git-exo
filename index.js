const saySomething = (text) => {
  console.log(text)
}

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

const yisraelFunction = () => {
	return true
}

const stopTalking = () => {
  const num = '1' + '1'
  console.log(num)
}

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
  }
}
