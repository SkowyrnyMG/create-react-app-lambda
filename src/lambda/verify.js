// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
const validate = require('validate-vat');

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters);

  const { vat } = event.queryStringParameters;

  const response = async (err, info) => {
    try {
      const data = await info;
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          msg: `
          NIP: ${data.vatNumber},
          Fimra: ${data.name},
          adres: ${data.address},
          VAT aktywny: ${data.valid ? 'TAK' : 'NIE'},
          `,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  validate('PL', vat, response);
}
