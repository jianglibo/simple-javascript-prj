const parse_header = require('./sub/parse-header');
const fetch = require('node-fetch');

var url = "https://console-pro.ding.zj.gov.cn/rpc/gov/choose/pageOrganizationList.json?code=GO_722c26b3459d4c4680e1c98b405d4b93&organizationCode=GO_722c26b3459d4c4680e1c98b405d4b93&pageSize=50&currentPage=1&mode=org&showCascadeEmpCount=true&status=TOTAL&from=MAIN";


var f = function (cb) {
    return fetch(url, parse_header()).then(response => response.json())
        .then(data => {
            console.log(data);
            cb(data);
        })
        .catch(err =>
            console.error(err)
        );
}
module.exports = f;