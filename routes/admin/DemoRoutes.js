const express = require('express');
const router = express.Router();
const DemoController = require("../../controller/admin/DemoController");
const auth = require("../../middleware/auth");
router.route("/admin/Demo/create").post(auth(...[ 'createByAdminInAdminPlatform' ]),DemoController.addDemo);
router.route("/admin/Demo/list").post(auth(...[ 'getAllByAdminInAdminPlatform' ]),DemoController.findAllDemo);
router.route("/admin/Demo/:id").get(auth(...[ 'getByAdminInAdminPlatform' ]),DemoController.getDemo);
router.route("/admin/Demo/count").post(auth(...[ 'getCountByAdminInAdminPlatform' ]),DemoController.getDemoCount);
router.route("/admin/Demo/aggregate").post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),DemoController.getDemoByAggregate);
router.route("/admin/Demo/update/:id").put(auth(...[ 'updateByAdminInAdminPlatform' ]),DemoController.updateDemo);    
router.route("/admin/Demo/partial-update/:id").put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),DemoController.partialUpdateDemo);
router.route("/admin/Demo/softDelete/:id").put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),DemoController.softDeleteDemo);
router.route("/admin/Demo/addBulk").post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),DemoController.bulkInsertDemo);
router.route("/admin/Demo/updateBulk").put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),DemoController.bulkUpdateDemo);
router.route("/admin/Demo/delete/:id").delete(auth(...[ 'deleteByAdminInAdminPlatform' ]),DemoController.deleteDemo);

module.exports = router;
