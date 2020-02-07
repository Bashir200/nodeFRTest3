const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.listen(3000, () =>{
	console.log("images running on port 3000...")
})

app.use(express.static('.'))
app.use(express.static('weights'))

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

   