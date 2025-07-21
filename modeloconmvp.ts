// Modelo
class Citamvp {
  constructor(public paciente: string, public fecha: Date) {}
  toString() {
    return `${this.paciente} - ${this.fecha.toDateString()}`;
  }
}

// Vista (interfaz)
interface IAgendaView {
  mostrarCitas(citas: Citamvp[]): void;
  obtenerDatosCita(): { paciente: string; fecha: Date };
  onAgregarCita(handler: () => void): void;
}

// Presentador
class AgendaPresenter {
  private citas: Citamvp[] = [];
  constructor(private view: IAgendaView) {
    this.view.onAgregarCita(() => this.agregarCita());
  }

  agregarCita() {
    const datos = this.view.obtenerDatosCita();
    const nueva = new Cita(datos.paciente, datos.fecha);
    this.citas.push(nueva);
    this.view.mostrarCitas(this.citas);
  }
}

// Implementación simple de la Vista (por ejemplo en consola)
class AgendaConsoleView implements IAgendaView {
  private paciente: string = "";
  private fecha: Date = new Date();

  mostrarCitas(citas: Citamvp[]) {
    console.clear();
    console.log("Lista de citas:");
    citas.forEach(c => console.log(c.toString()));
  }

  obtenerDatosCita() {
    return { paciente: this.paciente, fecha: this.fecha };
  }

  onAgregarCita(handler: () => void) {
    // Simular evento, llamar al handler
    handler();
  }

  // Métodos para simular entrada de datos
  setDatos(paciente: string, fecha: Date) {
    this.paciente = paciente;
    this.fecha = fecha;
  }
}

