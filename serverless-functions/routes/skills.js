const { getAll } = require("../airtable");

exports.handler = async function(e) {
  if(e.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify(await getAll('Skills')),
      headers: {
        'access-control-allow-origin': '*',
        'cache-control': 's-maxage=120, immutable'
      }
    };
  }

  return {statusCode: 405, body: JSON.stringify([])};
}