import * as React from "react"
import { Form, TextInput, NumberInput, EmailInput, TextAreaInput, Arrays } from "@rocketmakers/armstrong-edge"
import { useParams } from "react-router"
import { apiHooks } from "../../state/apiHooks"
import { MemoryServer } from "../../servers/memory"
import { IconUtils } from "@rocketmakers/armstrong-edge/dist/components/icon"
import { IValidationError } from "@rocketmakers/armstrong-edge/dist/hooks/form"

type Role = MemoryServer.IUserRole

export const UserEdit: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>()

  const [{ data }] = apiHooks.user.getUser.useQuery({ parameters: { id: userId } })

  const [addUser, { processed: addUserProcessed }] = apiHooks.user.addUser.useMutation()
  const [updateUser, { processed: updateUserProcessed }] = apiHooks.user.updateUser.useMutation()

  const validationErrors: IValidationError[] = Arrays.flatten(
    addUserProcessed?.validationErrors,
    updateUserProcessed?.validationErrors,
    [{key: 'firstName', message: 'uh oh'}]
  )

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
    { validationErrors }
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

  console.log(formProp('firstName').bind())

  return (
    <form>
      <fieldset>
        <h2>Basic Info</h2>
        <TextInput bind={formProp("firstName").bind()} leftIcon={IconUtils.getIconDefinition('Icomoon', 'user')} />
        <TextAreaInput bind={formProp("lastName").bind()} className='arm-text-area-input' />
        <EmailInput bind={formProp("email").bind()} leftIcon={IconUtils.getIconDefinition('LinearIcons', 'envelope')} />
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
