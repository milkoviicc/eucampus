import LandingWrapper from './components/LandingWrapper'
export default function Home() {
  // call api to fetch courses and pass them into LandingWrapper.tsx as a prop
  return (
    <div>
      <LandingWrapper />
    </div>
  )
}
