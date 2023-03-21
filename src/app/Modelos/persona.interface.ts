
export interface PersonaIn {
  Persona: Persona;
  token:   string;
  msg:     string;
}

export interface Persona {
  id:                                    number;
  curp:                                  string;
  rfc:                                   string;
  nss:                                   string;
  nombre:                                string;
  apellido_paterno:                      string;
  apellido_materno:                      string;
  fecha_nacimiento:                      Date;
  email:                                 string;
  genero:                                string;
  estado_civil:                          string;
  tipo_sangre:                           string;
  status:                                number;
  requiere_actualizar_domicilio:         number;
  requiere_actualizar_bachillerato:      number;
  requiere_actualizar_contacto:          number;
  requiere_actualizar_contacto_personal: number;
  rh_actualizacion:                      number;
}
