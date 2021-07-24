#!/usr/bin/env groovy

pipeline {
    agent {
        label 'docker' 
    }
    
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
