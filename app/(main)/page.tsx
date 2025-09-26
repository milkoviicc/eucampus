import LandingWrapper from '../components/LandingWrapper'

/*
interface Course {
  courseTitle: string
  courseType: string
  courseDescription: string
  courseLink: string
  courseTypeLink: string
}
*/

export default function Home() {
  /* call api to get courses and pass them in landingwrapper for a better and more dynamic approach

  const [courses, setCourses] = useState<Course[]>([]);
  const getCourses = async() => {
    const res = await axios.get('/get-courses?limit=4');

    if(res.status === 200) {
      setCourses = res.data;
    }
  }

  */

  const courses = [
    {
      courseTitle: 'Competencias Digitales (Ultimate Pack 300)',
      courseType: 'Entrenamiento',
      courseDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias Digitales. Simulacros cronometrados, soluciones explicadas y dificultad progresiva para afinar...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Competencias Digitales (Advanced Pack 150)',
      courseType: 'Entrenamiento',
      courseDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias Digitales. Simulacros cronometrados, soluciones explicadas y dificultad progresiva para afinar...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Competencias Digitales (Starter Pack 50)',
      courseType: 'Entrenamiento',
      courseDescription:
        'Entrenamiento 100% práctico con preguntas tipo test que replican la prueba EPSO de Competencias Digitales. Simulacros cronometrados, soluciones explicadas y dificultad progresiva para afinar...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Prueba CAST: Módulo de Razonamiento',
      courseType: 'Prueba CAST',
      courseDescription:
        'La fase inicial del CAST consiste en una prueba de razonamiento de carácter eliminatorio. Su finalidad es verificar competencias lógicas básicas para el puesto. Únicamente las personas que la...',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Prueba Escrita',
      courseType: 'Generalistas AD5',
      courseDescription:
        'La prueba escrita de EPSO evalúa tu capacidad para estructurar ideas de manera clara, ordenada y profesional en temas relacionados con la Unión Europea.',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Competencias Digitales',
      courseType: 'Generalistas AD5',
      courseDescription:
        'Evalúa tu capacidad para manejar de forma segura y eficaz la información y las herramientas digitales habituales en el entorno profesional europeo.',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Razonamiento',
      courseType: 'Generalistas AD5',
      courseDescription:
        'Esta es la primera prueba que te vas a encontrar en el proceso de selección, y una de las más importantes: si no la superas, el resto del examen no se corrige.',
      courseLink: '#',
      courseTypeLink: '#',
    },
    {
      courseTitle: 'Generalistas AD5: Módulo de Conocimiento UE',
      courseType: 'Generalistas AD5',
      courseDescription:
        'Esta prueba evalúa tu capacidad para entender su funcionamiento, su historia y sus principales áreas de acción. Y no basta con saber “quién es quién”: necesitas comprender qué hace cada...',
      courseLink: '#',
      courseTypeLink: '#',
    },
  ]

  return (
    <div>
      <LandingWrapper courses={courses} />
    </div>
  )
}
