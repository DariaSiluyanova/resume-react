/**
 * функция добавляет кнопку по клику в свойство activeBtn объекта btnState
 * @param {Number} index
 * @param {Object} state
 * @param {Object} changeState
 */
export function toggleActive(index, changeState, state) {
    changeState({ ...state, activeBtn: state.content[index] });
}
