import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./styles.css";

interface ModalContentProps {
  className?: string;
  headingClass?: string;
  contentClass?: string;
  footerClass?: string;
  headingText?: string;
  children: ReactNode;
  footerContent?: ReactNode;
}
interface ModalProps extends ModalContentProps {
  show: boolean;
}

const ModalContent = (props: ModalContentProps) => {
  const {
    className,
    headingClass,
    contentClass,
    footerClass,
    headingText,
    children,
    footerContent,
  } = props;
  let content = (
    <div className={`modal-container ${className || ""}`}>
      <header className={`${headingClass || ""}`}>
        <h4>{headingText || ""}</h4>
      </header>
      <main className={`${contentClass || ""}`}>{children}</main>
      <footer className={`${footerClass || ""}`}>
        {footerContent || null}
      </footer>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal") as HTMLElement
  );
};

const Modal = (props: ModalProps) => {
  const { show, children } = props;
  return (
    <Fragment>
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="alert"
      >
        <ModalContent {...props}>{children}</ModalContent>
      </CSSTransition>
    </Fragment>
  );
};
export default Modal;
