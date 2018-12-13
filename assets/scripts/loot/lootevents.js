const getFormFields = require('../../../lib/get-form-fields')
const api = require('./lootapi')
const ui = require('./lootui')
const store = require('../store')

let weapons = ['longsword', 'greatsword', 'greataxe']

const randomArray = function (array) {
  const item = array[Math.floor(Math.random()*array.lenth)]
  console.log(item)
  return item
}

const addHandlers = function () {
  $('#generateItem').on('click', randomArray(weapons))
}

module.exports = {
  addHandlers
}
