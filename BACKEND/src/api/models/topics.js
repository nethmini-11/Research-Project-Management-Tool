import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const Topics = new Schema({
    groupid : {
        type : String,
        required : [true, "Student Name is required!"]
    },
    topic : {
        type : String,
        required : [true, "Student ID is required."]
    },
    field : {
        type : String,
        required : [true, "Specialization is required."]
    },
    des : {
        type : String,
        required : [true, "Contact Number is required."]
    },
    PostedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    }
});


module.exports = mongoose.model("topics", Topics);