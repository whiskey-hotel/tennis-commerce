import Header from './header';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
