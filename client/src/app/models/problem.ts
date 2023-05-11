import { FileHandle } from "./file-handler";
export interface  Problem {

  name : string,
  description : string,
  roomName : string,
  reportedBy: string;
  images : FileHandle[],

}
export interface ProblemDetails{
  id :string,
  name: string,
  description : string,
  roomName :string,
  images : FileHandle[],
  repotedById : string,
  reportedByname : string,
  state:string,
}