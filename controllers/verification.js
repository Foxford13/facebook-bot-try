function verifyFacebok (req, res) {

	const hubChallenge = req.query['hub.challenge'];
	const hubMode = req.query['hub.mode'];
	const verifyTokenMatches = (req.query['hub.verify_token'] === 'foxford13');


	if (hubMode && verifyTokenMatches) {
		res.status(200).send(hubChallenge);
		console.log('i work 1');
	} else {
				console.log('i work 2');
		res.status(403).end();
	}
};

module.exports = {
	verifyFacebok,
}
