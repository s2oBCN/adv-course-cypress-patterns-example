pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }
  options {
      ansiColor('xterm')
  }
  stages {
    stage('build and test') {
      steps {
        sh 'npm i'
        sh script:'npm run test', returnStatus:true
        sh "npm run cy:report"
      }
    }
    stage('report') {
      steps {
        publishHTML (target : [allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'reports/cucumber-htmlreport.html',
          reportFiles: 'index.html',
          reportName: 'Onna Reports',
          reportTitles: 'The Report'])
      }
    }
  }
}