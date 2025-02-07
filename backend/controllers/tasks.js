import Task from "../models/tasks.js";

export const addTask = async (req, res) => {
    const { title, description } = req.body;
    console.log(req.body);  
  
    try {
      const newTask = new Task({ title, description });
      await newTask.save();
      res.status(201).json({message: "new task added",});  
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  };
  

// Get all task
export const getAllTask = async(req,res)=>{
    try {
        const allTasks = await Task.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error:error.message})
    }
}
 // get particular task
export const getParticularTask = async(req,res)=>{
    const { id } = req.params;
    try {
        const particularTasks = await Task.findById(id);
        if (!particularTasks) {
            return res.status(404).json({ message: "Todo not found" });
          }
        res.status(200).json(particularTasks);
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error:error.message})
    }
}

// Update a task
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(updatedTask);  
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};