import { useState } from "react";
import { ContentArea, EditTaskButton, FinishTaskButton, InputArea, TaskArea, TaskDivider, TitleDiv, TodoContainer } from "./styles";
import { useForm } from "react-hook-form";

type TTask = {
    id: string,
    task: string
    isEditing: boolean
    $finished?: boolean;
}

function TodoApp() {

    const { register, handleSubmit, getValues, resetField, formState: { errors } } = useForm()
    const [taskItem, setTaskItem] = useState<TTask[]>([])
    const [finishedTask, setFinishedTask] = useState<TTask[]>([])
    const id = crypto.randomUUID()

    function createTask() {
        const values = getValues()
        setTaskItem([...taskItem, { id: id, task: values.task, isEditing: false }])
        resetField("task")
        //console.log(values);
    }

    function removeTask(id: string, isEditing: boolean, task: string) {
        setTaskItem(taskItem.filter((item) => item.id !== id))
        setFinishedTask([...finishedTask, { id: id, isEditing: !isEditing, $finished: true, task: task }])
    }

    function UpdateTask(idToUpdate: string, isEditing: boolean) {
        const updatedTask = getValues()

        setTaskItem(prevState =>
            prevState.map(obj =>
                obj.id == idToUpdate ? { ...obj, task: updatedTask.editTask, isEditing: !isEditing } : obj
            )
        )
    }

    function ToggleEdit(idToUpdate: string, isEditing: boolean) {

        setTaskItem(prevState =>
            prevState.map(obj =>
                obj.id == idToUpdate ? { ...obj, isEditing: !isEditing } : obj
            )
        )

    }



    return (
        <TodoContainer>
            <TitleDiv><h2>Senado Tarefas</h2></TitleDiv>
            <InputArea>
                <input placeholder="Tarefa" type="text" {...register("task", { required: true })} />
                <button onClick={() => handleSubmit(createTask)()}>Criar Tarefa</button>
            </InputArea>
            {errors?.task?.type === "required" && (<p style={{ color: "red" }}>Preencha o campo "Tarefa"</p>)}

            <ContentArea>
                {taskItem.length ? taskItem.map((item, index) =>
                    <TaskArea key={index} onClick={() => console.log(item.task)
                    } >
                        {item.isEditing
                            ? <input placeholder="Editar tarefa" defaultValue={item.task} {...register('editTask')} />
                            : <p>{item.task}</p>}
                        <div>
                            <FinishTaskButton onClick={() => removeTask(item.id, item.isEditing, item.task)}>Concluir</FinishTaskButton>
                            {item.isEditing
                                ? <EditTaskButton onClick={() => UpdateTask(item.id, item.isEditing)} >SALVAR!</EditTaskButton>
                                : <EditTaskButton onClick={() => UpdateTask(item.id, item.isEditing)}>Editar essa merda</EditTaskButton>
                            }

                        </div>
                    </TaskArea>) : ""}
                <TaskDivider>Tarefas concluidas</TaskDivider>
                {finishedTask.map((item, index) =>
                    <TaskArea $finished={item.$finished} >
                        <span key={id}>{item.task}</span>
                        <div>
                            <span>Tarefa finalizada</span>
                        </div>
                    </TaskArea>)}
            </ContentArea>

        </TodoContainer>
    )
}

export default TodoApp