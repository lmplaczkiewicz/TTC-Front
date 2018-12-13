const getFormFields = require('../../../lib/get-form-fields')
const api = require('./lootapi')
const ui = require('./lootui')
const store = require('../store')

const weapons = [
  'longsword',
  'greataxe',
  'dagger',
  'greatsword',
  'longbow'
]

const randomArray = function () {
  const randomAnswer = weapons[Math.floor(Math.random() * weapons.length)]
  console.log(randomAnswer)
}

const addHandlers = function () {
  $('.generateItem').on('click', randomArray)
  // $('#generateItem').on('click', function () {
  //  console.log('TEST')
  // })
}

module.exports = {
  addHandlers
}
