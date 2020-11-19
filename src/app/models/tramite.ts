export class Tramite {
    id: String;
    dataTramite: String;
    origem: String;
    destino: String;
    usuario: String;
    idBeneficio: number;

    constructor(
        id: String, 
        dataTramite: String,
        origem: String,
        destino: String,
        usuario: String,
        idBeneficio: number
    ) {
        this.id = id;
        this.dataTramite = dataTramite;

        this.origem = '';
        switch (origem) {
            case '1':
              this.origem = 'Setorial Servidor';
              break;
            case '2':
              this.origem = 'Cprev Gestor';
              break;
            case '3':
              this.origem = 'Secretário Seplag';
              break;
            case '4':
              this.origem = 'PGE - Análise';
              break;
            case '5':
              this.origem = 'TCE - Gestor';
              break;
            default:
              break;
          }

        this.destino = '';
        switch (destino) {
        case '1':
            this.destino = 'Setorial Servidor';
            break;
        case '2':
            this.destino = 'Cprev Gestor';
            break;
        case '3':
            this.destino = 'Secretário Seplag';
            break;
        case '4':
            this.destino = 'PGE - Análise';
            break;
        case '5':
            this.destino = 'TCE - Gestor';
            break;
        default:
            break;
        }

        this.usuario = usuario;
        this.idBeneficio = idBeneficio;
    }
}
