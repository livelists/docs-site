export const NGINX_LIVELISTS_PROXY = `
server {
    server_name                 livelists.tech;

    location /livelists-ws/ {
          proxy_pass http://localhost:17771/ws/;
          proxy_http_version 1.1;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header X-Forwarded-Proto https;
          proxy_set_header Connection "upgrade";
    }

    location /livelists-twirp/ {
          proxy_pass http://localhost:17772/;
          proxy_http_version 1.1;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto https;
    }
}    
`;