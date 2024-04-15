export const myPortableTextComponents = {
  // ...,
  marks: {
    textColor: ({ children, value }: any) => (
      <span style={{ color: value.value }}>{children}</span>
    ),
  },
};
