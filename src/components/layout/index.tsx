import Nav from "../nav";

type Props = {
  children?: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <>
      <Nav></Nav>
      {children}
    </>
  );
}

export default Layout;
