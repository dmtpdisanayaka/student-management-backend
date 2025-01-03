pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/dmtpdisanayaka/student-management-backend.git'
            }
        }
        stage('Docker build and push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub_id') {
                        sh "docker build -t dmtpdisanayake/student-management-backend:1.0 ."
                        sh "docker push dmtpdisanayake/student-management-backend:1.0"
                    }
                }
            }
        }
    }
}