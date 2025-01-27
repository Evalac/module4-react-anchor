import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  // це кастомний хук для оновлення із локалсторедж
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue; // треба тут викликати анонімну функцію щоб покращувати продуктивність, буде спрацьовувати тільки при першому рендері/ так бі спрацьовувала при кожній зміні
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  // console.log([state, setState]);

  return [state, setState];
};

function SignUpForm() {
  const [email, setEmail] = useLocalStorage('Email', '');
  const [password, setPassword] = useLocalStorage('Password', '');

  const onChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();

    const valueForm = {
      email: email,
      password: password,
    };
    console.log(valueForm);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={onSubmitForm}>
        <label>
          Пошта
          <input
            type="text"
            name="email"
            onChange={onChangeForm}
            value={email}
          />
        </label>
        <br />
        <label>
          Пароль
          <input
            type="text"
            name="password"
            onChange={onChangeForm}
            value={password}
          />
        </label>
        <br />
        <button type="submit">Зарееструватись</button>
      </form>
    </div>
  );
}

export { SignUpForm };
