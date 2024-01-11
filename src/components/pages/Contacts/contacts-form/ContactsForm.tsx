import { FC } from "react";
import "./ContactsForm.css";
import { IContactsData } from "../contacts.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

const ContactsForm: FC = () => {
  const [contactsData, setContactsData] = useState<IContactsData[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IContactsData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<IContactsData> = (data) => {
    setContactsData((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <form className="contacts-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Имя"
          className="contacts-form__input"
          {...register("name", {
            required: "Имя обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Имя слишком короткое, обратитесь в МФЦ",
            },
          })}
        />
        {errors?.name && (
          <div className="contacts-form__error">{errors.name.message}</div>
        )}

        <input
          type="text"
          className="contacts-form__input"
          placeholder="Электронная почта"
          {...register("email", {
            required: "Почта обязательна к заполнению",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Введите правильный адрес электронной почты",
            },
          })}
        />
        {errors?.email && (
          <div className="contacts-form__error">{errors.email.message}</div>
        )}

        <input
          type="text"
          className="contacts-form__input"
          placeholder="Номер телефона"
          {...register("phoneNumber", {
            required: "Номер телефона обязателен к заполнению",
            pattern: {
              value: /(?:\+|\d)[\d\-\(\) ]{9,}\d/g,
              message: "Введите правильный номер телефона",
            },
          })}
        />
        {errors?.phoneNumber && (
          <div className="contacts-form__error">
            {errors.phoneNumber.message}
          </div>
        )}
        <button
          type="submit"
          className="contacts-form__submit"
          disabled={!isValid}
        >
          Отправить
        </button>
      </form>
      {contactsData.map((contact) => (
        <p className="contacts-info">
          {contact.name} ({contact.email}), номер: {contact.phoneNumber}
        </p>
      ))}
    </>
  );
};

export default ContactsForm;
