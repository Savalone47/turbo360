// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {

	const data = {
		greeting: 'Welcome To My First Website in Javascript'
	}

	res.render('index', data)
})

/* before we have to delete all this code */
module.exports = router
