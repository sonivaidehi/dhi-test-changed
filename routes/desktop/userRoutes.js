const express = require('express');
const router = express.Router();
const userController = require("../../controller/desktop/userController");
const auth = require("../../middleware/auth");
router.route("/desktop/api/v1/user/create").post(userController.addUser);
router.route("/desktop/api/v1/user/list").post(auth(...[ 'getAllByUserInDesktopPlatform' ]),userController.findAllUser);
router.route("/desktop/api/v1/user/:id").get(auth(...[ 'getByUserInDesktopPlatform' ]),userController.getUser);
router.route("/desktop/api/v1/user/count").post(auth(...[ 'getCountByUserInDesktopPlatform' ]),userController.getUserCount);
router.route("/desktop/api/v1/user/aggregate").post(auth(...[ 'aggregateByUserInDesktopPlatform' ]),userController.getUserByAggregate);
router.route("/desktop/api/v1/user/update/:id").put(auth(...[ 'updateByUserInDesktopPlatform' ]),userController.updateUser);    
router.route("/desktop/api/v1/user/partial-update/:id").put(auth(...[ 'partialUpdateByUserInDesktopPlatform' ]),userController.partialUpdateUser);
router.route("/desktop/api/v1/user/softDelete/:id").put(auth(...[ 'softDeleteByUserInDesktopPlatform' ]),userController.softDeleteUser);
router.route("/desktop/api/v1/user/addBulk").post(userController.bulkInsertUser);
router.route("/desktop/api/v1/user/updateBulk").put(auth(...[ 'updateBulkByUserInDesktopPlatform' ]),userController.bulkUpdateUser);
router.route("/desktop/api/v1/user/change-password").put(auth(...[ 'changePasswordByUserInDesktopPlatform' ]),userController.changePassword);

module.exports = router;
