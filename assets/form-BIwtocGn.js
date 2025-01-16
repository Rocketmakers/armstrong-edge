import{j as e}from"./jsx-runtime-Cl2eCCBe.js";import{useMDXComponents as o}from"./index-BLKynSmM.js";import"./chunk-NUUEMKO5-PsTWY6By.js";import{ae as r}from"./index-DZkQE_Np.js";import"./index-Cqyox1Tj.js";import"./iframe-BBIjq9xr.js";import"../sb-preview/runtime.js";import"./index-QqxU7g3h.js";import"./index-DGXSSr1l.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Form/Form Hooks"}),`
`,e.jsx(n.h1,{id:"useform",children:"useForm()"}),`
`,e.jsxs(n.p,{children:["The Armstrong ",e.jsx(n.code,{children:"useForm()"})," hook takes either an object or array and returns a simple set of tools which allows data to be edited by the user in a way that's designed to plug directly into your existing React hook dependency and React component structure."]}),`
`,e.jsx(n.h2,{id:"contents",children:"Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#simple-form",children:"A simple form"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tools",children:"Tools returned from the hook"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#formprop",children:"The formProp function"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#validation",children:"Validation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#child-forms",children:"Child forms"})}),`
`]}),`
`,e.jsx(n.h2,{id:"a-simple-form",children:e.jsx("a",{name:"simple-form",children:"A simple form"})}),`
`,e.jsx(n.p,{children:"Below is an example of a really simple login form:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({
  email: '',
  password: '',
});

const submitData = React.useCallback(async () => {
  const { email, password } = formState;
  await login(email, password);
}, [formState]);

return (
  <form>
    <EmailInput bind={formProp('email').bind()} />
    <PasswordInput bind={formProp('password').bind()} />
    <Button type="submit" onClick={submitData}>
      Login
    </Button>
  </form>
);
`})}),`
`,e.jsx(n.h3,{id:"initial-data-vs-typings-vs-both",children:"Initial data vs typings vs both"}),`
`,e.jsxs(n.p,{children:["In the above example, the initial data is supplied as the first argument to the form hook, in this example, the types for ",e.jsx(n.code,{children:"formProp"})," and ",e.jsx(n.code,{children:"formState"})," will be derived from the shape of the object passed. In this case:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`{
  email: '',
  password: '',
}
`})}),`
`,e.jsx(n.p,{children:"The form hook can also received it's type via a generic, with this approach the initial data object becomes optional as the form hook can build the state on the fly, so the above example could have looked like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface ILoginRequest {
  email: string;
  password: string;
}

const { formProp, formState } = useForm<ILoginRequest>();

const submitData = React.useCallback(
  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formState;
    await login(email, password);
  },
  [formState]
);

return (
  <form onSubmit={submitData}>
    <EmailInput bind={formProp('email').bind()} />
    <PasswordInput bind={formProp('password').bind()} />
    <Button type="submit">Login</Button>
  </form>
);
`})}),`
`,e.jsxs(n.p,{children:[`With a type supplied, the initial state can either be complete, partial or missing entirely.
`,e.jsx(n.strong,{children:"NOTE:"})," Bear in mind that with a type based approach, the ",e.jsx(n.code,{children:"formState"})," object will only contain properties passed in as initial state alongside data added by the user, so you'll need to fill in the gaps and use null checks accordingly."]}),`
`,e.jsx(n.h3,{id:"initial-data-as-a-callback",children:"Initial data as a callback"}),`
`,e.jsx(n.p,{children:"Initial state can also be passed as a React callback. The callback will be executed:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Once initially with no parameters passed to it, it will be expected to return the initial state for the form binder."}),`
`,e.jsx(n.li,{children:"Again each time it's dependencies update, in this case it will receive the current form state as a param and be expected to return updated form state."}),`
`]}),`
`,e.jsx(n.p,{children:"This is extremely useful when a form relies on remote data that could update at any time, it allows the form to update with the latest changes from the server without losing the user's current edits by completely replacing the form data with the remote update."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NOTE:"})," When using an initial data function, be aware that it will be executed to provide initial data whenever its reference updates. It's essential therefore that any initial data function is a callback with a carefully selected set of dependencies, rather than an anonymous function or constant function."]}),`
`,e.jsx(n.p,{children:"Here's an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// this is data from the server that can be updated at any time.
const { data } = useGetProfileData<IUser>();

// Using an initial data callback here ensures that when the remote data updates, the form will
// reflect the changes but also maintain live user edits to the unaffected areas of the form.
const initialData = React.useCallback((currentFormState?: IUser) => {
  return {
    firstName: "",
    lastName: "",
    email: ""
    ...(currentFormState ?? {}),
    ...(data ?? {})
  }
}, [data]);

const { formProp, formState } = useForm(initialData);

const submitData = React.useCallback(async () => {
  await updateProfile(formState);
}, [formState]);

return (
  <form>
    <TextInput bind={formProp('firstName').bind()} />
    <TextInput bind={formProp('lastName').bind()} />
    <EmailInput bind={formProp('email').bind()} />
    <Button type="submit" onClick={submitData}>
      Update
    </Button>
  </form>
);
`})}),`
`,e.jsx(n.h2,{id:"the-formprop-function",children:e.jsx("a",{name:"formprop",children:"The formProp function"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"formProp"})," function returned from the ",e.jsx(n.code,{children:"useForm"})," hook can be used to perform a set of tasks relating to a single form prop."]}),`
`,e.jsx(n.h3,{id:"field-targeting",children:"Field targeting"}),`
`,e.jsx(n.p,{children:"Targeting fields within a nested structure is achieved via passing an argument for each level of nesting. For example, take the following object shape:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  firstName: 'Joe',
  lastName: 'Bloggs',
  address: {
    line1: '45 Road Street',
    line2: '',
    city: 'Bath',
    postcode: 'BA7 4FG',
    location: {
      lat: 51.378582,
      long: -2.3568462
    }
  },
  roles: [
    { id: 1, name: 'admin' },
    { id: 2, name: 'tester' }
  ]
}
`})}),`
`,e.jsxs(n.p,{children:["This is how some of these properties are targeted using the ",e.jsx(n.code,{children:"formProp"})," method:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`formProp('firstName');
formProp('address', 'city');
formProp('address', 'location', 'lat');
formProp('roles', 0, 'name'); // binding to properties within an array is done via the index
`})}),`
`,e.jsx(n.p,{children:"Here's an example of some common array tools in action, this example also shows how form state can be built on the fly with no initial state provided:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm<{ roles: Array<{ name: string }> }>();

return (
  <form>
    {formState?.roles?.map((item, index) => (
      <div key={index}>
        <TextInput bind={formProp('roles', index, 'name').bind()} />
        <Button onClick={() => formProp('roles').remove(index)}>Delete Role</Button>
      </div>
    ))}
    <Button onClick={() => formProp('roles').add({ name: '' })}>Add Role</Button>
  </form>
);
`})}),`
`,e.jsx(n.h2,{id:"validation",children:e.jsx("a",{name:"validation",children:"Validation"})}),`
`,e.jsx(n.p,{children:"Validation can be handled in a few different ways. These methods can also be used together, allowing support for server and client side validation together."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hook config validation errors"})," refers to passing errors into the form via the hook config, this is ideal for errors that are returned from an existing piece of state or API library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hook config validation schema"})," refers to passing a validation schema into the form via the hook config, this is ideal for on the fly client side validation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dispatched validation errors"})," refers to dispatching errors via the functions provided by the form hook, this is ideal for handling client side validation"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Regardless of which of these methods you use, validation errors will automatically display underneath the relevant components by matching the ",e.jsx(n.code,{children:"key"}),` attribute of the error to the bound property.
Here's a simple example of a validation error:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  key: 'email',
  message: 'Please enter a valid email address'
}
`})}),`
`,e.jsx(n.p,{children:'Validation errors will only display on bindable components that have registered themselves as "touched". This allows for validation to take place as a user progresses through a form if so desired, without messages appearing on fields that have not yet been interacted with.'}),`
`,e.jsx(n.h3,{id:"hook-config-validation-errors",children:"Hook config validation errors."}),`
`,e.jsx(n.p,{children:"The below example shows the same login form, but with validation errors being returned from an APIHooks processing hook, and passed into the form config. A standard pattern for handling server side validation."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [
  login,
  {
    errors: { validationErrors },
  },
] = useLoginEndpoint();

const { formProp, formState } = useForm(
  {
    email: '',
    password: '',
  },
  {
    validationErrors,
    validationMode: 'both',
  }
);

const submitData = React.useCallback(async () => {
  const { email, password } = formState;
  await login(email, password);
}, [formState]);

return (
  <form>
    <EmailInput bind={formProp('email').bind()} />
    <PasswordInput bind={formProp('password').bind()} />
    <Button type="submit" onClick={submitData}>
      Login
    </Button>
  </form>
);
`})}),`
`,e.jsx(n.h3,{id:"schema-validation-errors",children:"Schema validation errors."}),`
`,e.jsx(n.p,{children:"The below example shows the same login form, but with validation being handled by a client side validation schema."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useForm"})," hook uses a type safe wrapper around the ",e.jsx(n.a,{href:"https://zod.dev",rel:"nofollow",children:"zod"})," validation library."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [login] = useLoginEndpoint();

const { formProp, formState, validate } = useForm(
  {
    email: '',
    password: '',
  },
  {
    validationMode: 'both',
    validationSchema: {
      email: z.string().email('must be a valid email'),
      password: z.string().minLength(8, 'password too short'),
    },
  }
);

const submitData = React.useCallback(async () => {
  if (validate()) {
    const { email, password } = formState;
    await login(email, password);
  }
}, [formState, validate]);

return (
  <form>
    <EmailInput bind={formProp('email').bind()} />
    <PasswordInput bind={formProp('password').bind()} />
    <Button type="submit" onClick={submitData}>
      Login
    </Button>
  </form>
);
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"validate"})," method exported by ",e.jsx(n.code,{children:"useForm"})," will dispatch client side validation errors to any fields that have failed the criteria. By default, the root ",e.jsx(n.code,{children:"validate"}),' function will set all inputs in the form as "touched" so that the form will show all errors when ',e.jsx(n.code,{children:"validate"}),' is called regardless of user interaction. This is usually the desired behaviour if validation is occurring on submit like in the above example, but may not be desirable for an "on the fly" approach to validation.']}),`
`,e.jsxs(n.p,{children:['To disable the "touch all on root validate" behaviour and allow individual form controls to decide whether to show errors, send ',e.jsx(n.code,{children:"false"})," to the root validate function like so:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-TypeScript",children:`validate(false);
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NOTE:"})," Schema validation can also be executed against a single field by using ",e.jsx(n.code,{children:"formProp"})," like so:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`formProp('email').validate();
`})}),`
`,e.jsxs(n.p,{children:["In a similar way to the root validation method, validating through ",e.jsx(n.code,{children:"formProp"}),' will set the targeted field control as "touched" so that the message will display immediately. This behaviour can be switched off by sending ',e.jsx(n.code,{children:"false"})," to the function, just like the root validation function."]}),`
`,e.jsx(n.h4,{id:"migrating-from-a-zod-schema-to-a-type-safe-validation-schema",children:"Migrating from a zod schema to a type safe validation schema"}),`
`,e.jsx(n.p,{children:"To a generated typescript client for the API, it's necessary for zod validation schemas to adhere to an existing type interface rather than creating a new one (which is the usual flow when working with zod.) To ensure proper type safety and intellisense, Armstrong forms uses a slightly different structure to a vanilla zod schema, they key differences are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The root object (and nested objects) do ",e.jsx(n.strong,{children:"not"})," need to be wrapped in a ",e.jsx(n.code,{children:"z.object"})," method."]}),`
`,e.jsxs(n.li,{children:["Nested objects contain a ",e.jsx(n.code,{children:"schema"})," field for child key validators, and an optional ",e.jsx(n.code,{children:"opts"})," function for applying zod validators to the nested object itself."]}),`
`,e.jsxs(n.li,{children:["Nested (and root) arrays contain an ",e.jsx(n.code,{children:"itemSchema"})," field for the validator to run against each object, and an optional ",e.jsx(n.code,{children:"opts"})," function for applying zod validators to the nested array itself."]}),`
`]}),`
`,e.jsx(n.p,{children:"See these two examples of a vanilla zod schema and it's equivalent type safe version:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Vanilla zod (not compatible with Armstrong forms)"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`z.object({
  field1: z.string(),
  field2: z.number().max(3, 'too many options selected'),
  field3: z.boolean(),
  field4: z.object({
    nestedField1: z.string(),
    nestedField2: z.string(),
    array: z.array(z.string()).min(4, 'not enough options selectee'),
  }),
});
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Armstrong forms compatible version"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  field1: z.string(),
  field2: z.number().max(3, 'too many options selected'),
  field3: z.boolean(),
  field4: {
    schema: {
      nestedField1: z.string(),
      nestedField2: z.string(),
      array: {
        itemSchema: z.string(),
        opts: arr => arr.min(4, 'not enough options selectee'),
      },
    },
  },
}
`})}),`
`,e.jsx(n.p,{children:"Although slightly more verbose, the latter provides far more compatibility with TypeScript, which will provide extremely helpful compiler errors following API changes in the future."}),`
`,e.jsx(n.h3,{id:"dispatched-validation-errors",children:"Dispatched validation errors"}),`
`,e.jsx(n.p,{children:"The below example shows our login form again, but with a password confirmation input and some client side validation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({
  email: '',
  password: '',
  passwordConfirmation: '',
});

