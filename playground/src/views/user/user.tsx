import * as React from "react";
import {
  Form,
  TextInput,
  NumberInput,
  EmailInput,
  TextArea,
  Arrays,
  ListBox,
  SwitchInput,
  Button,
  NativeDateInput,
  TagInput,
  Select,
  IconUtils,
  CheckboxInput,
} from "@rocketmakers/armstrong-edge";
import { useParams } from "react-router";

import { apiHooks } from "../../state/apiHooks";
import { MemoryServer } from "../../servers/memory";

type Role = MemoryServer.IUserRole;

const autocompleteOptions = [
  { id: "a", name: "pizza" },
  { id: "b", name: "chips" },
  { id: "c", name: "pints" },
];

export const UserEdit: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();

  const [{ data }, forceRefetch] = apiHooks.user.getUser.useQuery({
    parameters: { id: userId! },
  });

  const [addUser, { processed: addUserProcessed }] =
    apiHooks.user.addUser.useMutation();
  const [updateUser, { processed: updateUserProcessed }] =
    apiHooks.user.updateUser.useMutation();

  const validationErrors: Form.IValidationError[] = Arrays.flatten(
    addUserProcessed?.validationErrors,
    updateUserProcessed?.validationErrors,
    [{ key: "firstName", message: "uh oh" }]
  );

  const initialData = React.useCallback<
    (currentState?: MemoryServer.IUser) => MemoryServer.IUser
  >((currentState) => {
    console.log("NEW CURRENT", currentState);
    console.log("NEW REMOTE", data);
    return {
      firstName: "",
      lastName: "",
      email: "",
      address: {
        line1: "",
        city: "",
        postcode: "",
        test: {
          test1: {
            test2: {
              test3: "",
            },
          },
        },
      },
      points: 0,
      roles: [],
      ...(currentState ?? {}),
      // ...(data ?? {}),
    };
  }, []);

  const { formProp, formState, getFormData, validate, isValid } =
    Form.use<MemoryServer.IUser>(initialData, {
      validationErrors,
      validationErrorIcon: IconUtils.getIconDefinition("LinearIcons", "alarm"),
      validators: {
        email: {
          message: "Wrong email",
          validator: (val) => !!val,
        },
        bio: {
          message: "Bio not good",
          validator: (value) => value?.length > 10,
        },
        address: {
          city: {
            message: "City wrong lol",
            validator: (val) => !!val,
          },
          test: {
            test1: {
              test2: {
                test3: {
                  message: "wow",
                  validator: (val) => val?.length > 2,
                },
              },
            },
          },
        },
      },
    });

  const selectRef = React.useRef<any>();

  const submitData = React.useCallback(async () => {
    const user = getFormData();
    if (user?.id) {
      await updateUser({ id: user.id, data: user });
    } else {
      await addUser({ data: user });
    }
  }, [getFormData]);

  const swapRoleAtIndex = React.useCallback(
    (index: number, role: Role) => {
      formProp("roles").remove(index).insert(role, index);
    },
    [formProp]
  );

  return (
    <>
      <Button onClick={() => validate()}>validate</Button>
      <form>
        <fieldset>
          <h2>Basic Info</h2>
          <div>{isValid ? "valid" : "not valid"}</div>

          <TextInput
            bind={formProp("firstName").bind()}
            leftIcon={IconUtils.getIconDefinition("Icomoon", "user")}
            validationErrorMessages={["no you"]}
          />

          <TextInput
            bind={formProp("lastName").bind()}
            leftIcon={IconUtils.getIconDefinition("Icomoon", "user")}
          />
          <NumberInput
            bind={formProp("points").bind()}
            leftIcon={IconUtils.getIconDefinition("Icomoon", "glass")}
          />
          <TextArea bind={formProp("bio").bind()} />
          <EmailInput
            bind={formProp("email").bind()}
            leftIcon={IconUtils.getIconDefinition("LinearIcons", "envelope")}
          />
          <TextInput
            bind={formProp("address", "city").bind()}
            leftIcon={IconUtils.getIconDefinition("Icomoon", "city")}
          />
          <NumberInput bind={formProp("points").bind()} rightOverlay="years" />
          <SwitchInput
            bind={formProp("isCool").bind()}
            validationErrorMessages={["uh oh"]}
          />
          <TagInput
            bind={formProp("sauces").bind()}
            spaceCreatesTags
            tagPosition="inside"
          />
          {/* <ListBox
          leftIcon={IconUtils.getIconDefinition("Icomoon", "paint-format")}
          bind={formProp("favouriteColour").bind()}
          options={[
            { id: "blue", name: "Blue" },
            { id: "red", name: "red" },
            { id: "something else", name: "Something else" },
          ]}
          ref={selectRef}
        /> */}
          <Select
            leftIcon={IconUtils.getIconDefinition("Icomoon", "paint-format")}
            bind={formProp("favouriteColour").bind()}
            options={[
              { id: "blue", name: "Blue" },
              { id: "red", name: "red" },
              { id: "something else", name: "Something else" },
            ]}
            ref={selectRef}
          />
          <TagInput
            bind={formProp("sauces").bind()}
            spaceCreatesTags
            tagPosition="above"
          />

          <CheckboxInput content="I'm the label" />

          <NativeDateInput />

          {/* <AutoCompleteInput
          bind={formProp("favouriteCuisine").bind({ format: { fromData: (value) => sauces?.find((sauce) => sauce.id === value)?.name } })}
          options={sauces?.map((sauce) => sauce.id)}

          onTextInputChange={setAutocompleteValue}
          textInputValue

          leftIcon={IconUtils.getIconDefinition("Icomoon", "pizza")}
          filterOptions={false}
          pending={isFetchingSauces}
        /> */}

          <p>you've chosen: {formState?.favouriteCuisine}</p>
          <br />
          <br />
          <br />
          <br />
        </fieldset>

        <AddressForm bind={formProp("address").bind()} />

        <fieldset>
          <h2>Roles</h2>

          {formState?.roles.map((role, index) => (
            <div key={index}>
              <TextInput bind={formProp("address", "line2").bind()} />
              <Button onClick={() => formProp("roles").remove(index)}>
                Remove
              </Button>
            </div>
          ))}

          <Button onClick={() => swapRoleAtIndex(0, { name: "horse" })}>
            Add role
          </Button>
        </fieldset>

        <Button type="submit" onClick={submitData}>
          Submit
        </Button>
        <Button type="submit" onClick={() => forceRefetch()}>
          Force Refetch
        </Button>
      </form>
    </>
  );
};

// ADDRESS FORM

interface IAddressFormProps {
  bind: Form.IBindingProps<MemoryServer.IUserAddress>;
}

const AddressForm: React.FC<IAddressFormProps> = ({ bind }) => {
  const { formProp } = Form.use(bind);

  return (
    <fieldset>
      {/* <button
        onClick={() => formProp("test", "test1", "test2", "test3").validate()}
      >
        validate
      </button> */}
      <h2>Address</h2>
      <TextInput bind={formProp("line1").bind()} />
      <TextInput bind={formProp("line2").bind()} />
      <TextInput bind={formProp("city").bind()} />
      <TextInput bind={formProp("postcode").bind()} />
      <TextInput bind={formProp("test", "test1", "test2", "test3").bind()} />
    </fieldset>
  );
};
