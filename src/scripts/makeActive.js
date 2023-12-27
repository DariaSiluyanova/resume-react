/**
 * функция возвращает класс active для нажатой кнопки
 * @param {Number} index
 * @param state
 * @returns { Boolean }
 */
export function makeActive(index, state) {
  return state.content[index] === state.activeBtn;
}
