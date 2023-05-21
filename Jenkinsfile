pipeline {
  agent any

  stages {
    stage("Clone the project") {
      steps {
        git branch: '*/main', url: 'https://github.com/TheSkyAboveTheSky/Projet-JEE'
      }
    }

    stage("Compilation") {
      steps {
        sh "./server/mvnw clean install -DskipTests"
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
