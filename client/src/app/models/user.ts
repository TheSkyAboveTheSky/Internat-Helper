export interface UserModel {
  id: string;
  username:string;
  email: string;
  gender:['Male','Female'];
  date: Date;
  poste : string;
  name:string;
  roles :[['WORKER'],['ADMIN'],['USER']];
}