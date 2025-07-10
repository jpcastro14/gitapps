import styled from "styled-components";

interface ITaskArea {
  $finished?: boolean;
}

export const TodoContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 100%;
  background-color: aliceblue;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 10% 10%;
  overflow-y: scroll;
`;
export const TitleDiv = styled.div`
  background-color: var(--blue);
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  border-radius: 5px 5px 0 0;
  h2 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 300;
  }
`;

export const InputArea = styled.div`
  width: 100%;
  background-color: var(--blue);
  display: grid;
  grid-template-columns: 40% 20%;
  grid-template-rows: 100%;
  input {
    height: 50%;
    background-color: var(--white);
    border: none;
    border-radius: 5px;
    color: var(--blue);
    font-size: 20px;
    padding-left: 10px;
  }
  button {
    height: 50%;
    border-radius: 5px;
    border: none;
    background-color: var(--light-blue);
    font-size: 20px;
  }
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContentArea = styled.div`
  background-color: aliceblue;
  border-radius: 0 0 4px 4px;
  color: black;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const TaskArea = styled.div<ITaskArea>`
  display: grid;
  min-height: 50px;
  padding: 0 0 0 20px;
  grid-template-columns: 70% 30%;
  text-align: start;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 5px;
  input {
    background-color: aliceblue;
    border: none;
    color: black;
  }
  span {
    text-decoration: ${(props) =>
      props.$finished == false ? "line-through" : "none"};

    color: ${(props) => (props.$finished == false ? "#cecece" : "black")};
  }
  div {
    display: grid;
    height: 30px;
    grid-template-columns: 40% 40%;
    grid-template-rows: 100%;
    gap: 10%;
  }
`;

export const FinishTaskButton = styled.button`
  background-color: var(--regular-green);
  border: none;
  border-radius: 5px;
`;

export const EditTaskButton = styled.button`
  background-color: var(--regular-yellow);
  border: none;
  border-radius: 5px;
`;

export const TaskDivider = styled.span`
  background-color: var(--blue);
  border-radius: 5px;
  color: var(--white);
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: start;
  padding-left: 20px;
`;
