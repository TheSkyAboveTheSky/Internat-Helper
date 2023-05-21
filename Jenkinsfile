pipeline {
  agent any

 stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                bat 'cd server && mvn clean package'
            }
        }

    stage("Tests and Deployment") {
      stages {
        stage("Running unit tests") {
          steps {
            bat "./server/mvnw test -Punit"
          }
        }
        stage("Deployment") {
          steps {
            bat 'nohup ./server/mvnw spring-boot:run -Dserver.port=8080 &'
          }
        }
      }
    }
  }
}
