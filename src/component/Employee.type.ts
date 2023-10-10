export interface IEmpolyee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const dummyEmployeeList: IEmpolyee[] = [
 {
   id: new Date().toJSON().toString(),
   firstName: "Dummy1",
   lastName: "Dummy11",
   email: "dummy1@gmail.com",
    },
];
