import { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};
const Form = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;
    setFormData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
    name.current!.value = "";
    email.current!.value = "";
    password.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>
      <section>
        <h1>Name: {formData.name}</h1>
        <h1>Email: {formData.email}</h1>
        <h1>Password: {formData.password}</h1>
      </section>
    </form>
  );
};

export default Form;
