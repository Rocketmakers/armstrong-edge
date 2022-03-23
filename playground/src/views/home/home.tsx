import { LinkButton } from "@rocketmakers/armstrong-edge"
import * as React from "react"
import { apiHooks } from "../../state/apiHooks"

import "./home.scss"

export const Home: React.FC = () => {
  const [{ data }] = apiHooks.user.getUserList.useQuery()

  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        
        {data?.map((user) => (
          <tr key={user.id} >
            <th>{user.firstName}</th>
            <th>{user.lastName}</th>
            <th>{user.email}</th>
            <th><LinkButton to={`/edit/${user.id}`}>Go</LinkButton></th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
