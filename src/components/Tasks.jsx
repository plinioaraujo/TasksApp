import React from "react";

import Task from  './Task'
const Tasks = ({tasks, handleTaskClick, handleRemoveTask}) => {
    
    return (
        <>
            {tasks.map((task) => 
                <Task 
                    key={task.id}
                    task={task} 
                    handleTaskClick={handleTaskClick} 
                    handleRemoveTask={handleRemoveTask}/>
            )}

        </>
    )
}

export default Tasks;