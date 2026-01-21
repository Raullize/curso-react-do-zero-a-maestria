import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
    // controlled inputs
    // gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')


const handleName = (e) => {
    setName(e.target.value)
}

// console.log(name, email, bio, role)

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o formulário!')
    console.log(name, email, bio, role)

    // validação
    // envio

    // limpar formulário
    setName('')
    setEmail('')
    setBio('')
    setRole('')
}

return (
    <div>
        {/* envio de form */}
        {/* criação do form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Digite seu nome'
                    onChange={handleName}
                    value={name}
                />
            </div>
            {/* label envolvendo input */}
            <label htmlFor="email">
                <span>E-mail</span>
                {/* simplificação de manipulação de state */}
                <input
                    type="email"
                    name="email"
                    placeholder='Digite seu e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            {/* textarea */}
            <label htmlFor="bio">
                <span>Biografia:</span>
                <textarea
                    name="bio"
                    placeholder="Digite sua biografia"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                ></textarea>
            </label>
            {/* select */}
            <label htmlFor="role">
                <span>Função no sistema:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input
                type="submit"
                value="Enviar"
            />
        </form>
    </div>
)
}

export default MyForm