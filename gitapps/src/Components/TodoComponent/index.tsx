import { useState } from "react";
import { ContentArea, FinishTask, InputArea, TaskArea, TaskDivider, TitleDiv, TodoContainer } from "./styles";
import { useForm } from "react-hook-form";
import useId from "@mui/material/utils/useId";

type TTask = {
    id: string,
    task: string
}

function TodoApp() {

    const { register, handleSubmit, getValues, resetField, formState: { errors } } = useForm()
    const id = crypto.randomUUID()
    const [taskItem, setTaskItem] = useState<TTask[]>([])
    const [finishedTask, setFinishedTask] = useState<TTask[]>([])

    function createTask() {
        const values = getValues()
        setTaskItem([...taskItem, { id: id, task: values.task }])
        resetField("task")
        console.log(values);
    }

    function removeTask(id: string, task: string) {

        setTaskItem(taskItem.filter((item) => item.id !== id))
        //const finished = taskItem.filter((item) => item.id == id)
        setFinishedTask([...finishedTask, { id: id, task: task }])
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
                            <FinishTask onClick={() => removeTask(item.id, item.task)}>Concluir</FinishTask>
                            <button>Editar</button>
                        </div>
                    </TaskArea>) : ""}
                <TaskDivider>Tarefas concluidas</TaskDivider>
                {finishedTask.map((item) => <TaskArea>
                    <span key={id}>{item.task}</span>
                    <div>
                        <FinishTask onClick={() => removeTask(item.id, item.task)}>Concluir</FinishTask>
                        <button>Editar</button>
                    </div>
                </TaskArea>)}
            </ContentArea>

        </TodoContainer>
    )
}

export default TodoApp