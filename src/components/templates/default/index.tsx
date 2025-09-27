export const DefaultTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="md:max-w-screen-md lg:max-w-screen-xl px-8 md:px-12 lg:px-20 mx-auto grid gap-10">{children}</main>
  )
}
