
export interface Task {
  id: number;
  msg: string;
  date: number;
}

export interface User {
  name: string;
  messages: Array<object>;
  activities: Array<object>;
  img: string;
  tasks: Array<Task>;
}
