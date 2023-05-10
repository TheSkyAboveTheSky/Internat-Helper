export interface UserModel {
  id: string;
  username:string;
  email: string;
  gender:['male','female'];
  date: Date;
  poste : string;
  roles :[string];
}