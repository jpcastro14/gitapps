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

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((response) => setApiData(response.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  console.log(apiData);

  const logText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtersample = apiData.filter((el) =>
      el.name.includes(e.target.value)
    );

    setFilteredData(filtersample);
  };

  return (
    <Container>
      <ItemContainer>
        <ItemField>
          <input type="text" onChange={logText} />
          {}

          {filteredData
            ? filteredData?.map((item) => <P key={item.id}>{item.name}</P>)
            : apiData.map((item) => <P key={item.id}>{item.name}</P>)}
        </ItemField>
      </ItemContainer>
    </Container>
  );
};
