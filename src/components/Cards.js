import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import imag1 from "../images/img-9.jpg";
import imag2 from "../images/img-2.jpg";
import imag3 from "../images/img-3.jpg";
import imag4 from "../images/img-4.jpg";
import imag8 from "../images/img-8.jpg";

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src={imag1}
                        text="Explora la cataratas ocultas en lo profundo de la Selva del Amazonas"
                        label="Aventura"
                        path="/services"
                    />
                    <CardItem
                        src={imag2}
                        text="Viaja a través de las Islas de Bali en un crucer privado"
                        label="Lujo"
                        path="/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src={imag3}
                        text="Navega en barco en el Oceano Atlántico por aguas inexploradas"
                        label="Misterio"
                        path="/services"
                    />
                    <CardItem
                        src={imag4}
                        text="Experimenta jugar al fútbol en una isla en medio del mar de Tunez"
                        label="Aventura"
                        path="/services"
                    />
                    <CardItem
                        src={imag8}
                        text="Monta en camello a través del Desierto del Sahara en una ruta guiada"
                        label="Adrenalina"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards