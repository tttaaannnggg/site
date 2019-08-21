const fs = require('fs');
const fortunes = [];

fs.readFile('./assets/fortunes.json', (err,data)=>{
  const listFortunes = data.toString();
  if(err){
    return;
  }
  return JSON.parse(listFortunes);
})

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
