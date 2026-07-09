#!groovy pipeline 
pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                script { runCmd('npm ci') }
            }
        }

        stage('Clean Allure reports') {
            steps {
                script { runCmd('npm run clean:allure') }
            }
        }

        stage('Run tests') {
            steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    script { runCmd('npm run wdio') }
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script { runCmd('npm run allure:generate') }
            }
        }
    }

    post {
        always {
            allure(includeProperties: false, jdk: '', results: [[path: 'allure-results']])
        }
        success {
            echo 'E2E tests passed'
        }
        unstable {
            echo 'E2E tests unstable'
        }
        failure {
            echo 'E2E tests failed'
        }
    }
}

