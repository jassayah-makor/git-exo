const saySomething = text => {
  console.log(text)
}

const replyToAll = text => {
  replyToOnePerson(text, 'Jordan')
}

const replyToOnePerson = (text, person) => {
  console.log(`Hello ${person}, ${text}`)
}

const stopTalking = () => {
  const num = '1' + '1'
  console.log(num)
}