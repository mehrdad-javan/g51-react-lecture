const tasks = [
    {id: 1 , text: "Learn React"},
    {id: 2 , text: "Build a To-Do App"}
];

export const getTasksAPI = () => {
    // imagine we called api
    return tasks;
}
// add more functions

export const addTaskAPI = (inputTaskText) => {
    const newTask = { id: tasks.length + 1  , text: inputTaskText};
    tasks.push(newTask);
    return newTask;
}