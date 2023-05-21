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
                sh 'cd server && mvn clean package'
            }
        }

    stage("Tests and Deployment") {
      stages {
        stage("Running unit tests") {
          steps {
            sh "./server/mvnw test -Punit"
          }
        }
        stage("Deployment") {
          steps {
            sh 'nohup ./server/mvnw spring-boot:run -Dserver.port=8080 &'
          }
        }
      }
    }
  }
}
