import { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
