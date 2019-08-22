const fs = require('fs');
const fortunes = [];
const path = require('path');

fs.readFile(path.resolve(__dirname, '../assets/fortunes.json'), (err,data)=>{
  console.log('initializing fortunes');
  if(err){
    console.err(err);
  }
  const listFortunes = data.toString();
  JSON.parse(listFortunes).forEach((item)=>{
    fortunes.push(item);
  });
});

const getFortune = (req, res, next)=>{
  const randomIndex = Math.floor(Math.random()*(fortunes.length))
  res.locals.fortune = fortunes[randomIndex];
  if(!res.locals.fortune){
    res.locals.err = 'couldn\'t read fortune!'
    return next('error!');
  }
  return next();
}

module.exports = {fortunes, getFortune}
