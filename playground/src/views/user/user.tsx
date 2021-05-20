import * as React from "react"
import { Form, TextInput, NumberInput, EmailInput, TextAreaInput } from "@rocketmakers/armstrong-edge"
import { useParams } from "react-router"
import { apiHooks } from "../../state/apiHooks"
import { MemoryServer } from "../../servers/memory"

type Role = MemoryServer.IUserRole

export const UserEdit: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>()

  const [{ data }] = apiHooks.user.getUser.useQuery({ parameters: { id: userId } })

  const [addUser, { processed: addUserProcessed }] = apiHooks.user.addUser.useMutation()
  const [updateUser, { processed: updateUserProcessed }] = apiHooks.user.updateUser.useMutation()

  const { formProp, formState, getFormData } = Form.use<MemoryServer.IUser>(
    {
      firstName: "",
      lastName: "",
      email: "",
      address: {
        line1: "",
        city: "",
        postcode: "",
      },
      points: 0,
      roles: [],
      ...(data ?? {}),
    },
    { validationErrors: addUserProcessed?.validationErrors ?? updateUserProcessed?.validationErrors }
  )

  React.useEffect(() => {
    console.log("NEW STATE", formState)
  }, [formState])

  const submitData = React.useCallback(async () => {
    const user = getFormData()
    if (user.id) {
      await updateUser({ id: user.id, data: user })
    } else {
      await addUser({ data: user })
    }
  }, [getFormData])

  const swapRoleAtIndex = React.useCallback(
    (index: number, role: Role) => {
      formProp("roles").remove(index).insert(role, index)
    },
    [formProp]
  )

  return (
    <form>
      <fieldset>
        <h2>Basic Info</h2>
        <TextInput bind={formProp("firstName").bind()} />
        <TextAreaInput bind={formProp("lastName").bind()} />
        <EmailInput bind={formProp("email").bind()} />
        <NumberInput bind={formProp("points").bind()} />
      </fieldset>
      <AddressForm bind={formProp("address").bind()} />
      <fieldset>
        <h2>Roles</h2>
        {formState.roles.map((role, index) => (
          <div key={index}>
            <TextInput bind={formProp("roles", index, "name").bind()} />
            <button onClick={() => formProp("roles").remove(index)}>Remove</button>
          </div>
        ))}
        <button onClick={() => swapRoleAtIndex(0, { name: "horse" })}>Add role</button>
      </fieldset>
      <button type="submit" onClick={submitData}>
        Submit
      </button>
    </form>
  )
}

// ADDRESS FORM

interface IAddressFormProps {
  bind: Form.IBindingProps<MemoryServer.IUserAddress>
}

const AddressForm: React.FC<IAddressFormProps> = ({ bind }) => {
  const { formProp } = Form.use(bind)

  return (
    <fieldset>
      <h2>Address</h2>
      <TextInput bind={formProp("line1").bind()} />
      <TextInput bind={formProp("city").bind()} />
      <TextInput bind={formProp("postcode").bind()} />
    </fieldset>
  )
}
