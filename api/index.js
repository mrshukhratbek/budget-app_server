const { Router, json } = require('express');
const testCtrl = require("./controllers/testController")

const router = Router({
  mergeParams: true
});

router.use(json());
router.route('/api/test').get(testCtrl.testCtrl);

module.exports = router;
