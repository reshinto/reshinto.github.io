#!/usr/bin/env groovy

pipeline {
    agent any
    
    tools {nodejs "nodejs"}
    
    stages {
        stage('Setup') {
            steps {
                sh 'cat ~/.ssh/id_ed25519.pub'
                sh 'ssh -tt reshinto@206.189.91.229'
            }
        }
        
        stage('Buid and deploy to github') {
            steps {
                sh 'ls -a'
            }
        }
        
        stage('Check path') {
            steps {
                sh 'ls -a'
            }
        }
    }
}
