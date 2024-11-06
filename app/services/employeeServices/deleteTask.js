const tasks = require("../../database/models/employee/tasks");

exports.deleteTask = async (taskId) => {
    try {
        if (!taskId) {
            throw new Error("Task ID is required");
        }

        const deletedTask = await tasks.findOneAndUpdate( { taskId: taskId },{ deletedAt: new Date() },{ new: true }
        );
        return deletedTask;
    } 
    catch (err) {
        throw err;
    }
};
