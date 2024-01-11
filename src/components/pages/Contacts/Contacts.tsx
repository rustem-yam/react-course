import { FC } from "react";
import ContactsForm from "./contacts-form/ContactsForm";

const Contacts: FC = () => {
  return (
    <h1>
      <a href="https://github.com/rustem-yam">Мой гитхаб</a>
      <ContactsForm />
    </h1>
  );
};

export default Contacts;
