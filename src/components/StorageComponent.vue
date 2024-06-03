<!-- src/components/StorageComponent.vue -->
<template>
    <div class="my-3">
        <div class="form-group">
            <label for="dropboxFile">Upload to Dropbox</label>
            <input type="file" class="form-control-file" id="dropboxFile" @change="uploadToDropbox">
        </div>
        <div class="form-group">
            <label for="googleDriveFile">Upload to Google Drive</label>
            <input type="file" class="form-control-file" id="googleDriveFile" @change="uploadToGoogleDrive">
        </div>
    </div>
</template>

<script>
import { uploadFile as uploadToDropbox } from '@/services/dropbox';
import { authenticate, uploadFile as uploadToGoogleDrive } from '@/services/googleDrive';

export default {
    methods: {
        uploadToDropbox(event) {
            const file = event.target.files[0];
            uploadToDropbox(file).then(() => {
                // Lidar com a resposta do Dropbox
            }).catch(error => {
                console.error(error);
            });
        },
        uploadToGoogleDrive(event) {
            const file = event.target.files[0];
            authenticate().then(() => {
                return uploadToGoogleDrive(file);
            }).then(() => {
                // Lidar com a resposta do Google Drive
            }).catch(error => {
                console.error(error);
            });
        }
    }
}
</script>