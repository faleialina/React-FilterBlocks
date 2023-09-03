import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './style.module.scss'


function HomePage() {
    const array = [{ header: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', city: 'Новый Уренгой', workday: 'Полный рабочий день' },
    { header: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', city: 'Москва', workday: 'Полный рабочий день' },
    { header: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', city: 'Самара', workday: 'Сменный график работы' },
    { header: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', city: 'Тюмень', workday: 'Полный рабочий день' }];
    const result = array.map(elem => <div className={style.item}>
        <h2>{elem.header}</h2>
        <div className={style.flex}>
            <p>{elem.salary}</p>
            <p>{elem.workday}</p>
        </div>
        <div className={style.flex}>
            <div className={style.img}></div>
            <p>{elem.city}</p>
        </div>
    </div>)

    return (
        <div>

            <Input icon={<IconSearch />} placeholder="Введите название вакансии Поиск"
            />
            <div>{result}</div>
        </div>


    )
}

export default HomePage;