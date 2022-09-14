const moduleBase = 8;
const defaultBorderModule = 4;
/**
 * Функция возвращает css значение в пикселях в зависимости от указанного модуля
 * @param level
 */
export const getModule = (level: number = 1): number => moduleBase * level;

/**
 * Функция возвращает css значение для бордера в пикселях в зависимости от указанного модуля
 * @param level
 */
export const getBorderRadius = (level: number = 1): number => defaultBorderModule * level;