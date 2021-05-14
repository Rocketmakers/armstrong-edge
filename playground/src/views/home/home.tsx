import * as React from "react"
import { useHistory } from "react-router"
import { apiHooks } from "../../state/apiHooks"

import "./home.scss"

export const Home: React.FC = () => {
  const [{ data }] = apiHooks.user.getUserList.useQuery()
  const history = useHistory()

  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        {data?.map((user) => (
          <tr key={user.id} onClick={() => history.push(`/edit/${user.id}`)}>
            <th>{user.firstName}</th>
            <th>{user.lastName}</th>
            <th>{user.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
