import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import array from '../../Storage/Storage.json'
import style from './style.module.scss'

function VacancyPage() {
    const { id } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        const result = array.filter(elem => elem.id == id)
        console.log(result);
        setData(result[0])
    }, [])


    return (
        <div>
            <div className={style.vacancy}>
                <h1>{data.header}</h1>
                <div className={style.info}>
                    <h2>{data.salary}</h2>
                    <p>{data.workday}</p>
                </div>
                <div className={style.city}>
                    <div className={style.img}></div>
                    <p>{data.city}</p>
                </div>
            </div>
            <div className={style.description}>
                <div className={style.responsibilities}>
                    <h2>Обязанности:</h2>
                   <ul> {
                        data.responsibilities?.map(elem => <p>{elem}</p>)
                    }</ul>
                </div>
                <div className={style.requirements}>
                    <h2>Требования:</h2>
                    <ul>{
                        data.requirements?.map(elem => <p>{elem}</p>)
                    }</ul>
                </div>
                <div className={style.conditions}>
                    <h2>Условия:</h2>
                    <ul> {
                        data.conditions?.map(elem => <p>{elem}</p>)
                    }</ul>
                </div>


            </div>


        </div>
    )
}

export default VacancyPage;