**For Armstrong devs only**

It's a current limitation with React and Typescript that if you're using a forward ref, you can't add a generic easily because of [something something typescript magic](https://github.com/Microsoft/TypeScript/issues/9366).

The only tidy way around this is unfortunately by doing a cast. Hopefully TS should be clever enough to pick up if your types change, and a dev editing any component that does this should be super careful.

Basically you gotta do this

```tsx
interface IMyComponentProps<T> {
    myThing: T
}

interface IRef {
    ...bits
}

export const MyComponent = React.forwardRef(<T extends any>({ myThing }: IMyComponentProps<T>, ref) => {
    // component inners
}) as (<T extends any>(
  props: React.PropsWithChildren<IMyComponentProps<T>> & React.RefAttributes<HTMLSelectElement>
) => ReturnType<React.FC>) & { defaultProps?: Partial<IMyComponentProps<any>> };
```

You unfortunately have to recreate the type from almost scratch to ensure that the generic gets exposed to the higher order function that is the component returned by `React.forwardRef` but you should use the React utils like `React.PropsWithChildren` etc.

Your T must extend _something_, even if it's just any, so that the JSX compiler knows it's not a JSX tag.
