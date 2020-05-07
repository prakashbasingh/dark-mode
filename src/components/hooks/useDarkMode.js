import {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'


const useDarkMode = (key, initialValue) => {
    const[value, setValue] = useLocalStorage(key, initialValue)

    const body = document.querySelector('body')

    useEffect(() => {
        if(value === true){
            body.classList.add('dark-mode')
        } else if (value === false){
            body.classList.remove('dark-mode')
        }
    })

    return[value, setValue]
}
export default useDarkMode