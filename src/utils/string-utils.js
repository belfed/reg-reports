import { getCurrentDay } from "./time-utils";

const buildNewTicketUrl = (ticket) => {
  const params = [
    {
      key: "IDCliente",
      value: "customerId",
    },
    {
      key: "IDCommessa",
      value: "orderId",
    },
    {
      key: "Ore",
      value: "elapsedTime",
    },
    {
      key: "Giorno",
      value: getCurrentDay(),
    },
    {
      key: "IDTodoList",
      value: "id",
    },
    {
      key: "Descrizione",
      value: "description",
    },
  ];

  let url = import.meta.env.VITE_NEW_TICKET_URL;

  for (const param of params) {
    url = `${url}&${param.key}=${
      ticket[param.value] || ticket[param.value] === ""
        ? ticket[param.value]
        : param.value
    }`;
  }

  return url;
};

export { buildNewTicketUrl };
