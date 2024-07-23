import{M as s}from"./chunk-HLWAVYOI-cecb1552.js";import{j as n,a as t,F as d}from"./jsx-runtime-eae7a151.js";import{u as a}from"./index-f875e932.js";import"./iframe-464b7855.js";import"../sb-preview/runtime.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./react-18-d3dde439.js";import"./index-07d1f67e.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./isNativeReflectConstruct-30e719dd.js";import"./index-11d98b33.js";import"./uniq-d447bef6.js";import"./_baseIsEqual-62e1ad13.js";import"./index-ec0b3b5e.js";import"./index-356e4a49.js";function i(o){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",h3:"h3",strong:"strong",ol:"ol",h4:"h4"},a(),o.components);return t(d,{children:[n(s,{title:"Form/Form Hooks"}),`
`,n(e.h1,{id:"useform",children:"useForm()"}),`
`,t(e.p,{children:["The Armstrong ",n(e.code,{children:"useForm()"})," hook takes either an object or array and returns a simple set of tools which allows data to be edited by the user in a way that's designed to plug directly into your existing React hook dependency and React component structure."]}),`
`,n(e.h2,{id:"contents",children:"Contents"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"#simple-form",children:"A simple form"})}),`
`,n(e.li,{children:n(e.a,{href:"#tools",children:"Tools returned from the hook"})}),`
`,n(e.li,{children:n(e.a,{href:"#formprop",children:"The formProp function"})}),`
`,n(e.li,{children:n(e.a,{href:"#validation",children:"Validation"})}),`
`,n(e.li,{children:n(e.a,{href:"#child-forms",children:"Child forms"})}),`
`]}),`
`,n(e.h2,{id:"a-simple-form",children:n("a",{name:"simple-form",children:"A simple form"})}),`
`,n(e.p,{children:"Below is an example of a really simple login form:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({
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
`,n(e.h3,{id:"initial-data-vs-typings-vs-both",children:"Initial data vs typings vs both"}),`
`,t(e.p,{children:["In the above example, the initial data is supplied as the first argument to the form hook, in this example, the types for ",n(e.code,{children:"formProp"})," and ",n(e.code,{children:"formState"})," will be derived from the shape of the object passed. In this case:"]}),`
`,n(e.pre,{children:n(e.code,{children:`{
  email: '',
  password: '',
}
`})}),`
`,n(e.p,{children:"The form hook can also received it's type via a generic, with this approach the initial data object becomes optional as the form hook can build the state on the fly, so the above example could have looked like this:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`interface ILoginRequest {
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
`,t(e.p,{children:[`With a type supplied, the initial state can either be complete, partial or missing entirely.
`,n(e.strong,{children:"NOTE:"})," Bear in mind that with a type based approach, the ",n(e.code,{children:"formState"})," object will only contain properties passed in as initial state alongside data added by the user, so you'll need to fill in the gaps and use null checks accordingly."]}),`
`,n(e.h3,{id:"initial-data-as-a-callback",children:"Initial data as a callback"}),`
`,n(e.p,{children:"Initial state can also be passed as a React callback. The callback will be executed:"}),`
`,t(e.ol,{children:[`
`,n(e.li,{children:"Once initially with no parameters passed to it, it will be expected to return the initial state for the form binder."}),`
`,n(e.li,{children:"Again each time it's dependencies update, in this case it will receive the current form state as a param and be expected to return updated form state."}),`
`]}),`
`,n(e.p,{children:"This is extremely useful when a form relies on remote data that could update at any time, it allows the form to update with the latest changes from the server without losing the user's current edits by completely replacing the form data with the remote update."}),`
`,t(e.p,{children:[n(e.strong,{children:"NOTE:"})," When using an initial data function, be aware that it will be executed to provide initial data whenever its reference updates. It's essential therefore that any initial data function is a callback with a carefully selected set of dependencies, rather than an anonymous function or constant function."]}),`
`,n(e.p,{children:"Here's an example:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`// this is data from the server that can be updated at any time.
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
`,n(e.h2,{id:"the-formprop-function",children:n("a",{name:"formprop",children:"The formProp function"})}),`
`,t(e.p,{children:["The ",n(e.code,{children:"formProp"})," function returned from the ",n(e.code,{children:"useForm"})," hook can be used to perform a set of tasks relating to a single form prop."]}),`
`,n(e.h3,{id:"field-targeting",children:"Field targeting"}),`
`,n(e.p,{children:"Targeting fields within a nested structure is achieved via passing an argument for each level of nesting. For example, take the following object shape:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:`{
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
`,t(e.p,{children:["This is how some of these properties are targeted using the ",n(e.code,{children:"formProp"})," method:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:`formProp('firstName');
formProp('address', 'city');
formProp('address', 'location', 'lat');
formProp('roles', 0, 'name'); // binding to properties within an array is done via the index
`})}),`
`,n(e.p,{children:"Here's an example of some common array tools in action, this example also shows how form state can be built on the fly with no initial state provided:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`const { formProp, formState } = useForm<{ roles: Array<{ name: string }> }>();

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
`,n(e.h2,{id:"validation",children:n("a",{name:"validation",children:"Validation"})}),`
`,n(e.p,{children:"Validation can be handled in a few different ways. These methods can also be used together, allowing support for server and client side validation together."}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"Hook config validation errors"})," refers to passing errors into the form via the hook config, this is ideal for errors that are returned from an existing piece of state or API library."]}),`
`,t(e.li,{children:[n(e.strong,{children:"Hook config validation schema"})," refers to passing a validation schema into the form via the hook config, this is ideal for on the fly client side validation."]}),`
`,t(e.li,{children:[n(e.strong,{children:"Dispatched validation errors"})," refers to dispatching errors via the functions provided by the form hook, this is ideal for handling client side validation"]}),`
`]}),`
`,t(e.p,{children:["Regardless of which of these methods you use, validation errors will automatically display underneath the relevant components by matching the ",n(e.code,{children:"key"}),` attribute of the error to the bound property.
Here's a simple example of a validation error:`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`{
  key: 'email',
  message: 'Please enter a valid email address'
}
`})}),`
`,n(e.p,{children:'Validation errors will only display on bindable components that have registered themselves as "touched". This allows for validation to take place as a user progresses through a form if so desired, without messages appearing on fields that have not yet been interacted with.'}),`
`,n(e.h3,{id:"hook-config-validation-errors",children:"Hook config validation errors."}),`
`,n(e.p,{children:"The below example shows the same login form, but with validation errors being returned from an APIHooks processing hook, and passed into the form config. A standard pattern for handling server side validation."}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`const [
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
`,n(e.h3,{id:"schema-validation-errors",children:"Schema validation errors."}),`
`,n(e.p,{children:"The below example shows the same login form, but with validation being handled by a client side validation schema."}),`
`,t(e.p,{children:["The ",n(e.code,{children:"useForm"})," hook uses a type safe wrapper around the ",n(e.a,{href:"https://zod.dev",target:"_blank",rel:"nofollow noopener noreferrer",children:"zod"})," validation library."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`const [login] = useLoginEndpoint();

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
`,t(e.p,{children:["The ",n(e.code,{children:"validate"})," method exported by ",n(e.code,{children:"useForm"})," will dispatch client side validation errors to any fields that have failed the criteria. By default, the root ",n(e.code,{children:"validate"}),' function will set all inputs in the form as "touched" so that the form will show all errors when ',n(e.code,{children:"validate"}),' is called regardless of user interaction. This is usually the desired behaviour if validation is occurring on submit like in the above example, but may not be desirable for an "on the fly" approach to validation.']}),`
`,t(e.p,{children:['To disable the "touch all on root validate" behaviour and allow individual form controls to decide whether to show errors, send ',n(e.code,{children:"false"})," to the root validate function like so:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-TypeScript",children:`validate(false);
`})}),`
`,t(e.p,{children:[n(e.strong,{children:"NOTE:"})," Schema validation can also be executed against a single field by using ",n(e.code,{children:"formProp"})," like so:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`formProp('email').validate();
`})}),`
`,t(e.p,{children:["In a similar way to the root validation method, validating through ",n(e.code,{children:"formProp"}),' will set the targeted field control as "touched" so that the message will display immediately. This behaviour can be switched off by sending ',n(e.code,{children:"false"})," to the function, just like the root validation function."]}),`
`,n(e.h4,{id:"migrating-from-a-zod-schema-to-a-type-safe-validation-schema",children:"Migrating from a zod schema to a type safe validation schema"}),`
`,n(e.p,{children:"To a generated typescript client for the API, it's necessary for zod validation schemas to adhere to an existing type interface rather than creating a new one (which is the usual flow when working with zod.) To ensure proper type safety and intellisense, Armstrong forms uses a slightly different structure to a vanilla zod schema, they key differences are:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["The root object (and nested objects) do ",n(e.strong,{children:"not"})," need to be wrapped in a ",n(e.code,{children:"z.object"})," method."]}),`
`,t(e.li,{children:["Nested objects contain a ",n(e.code,{children:"schema"})," field for child key validators, and an optional ",n(e.code,{children:"opts"})," function for applying zod validators to the nested object itself."]}),`
`,t(e.li,{children:["Nested (and root) arrays contain an ",n(e.code,{children:"itemSchema"})," field for the validator to run against each object, and an optional ",n(e.code,{children:"opts"})," function for applying zod validators to the nested array itself."]}),`
`]}),`
`,n(e.p,{children:"See these two examples of a vanilla zod schema and it's equivalent type safe version:"}),`
`,n(e.p,{children:n(e.strong,{children:"Vanilla zod (not compatible with Armstrong forms)"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-javascript",children:`z.object({
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
`,n(e.p,{children:n(e.strong,{children:"Armstrong forms compatible version"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`{
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
`,n(e.p,{children:"Although slightly more verbose, the latter provides far more compatibility with TypeScript, which will provide extremely helpful compiler errors following API changes in the future."}),`
`,n(e.h3,{id:"dispatched-validation-errors",children:"Dispatched validation errors"}),`
`,n(e.p,{children:"The below example shows our login form again, but with a password confirmation input and some client side validation:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`const { formProp, formState } = useForm({
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
`,n(e.h2,{id:"child-forms",children:n("a",{name:"child-forms",children:"Child forms"})}),`
`,t(e.p,{children:["The ",n(e.code,{children:"useChildForm"})," hook can be used with a binding prop from a parent form. This allows a single form state to exist across multiple downstream components, let's look at a simple example:"]}),`
`,n(e.h3,{id:"without-a-child-form",children:"Without a child form"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`interface IUserAddress {
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
`,n(e.p,{children:"This example is fine and will work, but lets imagine we wanted to create a separate component for the user's address form snipped so that it could be reused elsewhere, this can be achieved with a child form:"}),`
`,n(e.h3,{id:"with-a-child-form",children:"With a child form"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`interface IUserAddress {
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
`})})]})}function l(o={}){const{wrapper:e}=Object.assign({},a(),o.components);return e?n(e,{...o,children:n(i,{...o})}):i(o)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const r={title:"Form/Form Hooks",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:l};const N=["__page"];export{N as __namedExportsOrder,c as __page,r as default};
