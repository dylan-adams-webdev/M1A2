const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate');
const loanCalculator = require('./modules/calculateLoan');

const tempLoan = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const templateHTML = fs.readFileSync(
	`${__dirname}/template/template.html`,
	'utf-8'
);

const dataObj = JSON.parse(tempLoan);

const server = httpServer.createServer((req, res) => {
	const { query, pathname } = url.parse(req.url, true);
	if (query.id) {
		if (pathname === '/' || pathname.toLowerCase() === '/loans') {
			res.writeHead(200, {
				'Content-type': 'text/html',
			});
			const loan = dataObj[Number(query.id)];
            loan.calculated = loanCalculator(loan);
			const loanHTML = replaceTemplate(templateHTML, loan);
			res.end(loanHTML);
		}
	} else {
		res.writeHead(404, {
			'Content-type': 'text/html',
		});
		res.end(`resource not found`);
	}
});

server.listen(8000, 'localhost', () => {
	console.log('Listening to requests on port 8000');
});
