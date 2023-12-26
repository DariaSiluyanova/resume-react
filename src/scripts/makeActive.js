/**
 * функция возвращает класс active для нажатой кнопки
 * @param {Number} index
 * @returns className
 */
export function makeActive(index, state) {
  return state.content[index] === state.activeBtn ? "active" : "";
}
