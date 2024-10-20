import Link from "next/link";
import React from "react";
import { sort } from 'fast-sort';

const UserTable = async ({sortOrder}:{sortOrder:string}) => {
    interface User{
        id: number;
        name: string;
        email: string;
    }
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users:User[] =await res.json();
  const sortedUsers=sort(users).asc(sortOrder==='email' ? user=>user.email:user=>user.name);
  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>Id</th>
          <th>
            <Link href='/users?sortOrder=name'>Name</Link>
          </th>
          <th>
            <Link href='users?sortOrder=email'>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>)}
      </tbody>
    </table>
  );
};

export default UserTable;
