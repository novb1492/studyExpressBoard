var dao=require('../dao');
var utillService=require("../services/utillService");

exports.testParm = function (req, res) {
    console.log('testParm controller');
    try {
        dao.findBy("boards","article").then(result=>{
            console.log(result.data());
        },(error)=>{
            throw error;
        })
    } catch (error) {
        console.log(error);
        res.json(utillService.makeJson(false,"정보조회 실패"));  
    }

}
