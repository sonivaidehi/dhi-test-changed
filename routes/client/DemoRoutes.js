const express = require('express');
const router = express.Router();
const DemoController = require("../../controller/client/DemoController");
const auth = require("../../middleware/auth");
router.route("/client/api/v1/Demo/create").post(auth(...[ 'createByUserInClientPlatform' ]),DemoController.addDemo);
router.route("/client/api/v1/Demo/list").post(auth(...[ 'getAllByUserInClientPlatform' ]),DemoController.findAllDemo);
router.route("/client/api/v1/Demo/:id").get(auth(...[ 'getByUserInClientPlatform' ]),DemoController.getDemo);
router.route("/client/api/v1/Demo/count").post(auth(...[ 'getCountByUserInClientPlatform' ]),DemoController.getDemoCount);
router.route("/client/api/v1/Demo/aggregate").post(auth(...[ 'aggregateByUserInClientPlatform' ]),DemoController.getDemoByAggregate);
router.route("/client/api/v1/Demo/update/:id").put(auth(...[ 'updateByUserInClientPlatform' ]),DemoController.updateDemo);    
router.route("/client/api/v1/Demo/partial-update/:id").put(auth(...[ 'partialUpdateByUserInClientPlatform' ]),DemoController.partialUpdateDemo);
router.route("/client/api/v1/Demo/softDelete/:id").put(auth(...[ 'softDeleteByUserInClientPlatform' ]),DemoController.softDeleteDemo);
router.route("/client/api/v1/Demo/addBulk").post(auth(...[ 'addBulkByUserInClientPlatform' ]),DemoController.bulkInsertDemo);
router.route("/client/api/v1/Demo/updateBulk").put(auth(...[ 'updateBulkByUserInClientPlatform' ]),DemoController.bulkUpdateDemo);
router.route("/client/api/v1/Demo/delete/:id").delete(auth(...[ 'deleteByUserInClientPlatform' ]),DemoController.deleteDemo);

module.exports = router;
