node {
  stage("Clone project") {
    git branch: 'main', url: 'https://github.com/TheSkyAboveTheSky/Projet-JEE.git'
  }

  stage("Build project with test execution") {
    sh "./gradlew build"
  }
}
