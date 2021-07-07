const TestService = require("../../services/admin/TestService"); 
const utils = require("../../utils/messages");
/* 
 * Test
 */
const testCR=async (req,res)=>{
  try {
    let result =  TestService.testCR();
    if(result){
      return utils.successResponse(result,res);
    }
  } catch (error) {
    throw error;
  }
};    
module.exports={testCR,};
