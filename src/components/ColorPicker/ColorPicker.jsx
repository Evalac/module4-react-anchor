import css from './ColorPicker.module.css';

import { useState } from 'react';

function ColorPicker({ options }) {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  const { label } = options[activeOptionIndex];

  const activeColorIndex = index => {
    return index === activeOptionIndex
      ? css.ColorPicker__options
      : css.ColorPicker__option;
  };

  return (
    <div className={css.ColorPicker}>
      <h2 className={css.ColorPicker__title}>ColorPicker</h2>
      <p>Колір: {label}</p>
      <div className={css.ColorPicker__container}>
        {options.map(({ label, color }, index) => (
          <button
            type="button"
            key={label}
            className={activeColorIndex(index)}
            style={{ backgroundColor: color }}
            onClick={() => {
              setActiveOptionIndex(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export { ColorPicker };

//       activeColor(index) {
//     const optionClasses = [css.ColorPicker__option];

//     if (this.state.activeOptionIdx === index) {
//       optionClasses.push(css.ColorPicker__option__active);
//     }
//     return optionClasses.join(' ');
//   }
