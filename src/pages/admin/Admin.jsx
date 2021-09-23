import React from 'react'
import {useState} from 'react'
import './admin.css'

import app from '../../base'
import axios from "axios";
import {getStorage, ref, uploadBytes} from "firebase/storage";

function Admin() {
    const [inputValue, setInputValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [image, setImage] = useState('')


    // получаем значени value из инпута "имя товара"
    const nameTitleHandler = (event) => {
        const nameValue = event.target.value
        setInputValue(nameValue)
    }
    // получаем значени value из инпута "описание товара"
    const inputDescriptionHandler = (event) => {
        const descriptionValue = event.target.value
        setDescriptionValue(descriptionValue)
    }

    // импорт для firebase
    const storage =getStorage()
    const storageRef = ref(storage, 'images/' + image.name)

    const listRef =ref(storage, 'images/') // отсда загружаются картинки




    // полчаем файл картинки товара
    const imageHandler = (event) => {
        event.preventDefault()
        if(event.target.files[0]){
            setImage(event.target.files[0])
        }
    }

    // нажатие и откравка значние по кнопке button
    const submitHandler = async(event) => {
        event.preventDefault()

        // отправляем данные в firebase storage
        await uploadBytes(storageRef, image)
            .then((snapshot) => {
                console.log('done')
            })

        //отправляем данные в базу firebase database
        const formData = {
            inputValue,
            descriptionValue,
            date: new Date().toLocaleDateString()
        }

        // загружаем в базу данных
        await axios.post('https://kutec-bd-default-rtdb.firebaseio.com/base.json', formData)
            .then(response => {
                console.log('success')
            })
            .catch(error => console.log(error))
        // очизщаем значение инпутов
        setInputValue('')
        setDescriptionValue('')
    }



    return <>
        <div className="container bg">
            <form action="" className="d-flex" id="create">
                <input
                    className="input-field"
                    type="text"
                    name="title"
                    placeholder="Название статьи"
                    onChange={nameTitleHandler}
                    value={inputValue}

                />
                <textarea
                    name="fullText"
                    placeholder="Описание статьи"
                    onChange={inputDescriptionHandler}
                    value={descriptionValue}
                />
                <div className="admin_buttons">
                    <input
                        className="input-field"
                        type="file"
                        name="title"
                        placeholder="Картинка статьи"
                        onChange={imageHandler}
                    />

                    <button
                        type="submit"
                        onClick={submitHandler}
                    >Создать</button>
                </div>

            </form>
        </div>
        </>
}

export default Admin