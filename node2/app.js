// import rand from 'random-string'

// let str = rand({length : 10, numeric : false, special : true});
// console.log(str);

import pdfkit from 'pdfkit'
import fs from 'fs'
import rand from 'random-string'

let str = rand();

let doc = new pdfkit();
doc.pipe(fs.createWriteStream(str+'.pdf'));

doc.fontSize(25).text('The Stepping Stone', 50, 20);
doc.end();
