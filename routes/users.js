/**
 * Created by Phtoph on 4/13/2016.
 */
let express = require('express');
let router = express.Router();
exports.router = router;
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
//# sourceMappingURL=users.js.map