import { useState } from "react";
import { ContentArea, InputArea, TaskArea, TitleDiv, TodoContainer } from "./styles";

import { useForm } from "react-hook-form";

type TTask = {
    id: number,
    task: string
}

function TodoApp() {

    const { register, handleSubmit, getValues } = useForm()
    const [taskItem, setTaskItem] = useState<TTask[]>([{} as TTask])

    function createTask() {
        const values = getValues()
        setTaskItem([...taskItem, { id: 1, task: values.task }])
        console.log(values);

    }

    function removeTask(id: number) {
        console.log(id);
    }


    return (
        <TodoContainer>
            <TitleDiv><h2>Senado Tarefas</h2></TitleDiv>
            <InputArea>
                <input type="text" {...register("task", { required: true })} />
                <button onClick={() => handleSubmit(createTask)()}>Criar Tarefa</button>
            </InputArea>
            <ContentArea>

                {taskItem.length > 0 ? taskItem.map((item, index) => <TaskArea>
                    <span key={index}>{item.task}</span>
                    <div>
                        <button onClick={() => removeTask(item.id)}>Concluir</button>
                        <button>Editar</button>
                    </div>
                </TaskArea>) : ""}

            </ContentArea>
        </TodoContainer>
    )
}

export default TodoApp