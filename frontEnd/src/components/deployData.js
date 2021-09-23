 
	import axios from "axios"
	export function addUser (payload) {
			 console.log("data", payload)
				axios.post('http://localhost:8081/user', payload)
								.then(response => {
									
									
								
								})
								.catch(error => console.log("deu pau", error))
								
			}
	export	function deleteUser (payload) {
			 
				axios.post('http://localhost:8081/deleteUser', payload)
								.then(response => {
									
									 
								
								})
								.catch(error => console.log("deu pau", error))
								
			}
	export	function uptadeUser (event) {
			let payload = { 
				id: "id1",
				nome:     "TeuPau",
				rua:   "Mamado",
				numeroCasa:     23,
				complemento:    "Sacome",
				bairro:   "string",
				CEP:      344,
				email:    "string",
				telefone:  3444,
				userType: "medico"
				
				
			
			};

 
				axios.post('http://localhost:8081/uptadeUser', payload)
								.then(response => {
									
									
								
								})
								.catch(error => console.log("deu pau", error))
								
			}
	export		function addHealthInsurence (payload) {
		 

		 
				axios.post('http://localhost:8081/addHealthInsurrence', payload)
								.then(response => {
									
									
								
								})
								.catch(error => console.log("deu pau", error))
								
			}
			export	function deleteHealthInsurence(payload) {
		 
				axios.post('http://localhost:8081/deleteHealthInsurrence', payload)
								.then(response => {
									
									
								
								})
								.catch(error => console.log("deu pau", error))
								
			}
			function updateHealthInsurence (event) {
			let payload = { 
				id  : "mado",
				nomeFantasia  :"UI",
				nomeEmpresa :"ad",
				CNPJ : "jaca" ,
				email: "a@gmail.com" ,
				nomeContato: "oie" ,
				homepage: "a.com.br" ,
				telefone: 212313
			
			};

		 
				axios.post('http://localhost:8081/uptadeHealthInsurrence', payload)
								.then(response => {
									
									
								
								})
								.catch(error => console.log("deu pau", error))
								
			}
		

export 	const searchUser = async (dataUser) => {
	console.log("dataUser", dataUser)
	let payload = { 
		userType: dataUser
	};
	try {
        const {data:response} = await axios.post('http://localhost:8081/searchUser', payload) //use data destructuring to get data from the promise object
		console.log("newData", response)	
		return response
      }

      catch (error) {
        console.log(error);
      }
  
			
	}
	