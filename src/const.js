import { phoneFormat } from '@/js/utils/numbers.format';

export const BASE_URL = 'https://alexsab-ru.github.io/astro-json/'; // Адрес для JSON
export const SITE_URL = 'jac-samara.ru'; // URL сайта по умолчанию
export const SITE_NAME = 'JAC Центр Самара'; // Название сайта по умолчанию
export const LEGAL_ENTITY = 'ООО «КИА Центр Самара»'; // Юр лицо
export const LEGAL_INN = '6311098600'; // ИНН
export const LEGAL_CITY = 'г. Самара'; // Город
export const LEGAL_CITY_WHERE = 'Самаре'; // где? в Городе
export const SITE_DESCR = 'Официальный дилер JAC Motors (Джак Моторс)'; // Описание сайта по умолчанию
export const TELEGRAM = ''; // Имя пользователя в Телегам
export const PHONE = '8 (846) 977-77-07'; // Телефон по умолчанию

export const BRAND = 'JAC';

export const LINKS_MENU = [
	// {url: 'cars/', name: 'Авто в наличии'},
	// {url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	{url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];

export const HEADER_TOP_LINE = 'ООО "Киа Центр Самара" расширяет горизонты: теперь и дилер JAC Motors (Джак Моторс)';

export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline" target="_blank">обработку персональных данных</a>';
export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона <a class="whitespace-nowrap" href="tel:' + phoneFormat(PHONE) + '">' + PHONE + '</a>. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
