import Course from "../models/course.model.js";
import Student from "../models/student.model.js";


const addStudent = async(req ,res)=>{
const {fullName , email , enrolledCourse} = req.body;

if(!fullName) 
    return res.status(400).json({
message : "name is reqiured",
});
if(!email) 
    return res.status(400).json({
message : "email is reqiured",
}); 

const student = await Student.create({
    fullName,
    email,
    enrolledCourse

})

const course = await Course.findByIdAndUpdate(enrolledCourse, {
    $push: {enrolledStudent : student._id},
})

res.json({message:"Student added succesfully"})

}

export {addStudent}