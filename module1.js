const {members}=require("./data/memberData")
const {test3}=require("./modules/index")
members.map((item)=>test3(item.memberName,item.memberID))