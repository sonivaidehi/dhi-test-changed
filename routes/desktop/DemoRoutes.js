const express = require('express');
const router = express.Router();
const DemoController = require("../../controller/desktop/DemoController");
const auth = require("../../middleware/auth");
router.route("/desktop/api/v1/Demo/create").post(auth(...[ 'createByUserInDesktopPlatform' ]),DemoController.addDemo);
router.route("/desktop/api/v1/Demo/list").post(auth(...[ 'getAllByUserInDesktopPlatform' ]),DemoController.findAllDemo);
router.route("/desktop/api/v1/Demo/:id").get(auth(...[ 'getByUserInDesktopPlatform' ]),DemoController.getDemo);
router.route("/desktop/api/v1/Demo/count").post(auth(...[ 'getCountByUserInDesktopPlatform' ]),DemoController.getDemoCount);
router.route("/desktop/api/v1/Demo/aggregate").post(auth(...[ 'aggregateByUserInDesktopPlatform' ]),DemoController.getDemoByAggregate);
router.route("/desktop/api/v1/Demo/update/:id").put(auth(...[ 'updateByUserInDesktopPlatform' ]),DemoController.updateDemo);    
router.route("/desktop/api/v1/Demo/partial-update/:id").put(auth(...[ 'partialUpdateByUserInDesktopPlatform' ]),DemoController.partialUpdateDemo);
router.route("/desktop/api/v1/Demo/softDelete/:id").put(auth(...[ 'softDeleteByUserInDesktopPlatform' ]),DemoController.softDeleteDemo);
router.route("/desktop/api/v1/Demo/addBulk").post(auth(...[ 'addBulkByUserInDesktopPlatform' ]),DemoController.bulkInsertDemo);
router.route("/desktop/api/v1/Demo/updateBulk").put(auth(...[ 'updateBulkByUserInDesktopPlatform' ]),DemoController.bulkUpdateDemo);
router.route("/desktop/api/v1/Demo/delete/:id").delete(auth(...[ 'deleteByUserInDesktopPlatform' ]),DemoController.deleteDemo);

module.exports = router;
