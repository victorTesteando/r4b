import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/collaborators')
  return(
    <h1>Escriba en la url /collaborators</h1>
  )
}
