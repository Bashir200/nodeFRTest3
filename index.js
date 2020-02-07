const express = require('express')
const cors = require('cors')
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')

const app = express()

app.listen(3000, () =>{
	console.log("images running on port 3000...")
})


const viewsDir = path.join(__dirname, '.')

/*const corsOptions = {
  origin: 'https://github.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/

app.use(cors())
app.use(express.static('.'))
app.use(express.static('weights'))

/*app.get('/', cors(), function (req, res, next) {
  console.log('yap')
  res.sendFile('index1.html')
  //res.json({msg: 'This is CORS-enabled for a Single Route'})
})*/    
            //cors(corsOptions)
app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index1.html')))
/*const url = 'http://127.0.0.1:8008';

    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const images = $('.imgList > div');
        const imagesList = [];

        images.each(function () {
          const Dicaprio = $(this).find('.dicaprio > li').file();
          const Pitt = $(this).find('.pitt > li').file();
          //const nationality = $(this).find('.playerCountry').text();
          //const goals = $(this).find('.mainStat').text();

          imagesList.push({
            Dicaprio,
            Pitt
          });
        });

        console.log(imagesList);
      })
      .catch(console.error);*/

   