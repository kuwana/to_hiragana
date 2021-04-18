const axios = require('axios')
const apiUrl = 'https://labs.goo.ne.jp/api/hiragana'
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const postData = {
  app_id: 'b160c01c2bcd9c0cb9da7983dccea329637bf8b0a01b217ead681e644740072d',
  sentence: input,
  output_type: 'hiragana'
}
const header = {'Content-Type': 'application/json'}

axios.post(apiUrl, postData, header).then(res => {
  console.log(res.data.converted)
}).catch(err => {
  console.log(err)
})
