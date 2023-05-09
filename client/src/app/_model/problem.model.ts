import {FileHandle} from "./file-handle-model";


export interface User {

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
  reportedBy: string;
  images : FileHandle[],

}
