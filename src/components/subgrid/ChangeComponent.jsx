import { useState} from 'preact/hooks'

export function Counter(){
  const [component, setComponent] = useState("Normal")

  return(
    <>
      <span class="text-yellow-300 text-xl mr-4">{component}</span>
      <button class="border px-4 py-2 text-xl" onClick={() => setComponent(!component)} type="button">Normal</button>
      <button class="border px-4 py-2 text-xl" onClick={() => setComponent(counter => counter -1)} type="button">Tailwind</button>
    </>
  )
}