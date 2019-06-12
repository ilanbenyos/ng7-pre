export interface Tutorial {
  name: string;
  url: string;
}

export interface User {
  name: string;
  messages: Array<object>;
  activities: Array<object>;
  tasks: Array<object>;

}
