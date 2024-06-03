// src/services/dropbox.js
import { Dropbox } from 'dropbox';

const dbx = new Dropbox({ accessToken: 'YOUR_ACCESS_TOKEN' });

export const uploadFile = (file) => {
  return dbx.filesUpload({ path: `/${file.name}`, contents: file })
    .then(response => response)
    .catch(error => {
      console.error('Dropbox Upload Error:', error);
      throw error;
    });
};
