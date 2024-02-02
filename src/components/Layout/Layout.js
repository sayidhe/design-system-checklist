import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import Header from "../Header";
import Footer from "../Footer";
import s from "./Layout.module.css";

const Layout = ({ t, children }) => {
  const { pathname } = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Header t={t} />
      <TransitionGroup>
        {mounted && (
          <CSSTransition
            key={pathname}
            timeout={{ enter: 600, exit: 0 }}
            classNames="fade"
          >
            <div className={s.container}>
              <div className={s.content}>{children}</div>
              <Footer t={t} />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default Layout;
