import connectDB from "../../../config/db"
import Employee from '../../../components/Model/employee'
connectDB()


export default async function getEmployee(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  try {
    let employeeList = await Employee.find();
    if (!employeeList) {
      res.status(400).json({ success: false })
    }
    res.status(200).send(employeeList);
  } catch (err) {
    res.status(500).send({ message: "Something Wrong" })
  }
}