import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import style from './style.module.scss'
import array from '../../Storage/Storage.json'


function HomePage() {
        
    const result = array.map(elem => <Link to={`/vacancy/${elem.id}`}><div className={style.item}>
        <h2>{elem.header}</h2>
        <div className={style.flex}>
            <p>{elem.salary}</p>
            <p>{elem.workday}</p>
        </div>
        <div className={style.flex}>
            <div className={style.img}></div>
            <p>{elem.city}</p>
        </div>
    </div></Link>)

    return (
        <div>

            <Input icon={<IconSearch />} placeholder="Введите название вакансии Поиск"
            />
            <div>{result}</div>
        </div>


    )
}

export default HomePage;