import { LocaleObject, setLocale } from 'yup';

// Базовые статичные кейсы валидации которые можно описать один раз и использовать постоянно
// По факту должны лежать в файле configs.ts, но setLocale почему-то не работает если импортировать файл
const BASE_VALIDATION_CASES: LocaleObject = {
  mixed: {
    required: 'Это поле обязательно для заполнения',
    oneOf: 'validation.oneOf',
  },
  string: {
    email: 'Введите корректный email',
    min: ({ min }) => `Минимальная длинна поля ${min} символов`,
    max: ({ max }) => `Максимальная длинна поля ${max} символов`,
  },
  number: {
    lessThan: ({ less }) => `Значение не может быть меньше чем ${less}`,
    moreThan: ({ more }) => `Значение не может быть больше чем ${more}`,
  },
};

// При инициализации setLocale добавит BASE_VALIDATION_CASES как базовые обработки валидации
export const ValidationService = {
  init: () => setLocale(BASE_VALIDATION_CASES),
};
