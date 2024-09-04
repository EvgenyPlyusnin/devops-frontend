import { useMutation, useQuery } from "@tanstack/react-query";
import "./App.css";
import { Button, Textarea } from "@nextui-org/react";
import { saveData } from "./api/saveData";
import { useState } from "react";
import { getData } from "./api/getData";

function App() {
  const [text, setText] = useState("");

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationKey: ["save"],
    mutationFn: () => saveData(text),
  });

  const {
    data,
    isFetching,
    isError: isLoadingError,
    isSuccess: isLoadingSuccess,
    refetch,
  } = useQuery({
    queryKey: ["load"],
    queryFn: () => getData(),
    enabled: false,
  });

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Вводилка</h1>
        <h2>
          Привет, давай затестим первую лабу по DevOps! Введи некоторый текст в
          текстовое поле и нажмми "отправить на сервер"! На бэкенде должен
          создаться файл data.txt с содержимым, которое ты ввел!
        </h2>
        <Textarea value={text} onChange={(e) => setText(e.target.value)} />
        {isSuccess && (
          <h3 className="text-green-500">Данные успешно сохранены!</h3>
        )}
        {isError && <h3 className="text-red-500">Ошибка сохранения данных!</h3>}
        <Button
          color="primary"
          disabled={text === "" || isPending}
          onClick={() => mutate()}
        >
          Отправить на сервер!
        </Button>
      </div>
      <div className="container">
        <h1>Читалка</h1>
        <h2>
          Привет, давай затестим первую лабу по DevOps! Нажми кнопку "загрузить
          с сервера" и ты должен увидеть данные, которые хранятся в файле
          data.txt на сервере!
        </h2>
        <Textarea readOnly value={data?.data.text} />
        {isLoadingSuccess && (
          <h3 className="text-green-500">Данные успешно загружены!</h3>
        )}
        {isLoadingError && (
          <h3 className="text-red-500">Ошибка загрузки данных!</h3>
        )}
        <Button
          color="primary"
          disabled={isFetching}
          onClick={() => refetch()}
        >
          Загрузить с сервера!
        </Button>
      </div>
    </div>
  );
}

export default App;
