import { useState } from "react";
import { ContentArea, EditTaskButton, FinishTaskButton, InputArea, TaskArea, TaskDivider, TitleDiv, TodoContainer } from "./styles";
import { useForm } from "react-hook-form";
import { TTask } from "./types";

function TodoApp() {

	const { register, handleSubmit, getValues, resetField, formState: { errors } } = useForm()
	const [taskItem, setTaskItem] = useState<TTask[]>([])
	const [finishedTask, setFinishedTask] = useState<TTask[]>([])
	const id = crypto.randomUUID()

	function createTask() {
		const values = getValues()
		setTaskItem([{ id: id, task: values.task, isEditing: false }, ...taskItem,])
		resetField("task")
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
					<TaskArea key={index} onClick={() => console.log((taskItem))
					} >
						{item.isEditing
							? <input placeholder="Editar tarefa" defaultValue={item.task} {...register('editTask')} />
							: <p> {index} {' - '} {item.task}</p>}
						<div>
							<FinishTaskButton onClick={() => removeTask(item.id, item.isEditing, item.task)}>Concluir</FinishTaskButton>
							{item.isEditing
								? <EditTaskButton onClick={() => UpdateTask(item.id, item.isEditing)} >Salvar</EditTaskButton>
								: <EditTaskButton onClick={() => UpdateTask(item.id, item.isEditing)}>Editar Tarefa</EditTaskButton>
							}

						</div>
					</TaskArea>) : ""}

				<TaskDivider>Tarefas concluidas</TaskDivider>
				{finishedTask.map((item, index) =>
					<TaskArea key={index} $finished={item.$finished} >
						<span key={id}>{index} {" "} {item.task}</span>
						<div>
							<span>Tarefa finalizada</span>
						</div>
					</TaskArea>)}
			</ContentArea>

		</TodoContainer>
	)
}

export default TodoApp