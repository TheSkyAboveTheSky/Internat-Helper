import {FileHandle} from "./file-handle-model";
import {User} from "./User.model";

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


