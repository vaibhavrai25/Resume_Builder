export const BASE_URL='http://localhost:4000/'
// routes used for frontend
export const API_PATHS = {
    AUTH:{
        REGISTER:  '/api/auth/register',
        LOGIN:    '/api/auth/login',
        GET_PROFILE: '/api/auth/profile',
    },
    RESUME:{
        CREATE: 'api/resume',
        GET_ALL: 'api/resume',
        GET_BY_ID: (id) => `api/resume/${id}`,
        UPDATE: (id) => `api/resume/${id}`,
        DELETE: (id) => `api/resume/${id}`,
        UPLOAD_IMAGES: 'api/resume/upload-images',
    },
    image:{
        UPLOAD_IMAGES: 'api/auth/upload-images',
    }
}