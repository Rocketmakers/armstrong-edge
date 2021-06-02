import * as React from "react"
import { Form, TextInput, Button } from "@rocketmakers/armstrong-edge"

export const ArrayForm: React.FC = () => {
  const { formProp, formState } = Form.use<{ roles: Array<{ name: string }> }>()

  return (
    <form>
      {formState?.roles?.map((item, index) => (
        <div key={index}>
          <TextInput bind={formProp("roles", index, "name").bind()} />
          <Button onClick={() => formProp("roles").remove(index)}>Delete Role</Button>
        </div>
      ))}
      <Button onClick={() => formProp("roles").add({ name: "" })}>Add Role</Button>
    </form>
  )
}
