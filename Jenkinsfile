pipeline {
    agent any

    tools {
        nodejs "NodeJSProject"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/RomanBordeichuk/ITcourses.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['my-ssh-key']) {
                    sh 'scp -r ./dist user@server:/var/www/myapp'
                    sh 'ssh user@server "pm2 restart myapp"'
                }
            }
        }
    }
}
