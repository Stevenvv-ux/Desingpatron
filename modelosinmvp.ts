class Cita {
  constructor(public paciente: string, public fecha: Date) {}
  toString() {
    return `${this.paciente} - ${this.fecha.toDateString()}`;
  }
}

class Agenda {
  citas: Cita[] = [];

  agregarCita(paciente: string, fecha: Date) {
    const nueva = new Cita(paciente, fecha);
    this.citas.push(nueva);
    this.mostrarCitas();
  }

  mostrarCitas() {
    console.clear();
    console.log("Lista de citas:");
    this.citas.forEach(c => console.log(c.toString()));
  }
}

// Simulando interacción
const agenda = new Agenda();
agenda.agregarCita("Juan Pérez", new Date("2025-07-21"));
agenda.agregarCita("Ana López", new Date("2025-07-22"));
