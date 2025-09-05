export interface Teacher {
  username: string;
  password: string;
  name: string;
  poem: string;
  backgroundImage?: string;
}

export interface TeacherData {
  [key: string]: Teacher;
}