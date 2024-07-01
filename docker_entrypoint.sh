node -v
cd /usr/share/nginx
pm2 start pm2.json
nginx
tail -f /var/log/pm2/*