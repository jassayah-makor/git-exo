const saySomething = (text) => {
  console.log(text)
}

const replyToAll = (text) => {}

const stopTalking = (talking) => {
  if (talking) {
    console.log('Shut up!')
  } else {
    console.log('Ahla gever :)')
  }
  return
}

const makeCoffee = (sugerCount) => {
  try {
    if (sugerCount > 1) {
      console.log('Are you sure its too much sugar!')
    } else {
      console.log('Greattt Coffe is on the way')
    }
    return
  } catch (error) {
    console.log('errorrrrrrrrr')
  }
}
