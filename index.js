const axios = require("axios");
const cheerio = require("cheerio");
// var decode = require('unescape');
//
// console.log(decode('&lt;div&gt;abc&lt;/div&gt;'));
// //=> '<div>abc</div>'

( async () => {
    try {
        const response = await axios.get("https://sc.olx.com.br/florianopolis-e-regiao/sul/imoveis/aluguel?sd=2533&sd=2538&sd=2536&sd=2532&sd=2534&sf=1");
        const $ = cheerio.load(response.data);
        const lista = Array.from($("li.sc-1fcmfeb-2"));
        // console.log(lista);

        lista.forEach((item) => {
            const block = $(item);
            const x = block.find("h2")
            const y = block.find(".fnmrjs-16.jqSHIm")

            console.log(`${x.html()} - ${y.html()}`)
        })
        // console.log()
        // console.log(response.data);
    } catch (e) {
        console.error(e);
    }
})()
