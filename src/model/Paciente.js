class Paciente {

    constructor({ nome, sangue, hospital, id }) {
        this.nome = nome
        this.sangue = sangue
        this.hospital = hospital
        this.id = id
    }

    get dadosCompletos() {
        return `Nome: ${this.nome} - Sangue: ${this.sangue} - Hospital: ${this.hospital}`
    }
}

export default Paciente;