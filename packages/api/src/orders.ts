import { callApi } from "./lib";

export interface IOrder {
  id: number;
  date: string;
  name: string;
  shipTo: string;
  paymentMethod: string;
  amount: number;
}

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  method: string,
  amt: number
): IOrder {
  return { id, date, name, shipTo, paymentMethod: method, amount: amt };
}

export const orders = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  )
];

export const getOrders = () => callApi<IOrder[]>("/orders");
