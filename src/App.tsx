import { useMutation } from "@tanstack/react-query";
import "./App.css";
import { Button, Textarea } from "@nextui-org/react";
import { saveData } from "./api/saveData";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationKey: ["save"],
    mutationFn: () => saveData(text),
  });

  return (
    <div className="container">
      <h1>Вводилка</h1>
      <h2>
        Привет, давай затестим первую лабу по DevOps! Введи некоторый текст в
        текстовое поле и нажмми сохранить! На бэкенде должен создаться файл
        data.txt с содержимыи, которое ты ввел!
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
  );
}

export default App;
