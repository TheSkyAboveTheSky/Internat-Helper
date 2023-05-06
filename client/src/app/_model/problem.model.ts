import {FileHandle} from "./file-handle-model";



export interface  Problem {

  name : string,
  description : string,
  roomName : string,
  reportedBy: string;
  images : FileHandle[],

}
