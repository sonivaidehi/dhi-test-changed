const mongoose = require("../config/db");
const mongoosePaginate = require('mongoose-paginate-v2');
var idValidator = require('mongoose-id-validator');
const myCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'data',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};

mongoosePaginate.paginate.options = {customLabels: myCustomLabels};

const Schema = mongoose.Schema;
const schema = new Schema(
  {
    
    addedBy:{
      type:Schema.Types.ObjectId,
      ref:"user"
    },
    
    isActive:Boolean,
    
    isDeleted:Boolean,
    
    t1:{type:Boolean},
    
    test:{type:String},
    
    test2:{type:String}
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt' 
    } 
  }
);

schema.pre('save', async function(next) {
  this.isDeleted = false;
  this.isActive = true;
  next();
});

schema.method("toJSON", function () {
  const {
    __v, _id, ...object 
  } = this.toObject();
  object.id = _id;
  return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const Demo = mongoose.model("Demo",schema,"Demo");
module.exports = Demo;