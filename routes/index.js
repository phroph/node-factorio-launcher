/**
 * Created by Phtoph on 4/13/2016.
 */
let express = require('express');
let router = express.Router();
exports.router = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
//# sourceMappingURL=index.js.map