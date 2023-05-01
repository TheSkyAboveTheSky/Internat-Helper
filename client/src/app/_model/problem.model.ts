import {FileHandle} from "./file-handle-model";

export interface User {
  id : string
  username : string

  email: string;
  name: string;
  date: string;
  poste : string;
}

export interface  Problem {
  name : string,
  description : string,
  roomName : string,
  reportedBy: User;
  Images : FileHandle[],

}
