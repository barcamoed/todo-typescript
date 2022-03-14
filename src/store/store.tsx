import {ITask} from '../Interfaces'
import { makeAutoObservable } from "mobx";
class ToDoStore{

    task = '';
    deadline=0;
    todoList:Array<ITask> = [];

    constructor(){
        makeAutoObservable(this)
    }

    addTask(newTaskObj:ITask){
        this.todoList.push(newTaskObj)
    }

    deleteTask(newTaskObj:ITask){
        const index = this.todoList.findIndex((task:ITask)=>task.task==newTaskObj.task)
        if(index>-1){
            this.todoList.splice(index,1);
        }
    }

    get allTasks(){
        return this.todoList;
    }

}
const store = new ToDoStore()
export default store;
// export default ToDoStore;