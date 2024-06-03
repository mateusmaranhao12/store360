// src/services/googleDrive.js
import { gapi } from 'gapi-script';

export const authenticate = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID',
        scope: 'https://www.googleapis.com/auth/drive.file'
      }).then(() => {
        gapi.auth2.getAuthInstance().signIn().then(resolve, reject);
      });
    });
  });
};

export const uploadFile = (file) => {
  const metadata = {
    name: file.name,
    mimeType: file.type
  };
  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', file);

  return fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: new Headers({ 'Authorization': 'Bearer ' + gapi.auth.getToken().access_token }),
    body: form
  }).then(response => response.json());
};