const _ = require('lodash');
const i = require('./factory');
const fs = require('fs');
const inputData = require('../input.json');
const ManitoList = require('./manito');

const input = _.shuffle(inputData);
const manitos = new ManitoList(input);

const result = manitos.map((data) => data);

fs.writeFile('./result.json', JSON.stringify(result, null, ' '), (err) => console.log(err));
