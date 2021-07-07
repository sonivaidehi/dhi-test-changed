const express = require('express');
const router = express.Router();
const DemoController = require("../../controller/device/DemoController");
const auth = require("../../middleware/auth");
router.route("/device/api/v1/Demo/create").post(auth(...[ 'createByUserInDevicePlatform' ]),DemoController.addDemo);
router.route("/device/api/v1/Demo/list").post(auth(...[ 'getAllByUserInDevicePlatform' ]),DemoController.findAllDemo);
router.route("/device/api/v1/Demo/:id").get(auth(...[ 'getByUserInDevicePlatform' ]),DemoController.getDemo);
router.route("/device/api/v1/Demo/count").post(auth(...[ 'getCountByUserInDevicePlatform' ]),DemoController.getDemoCount);
router.route("/device/api/v1/Demo/aggregate").post(auth(...[ 'aggregateByUserInDevicePlatform' ]),DemoController.getDemoByAggregate);
router.route("/device/api/v1/Demo/update/:id").put(auth(...[ 'updateByUserInDevicePlatform' ]),DemoController.updateDemo);    
router.route("/device/api/v1/Demo/partial-update/:id").put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),DemoController.partialUpdateDemo);
router.route("/device/api/v1/Demo/softDelete/:id").put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),DemoController.softDeleteDemo);
router.route("/device/api/v1/Demo/addBulk").post(auth(...[ 'addBulkByUserInDevicePlatform' ]),DemoController.bulkInsertDemo);
router.route("/device/api/v1/Demo/updateBulk").put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),DemoController.bulkUpdateDemo);
router.route("/device/api/v1/Demo/delete/:id").delete(auth(...[ 'deleteByUserInDevicePlatform' ]),DemoController.deleteDemo);

module.exports = router;
