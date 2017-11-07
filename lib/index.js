const _ = require('lodash');
const fs = require('fs');
const inputData = require('../input.json');
const ManitoList = require('./manito');

const input = _.shuffle(inputData);
const manitos = new ManitoList(input);

const result = manitos.map((data) => `${data.me.name}는 ${data.targetTo.name}의 마니또 입니다.`);

fs.writeFile('./result.json', JSON.stringify(result, null, ' '), (err) => console.log(err));
