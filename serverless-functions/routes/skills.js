const { getAll } = require("../airtable");

exports.handler = async function(e) {
  if(e.httpMethod !== 'GET') return {statusCode: 405, body: JSON.stringify([])};

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(await getAll('Skills')),
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/json',
        'cache-control': 's-maxage=120, immutable'
      }
    };
  } catch (error) {
    return {statusCode: 500, body: JSON.stringify([])};
  }
}