const submitData = React.useCallback(async () => {
  const { email, password, passwordConfirmation } = formState;
  if (password !== passwordConfirmation) {
    formProp('passwordConfirmation').addValidationError("Passwords don't match");
    return;
  }
  await login(email, password);
}, [formState, formProp]);

return (
  <form>
    <EmailInput bind={formProp('email').bind()} />
    <PasswordInput bind={formProp('password').bind()} />
    <PasswordInput bind={formProp('passwordConfirmation').bind()} />
    <Button type="submit" onClick={submitData}>
      Login
    </Button>
  </form>
);
`})}),`
`,e.jsx(n.h2,{id:"child-forms",children:e.jsx("a",{name:"child-forms",children:"Child forms"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useChildForm"})," hook can be used with a binding prop from a parent form. This allows a single form state to exist across multiple downstream components, let's look at a simple example:"]}),`
`,e.jsx(n.h3,{id:"without-a-child-form",children:"Without a child form"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface IUserAddress {
  line1: string;
  line2: string;
  city: string;
  postcode: string;
}

interface IUser {
  firstName: string;
  lastName: string;
  address: IUserAddress;
}

const UserForm: React.FunctionComponent = () => {
  const { formProp } = useForm<IUser>();

  return (
    <form>
      <TextInput bind={formProp('firstName').bind()} />
      <TextInput bind={formProp('lastName').bind()} />
      <TextInput bind={formProp('address', 'line1').bind()} />
      <TextInput bind={formProp('address', 'line2').bind()} />
      <TextInput bind={formProp('address', 'city').bind()} />
      <TextInput bind={formProp('address', 'postcode').bind()} />
    </form>
  );
};
`})}),`
`,e.jsx(n.p,{children:"This example is fine and will work, but lets imagine we wanted to create a separate component for the user's address form snipped so that it could be reused elsewhere, this can be achieved with a child form:"}),`
`,e.jsx(n.h3,{id:"with-a-child-form",children:"With a child form"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`interface IUserAddress {
  line1: string;
  line2: string;
  city: string;
  postcode: string;
}

interface IUser {
  firstName: string;
  lastName: string;
  address: IUserAddress;
}

/** Parent form component */
const UserForm: React.FC = () => {
  const { formProp } = useForm<IUser>();

  return (
    <form>
      <TextInput bind={formProp('firstName').bind()} />
      <TextInput bind={formProp('lastName').bind()} />
      <UserAddressForm bind={formProp('address').bind()} />
    </form>
  );
};

interface IUserAddressFormProps {
  bind: Form.IBindingProps<IUserAddress>;
}

/** Reusable address form snippet component */
const UserAddressForm: React.FC<IUserAddressFormProps> = props => {
  const { formProp } = useForm(props.bind);

  return (
    <>
      <TextInput bind={formProp('line1').bind()} />
      <TextInput bind={formProp('line2').bind()} />
      <TextInput bind={formProp('city').bind()} />
      <TextInput bind={formProp('postcode').bind()} />
    </>
  );
};
`})})]})}function g(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{g as default};
