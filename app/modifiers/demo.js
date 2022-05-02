import { modifier } from 'ember-modifier';

export default modifier(
  (el, _, { extra }) => {
    const handler = ({ target }) => alert(`${target.innerText} ${extra}`);
    el.addEventListener('click', handler);

    return () => el.removeEventListener('click', handler);
  },
  { eager: false }
);
