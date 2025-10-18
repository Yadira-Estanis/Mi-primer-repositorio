export default function CardHibrida() {
  return (
    <div className="card tw-shadow-lg hover:tw-shadow-xl tw-transition-shadow">
      <div className="card-body tw-p-0">
        <div className="tw-p-6 tw-space-y-4">
          <h5 className="card-title tw-text-xl tw-font-bold tw-text-blue-600">
            Mi Card
          </h5>

          <p className="card-text tw-text-gray-600 hover:tw-text-gray-800">
            Este es un ejemplo de cómo combinar Bootstrap y Tailwind
            para crear componentes personalizados y únicos.
          </p>

          <button
            type="button"
            className="btn btn-primary hover:tw-bg-blue-700 tw-transform hover:tw-scale-105 tw-transition"
          >
            Acción
          </button>
        </div>
      </div>
    </div>
  )
}