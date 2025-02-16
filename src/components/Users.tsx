type UserShape ={
    name: string;
    age: number;
    isStudent: boolean;
}
const Users = (props:UserShape) => {
  return (
    <div>
      <h1>{props.age}</h1>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Users;
