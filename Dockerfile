debconf-set-selections <<< "postfix postfix/mailname string your.hostname.com"

debconf-set-selections <<< "postfix postfix/main_mailer_type string 'Internet Site'"

apt-get install -y mailutils