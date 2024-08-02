const { getByFormula } = require("../airtable");

exports.handler = async function(e) {
  if(e.httpMethod !== 'GET') return {statusCode: 405, body: JSON.stringify([])};

  try {
    const {slug} = e.queryStringParameters;

    if(!slug)
      throw new Error('Project slug is required');

    const result = await getByFormula('Projects', 'Main View', `slug = '${slug}'`);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: {
        'access-control-allow-origin': '*',
        'content-type': 'application/json'
      }
    };
  } catch (error) {
    return {statusCode: 500, body: JSON.stringify([])};
  }
}