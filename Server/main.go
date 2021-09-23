package main

import (
 
	 

	"database/sql"
	"fmt"
    "github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"time"
	_ "github.com/go-sql-driver/mysql"
)


type Patient struct{
	ID        int64
	NomePaciente     string
	Rua   string
	NumeroCasa     int64
	Complemento    string
	Bairro   string
	CEP      int64
	Email    string
	Telefone  int64
}


type HealthInsurance struct{
	ID string `json:"id" binding:"required"`
	NomeFantasia string `json:"nome" binding:"required"`
	NomeEmpresa string `json:"empresa" binding:"required"`
	CNPJ string `json:"CNPJ" binding:"required"`
	Email string `json:"email" binding:"required"`
	NomeContato string `json:"contact" binding:"required"`
	Homepage string `json:"homepage" binding:"required"`
	Telefone int64 `json:"telefone" binding:"required"`
}

type UserData struct{
	ID   string `json:"id" binding:"required"`
	Nome    string `json:"nome" binding:"required"`
	Rua   string `json:"rua" binding:"required"`
	NumeroCasa     int64 `json:"numeroCasa" binding:"required"`
	Complemento    string `json:"complemento" binding:"required"`
	Bairro   string `json:"bairro" binding:"required"`
	CEP      int64 `json:"CEP" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Telefone  int64 `json:"telefone" binding:"required"`
	UserType  string `json:"userType" binding:"required"`
}

type DELETE struct{
	ID   string `json:"id" binding:"required"`
	UserType  string `json:"userType" binding:"required"`
}

type SEARCH struct{
	 
	UserType  string `json:"userType" binding:"required"`
}

type DeleteHealthInsurance struct{
	ID   string `json:"id" binding:"required"`
}
 

 

func main() {
	router := gin.Default()
	// start Db connection
	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/recordings")

	if err != nil {
		panic(err.Error())
	}

	// Disable Cors
	router.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"*"},
        AllowMethods:     []string{"*"},
        AllowHeaders:     []string{"*"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        AllowOriginFunc: func(origin string) bool {
            return origin == "*"
        },
        MaxAge: 12 * time.Hour,
    }))
	
	 router.POST("/user", func(c *gin.Context) {
	
	var login UserData
	c.BindJSON(&login)

	// add PatientData
	userID := addUser(login, db)
	
	fmt.Println("Server connected", login, userID)

	c.JSON(200, gin.H{"status": "user Added"}) // Your custom response here
 
})
	 router.POST("/deleteUser", func(c *gin.Context) {
			
			var delete DELETE
			c.BindJSON(&delete)

			// Delete Data
			patDelete , err := deleteUser(delete,db)
			fmt.Printf("Data Deleted %v\n", patDelete)
			
			if err != nil {
				panic(err.Error())
			}

		 
			c.JSON(200, gin.H{"status": "user Removed"}) // Your custom response here
		
		})
	router.POST("/uptadeUser", func(c *gin.Context) {
			
			var uptade UserData
			c.BindJSON(&uptade)

			// Updtate User Data
			userUpdate , err := uptadeUser(uptade,db)
			fmt.Printf("userUpdate %v\n", userUpdate)
			
			if err != nil {
				panic(err.Error())
			}

		 
			c.JSON(200, gin.H{"status": "user Removed"}) // Your custom response here
		
		})
	router.POST("/addHealthInsurrence", func(c *gin.Context) {
		var addHealthI HealthInsurance
		c.BindJSON(&addHealthI)

		// Updtate User Data
		healthAdd  := addHealth(addHealthI,db)
		fmt.Printf("Health Added %v\n", healthAdd)
		
		if err != nil {
			panic(err.Error())
		}

	 
		c.JSON(200, gin.H{"status": "user Removed"}) // Your custom response here
	
	})
	router.POST("/deleteHealthInsurrence", func(c *gin.Context) {
			
		var deleteHealthI DeleteHealthInsurance
		c.BindJSON(&deleteHealthI)

		// Delete Data
		healthDelete  := deleteHealth(deleteHealthI,db)
		fmt.Printf("healthDelete  %v\n", healthDelete)
	
		c.JSON(200, gin.H{"status": "user Removed"}) // Your custom response here
	
	})
	router.POST("/uptadeHealthInsurrence", func(c *gin.Context) {
		
		var uptadeHealthI HealthInsurance
		c.BindJSON(&uptadeHealthI)
	 
		// Updtate User Data
		healthUpdate, err := uptadeHealth(uptadeHealthI,db)
		fmt.Printf("healthUpdate  %v\n", healthUpdate)
		if err != nil {
			panic(err.Error())
		}
	 

	 
		c.JSON(200, gin.H{"status": "user Removed"}) // Your custom response here
	
	})
	router.POST("/searchUser", func(c *gin.Context) {
		
		var searchUser SEARCH
		c.BindJSON(&searchUser)
	 
		// Updtate User Data
	search  := searchUserData(searchUser,db)
		fmt.Printf("healthUpdate  %v\n", search)
		
		

	 
		c.JSON(200, gin.H{"data":  search}) // Your custom response here
	return
	})

	router.Run("localhost:8081")
	fmt.Println("Server connected")
	fmt.Println("Start MYSQL ")
	defer db.Close()


}

 

// (multiple rows) userDataByUser queries for all patients"
func searchUserData(userData SEARCH, db *sql.DB) (interface{}) {
	if userData.UserType =="Pacientes"{
		result,err := handleSearchPacient(db)
		if err != nil {
			fmt.Println("Search Error", err)
		}
		return result
	} else if userData.UserType =="Medicos"{
		
		result,err := handleSearchDoctor(db)
		if err != nil {
			fmt.Println("Search Error", err)
		}
		return result

	}else if userData.UserType =="Convenios"{
		
		result,err := handleSearcHealth(db)
		if err != nil {
			fmt.Println("Search Error", err)
		}
		return result
	}
	var empityData []UserData
	return empityData
}
 
func handleSearchPacient(db *sql.DB)([]UserData, error) {
	// An userData slice to hold data from returned rows.
	var userData []UserData

	rows, err := db.Query("SELECT * FROM Pacientes")
	if err != nil {
		fmt.Println("Search Error", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var user UserData
		if err := rows.Scan(&user.ID,&user.Nome,&user.Rua, &user.NumeroCasa,
			&user.Complemento,&user.Bairro, &user.CEP, &user.Email, &user.Telefone); err != nil {
				fmt.Println("Search Error", err)
		}
		userData = append(userData, user)
	}
	if err := rows.Err(); err != nil {
		fmt.Println("Search Error", err)
	}
	return userData, err
}
func handleSearchDoctor(db *sql.DB)([]UserData, error) {
	// An userData slice to hold data from returned rows.
	var userData []UserData

	rows, err := db.Query("SELECT * FROM Medicos")
	if err != nil {
		fmt.Println("Search Error", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var user UserData
		if err := rows.Scan(&user.ID,&user.Nome,&user.Rua, &user.NumeroCasa,
			&user.Complemento,&user.Bairro, &user.CEP, &user.Email, &user.Telefone); err != nil {
				fmt.Println("Search Error", err)
		}
		userData = append(userData, user)
	}
	if err := rows.Err(); err != nil {
		fmt.Println("Search Error", err)
	}
	return userData, err
}
func handleSearcHealth(db *sql.DB)([]HealthInsurance, error) {
	// An userData slice to hold data from returned rows.
	var userData []HealthInsurance

	rows, err := db.Query("SELECT * FROM Convenios")
	if err != nil {
		fmt.Println("Search Error", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var user HealthInsurance
		if err := rows.Scan(&user.ID,&user.NomeFantasia,&user.NomeEmpresa, &user.CNPJ,
			&user.Email,&user.NomeContato, &user.Homepage, &user.Telefone); err != nil {
				fmt.Println("Search Error", err)
		}
		userData = append(userData, user)
	}
	if err := rows.Err(); err != nil {
		fmt.Println("Search Error", err)
	}
	return userData, err
}


//Insert User data on users table 
// and return the users ID of the new entry
func addUser(user UserData,  db  *sql.DB) (string) {
	 
	if user.UserType == "Pacientes"{
		result, err := db.Exec("INSERT INTO Pacientes(id,nomePaciente, rua, numeroCasa,complemento, bairro,  CEP,email,telefone ) VALUES (?,?,?,?,?,?,?,?,?)",
		user.ID, user.Nome,user.Rua, user.NumeroCasa,
		user.Complemento,user.Bairro, user.CEP, user.Email, user.Telefone)
		if err != nil {
			fmt.Println("AddPatient:", result)
		}
	 
		return "Added Patient Sucessful"
	} else if user.UserType == "Medicos"{
		result, err := db.Exec("INSERT INTO Medicos(id,nomeMedicos, rua, numeroCasa,complemento, bairro,  CEP,email,telefone ) VALUES (?,?,?,?,?,?,?,?,?)",
		user.ID,user.Nome,user.Rua, user.NumeroCasa,
		user.Complemento,user.Bairro, user.CEP, user.Email, user.Telefone)
		if err != nil {
			fmt.Println("AddD0ct0r:", result)
		}
		 
		return "Added Doctor Sucessful"
	}
	return "Added failed"
}

// delete the User with a specific ID
func deleteUser(user DELETE, db *sql.DB) (string, error) {
 
	fmt.Printf("User To delete %v\n", user)
	if user.UserType == "Pacientes"{
		result,err := db.Exec("DELETE FROM Pacientes WHERE id = ?", user.ID)
		if err != nil {
			  fmt.Println("deleted:", result)
		}	

		return "Patient Deleted", err
	} else if user.UserType == "Medicos"{
		result,err := db.Exec("DELETE FROM Medicos WHERE id = ?", user.ID)
		if err != nil {
			  fmt.Println("deleted:", result)
		}	

		return "Doctor Deleted", err
	}
	
	return "Deleted went wrong",nil
}


// update the User Data with a specific ID
func uptadeUser(user UserData, db *sql.DB) (string, error){
	if user.UserType == "Pacientes"{
		result,err := db.Exec("UPDATE Pacientes SET nomePaciente=?, rua=?, numeroCasa=?,complemento=?, bairro=?,  CEP=?,email=?,telefone=?  WHERE id = ?", 
		user.Nome,user.Rua, user.NumeroCasa,
		 user.Complemento,user.Bairro, user.CEP, user.Email, user.Telefone, user.ID)
		if err != nil {
			fmt.Println("Update Error", err)
		}
		fmt.Println("Updated", result)
		return "Pacient Updated",err
	}else if  user.UserType == "Medicos"{
		result,err := db.Exec("UPDATE Medicos SET nomeMedicos=?, rua=?, numeroCasa=?,complemento=?, bairro=?,  CEP=?,email=?,telefone=?  WHERE id = ?", 
		user.Nome,user.Rua, user.NumeroCasa,
		 user.Complemento,user.Bairro, user.CEP, user.Email, user.Telefone, user.ID)
		if err != nil {
			fmt.Println("Update Error", err)
		}
		fmt.Println("Updated", result)
		return "Doctor Updated",err
	}
	

	return "PatiendNotUpdated",nil
}


//Insert Health insurence data on table
// and return the users ID of the new entry
func addHealth(dataH HealthInsurance,  db  *sql.DB) (string) {
		result, err := db.Exec("INSERT INTO Convenios(id,nomeFantasia, nomeEmpresa, CNPJ,email, nomeContato,  homepage,telefone ) VALUES (?,?,?,?,?,?,?,?)",
		dataH.ID, dataH.NomeFantasia,dataH.NomeEmpresa, dataH.CNPJ,
		dataH.Email,dataH.NomeContato, dataH.Homepage, dataH.Telefone)
		if err != nil {
			fmt.Println("AddPatient:", result)
		}
	 
		return "Added Patient Sucessful"
	 
	 
}


// delete theHealth Insurence with specif ID
func deleteHealth(dataH DeleteHealthInsurance, db *sql.DB) (string) {
		result,err := db.Exec("DELETE FROM Convenios WHERE id = ?", dataH.ID)
		if err != nil {
			  fmt.Println("deleted:", result)
		}	

		return "HealthInsurance Deleted"
  
}


// update the HealthInsurance with a specific ID
func uptadeHealth(dataH HealthInsurance, db *sql.DB) (string, error){
		result,err := db.Exec("UPDATE Convenios SET nomeFantasia=?, nomeEmpresa=?, CNPJ=?,email=?, nomeContato=?,  homepage=?,telefone=?  WHERE id = ?", 
		dataH.NomeFantasia,dataH.NomeEmpresa, dataH.CNPJ,
		 dataH.Email,dataH.NomeContato, dataH.Homepage, dataH.Telefone, dataH.ID)
		if err != nil {
			fmt.Println("Update Error", err)
		}
		fmt.Println("Updated HealthInsurance", result)
		return "HealthInsurance Updated ",err
}