import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                
              <img src="/logo-bg-icon.png" alt="Logo" className="w-8 h-8 object-contain" />
              </div>

              <span className="font-bold text-xl text-white">Primera Intervención</span>
            </Link>
            <p className="text-sm">
              Haciendo que la gesti&#xF3;n de tareas sea m&#xE1;s f&#xE1;cil y eficiente para los equipos en todo el mundo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Saber m&#xE1;s</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white">Sobre nosotros</Link></li>
              <li><Link href="#careers" className="hover:text-white">Carreras</Link></li>
              <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="#legal" className="hover:text-white">Legal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><Link href="#help" className="hover:text-white">Centro de ayuda</Link></li>
              <li><Link href="#guides" className="hover:text-white">Gu&#xED;as</Link></li>
              
              <li><Link href="#status" className="hover:text-white">Estado</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4"> Suscr&#xED;bete a nuestro bolet&#xED;n</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ingresa tu correo electr nico"
                className="bg-gray-800 border-gray-700"
              />
              <Button>Suscr&#xED;bete</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p> 2025 Primera intervencion. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <Link href="#privacy" className="hover:text-white">Pol&#xED;tica de privacidad</Link>
              <Link href="#terms" className="hover:text-white">T&#xE9;rminos de servicio</Link>
              <Link href="#cookies" className="hover:text-white">Pol&#xED;tica de cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
