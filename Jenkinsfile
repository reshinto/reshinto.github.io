#!/usr/bin/env groovy

pipeline {
    agent any
    
    tools {nodejs "nodejs"}
    
    stages {
        stage('Setup') {
            steps {
                sh 'cat ~/.ssh/id_ed25519.pub'
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
