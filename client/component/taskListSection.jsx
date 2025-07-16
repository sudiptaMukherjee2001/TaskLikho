import React from 'react'

function TaskListSection({fields, register, errors, remove }) {

    
  return (
   <div>
      {fields?.map((field, index) => (
        // console.log("Field:", field),        
        <div key={field.id} style={{ marginBottom: "1rem",color: "#fff" }}>
            {field.name}
       
          {errors?.tasks?.[index]?.name && (
            <span style={{ color: "red" }}>
              {errors.tasks[index].name.message}
            </span>
          )}

          <select {...register(`tasks.${index}.priority`, { required: "Priority is required" })}>
            <option value="">Select priority</option>
            <option value="High">🔴 High</option>
            <option value="Medium">🟠 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>
          {errors?.tasks?.[index]?.priority && (
            <span style={{ color: "red" }}>
              {errors.tasks[index]?.priority.message}
            </span>
          )}
          <button type="button" onClick={() => remove(index)}>❌</button>
        </div>
      ))}
    </div>
  )
}

export default TaskListSection