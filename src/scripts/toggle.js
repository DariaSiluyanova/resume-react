/**
 * функция добавляет кнопку по клику в свойство activeBtn объекта btnState
 */
export function toggleActive(index, changeState, state) {
    changeState({ ...state, activeBtn: state.content[index] });
}
