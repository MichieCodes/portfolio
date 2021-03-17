const Airtable = require('airtable');
require('dotenv').config();

const Base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE);

function getAll(base, view = 'Grid View') {
  return new Promise((resolve, reject) => {
    let result = [];

    Base(base).select({view}).eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          if(record.fields.image) record.fields.image = record.fields.image[0].thumbnails
          result.push(record.fields);
        });
  
        fetchNextPage();
      }, 
      function done(err) {
        if(err) {
          console.error(err);
          reject(err);
          return;
        }
        resolve(result);
      }
    );
  })
}

function getByFormula(base, view, formula) {
  return new Promise((resolve, reject) => {
    Base(base).select({view, filterByFormula: formula}).firstPage(function(err, records) {
      if(err) {
        console.error(err);
        reject(err);
        return;
      }
      let result = records[0].fields;
      if(result.image) result.image = result.image[0].thumbnails;
      resolve([result]);
    })
  })
}

module.exports = {getAll, getByFormula};