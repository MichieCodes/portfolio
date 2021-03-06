const Airtable = require('airtable');
require('dotenv').config();

const Base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE);

function getAll(base, view = 'Grid View', fields = []) {
  return new Promise((resolve, reject) => {
    let result = [];

    Base(base).select({view, fields}).eachPage(
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

function getByFormula(base, view, formula, fields = []) {
  return new Promise((resolve, reject) => {
    Base(base).select({view, filterByFormula: formula, fields}).firstPage(function(err, records) {
      if(err) {
        console.error(err);
        reject(err);
        return;
      }

      try {
        let result = records[0].fields;
        if(result.image) result.image = result.image[0].thumbnails;
        resolve([result]);
      } catch(error) {
        reject(error)
      }
    })
  })
}

module.exports = {getAll, getByFormula};