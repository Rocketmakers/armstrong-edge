import * as React from "react"
import { Form, TextInput, NumberInput, EmailInput, TextAreaInput, Arrays, SelectInput, Spinner, Button, SwitchInput, AutoCompleteInput, NativeDateInput , TagInput, NativeSelectInput} from "@rocketmakers/armstrong-edge"
import { useParams } from "react-router"

import { apiHooks } from "../../state/apiHooks"
import { MemoryServer } from "../../servers/memory"
import { IconUtils } from "@rocketmakers/armstrong-edge/dist/components/icon"
import { IValidationError } from "@rocketmakers/armstrong-edge/dist/hooks/form"

type Role = MemoryServer.IUserRole

const autocompleteOptions = [{ id: 'a', name: 'pizza' }, { id: 'b', name: 'chips' }, { id: 'c', name: 'pints' }]

export const UserEdit: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>()

  const [{ data }] = apiHooks.user.getUser.useQuery({ parameters: { id: userId } })

  const [addUser, { processed: addUserProcessed }] = apiHooks.user.addUser.useMutation()
  const [updateUser, { processed: updateUserProcessed }] = apiHooks.user.updateUser.useMutation()

  const [autcompleteValue, setAutocompleteValue] = React.useState('')

  const [{ data: sauces, isFetching: isFetchingSauces }] = apiHooks.sauces.getSauces.useQuery({
    parameters: { q: autcompleteValue },
    cacheKey: a => a.q,
    autoInvoke: true,
  })

  console.log({sauces})

  console.log({autcompleteValue})

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
    
    { validationErrors, validationErrorIcon: IconUtils.getIconDefinition('LinearIcons', 'alarm') }
  )

  const selectRef = React.useRef<HTMLSelectElement>()

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
        <TextInput bind={formProp("firstName").bind()} leftIcon={IconUtils.getIconDefinition('Icomoon', 'user')} validationErrorMessages={['no you']} />
        
        <TextInput bind={formProp("lastName").bind()} leftIcon={IconUtils.getIconDefinition('Icomoon', 'user')} />
        <TextAreaInput bind={formProp("bio").bind()} />
        <EmailInput bind={formProp("email").bind()} leftIcon={IconUtils.getIconDefinition('LinearIcons', 'envelope')} />
        <NumberInput bind={formProp("points").bind()} rightOverlay="years" />
        <SelectInput leftIcon={IconUtils.getIconDefinition('Icomoon', 'paint-format')} bind={formProp("favouriteColour").bind()} options={[{id: "blue", name: 'Blue'}, {id: 'red', name:"red"}, {id:'something else', name: 'Something else'}]} ref={selectRef} />
        <NativeSelectInput leftIcon={IconUtils.getIconDefinition('Icomoon', 'paint-format')} bind={formProp("favouriteColour").bind()} options={[{id: "blue", name: 'Blue'}, {id: 'red', name:"red"}, {id:'something else', name: 'Something else'}]} ref={selectRef} />
        <SwitchInput bind={formProp('isCool').bind()} validationErrorMessages={['uh oh']} />
        <TagInput bind={formProp('sauces').bind()} spaceCreatesTags tagPosition="below" />

        <NativeDateInput />

        <AutoCompleteInput 
          onTextInputChange={setAutocompleteValue}
          bind={formProp("favouriteCuisine").bind({ format:{ fromData: value => sauces?.find(sauce => sauce.id === value)?.name }})} 
          leftIcon={IconUtils.getIconDefinition('Icomoon', 'pizza')} 
          options={sauces?.map(sauce => sauce.id)} 
          filterOptions={false}
          pending={isFetchingSauces}
        />

        <p>you've chosen: {formProp('favouriteCuisine').get()}</p>
        <br/>
        <br/>
        <br/>
        <br/>
      </fieldset>

      <AddressForm bind={formProp("address").bind()} />

      <fieldset>
        <h2>Roles</h2>

        {formState.roles.map((role, index) => (
          <div key={index}>
            <TextInput bind={formProp("roles", index, "name").bind()} />
            <Button onClick={() => formProp("roles").remove(index)}>Remove</Button>
          </div>
        ))}

        <Button onClick={() => swapRoleAtIndex(0, { name: "horse" })}>Add role</Button>
      </fieldset>

      <Button type="submit" onClick={submitData}>
        Submit
      </Button>
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
