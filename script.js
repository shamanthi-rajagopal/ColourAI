//Javascript code created by Shamanthi Rajagopal
const net = new brain.NeuralNetwork()

const data = 
    
    //Data at the start of project
    /*{ input:{r:0,g:0,b:0}, output:[1]},
    { input:{r:1,g:1,b:1}, output:[0] },*/
    
    //Data After Training it
    [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.5476868158200678,"g":0.5306346725492839,
    "b":0.03149557297460115},"output":[1]},{"input":{"r":0.3163935985518893,"g":0.5473719634165835,"b":0.8667148357468644},"output":[0]},{"input":
    {"r":0.07045534429360578,"g":0.7594372096978603,"b":0.7529908496204365},"output":[0]},{"input":{"r":0.8111480237150541,"g":0.34066120923479937,
    "b":0.9143254098080544},"output":[0]},{"input":{"r":0.28962504444674453,"g":0.8359035801994559,"b":0.4150315476123665},"output":[0]},{"input":
    {"r":0.7848769981349766,"g":0.8805044012749395,"b":0.6935289614157769},"output":[0]},{"input":{"r":0.5720792722718244,"g":0.32454877389936265,
    "b":0.7203012076272528},"output":[0]},{"input":{"r":0.2792270984701932,"g":0.3317057695022738,"b":0.8315076563965274},"output":[0]},{"input":
    {"r":0.37675462675856286,"g":0.9254311734221594,"b":0.9810129961554133},"output":[0]},{"input":{"r":0.3560659051537207,"g":0.5129770205070239,
    "b":0.897863655204423},"output":[1]},{"input":{"r":0.8698320054198674,"g":0.17261577736595268,"b":0.07748375892745574},"output":[1]},{"input":
    {"r":0.3633448345958701,"g":0.2532336777114237,"b":0.8220199121718517},"output":[1]},{"input":{"r":0.4163505994541985,"g":0.7723870860670767,
    "b":0.1094257473848741},"output":[0]},{"input":{"r":0.16486465351140556,"g":0.31654303113316007,"b":0.844044046096541},"output":[0]},{"input":
    {"r":0.38649200457954347,"g":0.993658693744361,"b":0.3248065485231755},"output":[0]},{"input":{"r":0.9699756303287688,"g":0.021836123839533927,
    "b":0.44880873669535526},"output":[0]},{"input":{"r":0.5704355820928397,"g":0.5682859042417303,"b":0.8777575361446706},"output":[0]},{"input":
    {"r":0.7280323261801684,"g":0.4775998744138783,"b":0.5460358019532754},"output":[0]},{"input":{"r":0.7687846670261702,"g":0.665628301621215,
    "b":0.4523908036760167},"output":[0]},{"input":{"r":0.34553259698032135,"g":0.3220840067646975,"b":0.4451032262050352},"output":[1]},{"input":
    {"r":0.1743853162675304,"g":0.923624240393573,"b":0.569402494035071},"output":[0]},{"input":{"r":0.5834751021618481,"g":0.735592928171289,"b":
    0.5274457550112099},"output":[0]},{"input":{"r":0.6114345378293455,"g":0.23809947420578026,"b":0.07494970567739978},"output":[1]},{"input":
    {"r":0.8815727003190641,"g":0.09912632958996648,"b":0.32642718188833064},"output":[1]},{"input":{"r":0.1342580805912037,"g":0.1480737124331295,
    "b":0.26078191653514526},"output":[1]},{"input":{"r":0.5246716595618208,"g":0.9776287371495964,"b":0.2834697014264398},"output":[0]}]

net.train(data)

const colorEl = document.getElementById('color')
const guessEl = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')
let color
setRandomColor()

whiteButton.addEventListener('click', () => { chooseColor(1)})
blackButton.addEventListener('click', () => {chooseColor(0)})
printButton.addEventListener('click', print)

function chooseColor(value) {
  data.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

function print() { //allows inputs & outputs to be prinited so tested data can be used in the model again for more accuracy
  console.log(JSON.stringify(data))
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }

  const guess = net.run(color)[0]
  guessEl.style.color = guess > .5 ? '#FFF' : '#000' //if guess is more than 0.5 then it should be a WHITE Colour
  colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}