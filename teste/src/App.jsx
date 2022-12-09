
import React from 'react'
import { useState } from 'react';





const App = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

function save(){
const users = {
  name,
  email,
  password
} 
if( !name || !email ||!password )  return alert('preencha todos os campos')




 alert(`o nome é ${name}, o e-mail: ${email} e a senha: ${password}`)
}

  return (
    <div className="App">
     
     <div>
   
    <main className="Cadastro">
      
       <h1>Cadastro</h1>
     

<br/>
       <input type="text" 
                   
                   value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Digite o nome...'/>
<br/>
        <input type="email" 
                     
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     placeholder="Digite o e-mail..." />
   <br/>
      <input type="password" 
                    
                    value={password}
                     onChange={e => setPassword(e.target.value)}
                     placeholder="Digite sua senha..." />
      <button className="btn btn-primary"
       onClick={(e) => save(e)}>Salvar</button>
    </main>
      

</div>


    </div>
  );
}

export default App;
