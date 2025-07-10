import { useState } from "react";
import { ContentArea, EditTaskButton, FinishTaskButton, InputArea, TaskArea, TaskDivider, TitleDiv, TodoContainer } from "./styles";
import { useForm } from "react-hook-form";

type TTask = {
    id: string,
    task: string
    state: boolean
}

function TodoApp() {

    const { register, handleSubmit, getValues, resetField, formState: { errors } } = useForm()
    const id = crypto.randomUUID()
    const [taskItem, setTaskItem] = useState<TTask[]>([])
    const [finishedTask, setFinishedTask] = useState<TTask[]>([])

    function createTask() {
        const values = getValues()
        setTaskItem([...taskItem, { id: id, task: values.task, state: true }])
        resetField("task")
        console.log(values);
    }

    function removeTask(id: string, task: string) {

        setTaskItem(taskItem.filter((item) => item.id !== id))
        //const finished = taskItem.filter((item) => item.id == id)
        setFinishedTask([...finishedTask, { id: id, task: task, state: false }])

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
                {taskItem.length ? taskItem.map((item, id) =>
                    <TaskArea>
                        <span key={id}>{item.task}</span>
                        <div>
                            <FinishTaskButton onClick={() => removeTask(item.id, item.task)}>Concluir</FinishTaskButton>
                            <EditTaskButton>Editar</EditTaskButton>
                        </div>
                    </TaskArea>) : ""}
                <TaskDivider>Tarefas concluidas</TaskDivider>
                {finishedTask.map((item) =>
                    <TaskArea $finished={item.state} >
                        <span key={id}>{item.task}</span>
                        <div>
                            <FinishTaskButton onClick={() => removeTask(item.id, item.task)}>Concluir</FinishTaskButton>
                            <EditTaskButton>Editar</EditTaskButton>
                        </div>
                    </TaskArea>)}
            </ContentArea>

        </TodoContainer>
    )
}

export default TodoApp