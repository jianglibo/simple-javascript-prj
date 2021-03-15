
function parse_header() {
    fs = require('fs');
    const data = fs.readFileSync('./abc.js',
        { encoding: 'utf8', flag: 'r' });
    var pattern = new RegExp('\{.*\}', "s");
    var myarray = data.match(pattern);
    return JSON.parse(myarray[0]);
}
module.exports = parse_header;
