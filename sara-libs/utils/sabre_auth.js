const credentials = {
  client: {
    id: 'V1:0919ehrfdsyo7red:DEVCENTER:EXT',
    secret: 'OrV67lgH'
  },
  auth: {
    tokenHost: 'https://api.test.sabre.com'
  }
};
 
// Initialize the OAuth2 Library 
const oauth2 = require('simple-oauth2').create(credentials);

console.log(oauth2);