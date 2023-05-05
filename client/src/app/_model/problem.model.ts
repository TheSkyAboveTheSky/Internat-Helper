import {FileHandle} from "./file-handle-model";



export interface  Problem {

  name : string,
  description : string,
  roomName : string,
  reportedById: string;
  images : FileHandle[],

}
