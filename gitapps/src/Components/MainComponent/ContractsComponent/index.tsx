import { useEffect, useState } from "react";
import { Container, ItemContainer, ItemField } from "./styles";
import axios from "axios";

type IApiData = {
  id: number;
};

export const ContractsComponent = () => {
  const [apiData, setApiData] = useState<IApiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://dummyjson.com/recipes")
        .then((response) => setApiData(response.data.recipes));
    };
    fetchData();
  }, []);

  const filtered = apiData.filter((item) => item.id % 2 == 0);

  return (
    <Container>
      <ItemContainer>
        <ItemField>
          {apiData.map((item) => (
            <a key={item.id}>{item.id}</a>
          ))}

          <button onClick={() => setApiData(filtered)}>Filtrar</button>
        </ItemField>
      </ItemContainer>
    </Container>
  );
};
