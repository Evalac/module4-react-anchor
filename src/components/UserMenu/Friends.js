import { useState, useMemo } from 'react';

const initialFriends = [
  'Олександр Іваненко',
  'Марія Петренко',
  'Дмитро Савченко',
  'Ольга Коваленко',
  'Андрій Шевченко',
  'Наталія Бондаренко',
  'Володимир Гриценко',
  'Тетяна Лисенко',
  'Ігор Мельник',
  'Юлія Дорошенко',
  'Богдан Кравченко',
  'Анастасія Тимошенко',
  'Сергій Поліщук',
  'Вікторія Романенко',
  'Євген Зайченко',
  'Катерина Ткаченко',
  'Максим Овчаренко',
  'Анна Сидоренко',
  'Роман Марченко',
  'Ірина Козловська',
  'Василь Степаненко',
  'Оксана Діденко',
  'Павло Корнієнко',
  'Світлана Мартинюк',
  'Михайло Левченко',
  'Алла Гончаренко',
  'Юрій Власенко',
  'Людмила Шаповал',
  'Тарас Костенко',
  'Валентина Руденко',
  'Арсеній Богданов',
  'Вероніка Литвин',
  'Олег Дубовик',
  'Марина Федоренко',
  'Ілля Нікітін',
  'Дарина Черненко',
  'Геннадій Ющенко',
  'Аліна Кузьменко',
  'Степан Пономаренко',
  'Єлизавета Гаврилюк',
  'Вадим Соловйов',
  'Зоряна Левицька',
  'Кирило Рябченко',
  'Софія Герасимчук',
  'Артур Коломієць',
  'Марта Чорноморець',
  'Денис Паламарчук',
  'Олеся Міщенко',
  'Григорій Мороз',
  'Ельвіра Січкар',
];

function FriendList(params) {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = useMemo(() => {
    return friends.filter(friend =>
      friend.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, friends]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setCount(prevState => prevState + 1)}
      >
        {count}
      </button>

      <label htmlFor="name">
        Пошук друга:
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => setFilter(e.target.value)}
          value={filter}
        />
      </label>

      <ul>
        {visibleFriends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export { FriendList };
