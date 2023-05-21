pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/TheSkyAboveTheSky/Projet-JEE.git'
      }
    }
    
    stage('Build') {
      steps {
        sh 'server/mvn clean package'
      }
    }
    
    stage('Test') {
      steps {
        sh 'server/mvn test'
      }
    }
    
    stage('Deploy') {
      steps {
        sh 'server/mvn deploy'
      }
    }
  }
}
