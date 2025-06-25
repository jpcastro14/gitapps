import { useEffect, useState } from "react";
import { Container, ItemContainer, ItemField, P } from "./styles";
import axios from "axios";

type IApiData = {
  id: number;
  name: string;
  title: string;
};

export const ContractsComponent = () => {
  const [apiData, setApiData] = useState<IApiData[]>([]);
  const [filteredData, setFilteredData] = useState<IApiData[] | undefined>(
    undefined
  );
  const [deletedItems, setDeletedItems] = useState<IApiData[] | undefined>();

  const arr: IApiData[] | undefined = [];

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((response) => setApiData(response.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  const filterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtersample = apiData.filter((el) =>
      el.name.includes(e.target.value)
    );
    setFilteredData(filtersample);
    console.log(e.target.value);
  };

  const deleteItem = (id: number) => {
    setApiData(apiData.filter((item) => item.id !== id)); //Ao clicar, a função retorna todos os itens com ID diferente do item escolhido
    const newarr = apiData.filter((item) => item.id !== id);
    setDeletedItems((prevState) => [...prevState, newarr]);
    console.log(deletedItems?.length);
  };

  return (
    <Container>
      {deletedItems?.map((item) => (
        <p>{item.name}</p>
      ))}
      <ItemContainer>
        <input type="text" onChange={filterText} />
        <ItemField>
          {}

          {filteredData
            ? filteredData?.map((item) => (
                <P onClick={() => deleteItem(item.id)} key={item.id}>
                  {item.name}
                </P>
              ))
            : apiData.map((item) => (
                <P key={item.id} onClick={() => deleteItem(item.id)}>
                  {item.name}
                </P>
              ))}
        </ItemField>
      </ItemContainer>
    </Container>
  );
};
