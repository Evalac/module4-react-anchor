// import css from './App.module.css';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { Clock } from './Clock/Clock';
import { PokemonMainApp } from './PokeApi/PokemonMainApp';
// import { SkipEffectFirstRender } from './SkipEffectFirstRender/SkipEffectFirstRender';
import { CounterHooks } from './CoutnerHooks/CoutnerHooks';
import { FriendList } from './UserMenu/Friends';

export const App = () => {
  const colorData = [
    { label: 'red', color: '#f44336' },
    { label: 'blue', color: '#2196f3' },
    { label: 'green', color: '#4caf50' },
    { label: 'yellow', color: '#ffeb3b' },
    { label: 'orange', color: '#ff9800' },
    { label: 'purple', color: '#9c27b0' },
    { label: 'pink', color: '#e91e63' },
    { label: 'teal', color: '#009688' },
  ];
  return (
    <div className="">
      <SignUpForm />
      <div style={{ marginTop: 30 }}>
        <ColorPicker options={colorData} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Counter />
      </div>
      <div style={{ marginTop: 30 }}>
        <Clock />
      </div>
      {/* <div style={{ marginTop: 30 }}>
        <SkipEffectFirstRender />
      </div> */}
      <div style={{ marginTop: 30 }}>
        <PokemonMainApp />
      </div>

      <div style={{ marginTop: 30 }}>
        <CounterHooks />
      </div>

      <div style={{ marginTop: 30 }}>
        <FriendList />
      </div>
    </div>
  );
};
