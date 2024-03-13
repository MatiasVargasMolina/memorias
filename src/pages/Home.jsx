import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import img1 from "../assets/bñ.jpeg"
import img2 from "../assets/bñoo.jpeg"
import imgCicatricesDeCiudad from "../assets/cicatrizDeCiudad.jpg"
import imgSitios from "../assets/sitios.jpeg"
import img4 from "../assets/4.jpg"
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      // Aquí puedes especificar la ruta a la que quieres dirigir
      navigate('/cicatrizDeUnaCiudad');
    };
  
    return (
        <>      <Navbar></Navbar><section className="bg-white dark:bg-gray-900">
        <div className="py-6 px-2 mx-auto max-w-screen-xl lg:py-12 lg:px-4">
          <div className="mx-auto max-w-screen-md text-center mb-6 lg:mb-8">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Memoria en su sitio</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">El olvido esta lleno de memoria.</p>
          </div>
          <div className="grid grid-cols-1 pt-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-between p-2 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-2 text-xl font-semibold">Cicatriz de ciudad</h3>
              <img src={imgCicatricesDeCiudad} className='rounded-md mb-2 h-50' alt="" />
              <button type="button" onClick={handleButtonClick} className="text-white bg-indigo-800 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver Más
              </button>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>
            <div className="flex flex-col p-2 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-2 text-xl font-semibold">Sitios de memoria en Chile</h3>
              <img src={imgSitios} className='rounded-md mb-2 h-50' alt="" />
              <button type="button" className="text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver Más
              </button>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>
            <div className="flex flex-col p-2 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-2 text-xl font-semibold">Memoria al otro lado del río</h3>
              <img src={img1} className='rounded-md mb-2 h-50' alt="" />
              <button type="button" className="text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ver Más
              </button>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>
            <div className="flex flex-col p-2 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-2 text-xl font-semibold">50 veces hoy</h3>
              <img src={img4} className='rounded-md mb-2 h-50' alt="" />
              <button type="button" className="text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver Más
              </button>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>
          </div>
        </div>
      </section></>
    )
}

export default Home