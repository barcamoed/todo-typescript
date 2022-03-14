import { ITask } from '../Interfaces'
import store from '../store/store'
interface Iprops{
task:ITask,
}

const Item=({task}:Iprops)=>{

return(
    <>
        <div className='taskItem'>
                <span className='task'>
                    {task.task}
                </span>
                <span className='task'>
                {task.deadline}
                </span>
            <button onClick={()=>store.deleteTask(task)} >X</button>
        </div>
    </>
)

}

export default Item
