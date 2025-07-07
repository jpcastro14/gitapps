import { ContentArea, InputArea, TitleDiv, TodoContainer } from "./styles";


function TodoApp() {
    return (
        <TodoContainer>
            <TitleDiv><h2>TODO APP</h2></TitleDiv>
            <InputArea>
                <input type="text" />
                <button>Criar Tarefa</button>
            </InputArea>
            <ContentArea>
            </ContentArea>
        </TodoContainer>
    )
}

export default TodoApp