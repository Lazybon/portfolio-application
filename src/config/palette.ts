
export const backgroundPrimary = '#17181f';

export const backgroundSecondary = '#21212b';

export const mainColor = '';

export const textPrimary = '#dededf';

export const textSecondary = 'gray';

/**
 * Функция вернет рандомный пастельный цвет
 */
export const getRandomColor = (): string => `hsla(${Math.random() * 360}, 70%, 80%, 0.8)`