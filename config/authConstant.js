/*
 * constants
 */

const JWT={
  ADMIN_SECRET:"myjwtadminsecret",
  DEVICE_SECRET:"myjwtdevicesecret",
  DESKTOP_SECRET:"myjwtdesktopsecret",
  CLIENT_SECRET:"myjwtclientsecret",
  EXPIRES_IN: 10000
};

const USER_ROLE ={
  User:1,
  Admin:2,
};

const PLATFORM = {
  ADMIN:1,
  DEVICE:2,
  DESKTOP:3,
  CLIENT:4,
};

let LOGIN_ACCESS ={
  [USER_ROLE.User]:[PLATFORM.DEVICE,PLATFORM.DESKTOP,PLATFORM.CLIENT],        
  [USER_ROLE.Admin]:[PLATFORM.ADMIN],        
};

const DEFAULT_ROLE= 1;

const ROLE_RIGHTS={
    
  [USER_ROLE.User] : [
    "getAllByUserInDevicePlatform",
    "getByUserInDevicePlatform",
    "aggregateByUserInDevicePlatform",
    "getCountByUserInDevicePlatform",
    "createByUserInDevicePlatform",
    "addBulkByUserInDevicePlatform",
    "updateByUserInDevicePlatform",
    "updateBulkByUserInDevicePlatform",
    "partialUpdateByUserInDevicePlatform",
    "deleteByUserInDevicePlatform",
    "softDeleteByUserInDevicePlatform",
    "upsertByUserInDevicePlatform",
    "fileUploadByUserInDevicePlatform",
    "changePasswordByUserInDevicePlatform",
    "getAllByUserInDesktopPlatform",
    "getByUserInDesktopPlatform",
    "aggregateByUserInDesktopPlatform",
    "getCountByUserInDesktopPlatform",
    "createByUserInDesktopPlatform",
    "addBulkByUserInDesktopPlatform",
    "updateByUserInDesktopPlatform",
    "updateBulkByUserInDesktopPlatform",
    "partialUpdateByUserInDesktopPlatform",
    "deleteByUserInDesktopPlatform",
    "softDeleteByUserInDesktopPlatform",
    "upsertByUserInDesktopPlatform",
    "fileUploadByUserInDesktopPlatform",
    "changePasswordByUserInDesktopPlatform",
    "getAllByUserInClientPlatform",
    "getByUserInClientPlatform",
    "aggregateByUserInClientPlatform",
    "getCountByUserInClientPlatform",
    "createByUserInClientPlatform",
    "addBulkByUserInClientPlatform",
    "updateByUserInClientPlatform",
    "updateBulkByUserInClientPlatform",
    "partialUpdateByUserInClientPlatform",
    "deleteByUserInClientPlatform",
    "softDeleteByUserInClientPlatform",
    "upsertByUserInClientPlatform",
    "fileUploadByUserInClientPlatform",
    "changePasswordByUserInClientPlatform"
  ],
    
  [USER_ROLE.Admin] : [
    "getAllByAdminInAdminPlatform",
    "getByAdminInAdminPlatform",
    "aggregateByAdminInAdminPlatform",
    "getCountByAdminInAdminPlatform",
    "createByAdminInAdminPlatform",
    "addBulkByAdminInAdminPlatform",
    "updateByAdminInAdminPlatform",
    "updateBulkByAdminInAdminPlatform",
    "partialUpdateByAdminInAdminPlatform",
    "deleteByAdminInAdminPlatform",
    "softDeleteByAdminInAdminPlatform",
    "upsertByAdminInAdminPlatform",
    "fileUploadByAdminInAdminPlatform",
    "changePasswordByAdminInAdminPlatform"
  ],
    
};
const MAX_LOGIN_RETRY_LIMIT = 3;   

const FORGOT_PASSWORD_WITH = {
  OTP: {
    email: true,
    sms: false
  },
  EXPIRETIME: 20
};
const ADMIN_CUSTOM_ROUTES = [ '/test2', '/test' ];   

module.exports = {
  JWT,
  USER_ROLE,
  DEFAULT_ROLE,
  ROLE_RIGHTS,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
  ADMIN_CUSTOM_ROUTES
};