const saySomething = text => {
  console.log(text)
}

const replyToAll = text => {

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
