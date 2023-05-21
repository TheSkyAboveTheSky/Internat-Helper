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
        bat "./server/mvnw clean install -DskipTests"
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
