#!/usr/bin/env groovy

pipeline {
    agent any
    
    tools {nodejs "nodejs"}
    
    stages {
        stage('Setup') {
            steps {
                sh 'npm i'
            }
        }
        
        stage('Buid and deploy to github') {
            steps {
                sh 'npm run deploy'
            }
        }
        
        stage('Check path') {
            steps {
                sh 'cd .. && ls -a'
            }
        }
    }
}