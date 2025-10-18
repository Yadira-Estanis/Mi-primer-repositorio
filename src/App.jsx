import NavbarHibrida from "./components/NavbarHibrida"
import CardHibrida from "./components/CardHibrida"

export default function App() {
  return (
    <div className="tw-min-h-screen tw-bg-white tw-text-gray-800">
      <header className="tw-py-4">
        <div className="tw-max-w-6xl tw-mx-auto tw-px-4">
          <h1 className="tw-text-3xl tw-font-bold tw-text-indigo-700">
            Híbridos: Bootstrap + Tailwind (tw-)
          </h1>
          <p className="tw-text-gray-600">
            Componentes de BS con utilidades precisas de Tailwind.
          </p>
        </div>
      </header>

      <NavbarHibrida />

      <main className="tw-max-w-6xl tw-mx-auto tw-px-4 tw-py-8">
        <CardHibrida />
      </main>
    </div>
  )
}