
import { NuvoImporter } from "nuvo-react"

const data = Array.from({ length: 200 }, (_, i) => {
  return { name: `name${i}` }
})


const developerMode = import.meta.env.VITE_NUVO_IS_DEV_LICENCE_KEY === "true"
function App() {
  return <NuvoImporter
    licenseKey={import.meta.env.VITE_NUVO_LICENCE_KEY}
    identifier="limit_example"
    settings={{
      developerMode,
      columns: [
        {
          label: 'name',
          key: 'name'
        }
      ],
      preloadData: data,
      buttonMode: "edit"
    }}
    onResults={(result, errors, complete, logs) => {
      alert(`Result is of length ${result.length}`)
      complete();
    }}
  />
}

export default App
