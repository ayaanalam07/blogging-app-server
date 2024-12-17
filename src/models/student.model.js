import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required:true,
        },
        enrolledStudent:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "course"
            }
        ]
    },
    {
        timestamps:true,
    }
)

export default mongoose.model("Student" , studentSchema)