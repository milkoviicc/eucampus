import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'

const GeneralistasAD5 = () => {
  return (
    <div className="mt-[60px]">
      <Breadcrumb />
      <div className="py-20 max-w-[1300px] mx-auto">
        <div className="text-center font-semibold">
          <h3 className="text-2xl">¿No es la opción adecuada para ti?</h3>
          <h1 className="text-3xl">Explora nuestro Pack Generalistas AD5</h1>
        </div>
        <div className="flex pt-8">
          <div className="flex flex-col gap-1 w-full">
            <p className="text-[#7A7A7A] text-sm">
              Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas
              borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de
              sucedernos bien las cosas.
            </p>
            <h4 className="text-xl font-semibold mt-4">Cursos Incluidos</h4>
            <ul className="text-accent text-[17px] space-y-2 mt-2">
              <li className="flex gap-2">
                <svg
                  aria-hidden="true"
                  className="w-[14]"
                  fill={'#224058'}
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                </svg>
                Módulo de Conocimiento UE
              </li>
              <li className="flex gap-2">
                <svg
                  aria-hidden="true"
                  className="w-[14]"
                  fill={'#224058'}
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                </svg>
                Módulo de Razonamiento
              </li>
              <li className="flex gap-2">
                <svg
                  aria-hidden="true"
                  className="w-[14]"
                  fill={'#224058'}
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                </svg>
                Módulo de Competencias Digitales
              </li>
              <li className="flex gap-2">
                <svg
                  aria-hidden="true"
                  className="w-[14]"
                  fill={'#224058'}
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                </svg>
                Módulo de Prueba Escrita
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 bg-primary px-[24px] py-[10px] w-fit text-white text-[15px] font-semibold rounded-[3px]"
            >
              Infórmate
            </a>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="https://marianos98.sg-host.com/wp-content/uploads/2025/05/pack-1.jpg"
              width={600}
              height={500}
              alt="Random image"
              className="rounded-[5px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralistasAD5
